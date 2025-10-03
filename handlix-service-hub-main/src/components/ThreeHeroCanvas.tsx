import { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { motion } from 'framer-motion';
import * as THREE from 'three';

// Loading component for 3D canvas
const Loader = () => {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-center"
      >
        <div className="w-16 h-16 bg-gradient-brand rounded-full flex items-center justify-center mb-4 mx-auto">
          <span className="text-white font-bold text-2xl">H</span>
        </div>
        <div className="text-body-light">Loading 3D Scene...</div>
      </motion.div>
    </div>
  );
};

// Service Icons as 3D Objects - simplified without fonts
const ServiceIcon = ({ position, color = "#FF6A00", icon }: { 
  position: [number, number, number]; 
  color?: string;
  icon: string;
}) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime + position[0]) * 0.3;
      meshRef.current.rotation.y += 0.01;
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      <sphereGeometry args={[0.5, 16, 16]} />
      <meshStandardMaterial 
        color={color} 
        metalness={0.3}
        roughness={0.4}
        emissive={color}
        emissiveIntensity={0.1}
      />
    </mesh>
  );
};

// Central H Logo - simplified geometry
const CentralLogo = () => {
  const meshRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.2;
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.1;
    }
  });

  return (
    <group ref={meshRef}>
      {/* Central cylinder */}
      <mesh>
        <cylinderGeometry args={[1.2, 1.2, 0.3, 32]} />
        <meshStandardMaterial 
          color="#FF6A00"
          metalness={0.6}
          roughness={0.2}
          emissive="#FF6A00"
          emissiveIntensity={0.2}
        />
      </mesh>
      
      {/* H-shaped extrusion using box geometries */}
      <group>
        {/* Left vertical bar */}
        <mesh position={[-0.4, 0, 0.2]}>
          <boxGeometry args={[0.2, 1.2, 0.2]} />
          <meshStandardMaterial color="white" />
        </mesh>
        
        {/* Right vertical bar */}
        <mesh position={[0.4, 0, 0.2]}>
          <boxGeometry args={[0.2, 1.2, 0.2]} />
          <meshStandardMaterial color="white" />
        </mesh>
        
        {/* Horizontal crossbar */}
        <mesh position={[0, 0, 0.2]}>
          <boxGeometry args={[0.8, 0.2, 0.2]} />
          <meshStandardMaterial color="white" />
        </mesh>
      </group>
    </group>
  );
};

// Main 3D Scene
const Scene = () => {
  return (
    <>
      {/* Lighting */}
      <ambientLight intensity={0.6} />
      <directionalLight 
        position={[10, 10, 5]} 
        intensity={1.2} 
        castShadow 
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#FF2E63" />
      <pointLight position={[10, -5, 10]} intensity={0.3} color="#6A11CB" />
      
      {/* Central H Logo */}
      <CentralLogo />

      {/* Service Icons orbiting around */}
      <ServiceIcon position={[3, 2, 0]} color="#FF6A00" icon="cleaning" />
      <ServiceIcon position={[-3, 1, 2]} color="#FF2E63" icon="plumbing" />
      <ServiceIcon position={[2, -2, -1]} color="#6A11CB" icon="electrical" />
      <ServiceIcon position={[-2, -1, -2]} color="#FF6A00" icon="grooming" />
      <ServiceIcon position={[0, 3, 1]} color="#FF2E63" icon="pet" />
    </>
  );
};

// Fallback component for mobile/low-power devices
const FallbackGraphic = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
      className="flex items-center justify-center h-full"
    >
      <div className="relative">
        <motion.div
          className="w-32 h-32 bg-gradient-brand rounded-3xl flex items-center justify-center"
          animate={{
            rotateY: [0, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{
            rotateY: { duration: 10, repeat: Infinity, ease: "linear" },
            scale: { duration: 3, repeat: Infinity, ease: "easeInOut" }
          }}
        >
          <span className="text-white font-black text-6xl">H</span>
        </motion.div>

        {/* Floating service icons */}
        {[
          { icon: '🧹', delay: 0, x: 40, y: -30 },
          { icon: '🔧', delay: 0.5, x: -40, y: -20 },
          { icon: '💡', delay: 1, x: 30, y: 40 },
          { icon: '✂️', delay: 1.5, x: -35, y: 35 },
          { icon: '🐕', delay: 2, x: 0, y: -50 },
        ].map((item, index) => (
          <motion.div
            key={index}
            className="absolute w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg text-xl"
            style={{ 
              left: `calc(50% + ${item.x}px)`, 
              top: `calc(50% + ${item.y}px)`,
              transform: 'translate(-50%, -50%)'
            }}
            animate={{
              y: [0, -10, 0],
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              delay: item.delay,
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            {item.icon}
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

const ThreeHeroCanvas = ({ className = "" }: { className?: string }) => {
  // Detect if device should use fallback (mobile, low-power, etc.)
  const shouldUseFallback = () => {
    if (typeof window === 'undefined') return true;
    
    const isMobile = window.innerWidth < 768;
    const isLowPower = 'connection' in navigator && 
      // @ts-ignore - connection API not fully typed
      navigator.connection?.effectiveType?.includes('2g');
    
    return isMobile || isLowPower;
  };

  if (shouldUseFallback()) {
    return (
      <div className={`w-full h-full min-h-[400px] ${className}`}>
        <FallbackGraphic />
      </div>
    );
  }

  return (
    <div className={`w-full h-full min-h-[400px] ${className}`}>
      <Canvas
        camera={{ position: [0, 0, 8], fov: 50 }}
        gl={{ antialias: true, alpha: true }}
        dpr={Math.min(window.devicePixelRatio, 2)}
      >
        <Suspense fallback={<Loader />}>
          <Scene />
        </Suspense>
      </Canvas>
    </div>
  );
};

export { ThreeHeroCanvas };