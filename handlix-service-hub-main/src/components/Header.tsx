import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { GradientButton } from './GradientButton';
import { MobileMenu } from './MobileMenu';
import { openWhatsApp } from '@/utils/wa';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contact', href: '/contact' },
  ];

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-30 transition-all duration-300 ${
          isScrolled ? 'bg-background/95 backdrop-blur-md shadow-sm' : 'bg-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="container-custom">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3 focus-ring rounded-lg">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-brand rounded-xl flex items-center justify-center">
                <span className="text-white font-black text-xl md:text-2xl">H</span>
              </div>
              <span className="text-2xl md:text-3xl font-black text-heading">
                HANDLIX
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`relative font-medium transition-colors duration-200 focus-ring rounded px-2 py-1 ${
                    location.pathname === link.href
                      ? 'text-brand-orange'
                      : 'text-body hover:text-heading'
                  }`}
                >
                  {link.label}
                  {/* Animated underline */}
                  <span className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-brand transform scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100" />
                </Link>
              ))}
            </nav>

            {/* Desktop CTA + Mobile Menu Button */}
            <div className="flex items-center space-x-4">
              {/* Desktop Book Now Button */}
              <div className="hidden md:block">
                <GradientButton
                  variant="whatsapp"
                  onClick={() => openWhatsApp("General Inquiry")}
                  aria-label="Book service on WhatsApp"
                >
                  Book Now
                </GradientButton>
              </div>

              {/* Mobile Menu Toggle */}
              <motion.button
                className="md:hidden p-2 text-heading hover:text-brand-orange transition-colors focus-ring rounded-lg"
                onClick={toggleMobileMenu}
                whileTap={{ scale: 0.95 }}
                aria-label="Toggle mobile menu"
              >
                <AnimatePresence mode="wait">
                  {isMobileMenuOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <X className="w-6 h-6" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Menu className="w-6 h-6" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <MobileMenu 
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        navLinks={navLinks}
      />
    </>
  );
};

export { Header };