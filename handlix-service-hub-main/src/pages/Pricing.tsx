import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, RotateCcw } from 'lucide-react';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { WhatsAppFloat } from '@/components/WhatsAppFloat';
import { SectionHeading } from '@/components/SectionHeading';
import { GradientButton } from '@/components/GradientButton';
import { openWhatsApp } from '@/utils/wa';

interface PricingCardProps {
  title: string;
  price: string;
  duration: string;
  features: string[];
  disclaimer?: string;
  category: string;
  isFlipped: boolean;
  onFlip: () => void;
}

const PricingCard = ({ 
  title, 
  price, 
  duration, 
  features, 
  disclaimer, 
  category,
  isFlipped,
  onFlip 
}: PricingCardProps) => {
  return (
    <motion.div
      className="relative h-80 perspective-1000 cursor-pointer"
      onClick={onFlip}
      whileHover={{ scale: 1.05 }}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={isFlipped ? 'back' : 'front'}
          initial={{ rotateY: isFlipped ? -180 : 0 }}
          animate={{ rotateY: 0 }}
          exit={{ rotateY: isFlipped ? 180 : -180 }}
          transition={{ duration: 0.6 }}
          className="absolute inset-0 w-full h-full backface-hidden"
          style={{ transformStyle: 'preserve-3d' }}
        >
          {!isFlipped ? (
            // Front of card
            <div className="w-full h-full bg-background-alt rounded-3xl p-8 border border-border hover:border-brand-orange transition-colors flex flex-col justify-center items-center text-center shadow-card">
              <h3 className="text-2xl font-bold text-heading mb-4">{title}</h3>
              <div className="text-4xl font-black text-gradient mb-2">{price}</div>
              <div className="text-body-light mb-6">{duration}</div>
              <div className="text-sm text-brand-orange font-semibold bg-brand-orange/10 px-3 py-1 rounded-full">
                Click to view details
              </div>
              <RotateCcw className="w-5 h-5 text-body-light mt-4 animate-pulse" />
            </div>
          ) : (
            // Back of card
            <div className="w-full h-full bg-gradient-brand rounded-3xl p-6 text-white flex flex-col justify-between shadow-brand-lg">
              <div>
                <h3 className="text-xl font-bold mb-4">{title}</h3>
                <ul className="space-y-2 mb-4">
                  {features.map((feature, index) => (
                    <li key={index} className="flex items-start text-sm">
                      <Check className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                {disclaimer && (
                  <p className="text-xs text-white/80 italic">{disclaimer}</p>
                )}
              </div>
              
              <GradientButton
                variant="outline"
                className="bg-white/10 text-white border-white/30 hover:bg-white/20"
                onClick={(e) => {
                  e.stopPropagation();
                  openWhatsApp(title);
                }}
              >
                Book on WhatsApp
              </GradientButton>
            </div>
          )}
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
};

const Pricing = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [flippedCards, setFlippedCards] = useState<Set<string>>(new Set());
  const location = useLocation();

  useEffect(() => {
    // Handle hash-based navigation from Services page
    if (location.hash) {
      const hash = location.hash.slice(1); // Remove the #
      const categoryMap = {
        'cleaning': 'cleaning',
        'plumbing': 'plumbing',
        'electrical': 'electrical',
        'appliance': 'appliance',
        'grooming': 'grooming'
      };
      
      if (categoryMap[hash as keyof typeof categoryMap]) {
        setActiveCategory(hash);
        // Scroll to the pricing section after a short delay
        setTimeout(() => {
          const pricingSection = document.querySelector('[data-pricing-section]');
          if (pricingSection) {
            pricingSection.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      }
    }
  }, [location.hash]);

  const categories = [
    { id: 'all', name: 'All Services' },
    { id: 'cleaning', name: 'Cleaning' },
    { id: 'plumbing', name: 'Plumbing' },
    { id: 'electrical', name: 'Electrical' },
    { id: 'grooming', name: 'Grooming' },
    { id: 'appliance', name: 'Appliance' }
  ];

  const pricingData = [
    {
      id: 'kitchen-cleaning',
      title: 'Kitchen Cleaning',
      price: '₹499',
      duration: 'onwards',
      category: 'cleaning',
      features: [
        'Complete kitchen sanitization',
        'Stove & chimney cleaning',
        'Cabinet & countertop cleaning',
        'Floor mopping & degreasing',
        'Eco-friendly products',
        '100% satisfaction guarantee'
      ],
      disclaimer: 'Price may vary based on kitchen size'
    },
    {
      id: 'bathroom-cleaning',
      title: 'Bathroom Cleaning',
      price: '₹399',
      duration: 'onwards', 
      category: 'cleaning',
      features: [
        'Deep scrubbing & sanitization',
        'Toilet & basin cleaning',
        'Tile & grout cleaning',
        'Mirror & fixture polishing',
        'Anti-bacterial treatment',
        'Drain cleaning'
      ]
    },
    {
      id: 'full-home-deep-clean',
      title: 'Full Home Deep Clean',
      price: '₹1499',
      duration: 'onwards',
      category: 'cleaning',
      features: [
        'Complete home sanitization',
        'All rooms deep cleaning',
        'Kitchen & bathroom included',
        'Floor mopping & vacuuming',
        'Dusting & organizing',
        'Window & balcony cleaning'
      ]
    },
    {
      id: 'tap-faucet-repair',
      title: 'Tap/Faucet Repair',
      price: '₹199',
      duration: 'onwards',
      category: 'plumbing', 
      features: [
        'Leak detection & fixing',
        'Tap installation',
        'Faucet replacement',
        'Water pressure adjustment',
        'Quick diagnosis'
      ]
    },
    {
      id: 'leak-fixing',
      title: 'Leak Fixing',
      price: '₹249',
      duration: 'onwards',
      category: 'plumbing',
      features: [
        'Pipe leak detection',
        'Joint & connection repair',
        'Wall & ceiling leak fixing',
        'Water damage prevention',
        'Emergency response available'
      ]
    },
    {
      id: 'pipe-installation',
      title: 'Pipe Installation',
      price: '₹399',
      duration: 'onwards',
      category: 'plumbing',
      features: [
        'New pipe installation',
        'Water line setup',
        'Bathroom pipe work',
        'Kitchen plumbing',
        'Quality materials used',
        'Professional installation'
      ]
    },
    {
      id: 'fan-light-repair',
      title: 'Fan/Light Repair',
      price: '₹199',
      duration: 'onwards',
      category: 'electrical',
      features: [
        'Ceiling fan repair',
        'Light fixture installation',
        'Bulb & tube replacement',
        'Fan speed control fix',
        'Safety inspection'
      ]
    },
    {
      id: 'switch-socket-replace',
      title: 'Switch/Socket Replace',
      price: '₹149', 
      duration: 'onwards',
      category: 'electrical',
      features: [
        'Switch replacement',
        'Socket installation',
        'Modular switch upgrade',
        'USB socket installation',
        'Safety testing'
      ]
    },
    {
      id: 'wiring-fix',
      title: 'Wiring Fix',
      price: '₹299',
      duration: 'onwards',
      category: 'electrical',
      features: [
        'Electrical wiring repair',
        'Short circuit fixing',
        'Wire replacement',
        'Connection troubleshooting',
        'Safety compliance check',
        'Certified electrician service'
      ]
    },
    {
      id: 'ac-service-repair',
      title: 'AC Service & Repair',
      price: '₹499',
      duration: 'onwards',
      category: 'appliance',
      features: [
        'Complete AC cleaning',
        'Gas refilling',
        'Filter replacement',
        'Cooling performance check',
        '6 month service warranty'
      ]
    },
    {
      id: 'washing-machine-repair',
      title: 'Washing Machine Repair',
      price: '₹399',
      duration: 'onwards',
      category: 'appliance',
      features: [
        'Motor & pump repair',
        'Drum & agitator fixing',
        'Control panel repair',
        'Water inlet/outlet fix',
        'Performance optimization'
      ]
    },
    {
      id: 'refrigerator-repair',
      title: 'Refrigerator Repair',
      price: '₹499',
      duration: 'onwards',
      category: 'appliance',
      features: [
        'Cooling system repair',
        'Compressor fixing',
        'Thermostat adjustment',
        'Door seal replacement',
        'Energy efficiency check'
      ]
    },
    {
      id: 'mens-haircut',
      title: "Men's Haircut",
      price: '₹199',
      duration: 'onwards',
      category: 'grooming',
      features: [
        'Haircut & styling',
        'Beard trimming',
        'Hair washing',
        'Professional tools',
        'Styling consultation'
      ]
    },
    {
      id: 'womens-makeup', 
      title: "Women's Makeup",
      price: '₹799',
      duration: 'onwards',
      category: 'grooming',
      features: [
        'Professional makeup',
        'Bridal makeup available',
        'Hair styling included',
        'Event makeup',
        'Premium products',
        'Touch-up kit provided'
      ]
    },
    {
      id: 'mehndi-artist',
      title: 'Mehndi Artist',
      price: '₹499',
      duration: 'onwards',
      category: 'grooming',
      features: [
        'Traditional mehndi designs',
        'Bridal mehndi available',
        'Arabic & Indian patterns',
        'Natural henna used',
        'Custom design consultation'
      ]
    },
    {
      id: 'dog-grooming',
      title: 'Dog Grooming',
      price: '₹499',
      duration: 'onwards',
      category: 'pet',
      features: [
        'Bathing & shampooing',
        'Hair trimming & styling',
        'Nail clipping',
        'Ear cleaning',
        'Gentle handling',
        'All dog breeds welcome'
      ]
    },
    {
      id: 'cat-grooming',
      title: 'Cat Grooming',
      price: '₹449',
      duration: 'onwards',
      category: 'pet',
      features: [
        'Gentle bathing',
        'Coat brushing & detangling',
        'Nail trimming',
        'Eye & ear cleaning',
        'Stress-free handling',
        'Cat-friendly approach'
      ]
    }
  ];

  const filteredPricing = activeCategory === 'all' 
    ? pricingData 
    : pricingData.filter(item => item.category === activeCategory);

  const toggleCardFlip = (cardId: string) => {
    setFlippedCards(prev => {
      const newSet = new Set(prev);
      if (newSet.has(cardId)) {
        newSet.delete(cardId);
      } else {
        newSet.add(cardId);
      }
      return newSet;
    });
  };

  return (
    <>
      <Helmet>
        <title>Pricing - Handlix | Transparent & Affordable Home Service Rates</title>
        <meta name="description" content="View transparent pricing for all Handlix home services in Aligarh. No hidden charges. Cleaning, plumbing, electrical, grooming, and appliance repair rates." />
        <meta name="keywords" content="home service prices Aligarh, cleaning rates, plumber charges, electrician cost, grooming prices" />
      </Helmet>

      <Header />
      
      <main className="min-h-screen bg-background pt-20">
        {/* Hero */}
        <section className="section-padding">
          <div className="container-custom">
            <SectionHeading
              title="Transparent & Affordable Pricing"
              description="No hidden charges. Quality service at fair rates with complete transparency."
              gradientWords={["Transparent", "Affordable"]}
              className="mb-12"
            />

            {/* Category Filters */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {categories.map((category) => (
                <motion.button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                    activeCategory === category.id
                      ? 'bg-gradient-brand text-white shadow-brand'
                      : 'bg-background-alt text-body hover:bg-gradient-brand hover:text-white border border-border'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {category.name}
                </motion.button>
              ))}
            </div>

            {/* Pricing Grid */}
            <AnimatePresence mode="wait">
              <motion.div
                data-pricing-section
                key={activeCategory}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {filteredPricing.map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <PricingCard
                      {...item}
                      isFlipped={flippedCards.has(item.id)}
                      onFlip={() => toggleCardFlip(item.id)}
                    />
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="section-padding bg-background-alt">
          <div className="container-custom">
            <SectionHeading
              title="Pricing FAQs"
              gradientWords={["FAQs"]}
              className="mb-12"
            />

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {[
                {
                  q: "Are there any hidden charges?",
                  a: "No, we believe in complete transparency. The price you see is what you pay, with no hidden charges."
                },
                {
                  q: "Can I get a custom quote?",
                  a: "Yes! For large projects or custom requirements, contact us for a personalized quote."
                },
                {
                  q: "Do you offer discounts for regular services?",
                  a: "Yes, we offer attractive discounts for weekly and monthly service packages."
                },
                {
                  q: "What if I'm not satisfied with the service?",
                  a: "We offer a 100% satisfaction guarantee. If you're not happy, we'll make it right at no extra cost."
                }
              ].map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-background p-6 rounded-2xl border border-border"
                >
                  <h3 className="font-bold text-heading mb-3">{faq.q}</h3>
                  <p className="text-body-light">{faq.a}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppFloat />
    </>
  );
};

export default Pricing;