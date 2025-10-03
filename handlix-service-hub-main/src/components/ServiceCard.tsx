import { motion } from 'framer-motion';
import { ArrowRight, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { GradientButton } from './GradientButton';
import { openWhatsApp } from '@/utils/wa';
import { cn } from '@/lib/utils';

interface ServiceCardProps {
  title: string;
  description: string;
  price: string;
  duration?: string;
  rating?: number;
  image?: string;
  icon?: React.ReactNode;
  category: string;
  slug?: string;
  featured?: boolean;
  className?: string;
}

const ServiceCard = ({
  title,
  description,
  price,
  duration,
  rating,
  image,
  icon,
  category,
  slug,
  featured = false,
  className
}: ServiceCardProps) => {
  const cardHref = slug ? `/services/${category}/${slug}` : `/services/${category}`;
  
  const handleBookNow = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    openWhatsApp(title);
  };

  return (
    <motion.div
      className={cn(
        "group relative bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-brand-lg transition-all duration-300 card-hover",
        featured && "ring-2 ring-brand-orange/20 bg-gradient-brand-subtle",
        className
      )}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -8 }}
    >
      {featured && (
        <div className="absolute top-4 right-4 z-10">
          <span className="bg-gradient-brand text-white text-xs font-bold px-3 py-1 rounded-full">
            Popular
          </span>
        </div>
      )}

      <Link to={cardHref} className="block">
        {/* Image/Icon Section */}
        <div className="relative h-48 bg-gradient-brand-subtle flex items-center justify-center overflow-hidden">
          {image ? (
            <img 
              src={image} 
              alt={title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
          ) : (
            <div className="text-6xl text-brand-orange group-hover:scale-110 transition-transform duration-300">
              {icon}
            </div>
          )}
          
          {/* Overlay on hover */}
          <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <ArrowRight className="text-white w-8 h-8" />
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-4">
          {/* Rating */}
          {rating && (
            <div className="flex items-center space-x-1">
              <Star className="w-4 h-4 text-yellow-400 fill-current" />
              <span className="text-sm font-medium text-body">{rating}</span>
              <span className="text-xs text-body-light">(150+ reviews)</span>
            </div>
          )}

          {/* Title */}
          <h3 className="text-xl font-bold text-heading group-hover:text-brand-orange transition-colors">
            {title}
          </h3>

          {/* Description */}
          <p className="text-body-light line-clamp-2">
            {description}
          </p>

          {/* Price & Duration */}
          <div className="flex items-center justify-between">
            <div>
              <span className="text-2xl font-bold text-gradient">
                {price}
              </span>
              {duration && (
                <span className="text-sm text-body-light ml-2">
                  · {duration}
                </span>
              )}
            </div>
          </div>
        </div>
      </Link>

      {/* Action Buttons */}
      <div className="px-6 pb-6 space-y-3">
        <GradientButton
          onClick={handleBookNow}
          className="w-full"
          variant="whatsapp"
        >
          Book on WhatsApp
        </GradientButton>
        
        <Link
          to={cardHref}
          className="block w-full text-center py-2 text-brand-orange font-medium hover:text-brand-pink transition-colors focus-ring rounded-lg"
        >
          View Details
        </Link>
      </div>
    </motion.div>
  );
};

export { ServiceCard };