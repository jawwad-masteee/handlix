import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { GradientButton } from './GradientButton';
import { openWhatsApp } from '@/utils/wa';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  navLinks: Array<{ label: string; href: string }>;
}

const MobileMenu = ({ isOpen, onClose, navLinks }: MobileMenuProps) => {
  // Lock scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Handle escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      return () => document.removeEventListener('keydown', handleEscape);
    }
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 z-40 bg-black/20 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Menu Panel */}
          <motion.div
            className="fixed top-0 right-0 bottom-0 z-50 w-full max-w-sm bg-background shadow-2xl"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          >
            <div className="flex flex-col h-full">
              {/* Header */}
              <div className="p-6 border-b border-border">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-brand rounded-xl flex items-center justify-center">
                    <span className="text-white font-black text-xl">H</span>
                  </div>
                  <span className="text-2xl font-black text-heading">HANDLIX</span>
                </div>
              </div>

              {/* Navigation Links */}
              <nav className="flex-1 py-8">
                <ul className="space-y-2">
                  {navLinks.map((link, index) => (
                    <motion.li
                      key={link.href}
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link
                        to={link.href}
                        onClick={onClose}
                        className="flex items-center px-6 py-4 text-lg font-medium text-body hover:text-heading hover:bg-background-alt transition-all duration-200 focus-ring"
                      >
                        {link.label}
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </nav>

              {/* CTA Section */}
              <motion.div
                className="p-6 border-t border-border space-y-4"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <GradientButton
                  variant="whatsapp"
                  size="lg"
                  onClick={() => {
                    openWhatsApp("General Inquiry");
                    onClose();
                  }}
                  className="w-full"
                  aria-label="Book service on WhatsApp"
                >
                  Book Now on WhatsApp
                </GradientButton>

                <p className="text-sm text-body-light text-center">
                  Get instant quotes and book services
                </p>
              </motion.div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export { MobileMenu };