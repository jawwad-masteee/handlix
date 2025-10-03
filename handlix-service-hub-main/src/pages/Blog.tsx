import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight, User, Search, Filter, ArrowLeft } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { WhatsAppFloat } from '@/components/WhatsAppFloat';
import { SectionHeading } from '@/components/SectionHeading';
import { GradientButton } from '@/components/GradientButton';
import { Input } from '@/components/ui/input';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { openWhatsApp } from '@/utils/wa';

const Blog = () => {
  const { id } = useParams();
  const [activeCategory, setActiveCategory] = useState('All Posts');
  const [searchTerm, setSearchTerm] = useState('');

  const blogPosts = [
    {
      id: 'home-cleaning-guide-2025',
      title: 'Ultimate Guide to Home Cleaning Services in India (2025 Edition)',
      excerpt: 'Comprehensive guide covering deep cleaning vs regular cleaning, eco-friendly practices, and when to hire professionals. Learn cost-effective cleaning strategies.',
      author: 'Maaz Bin Jabal',
      date: '2025-01-15',
      readTime: '12 min read',
      category: 'Cleaning',
      image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      featured: true,
      content: `
        <h2>Deep Cleaning vs Regular Cleaning: What's the Difference?</h2>
        <p>When it comes to maintaining a clean and healthy home, understanding the difference between deep cleaning and regular cleaning is crucial. Regular cleaning involves daily or weekly tasks like dusting, vacuuming, and basic sanitization. Deep cleaning, on the other hand, is a comprehensive process that reaches every corner of your home.</p>
        
        <h3>What Does Deep Cleaning Include?</h3>
        <ul>
          <li>Complete kitchen sanitization including appliances, cabinets, and hidden areas</li>
          <li>Bathroom deep scrubbing with anti-bacterial treatment</li>
          <li>Floor mopping with specialized cleaning agents</li>
          <li>Window and balcony cleaning</li>
          <li>Dusting and organizing all rooms</li>
        </ul>

        <h2>Cost Analysis: Professional vs DIY Cleaning</h2>
        <p>Professional home cleaning services in Aligarh typically range from ₹499 for kitchen cleaning to ₹1499 for full home deep cleaning. While DIY cleaning might seem cost-effective, professional services offer:</p>
        
        <h3>Benefits of Professional Cleaning</h3>
        <ul>
          <li>Time-saving: 3-4 hours of professional work vs 8-10 hours DIY</li>
          <li>Professional-grade equipment and eco-friendly products</li>
          <li>Trained staff with expertise in different cleaning techniques</li>
          <li>100% satisfaction guarantee</li>
        </ul>

        <h2>Eco-Friendly Cleaning Practices</h2>
        <p>Modern cleaning services prioritize environmental safety. At Handlix, we use biodegradable cleaning products that are safe for children and pets while being effective against germs and bacteria.</p>

        <h3>Green Cleaning Benefits</h3>
        <ul>
          <li>Reduced chemical exposure for family members</li>
          <li>Better indoor air quality</li>
          <li>Environmentally sustainable practices</li>
          <li>Safe for pets and children</li>
        </ul>

        <h2>When to Choose Professional Cleaning Services</h2>
        <p>Consider professional cleaning services when:</p>
        <ul>
          <li>Moving into a new home</li>
          <li>Preparing for festivals or special occasions</li>
          <li>Dealing with stubborn stains or odors</li>
          <li>Lack of time for thorough cleaning</li>
          <li>Need for specialized equipment</li>
        </ul>
      `,
      faqs: [
        {
          question: "How often should I book professional deep cleaning?",
          answer: "We recommend deep cleaning every 3-6 months, depending on your household size and lifestyle. Regular cleaning can be done weekly or bi-weekly."
        },
        {
          question: "Are your cleaning products safe for children and pets?",
          answer: "Yes, we use only eco-friendly, non-toxic cleaning products that are completely safe for children and pets."
        },
        {
          question: "How long does a full home deep cleaning take?",
          answer: "A full home deep cleaning typically takes 3-4 hours for a 2-3 BHK apartment, depending on the condition and size of the home."
        }
      ]
    },
    {
      id: 'plumbing-problems-solutions',
      title: 'Top 7 Plumbing Problems Every Homeowner Faces (And How to Fix Them)',
      excerpt: 'Learn to identify common plumbing issues, emergency solutions, and when to call professionals. Includes cost breakdown for repairs in Aligarh.',
      author: 'Maaz Bin Jabal',
      date: '2025-01-12',
      readTime: '10 min read',
      category: 'Plumbing',
      image: 'https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      content: `
        <h2>1. Leaky Faucets and Taps</h2>
        <p>Leaky faucets are among the most common plumbing issues in Indian households. A single dripping tap can waste over 3,000 liters of water annually, significantly increasing your water bill.</p>
        
        <h3>DIY Solutions</h3>
        <ul>
          <li>Check and replace worn-out washers</li>
          <li>Tighten loose connections</li>
          <li>Clean mineral deposits from aerators</li>
        </ul>

        <h3>When to Call Professionals</h3>
        <p>If the leak persists after basic fixes, or if you notice water damage around the fixture, it's time to call Handlix professionals. Our tap repair service starts from ₹199.</p>

        <h2>2. Clogged Drains</h2>
        <p>Kitchen and bathroom drains often get clogged due to food particles, hair, soap residue, and other debris. This is especially common during monsoon season in Aligarh.</p>

        <h2>3. Running Toilets</h2>
        <p>A running toilet can waste up to 200 gallons of water per day. Common causes include faulty flapper valves, chain issues, or problems with the fill valve.</p>

        <h2>4. Low Water Pressure</h2>
        <p>Low water pressure can be caused by mineral buildup in pipes, partially closed valves, or issues with the municipal water supply.</p>

        <h2>5. Pipe Leakage</h2>
        <p>Pipe leaks can cause significant water damage if not addressed promptly. Signs include water stains on walls, increased water bills, and musty odors.</p>

        <h2>Emergency Plumbing Services</h2>
        <p>Handlix offers 24/7 emergency plumbing services in Aligarh. Our emergency response team can reach you within 1-2 hours for urgent repairs.</p>
      `,
      faqs: [
        {
          question: "How quickly can you respond to plumbing emergencies?",
          answer: "We provide 24/7 emergency plumbing services and typically reach you within 1-2 hours for urgent repairs in Aligarh."
        },
        {
          question: "What's included in your pipe installation service?",
          answer: "Our pipe installation service includes new pipe installation, water line setup, bathroom and kitchen plumbing work using quality materials."
        },
        {
          question: "Do you provide warranty on plumbing repairs?",
          answer: "Yes, we provide a 6-month warranty on all major plumbing repairs and installations for your peace of mind."
        }
      ]
    },
    {
      id: 'electrical-safety-tips',
      title: 'Electrical Safety Tips for Every Indian Household',
      excerpt: 'Essential electrical safety practices, common issues like fan/light repair, and monsoon electrical safety checklist for Indian homes.',
      author: 'Maaz Bin Jabal',
      date: '2025-01-10',
      readTime: '8 min read',
      category: 'Electrical',
      image: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      content: `
        <h2>Common Electrical Issues in Indian Homes</h2>
        <p>Indian households face unique electrical challenges due to voltage fluctuations, monsoon seasons, and aging infrastructure. Understanding these issues can help prevent accidents and costly repairs.</p>

        <h3>Fan and Light Repair</h3>
        <p>Ceiling fans and light fixtures are essential in Indian homes. Common issues include:</p>
        <ul>
          <li>Fan speed control problems</li>
          <li>Flickering lights</li>
          <li>Loose connections</li>
          <li>Burnt-out bulbs and tubes</li>
        </ul>

        <h2>Switch and Socket Safety</h2>
        <p>Outdated switches and sockets pose safety risks. Modern modular switches offer better safety features and USB charging options.</p>

        <h2>Monsoon Electrical Safety Checklist</h2>
        <p>During monsoon season, electrical safety becomes critical:</p>
        <ul>
          <li>Check for water seepage near electrical outlets</li>
          <li>Ensure proper earthing of all appliances</li>
          <li>Install surge protectors</li>
          <li>Regular inspection of outdoor wiring</li>
        </ul>

        <h2>When to Call Professional Electricians</h2>
        <p>While minor issues can be handled with basic knowledge, complex electrical work requires certified professionals. Handlix electricians are trained and certified for safe electrical work.</p>
      `,
      faqs: [
        {
          question: "How do I know if my electrical wiring needs replacement?",
          answer: "Signs include frequent circuit breaker trips, flickering lights, burning smells, or outlets that feel warm. Our certified electricians can perform a safety inspection."
        },
        {
          question: "Is it safe to do electrical work during monsoon?",
          answer: "Electrical work during monsoon requires extra precautions. We recommend professional services during heavy rains for safety."
        },
        {
          question: "What's the cost of switch and socket replacement?",
          answer: "Switch and socket replacement starts from ₹149 onwards, including quality modular switches and professional installation."
        }
      ]
    },
    {
      id: 'appliance-maintenance-guide',
      title: 'Why Regular Appliance Maintenance Saves You Big Money',
      excerpt: 'Learn about AC servicing, washing machine repair, refrigerator maintenance, and early signs of appliance failure to save on costly replacements.',
      author: 'Maaz Bin Jabal',
      date: '2025-01-08',
      readTime: '9 min read',
      category: 'Appliance Repair',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      content: `
        <h2>The Cost of Neglecting Appliance Maintenance</h2>
        <p>Regular appliance maintenance can extend the life of your appliances by 5-10 years and reduce energy consumption by up to 30%. In Aligarh's climate, proper maintenance is especially important.</p>

        <h3>AC Servicing and Repair</h3>
        <p>Air conditioners work overtime in Indian summers. Regular servicing includes:</p>
        <ul>
          <li>Filter cleaning and replacement</li>
          <li>Coil cleaning for better efficiency</li>
          <li>Gas refilling when needed</li>
          <li>Electrical connection checks</li>
        </ul>

        <h2>Washing Machine Maintenance</h2>
        <p>Washing machines face challenges from hard water and heavy usage. Common issues include:</p>
        <ul>
          <li>Motor and pump problems</li>
          <li>Drum and agitator issues</li>
          <li>Control panel malfunctions</li>
          <li>Water inlet/outlet blockages</li>
        </ul>

        <h2>Refrigerator Care Tips</h2>
        <p>Refrigerators are essential year-round appliances. Proper maintenance ensures food safety and energy efficiency.</p>

        <h2>Early Warning Signs</h2>
        <p>Watch for these signs that indicate your appliances need professional attention:</p>
        <ul>
          <li>Unusual noises or vibrations</li>
          <li>Increased energy bills</li>
          <li>Poor performance or efficiency</li>
          <li>Frequent breakdowns</li>
        </ul>
      `,
      faqs: [
        {
          question: "How often should I service my AC?",
          answer: "We recommend AC servicing twice a year - before summer and after monsoon season for optimal performance and longevity."
        },
        {
          question: "What's included in your appliance repair warranty?",
          answer: "We provide a 6-month warranty on all major appliance repairs, covering parts and labor for your peace of mind."
        },
        {
          question: "Can you repair all appliance brands?",
          answer: "Yes, our technicians are trained to work with all major appliance brands including LG, Samsung, Whirlpool, Godrej, and more."
        }
      ]
    },
    {
      id: 'at-home-grooming-services-2025',
      title: 'The Rise of At-Home Grooming & Beauty Services in 2025',
      excerpt: 'Explore the growing trend of professional grooming services at home. Men\'s haircuts, women\'s makeup, mehndi services, and the convenience revolution.',
      author: 'Maaz Bin Jabal',
      date: '2025-01-05',
      readTime: '7 min read',
      category: 'Grooming',
      image: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      content: `
        <h2>The Convenience Revolution in Grooming</h2>
        <p>The at-home grooming industry has exploded in 2025, with more people preferring professional services in the comfort of their homes. This trend has been particularly strong in tier-2 cities like Aligarh.</p>

        <h3>Men's Grooming Services</h3>
        <p>Professional men's grooming at home includes:</p>
        <ul>
          <li>Haircut and styling (₹199 onwards)</li>
          <li>Beard trimming and shaping</li>
          <li>Hair washing with premium products</li>
          <li>Styling consultation</li>
        </ul>

        <h2>Women's Beauty and Makeup Services</h2>
        <p>From everyday makeup to bridal preparation, at-home beauty services offer convenience and privacy:</p>
        <ul>
          <li>Professional makeup application</li>
          <li>Hair styling for events</li>
          <li>Bridal makeup packages</li>
          <li>Touch-up kit provision</li>
        </ul>

        <h2>Traditional Mehndi Services</h2>
        <p>Mehndi remains an integral part of Indian celebrations. Professional mehndi artists bring:</p>
        <ul>
          <li>Traditional and Arabic designs</li>
          <li>Natural henna products</li>
          <li>Custom design consultation</li>
          <li>Bridal mehndi specialization</li>
        </ul>

        <h2>Why Choose At-Home Services?</h2>
        <p>The benefits of at-home grooming services include comfort, privacy, time-saving, and personalized attention in familiar surroundings.</p>
      `,
      faqs: [
        {
          question: "How do I book grooming services at home?",
          answer: "Simply message us on WhatsApp with your preferred service and timing. We'll confirm availability and send a professional to your location."
        },
        {
          question: "Do you provide grooming tools and products?",
          answer: "Yes, our professionals come equipped with all necessary tools and premium products for the service."
        },
        {
          question: "Can I book grooming services for events?",
          answer: "Absolutely! We offer special event packages for weddings, parties, and celebrations with advance booking."
        }
      ]
    },
    {
      id: 'pet-grooming-professional-care',
      title: 'Pet Grooming Services: Why Your Pet Deserves Professional Care',
      excerpt: 'Complete guide to professional pet grooming including dog grooming, cat grooming, hygiene benefits, and specialized care for different breeds.',
      author: 'Maaz Bin Jabal',
      date: '2025-01-03',
      readTime: '11 min read',
      category: 'Pet Care',
      image: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      content: `
        <h2>The Importance of Professional Pet Grooming</h2>
        <p>Professional pet grooming goes beyond aesthetics. It's essential for your pet's health, comfort, and overall well-being. Regular grooming helps prevent skin issues, matting, and other health problems.</p>

        <h3>Dog Grooming Services</h3>
        <p>Our comprehensive dog grooming service (₹499 onwards) includes:</p>
        <ul>
          <li>Bathing with pet-safe shampoos</li>
          <li>Hair trimming and styling</li>
          <li>Nail clipping and filing</li>
          <li>Ear cleaning and inspection</li>
          <li>Teeth cleaning (basic)</li>
        </ul>

        <h3>When to Call Professionals</h3>
        <p>If the leak persists after basic fixes, or if you notice water damage around the fixture, it's time to call Handlix professionals. Our tap repair service starts from ₹199.</p>

        <h2>2. Clogged Drains</h2>
        <p>Kitchen and bathroom drains often get clogged due to food particles, hair, soap residue, and other debris. This is especially common during monsoon season in Aligarh.</p>

        <h2>3. Running Toilets</h2>
        <p>A running toilet can waste up to 200 gallons of water per day. Common causes include faulty flapper valves, chain issues, or problems with the fill valve.</p>

        <h2>4. Low Water Pressure</h2>
        <p>Low water pressure can be caused by mineral buildup in pipes, partially closed valves, or issues with the municipal water supply.</p>

        <h2>5. Pipe Leakage</h2>
        <p>Pipe leaks can cause significant water damage if not addressed promptly. Signs include water stains on walls, increased water bills, and musty odors.</p>

        <h2>Emergency Plumbing Services</h2>
        <p>Handlix offers 24/7 emergency plumbing services in Aligarh. Our emergency response team can reach you within 1-2 hours for urgent repairs.</p>
      `,
      faqs: [
        {
          question: "How often should I groom my pet?",
          answer: "Dogs typically need grooming every 4-6 weeks, while cats may need grooming every 6-8 weeks, depending on their coat type and lifestyle."
        },
        {
          question: "Is home grooming safe for aggressive pets?",
          answer: "Our professionals are trained to handle pets with different temperaments. We use gentle techniques and take breaks as needed to ensure safety."
        },
        {
          question: "Do you groom all dog and cat breeds?",
          answer: "Yes, we provide grooming services for all dog and cat breeds, with specialized techniques for each breed's specific needs."
        }
      ]
    },
    {
      id: 'seasonal-home-maintenance-monsoon',
      title: 'Seasonal Home Maintenance: Preparing Your Home for Monsoons in Aligarh',
      excerpt: 'Complete monsoon preparation guide for homes in Aligarh. Waterproofing, electrical safety, plumbing checks, and emergency preparedness tips.',
      author: 'Maaz Bin Jabal',
      date: '2025-01-01',
      readTime: '13 min read',
      category: 'Home Maintenance',
      image: 'https://images.unsplash.com/photo-1519692933481-e162a57d6721?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      content: `
        <h2>Why Monsoon Preparation is Critical in Aligarh</h2>
        <p>Aligarh experiences heavy monsoon rains that can cause significant damage to homes if proper preparation isn't done. From waterlogging to electrical hazards, monsoon season brings unique challenges that require proactive home maintenance.</p>

        <h3>Pre-Monsoon Home Inspection Checklist</h3>
        <p>Before the monsoon season begins, conduct a thorough inspection of your home:</p>
        <ul>
          <li>Roof and terrace waterproofing check</li>
          <li>Drainage system cleaning and maintenance</li>
          <li>Electrical wiring and outlet inspection</li>
          <li>Window and door sealing verification</li>
          <li>Plumbing system pressure testing</li>
        </ul>

        <h2>Waterproofing Solutions for Aligarh Homes</h2>
        <p>Effective waterproofing is essential for protecting your home during heavy rains. Key areas that need attention include:</p>
        <ul>
          <li>Terrace and balcony waterproofing with quality sealants</li>
          <li>External wall treatment to prevent seepage</li>
          <li>Bathroom and kitchen waterproofing maintenance</li>
          <li>Foundation waterproofing for ground floor homes</li>
        </ul>

        <h2>Electrical Safety During Monsoons</h2>
        <p>Electrical safety becomes paramount during monsoon season. Essential precautions include:</p>
        <ul>
          <li>Installing ELCB (Earth Leakage Circuit Breaker) for safety</li>
          <li>Checking all electrical connections for water exposure</li>
          <li>Ensuring proper earthing of all appliances</li>
          <li>Using surge protectors for valuable electronics</li>
          <li>Regular inspection of outdoor electrical installations</li>
        </ul>

        <h2>Plumbing Maintenance for Monsoon Season</h2>
        <p>Proper plumbing maintenance prevents water damage and ensures smooth drainage during heavy rains:</p>
        <ul>
          <li>Cleaning and unclogging all drains and gutters</li>
          <li>Checking for pipe leaks and joint failures</li>
          <li>Installing additional drainage points if needed</li>
          <li>Testing water pressure and flow rates</li>
          <li>Inspecting septic tanks and sewage connections</li>
        </ul>

        <h2>Emergency Preparedness and Quick Response</h2>
        <p>Having an emergency plan and quick access to professional services can save your home from extensive damage. Handlix provides 24/7 emergency services during monsoon season for urgent repairs and maintenance.</p>

        <h2>Post-Monsoon Home Recovery</h2>
        <p>After the monsoon season, conduct a thorough inspection to identify any damage and plan necessary repairs. This includes checking for water damage, electrical issues, and structural problems that may have developed during the rains.</p>
      `,
      faqs: [
        {
          question: "When should I start monsoon preparation for my home?",
          answer: "Start monsoon preparation at least 2-3 months before the rainy season begins. This gives you enough time to complete waterproofing, electrical work, and plumbing maintenance."
        },
        {
          question: "What's the cost of waterproofing a terrace in Aligarh?",
          answer: "Terrace waterproofing costs vary based on area and materials used. Contact Handlix for a detailed quote based on your specific requirements."
        },
        {
          question: "Do you provide emergency services during heavy rains?",
          answer: "Yes, Handlix provides 24/7 emergency services during monsoon season for urgent repairs, waterproofing, and electrical safety issues."
        }
      ]
    }
  ];

  const categories = [
    'All Posts',
    'Plumbing',
    'Electrical',
    'Appliance Repair',
    'Grooming',
    'Pet Care',
    'Home Maintenance'
  ];

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-IN', {
      year: 'numeric',
      month: 'long', 
      day: 'numeric'
    });
  };

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = activeCategory === 'All Posts' || post.category === activeCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // If viewing a specific blog post
  if (id) {
    const post = blogPosts.find(p => p.id === id);
    if (!post) {
      return <div>Blog post not found</div>;
    }

    return (
      <>
        <Helmet>
          <title>{post.title} - Handlix Blog</title>
          <meta name="description" content={post.excerpt} />
          <meta name="keywords" content={`${post.category.toLowerCase()}, home services, Aligarh, ${post.title.toLowerCase()}`} />
          <link rel="canonical" href={`https://handlix.com/blog/${post.id}`} />
        </Helmet>

        <Header />
        
        <main className="min-h-screen bg-background pt-20">
          {/* Back Button */}
          <section className="py-4">
            <div className="container-custom">
              <Link
                to="/blog"
                className="inline-flex items-center bg-white text-brand-orange hover:text-brand-pink transition-all duration-300 font-medium focus-ring rounded-lg px-4 py-2 border-2 border-transparent bg-gradient-to-r from-brand-orange via-brand-pink to-brand-purple bg-clip-border hover:shadow-lg"
                style={{
                  background: 'linear-gradient(white, white) padding-box, linear-gradient(135deg, hsl(var(--brand-orange)), hsl(var(--brand-pink)), hsl(var(--brand-purple))) border-box'
                }}
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Blogs
              </Link>
            </div>
          </section>

          {/* Blog Hero */}
          <section className="section-padding">
            <div className="container-custom">
              <div className="max-w-4xl mx-auto">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-6"
                >
                  <div className="text-brand-orange font-semibold">{post.category}</div>
                  <h1 className="text-4xl md:text-5xl font-black text-heading leading-tight">
                    {post.title}
                  </h1>
                  
                  <div className="flex items-center text-body-light space-x-6">
                    <div className="flex items-center">
                      <User className="w-4 h-4 mr-2" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span>{formatDate(post.date)}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-2" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Featured Image */}
          <section className="mb-12">
            <div className="container-custom">
              <div className="max-w-4xl mx-auto">
                <img 
                  src={post.image}
                  alt={post.title}
                  className="w-full h-64 md:h-96 object-cover rounded-2xl"
                />
              </div>
            </div>
          </section>

          {/* Article Content */}
          <section className="section-padding">
            <div className="container-custom">
              <div className="max-w-4xl mx-auto">
                <div 
                  className="prose prose-lg max-w-none text-body-light"
                  dangerouslySetInnerHTML={{ __html: post.content }}
                />
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="section-padding bg-background-alt">
            <div className="container-custom">
              <div className="max-w-4xl mx-auto">
                <SectionHeading
                  title="Frequently Asked Questions"
                  gradientWords={["Questions"]}
                  className="mb-12"
                />

                <Accordion type="single" collapsible className="space-y-4">
                  {post.faqs.map((faq, index) => (
                    <AccordionItem key={index} value={`item-${index}`} className="bg-background rounded-2xl border border-border px-6">
                      <AccordionTrigger className="text-left font-semibold text-heading hover:text-brand-orange">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-body-light">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="section-padding">
            <div className="container-custom">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-gradient-brand rounded-3xl p-12 text-white text-center relative overflow-hidden max-w-4xl mx-auto"
              >
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-5 left-5 w-24 h-24 bg-white rounded-full blur-2xl" />
                  <div className="absolute bottom-5 right-5 w-32 h-32 bg-white rounded-full blur-3xl" />
                </div>
                
                <div className="relative z-10 space-y-6">
                  <h2 className="text-3xl md:text-4xl font-black">
                    Ready to Book This Service?
                  </h2>
                  <p className="text-xl text-white/90">
                    Get instant quotes and professional service at your doorstep in Aligarh.
                  </p>
                  <GradientButton
                    variant="outline"
                    size="lg"
                    onClick={() => openWhatsApp(post.category)}
                    className="bg-white/10 text-white border-white/30 hover:bg-white/20"
                  >
                    Book Now on WhatsApp
                  </GradientButton>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Related Articles */}
          <section className="section-padding bg-background-alt">
            <div className="container-custom">
              <div className="max-w-4xl mx-auto">
                <SectionHeading
                  title="Related Articles"
                  gradientWords={["Related"]}
                  className="mb-12"
                />

                <div className="grid md:grid-cols-3 gap-8">
                  {blogPosts
                    .filter(p => p.id !== post.id)
                    .slice(0, 3)
                    .map((relatedPost, index) => (
                      <motion.article
                        key={relatedPost.id}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="bg-background rounded-2xl overflow-hidden shadow-card hover:shadow-brand-lg transition-all duration-300"
                      >
                        <div className="relative h-48 overflow-hidden">
                          <img 
                            src={relatedPost.image}
                            alt={relatedPost.title}
                            className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                          />
                        </div>
                        
                        <div className="p-6">
                          <div className="text-brand-orange font-semibold text-sm mb-2">{relatedPost.category}</div>
                          <h3 className="text-lg font-bold text-heading mb-3 leading-tight">
                            <Link to={`/blog/${relatedPost.id}`} className="hover:text-brand-orange transition-colors">
                              {relatedPost.title}
                            </Link>
                          </h3>
                          
                          <div className="flex items-center text-sm text-body-light mb-4">
                            <Clock className="w-4 h-4 mr-1" />
                            <span>{relatedPost.readTime}</span>
                          </div>
                          
                          <Link
                            to={`/blog/${relatedPost.id}`}
                            className="inline-flex items-center text-brand-orange font-medium hover:text-brand-pink transition-colors"
                          >
                            Read More
                            <ArrowRight className="w-4 h-4 ml-1" />
                          </Link>
                        </div>
                      </motion.article>
                    ))}
                </div>
              </div>
            </div>
          </section>
        </main>

        <Footer />
        <WhatsAppFloat />
      </>
    );
  }

  return (
    <>
      <Helmet>
        <title>Blog - Handlix | Expert Home Service Tips & Guides</title>
        <meta name="description" content="Expert tips and guides for home maintenance, cleaning, plumbing, electrical work, grooming, and pet care. Learn from Handlix professionals in Aligarh." />
        <meta name="keywords" content="home maintenance tips, cleaning guide, plumbing tips, electrical safety, grooming tips, pet care, Aligarh services" />
      </Helmet>

      <Header />
      
      <main className="min-h-screen bg-background pt-20">
        {/* Hero */}
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
                Expert Tips & Guides for<br />Your Home
              </h1>
              <p className="text-xl text-white/90 max-w-3xl mx-auto">
                Learn from our professionals with comprehensive guides, tips, and insights for home maintenance, cleaning, repairs, and more.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Featured Post */}
        {blogPosts.filter(post => post.featured).map(post => (
          <section key={post.id} className="section-padding">
            <div className="container-custom">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-background-alt rounded-3xl overflow-hidden shadow-card max-w-6xl mx-auto"
              >
                <div className="grid lg:grid-cols-2 gap-0">
                  <div className="relative h-64 lg:h-full">
                    <img 
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-gradient-brand text-white text-xs font-bold px-3 py-1 rounded-full">
                        Featured
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <div className="text-brand-orange font-semibold mb-3">{post.category}</div>
                    <h2 className="text-3xl lg:text-4xl font-black text-heading mb-4 leading-tight">
                      {post.title}
                    </h2>
                    <p className="text-body-light text-lg mb-6 leading-relaxed">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center text-sm text-body-light mb-6">
                      <User className="w-4 h-4 mr-2" />
                      <span className="mr-4">{post.author}</span>
                      <Calendar className="w-4 h-4 mr-2" />
                      <span className="mr-4">{formatDate(post.date)}</span>
                      <Clock className="w-4 h-4 mr-2" />
                      <span>{post.readTime}</span>
                    </div>
                    
                    <Link
                      to={`/blog/${post.id}`}
                      className="inline-flex items-center text-brand-orange font-semibold hover:text-brand-pink transition-colors focus-ring rounded"
                    >
                      Read Full Article
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>
        ))}

        {/* Search and Filter */}
        <section className="section-padding bg-background-alt">
          <div className="container-custom">
            <SectionHeading
              title="Latest Articles"
              description="Stay updated with the latest tips, guides, and insights from our experts"
              gradientWords={["Latest"]}
              className="mb-12"
            />

            {/* Search Bar */}
            <div className="max-w-md mx-auto mb-8">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-body-light w-5 h-5" />
                <Input
                  type="text"
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 focus:border-brand-orange"
                />
              </div>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-3 mb-12 overflow-x-auto pb-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-full border transition-all duration-300 focus-ring whitespace-nowrap ${
                    activeCategory === category
                      ? 'bg-gradient-brand text-white border-transparent shadow-brand'
                      : 'bg-background text-body hover:bg-gradient-brand hover:text-white border-border'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Posts Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.filter(post => !post.featured).map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-background rounded-2xl overflow-hidden shadow-card hover:shadow-brand-lg transition-all duration-300 card-hover group"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-black/70 text-white text-xs font-medium px-2 py-1 rounded">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-heading mb-3 leading-tight hover:text-brand-orange transition-colors">
                      <Link to={`/blog/${post.id}`} className="focus-ring rounded">
                        {post.title}
                      </Link>
                    </h3>
                    
                    <p className="text-body-light mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between text-sm text-body-light mb-4">
                      <div className="flex items-center">
                        <User className="w-4 h-4 mr-1" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    
                    <div className="pt-4 border-t border-border">
                      <Link
                        to={`/blog/${post.id}`}
                        className="inline-flex items-center text-brand-orange font-medium hover:text-brand-pink transition-colors focus-ring rounded"
                      >
                        Read More
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </Link>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>

            {filteredPosts.length === 0 && (
              <div className="text-center py-12">
                <p className="text-body-light text-lg">No articles found matching your search.</p>
              </div>
            )}
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="section-padding">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-brand rounded-3xl p-12 text-white text-center relative overflow-hidden"
            >
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-5 left-5 w-24 h-24 bg-white rounded-full blur-2xl" />
                <div className="absolute bottom-5 right-5 w-32 h-32 bg-white rounded-full blur-3xl" />
              </div>
              
              <div className="relative z-10 space-y-6 max-w-2xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-black">
                  Get Expert Tips Delivered
                </h2>
                <p className="text-xl text-white/90">
                  Subscribe to our newsletter for weekly home maintenance tips, seasonal guides, and exclusive service offers.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-3 rounded-full text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
                  />
                  <button className="bg-white text-brand-orange font-semibold px-6 py-3 rounded-full hover:bg-white/90 transition-colors focus:outline-none focus:ring-2 focus:ring-white">
                    Subscribe
                  </button>
                </div>
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

export default Blog;