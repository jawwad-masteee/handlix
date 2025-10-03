/**
 * WhatsApp utility functions for Handlix
 * Phone: +91 95285 22358
 */

export const WHATSAPP_NUMBER = "919528522358";

/**
 * Generate WhatsApp link with prefilled message
 * @param serviceName - Name of the service to book
 * @returns WhatsApp URL with encoded message
 */
export const waLink = (serviceName = "General Booking"): string => {
  const message = `Hi Handlix, I'd like to book ${serviceName}. Please share the details.`;
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
};

/**
 * Open WhatsApp with prefilled message
 * @param serviceName - Name of the service to book
 */
export const openWhatsApp = (serviceName = "General Booking"): void => {
  window.open(waLink(serviceName), '_blank', 'noopener,noreferrer');
};

/**
 * Service categories and their WhatsApp messages
 */
export const serviceCategories = {
  'home-cleaning': 'Home Cleaning Service',
  'plumbing': 'Plumbing Service',
  'electrical': 'Electrical Service',
  'appliance-repair': 'Appliance Repair Service',
  'grooming': 'Personal Grooming Service',
  'pet-grooming': 'Pet Grooming Service',
} as const;

/**
 * Get service name for WhatsApp message
 * @param category - Service category slug
 * @returns Formatted service name
 */
export const getServiceName = (category: string): string => {
  return serviceCategories[category as keyof typeof serviceCategories] || 'General Service';
};