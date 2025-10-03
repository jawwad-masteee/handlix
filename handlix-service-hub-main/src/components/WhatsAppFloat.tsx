import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { openWhatsApp } from '@/utils/wa';

interface WhatsAppFloatProps {
  className?: string;
  showUnreadCount?: boolean;
  unreadCount?: number;
}

const WhatsAppFloat = ({ 
  className = "", 
  showUnreadCount = false, 
  unreadCount = 0 
}: WhatsAppFloatProps) => {
  const handleClick = () => {
    openWhatsApp("General Inquiry");
  };

  return (
    <motion.button
      onClick={handleClick}
      className={`fixed z-40 bg-whatsapp text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 focus-ring group bottom-4 right-4 md:bottom-8 md:right-8 ${className}`}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      animate={{
        y: [0, -8, 0],
      }}
      transition={{
        y: {
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }
      }}
      aria-label="Chat with us on WhatsApp"
    >
      <div className="relative p-3 md:p-4">
        <MessageCircle className="w-6 h-6 md:w-7 md:h-7" />
        
        {/* Optional unread count badge */}
        {showUnreadCount && unreadCount > 0 && (
          <motion.span
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold"
          >
            {unreadCount > 99 ? '99+' : unreadCount}
          </motion.span>
        )}

        {/* Pulse effect */}
        <div className="absolute inset-0 rounded-full bg-whatsapp opacity-30 animate-ping" />
      </div>

      {/* Tooltip for desktop */}
      <div className="hidden md:block absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-gray-800 text-white px-3 py-2 rounded-lg text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
        Chat with us on WhatsApp
        <div className="absolute left-full top-1/2 -translate-y-1/2 border-4 border-transparent border-l-gray-800" />
      </div>
    </motion.button>
  );
};

export { WhatsAppFloat };