import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { MapPin, Mail, Phone, Instagram, Twitter, Linkedin, Send } from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { WhatsAppFloat } from '@/components/WhatsAppFloat';
import { SectionHeading } from '@/components/SectionHeading';
import { GradientButton } from '@/components/GradientButton';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const serviceOptions = [
    'Home Cleaning',
    'Plumbing Services',
    'Electrical Work',
    'Appliance Repair',
    'Personal Grooming',
    'Pet Grooming',
    'General Inquiry'
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.phone || !formData.message) {
      alert('Please fill in all required fields');
      return;
    }

    setIsSubmitting(true);

    // Create clean, formatted WhatsApp message
    const message = `Hi Handlix! I'd like to get in touch.

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Service: ${formData.service || 'General Inquiry'}
Message: ${formData.message}`;

    // Encode the message properly for WhatsApp
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/919528522358?text=${encodedMessage}`;
    
    // Open WhatsApp
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    
    // Reset form after a short delay
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
      });
      setIsSubmitting(false);
    }, 1000);
  };

  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Address',
      details: 'Aligarh, Uttar Pradesh, India'
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email',
      details: 'support@handlix.in',
      link: 'mailto:support@handlix.in'
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Phone',
      details: '+91 95285 22358',
      link: 'tel:+919528522358'
    }
  ];

  const socialLinks = [
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
  ];

  return (
    <>
      <Helmet>
        <title>Contact Us - Handlix | Get in Touch for Home Services</title>
        <meta name="description" content="Contact Handlix for home services in Aligarh. Get instant quotes via WhatsApp or fill our contact form. Available 24/7 for emergency services." />
        <meta name="keywords" content="contact Handlix, home services Aligarh, WhatsApp booking, emergency services" />
      </Helmet>

      <Header />
      
      <main className="min-h-screen bg-background pt-20">
        {/* Hero Section */}
        <section className="section-padding">
          <div className="container-custom">
            <SectionHeading
              title="Contact Us"
              description="We'd love to hear from you. Fill the form below or reach out via WhatsApp."
              gradientWords={["Contact"]}
              className="mb-16"
            />

            <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-background-alt rounded-3xl p-8 shadow-card border border-border"
              >
                <h2 className="text-2xl font-bold text-heading mb-6">Send us a Message</h2>
                <p className="text-body-light mb-8">Fill out the form below and we'll get back to you as soon as possible</p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-heading mb-2">
                        Full Name *
                      </label>
                      <Input
                        type="text"
                        placeholder="Your full name"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        required
                        className="focus:border-brand-orange"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-heading mb-2">
                        Phone Number *
                      </label>
                      <Input
                        type="tel"
                        placeholder="+91 XXXXX XXXXX"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        required
                        className="focus:border-brand-orange"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-heading mb-2">
                      Email Address
                    </label>
                    <Input
                      type="email"
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      required
                      className="focus:border-brand-orange"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-heading mb-2">
                      Service Required
                    </label>
                    <Select value={formData.service} onValueChange={(value) => handleInputChange('service', value)}>
                      <SelectTrigger className="focus:border-brand-orange">
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        {serviceOptions.map((service) => (
                          <SelectItem key={service} value={service}>
                            {service}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-heading mb-2">
                      Message *
                    </label>
                    <Textarea
                      placeholder="Tell us about your requirements..."
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      required
                      rows={4}
                      className="focus:border-brand-orange"
                    />
                  </div>

                  <GradientButton
                    type="submit"
                    size="lg"
                    className="w-full"
                    loading={isSubmitting}
                    icon={<Send className="w-5 h-5" />}
                  >
                    Send Message via WhatsApp
                  </GradientButton>

                  <p className="text-sm text-body-light text-center">
                    * Required fields. We'll respond within 2 hours during business hours.
                  </p>
                </form>
              </motion.div>

              {/* Contact Information */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="space-y-8"
              >
                <div>
                  <h2 className="text-2xl font-bold text-heading mb-6">Get in Touch</h2>
                  <p className="text-body-light text-lg mb-8">
                    Ready to book a service? Contact us directly or use our instant WhatsApp booking for immediate assistance.
                  </p>
                </div>

                {/* Contact Details */}
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 + index * 0.1 }}
                      className="flex items-start space-x-4 p-4 bg-background-alt rounded-2xl border border-border hover:border-brand-orange transition-colors"
                    >
                      <div className="w-12 h-12 bg-gradient-brand rounded-xl flex items-center justify-center text-white flex-shrink-0">
                        {info.icon}
                      </div>
                      <div>
                        <h3 className="font-semibold text-heading mb-1">{info.title}</h3>
                        {info.link ? (
                          <a 
                            href={info.link}
                            className="text-body-light hover:text-brand-orange transition-colors focus-ring rounded"
                          >
                            {info.details}
                          </a>
                        ) : (
                          <p className="text-body-light">{info.details}</p>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Social Links */}
                <div>
                  <h3 className="font-semibold text-heading mb-4">Follow Us</h3>
                  <div className="flex space-x-4">
                    {socialLinks.map((social, index) => (
                      <motion.a
                        key={social.label}
                        href={social.label === 'Instagram' ? 'https://www.instagram.com/handlix.in?igsh=ZHhkZXMwanRwanFo' : 
                              social.label === 'Twitter' ? 'https://x.com/HandlixHQ?t=a6VBFF5yy8c7xhHBoyOGXw&s=09' :
                              social.label === 'LinkedIn' ? 'https://www.linkedin.com/in/maaz-bin-jabal?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' : 
                              social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 bg-background-alt rounded-xl flex items-center justify-center text-body hover:bg-gradient-brand hover:text-white transition-all duration-300 border border-border hover:border-transparent focus-ring"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8 + index * 0.1 }}
                        aria-label={social.label}
                      >
                        <social.icon className="w-5 h-5" />
                      </motion.a>
                    ))}
                  </div>
                </div>

                {/* Quick WhatsApp CTA */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 }}
                  className="bg-gradient-brand rounded-2xl p-6 text-white"
                >
                  <h3 className="text-xl font-bold mb-3">Need Immediate Help?</h3>
                  <p className="text-white/90 mb-4">
                    For urgent services or quick quotes, message us directly on WhatsApp.
                  </p>
                  <GradientButton
                    variant="outline"
                    className="bg-white/10 text-white border-white/30 hover:bg-white/20"
                    onClick={() => {
                      const message = "Hi Handlix! I need immediate assistance with a home service. Please help me.";
                      const encodedMessage = encodeURIComponent(message);
                      window.open(`https://wa.me/919528522358?text=${encodedMessage}`, '_blank', 'noopener,noreferrer');
                    }}
                  >
                    Chat on WhatsApp
                  </GradientButton>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="section-padding bg-background-alt">
          <div className="container-custom">
            <SectionHeading
              title="Frequently Asked Questions"
              gradientWords={["Questions"]}
              className="mb-12"
            />

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {[
                {
                  q: "How quickly can you respond to service requests?",
                  a: "We typically respond within 30 minutes during business hours. For emergency services, we aim to reach you within 1-2 hours."
                },
                {
                  q: "Do you provide services outside Aligarh?",
                  a: "Currently, we focus on providing quality services within Aligarh city. Contact us to check if we can serve your specific location."
                },
                {
                  q: "What payment methods do you accept?",
                  a: "We accept cash, UPI, bank transfers, and all major digital payment methods for your convenience."
                },
                {
                  q: "Are your service providers background verified?",
                  a: "Yes, all our professionals are thoroughly background-verified, trained, and insured for your safety and peace of mind."
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

export default Contact;