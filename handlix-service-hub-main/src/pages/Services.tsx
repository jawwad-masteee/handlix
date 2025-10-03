import { Helmet } from 'react-helmet-async';
import { Link, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { ArrowRight, Home, Wrench, Zap, Scissors, Dog, Cog } from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer'; 
import { WhatsAppFloat } from '@/components/WhatsAppFloat';
import { SectionHeading } from '@/components/SectionHeading';
import { ServiceCard } from '@/components/ServiceCard';

const Services = () => {
  const { category } = useParams();

  useEffect(() => {
    if (category) {
      // Wait for page to render, then scroll to the specific category
      setTimeout(() => {
        const element = document.getElementById(`category-${category}`);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, [category]);
  const serviceCategories = [
    {
      id: 'home-cleaning',
      title: 'Home Cleaning',
      icon: <Home className="w-12 h-12" />,
      description: 'Deep Cleaning – Complete home cleaning (₹1499 onwards), Kitchen Cleaning – Hygienic cleaning (₹499 onwards), Bathroom Cleaning – Scrubbing & sanitization (₹399 onwards)',
      services: ['Deep Cleaning', 'Kitchen Cleaning', 'Bathroom Cleaning'],
      priceRange: 'From ₹399',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      id: 'plumbing', 
      title: 'Plumbing Services',
      icon: <Wrench className="w-12 h-12" />,
      description: 'Tap/Faucet Repair – Fixing leaks (₹199 onwards), Leak Fixing – Pipe leakage repair (₹249 onwards), Pipe Installation – New installations (₹399 onwards)',
      services: ['Tap/Faucet Repair', 'Leak Fixing', 'Pipe Installation'],
      priceRange: 'From ₹299',
      gradient: 'from-indigo-500 to-purple-500'
    },
    {
      id: 'electrical',
      title: 'Electrical Repairs',
      icon: <Zap className="w-12 h-12" />,
      description: 'Fan/Light Repair – Installations & fixes (₹199 onwards), Wiring Solutions – Safe wiring (₹299 onwards), Switch & Socket Replacement (₹149 onwards)',
      services: ['Fan/Light Repair', 'Wiring Solutions', 'Switch & Socket Replacement'],
      priceRange: 'From ₹149',
      gradient: 'from-yellow-500 to-orange-500'
    },
    {
      id: 'appliance-repair',
      title: 'Appliance Repair',
      icon: <Cog className="w-12 h-12" />,
      description: 'AC Service/Repair (₹499 onwards), Washing Machine Repair (₹399 onwards), Refrigerator Repair (₹499 onwards)',
      services: ['AC Service/Repair', 'Washing Machine Repair', 'Refrigerator Repair'],
      priceRange: 'From ₹399',
      gradient: 'from-green-500 to-teal-500'
    },
    {
      id: 'grooming',
      title: 'Grooming',
      icon: <Scissors className="w-12 h-12" />,
      description: 'Men\'s Haircut & Styling (₹199 onwards), Women\'s Makeup & Styling (₹799 onwards), Mehndi Artist (₹499 onwards)',
      services: ['Men\'s Haircut & Styling', 'Women\'s Makeup & Styling', 'Mehndi Artist'],
      priceRange: 'From ₹399', 
      gradient: 'from-pink-500 to-rose-500'
    },
    {
      id: 'pet-grooming',
      title: 'Pet Grooming',
      icon: <Dog className="w-12 h-12" />,
      description: 'Dog Grooming – Bathing, trimming (₹499 onwards), Cat Grooming – Nail clipping, coat cleaning (₹449 onwards)',
      services: ['Dog Grooming', 'Cat Grooming'],
      priceRange: 'From ₹449',
      gradient: 'from-violet-500 to-purple-500'
    }
  ];

  return (
    <>
      <Helmet>
        <title>All Services - Handlix | Home Services in Aligarh</title>
        <meta name="description" content="Explore our complete range of home services in Aligarh. Cleaning, plumbing, electrical, appliance repair, grooming, and pet grooming services at your doorstep." />
        <meta name="keywords" content="home services Aligarh, cleaning service, plumber, electrician, grooming, pet care, appliance repair" />
      </Helmet>

      <Header />
      
      <main className="min-h-screen bg-background pt-20">
        {/* Hero Section */}
        <section className="section-padding bg-gradient-brand text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 right-10 w-40 h-40 bg-white rounded-full blur-3xl" />
            <div className="absolute bottom-10 left-10 w-32 h-32 bg-white rounded-full blur-3xl" />
          </div>
          
          <div className="container-custom relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center space-y-6"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black">
                Explore Our Wide Range of<br />Professional Services
              </h1>
              <p className="text-xl text-white/90 max-w-3xl mx-auto">
                Explore our wide range of professional services, designed to make your life easier. Click on "Book Now" to instantly connect with us on WhatsApp.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="section-padding">
          <div className="container-custom">
            <SectionHeading
              title="All Service Categories"
              description="Choose from our comprehensive range of home services"
              gradientWords={["Categories"]}
              className="mb-16"
            />

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {serviceCategories.map((category, index) => (
                <motion.div
                  key={category.id}
                  id={`category-${category.id}`}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="group"
                >
                  <div
                    onClick={() => {
                      const categoryMap = {
                        'home-cleaning': 'cleaning',
                        'plumbing': 'plumbing', 
                        'electrical': 'electrical',
                        'appliance-repair': 'appliance',
                        'grooming': 'grooming',
                        'pet-grooming': 'grooming'
                      };
                      const targetCategory = categoryMap[category.id as keyof typeof categoryMap] || 'all-services';
                      window.location.href = `/pricing#${targetCategory}`;
                    }}
                    className="block bg-background-alt rounded-3xl p-8 hover:shadow-brand-lg transition-all duration-300 border border-border hover:border-brand-orange card-hover cursor-pointer"
                  >
                    <div className={`w-20 h-20 bg-gradient-to-r ${category.gradient} rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      {category.icon}
                    </div>

                    <h3 className="text-2xl font-bold text-heading mb-4 group-hover:text-brand-orange transition-colors">
                      {category.title}
                    </h3>
                    
                    <p className="text-body-light mb-6 leading-relaxed">
                      {category.description}
                    </p>

                    <div className="space-y-2 mb-6">
                      {category.services.map((service) => (
                        <div key={service} className="flex items-center text-sm text-body">
                          <div className="w-1.5 h-1.5 bg-brand-orange rounded-full mr-3" />
                          {service}
                        </div>
                      ))}
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-gradient">
                        {category.priceRange}
                      </span>
                      <ArrowRight className="w-5 h-5 text-brand-orange group-hover:translate-x-2 transition-transform" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-background-alt">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center bg-gradient-brand rounded-3xl p-12 text-white relative overflow-hidden"
            >
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-5 left-5 w-24 h-24 bg-white rounded-full blur-2xl" />
                <div className="absolute bottom-5 right-5 w-32 h-32 bg-white rounded-full blur-3xl" />
              </div>
              
              <div className="relative z-10 space-y-6">
                <h2 className="text-3xl md:text-4xl font-black">
                  Can't Find What You Need?
                </h2>
                <p className="text-xl text-white/90 max-w-2xl mx-auto">
                  We offer many more specialized services. Contact us to discuss your specific requirements.
                </p>
                <Link
                  to="/contact"
                  className="inline-block bg-white text-brand-orange font-semibold py-4 px-8 rounded-full hover:bg-white/90 transition-colors focus-ring"
                >
                  Contact Us
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppFloat />
    </>
  );
};

export default Services;