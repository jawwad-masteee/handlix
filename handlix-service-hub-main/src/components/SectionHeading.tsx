import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  description?: string;
  gradientWords?: string[]; // Words to apply gradient to
  className?: string;
  centered?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

const SectionHeading = ({
  title,
  subtitle,
  description,
  gradientWords = [],
  className,
  centered = true,
  size = 'md'
}: SectionHeadingProps) => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  // Apply gradient to specified words
  const renderTitle = () => {
    if (gradientWords.length === 0) return title;
    
    let processedTitle = title;
    gradientWords.forEach(word => {
      const regex = new RegExp(`\\b${word}\\b`, 'gi');
      processedTitle = processedTitle.replace(
        regex, 
        `<span class="text-gradient">${word}</span>`
      );
    });
    
    return <span dangerouslySetInnerHTML={{ __html: processedTitle }} />;
  };

  const sizes = {
    sm: {
      title: 'text-2xl md:text-3xl',
      subtitle: 'text-sm md:text-base',
      description: 'text-base'
    },
    md: {
      title: 'text-3xl md:text-4xl lg:text-5xl',
      subtitle: 'text-base md:text-lg',
      description: 'text-lg'
    },
    lg: {
      title: 'text-4xl md:text-5xl lg:text-6xl',
      subtitle: 'text-lg md:text-xl',
      description: 'text-xl'
    }
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={cn(
        "space-y-4",
        centered && "text-center",
        className
      )}
    >
      {subtitle && (
        <motion.span
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className={cn(
            "inline-block font-semibold text-brand-orange tracking-wide uppercase",
            sizes[size].subtitle
          )}
        >
          {subtitle}
        </motion.span>
      )}
      
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.1 }}
        className={cn(
          "font-black text-heading leading-tight",
          sizes[size].title
        )}
      >
        {renderTitle()}
      </motion.h2>

      {description && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className={cn(
            "text-body-light max-w-3xl",
            centered && "mx-auto",
            sizes[size].description
          )}
        >
          {description}
        </motion.p>
      )}
    </motion.div>
  );
};

export { SectionHeading };