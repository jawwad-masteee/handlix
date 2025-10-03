import * as React from "react"
import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu"
import { cva } from "class-variance-authority"
import { ChevronDown } from "lucide-react"

import { cn } from "@/lib/utils"

const NavigationMenu = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Root>
>(({ className, children, ...props }, ref) => (
  <NavigationMenuPrimitive.Root
    ref={ref}
    className={cn(
      "relative z-10 flex max-w-max flex-1 items-center justify-center",
      className
    )}
    {...props}
  >
    {children}
    <NavigationMenuViewport />
  </NavigationMenuPrimitive.Root>
))
NavigationMenu.displayName = NavigationMenuPrimitive.Root.displayName

const NavigationMenuList = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.List>
>(({ className, ...props }, ref) => (
  <NavigationMenuPrimitive.List
    ref={ref}
    className={cn(
      "group flex flex-1 list-none items-center justify-center space-x-1",
      className
    )}
    {...props}
  />
))
NavigationMenuList.displayName = NavigationMenuPrimitive.List.displayName

const NavigationMenuItem = NavigationMenuPrimitive.Item

const navigationMenuTriggerStyle = cva(
  "group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
)

const NavigationMenuTrigger = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <NavigationMenuPrimitive.Trigger
    ref={ref}
    className={cn(navigationMenuTriggerStyle(), "group", className)}
    {...props}
  >
    {children}{" "}
    <ChevronDown
      className="relative top-[1px] ml-1 h-3 w-3 transition duration-200 group-data-[state=open]:rotate-180"
      aria-hidden="true"
    />
  </NavigationMenuPrimitive.Trigger>
))
NavigationMenuTrigger.displayName = NavigationMenuPrimitive.Trigger.displayName

const NavigationMenuContent = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Content>
>(({ className, ...props }, ref) => (
  <NavigationMenuPrimitive.Content
    ref={ref}
    className={cn(
      "left-0 top-0 w-full data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 md:absolute md:w-auto ",
      className
    )}
    {...props}
  />
))
NavigationMenuContent.displayName = NavigationMenuPrimitive.Content.displayName

const NavigationMenuLink = NavigationMenuPrimitive.Link

const NavigationMenuViewport = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Viewport>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Viewport>
>(({ className, ...props }, ref) => (
  <div className={cn("absolute left-0 top-full flex justify-center")}>
    <NavigationMenuPrimitive.Viewport
      className={cn(
        "origin-top-center relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 md:w-[var(--radix-navigation-menu-viewport-width)]",
        className
      )}
      ref={ref}
      {...props}
    />
  </div>
))
NavigationMenuViewport.displayName =
  NavigationMenuPrimitive.Viewport.displayName

const NavigationMenuIndicator = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Indicator>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Indicator>
>(({ className, ...props }, ref) => (
  <NavigationMenuPrimitive.Indicator
    ref={ref}
    className={cn(
      "top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in",
      className
    )}
    {...props}
  >
    <div className="relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm bg-border shadow-md" />
  </NavigationMenuPrimitive.Indicator>
))
NavigationMenuIndicator.displayName =
  NavigationMenuPrimitive.Indicator.displayName

export {
  navigationMenuTriggerStyle,
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuContent,
  NavigationMenuTrigger,
  NavigationMenuLink,
  NavigationMenuIndicator,
  NavigationMenuViewport,
}

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