import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MapPin, Mail, Phone, Instagram, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contact', href: '/contact' },
  ];

  const services = [
    { label: 'Home Cleaning', href: '/services/home-cleaning' },
    { label: 'Plumbing', href: '/services/plumbing' },
    { label: 'Electrical', href: '/services/electrical' },
    { label: 'Appliance Repair', href: '/services/appliance-repair' },
    { label: 'Grooming', href: '/services/grooming' },
    { label: 'Pet Grooming', href: '/services/pet-grooming' },
  ];

  const socialLinks = [
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
  ];

  return (
    <footer className="bg-gradient-brand text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-white rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white rounded-full blur-3xl" />
      </div>

      <div className="relative z-10">
        <div className="container-custom section-padding">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            
            {/* Company Info */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-1"
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                  <span className="text-white font-black text-2xl">H</span>
                </div>
                <span className="text-3xl font-black">HANDLIX</span>
              </div>
              
              <p className="text-white/80 text-lg mb-6 leading-relaxed">
                Handling life's essentials, effortlessly. Your trusted partner for all home services in Aligarh and beyond.
              </p>

              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.label === 'Instagram' ? 'https://www.instagram.com/handlix.in?igsh=ZHhkZXMwanRwanFo' : 
                          social.label === 'Twitter' ? 'https://x.com/HandlixHQ?t=a6VBFF5yy8c7xhHBoyOGXw&s=09' :
                          social.label === 'LinkedIn' ? 'https://www.linkedin.com/in/maaz-bin-jabal?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' : 
                          social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors focus-ring"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h3 className="text-xl font-bold mb-6">Quick Links</h3>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      to={link.href}
                      className="text-white/80 hover:text-white transition-colors duration-200 focus-ring rounded"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Services */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-xl font-bold mb-6">Services</h3>
              <ul className="space-y-3">
                {services.map((service) => (
                  <li key={service.href}>
                    <Link
                      to={service.href}
                      className="text-white/80 hover:text-white transition-colors duration-200 focus-ring rounded"
                    >
                      {service.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h3 className="text-xl font-bold mb-6">Contact</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 mt-1 text-white/80" />
                  <span className="text-white/80">
                    Aligarh, Uttar Pradesh, India
                  </span>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-white/80" />
                  <a 
                    href="mailto:support@handlix.in"
                    className="text-white/80 hover:text-white transition-colors focus-ring rounded"
                  >
                    support@handlix.in
                  </a>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-white/80" />
                  <a 
                    href="tel:+919528522358"
                    className="text-white/80 hover:text-white transition-colors focus-ring rounded"
                  >
                    +91 95285 22358
                  </a>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Bottom Bar */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="border-t border-white/20 mt-12 pt-8 text-center"
          >
            <p className="text-white/80">
              © 2025 Handlix Services Pvt Ltd. All Rights Reserved.
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export { Footer };