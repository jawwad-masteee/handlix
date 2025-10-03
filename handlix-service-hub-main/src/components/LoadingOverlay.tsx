import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface LoadingOverlayProps {
  onComplete?: () => void;
  variant?: 'beat' | 'letters';
}

const LoadingOverlay = ({ onComplete, variant = 'letters' }: LoadingOverlayProps) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Lock scroll when loading
    document.body.classList.add('loading-active');
    
    const timer = setTimeout(() => {
      setIsVisible(false);
      document.body.classList.remove('loading-active');
      onComplete?.();
    }, 3000);

    return () => {
      clearTimeout(timer);
      document.body.classList.remove('loading-active');
    };
  }, [onComplete]);

  const LetterAnimation = () => {
    const letters = ['H', 'A', 'N', 'D', 'L', 'I', 'X'];
    
    return (
      <div className="flex items-center justify-center">
        {letters.map((letter, index) => {
          if (index === 0) {
            // H logo - gradient background with white H
            return (
              <motion.div
                key={letter}
                className="w-20 h-20 bg-gradient-brand rounded-2xl flex items-center justify-center mr-2"
                initial={{ opacity: 1, scale: 1 }}
                animate={{ 
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  scale: {
                    duration: 1,
                    delay: 0.5,
                    ease: "easeInOut"
                  }
                }}
              >
                <span className="text-white font-black text-4xl">H</span>
              </motion.div>
            );
          } else {
            // Remaining letters - animate in sequence
            return (
              <motion.span
                key={letter}
                className="text-6xl font-black text-heading"
                initial={{ 
                  opacity: 0, 
                  x: -30,
                  scale: 0.5
                }}
                animate={{ 
                  opacity: 1, 
                  x: 0,
                  scale: 1
                }}
                transition={{
                  duration: 0.4,
                  delay: 0.8 + (index - 1) * 0.15,
                  ease: "backOut"
                }}
              >
                {letter}
              </motion.span>
            );
          }
        })}
      </div>
    );
  };

  const BeatAnimation = () => (
    <motion.div
      className="w-24 h-24 rounded-2xl bg-gradient-brand flex items-center justify-center"
      animate={{
        scale: [0.96, 1.04, 0.96],
      }}
      transition={{
        duration: 1.5,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      <motion.span 
        className="text-4xl font-black text-white"
        animate={{
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        H
      </motion.span>
    </motion.div>
  );

  // Check for reduced motion preference
  const prefersReducedMotion = typeof window !== 'undefined' && 
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const InstantDisplay = () => (
    <div className="flex items-center justify-center">
      <div className="w-20 h-20 bg-gradient-brand rounded-2xl flex items-center justify-center mr-2">
        <span className="text-white font-black text-4xl">H</span>
      </div>
      <span className="text-6xl font-black text-heading">ANDLIX</span>
    </div>
  );

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 bg-background z-50 flex flex-col items-center justify-center"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.5 }}
          aria-live="polite"
          aria-label="Handlix loading"
        >
          <div className="text-center">
            {prefersReducedMotion ? (
              <InstantDisplay />
            ) : (
              variant === 'letters' ? <LetterAnimation /> : <BeatAnimation />
            )}
            
            <motion.p
              className="mt-8 text-body-light font-medium text-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: prefersReducedMotion ? 0 : 1, duration: 0.5 }}
            >
              Handling life's essentials, effortlessly.
            </motion.p>

            {/* Progress indicator */}
            <motion.div 
              className="mt-8 w-48 h-1 bg-border rounded-full overflow-hidden mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: prefersReducedMotion ? 0 : 1.5 }}
            >
              <motion.div
                className="h-full bg-gradient-brand"
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ duration: 3, ease: 'easeInOut' }}
              />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export { LoadingOverlay };