import { motion } from 'motion/react';
import { Sparkles, Activity, Flower2, HeartHandshake, Flame } from 'lucide-react';

const services = [
  {
    title: 'Full Body Massage',
    description: 'A comprehensive treatment designed to relieve tension and promote deep relaxation from head to toe.',
    icon: <Sparkles className="w-6 h-6" />,
  },
  {
    title: 'Deep Tissue Massage',
    description: 'Targets the deeper layers of muscle and connective tissue to relieve chronic pain and stiffness.',
    icon: <Activity className="w-6 h-6" />,
  },
  {
    title: 'Aromatherapy Massage',
    description: 'Combines gentle massage techniques with therapeutic essential oils to enhance physical and emotional health.',
    icon: <Flower2 className="w-6 h-6" />,
  },
  {
    title: 'Couples Massage',
    description: 'Share a relaxing and intimate spa experience with your partner in our luxurious private suites.',
    icon: <HeartHandshake className="w-6 h-6" />,
  },
  {
    title: 'Hot Stone Therapy',
    description: 'Smooth, heated stones are placed on key points of the body to melt away tension and ease muscle stiffness.',
    icon: <Flame className="w-6 h-6" />,
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 md:py-32 bg-offwhite">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-gold font-medium tracking-wide uppercase text-sm mb-4 block"
          >
            Our Treatments
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif text-4xl md:text-5xl font-semibold mb-6 text-emerald-900"
          >
            Curated Services for <br className="hidden md:block"/>
            <span className="italic font-light">Ultimate Relaxation</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg font-light text-emerald-800/70"
          >
            Choose from our selection of premium therapies, each designed to restore balance to your body and mind.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white p-10 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-beige hover:border-gold/30 hover:shadow-[0_8px_30px_rgba(197,160,89,0.1)] transition-all group flex flex-col h-full"
            >
              <div className="w-14 h-14 bg-beige rounded-full flex items-center justify-center text-emerald-900 group-hover:bg-gold group-hover:text-white transition-colors duration-300 mb-6">
                {service.icon}
              </div>
              <h3 className="font-serif text-2xl font-medium text-emerald-900 mb-4 group-hover:text-gold transition-colors">
                {service.title}
              </h3>
              <p className="text-emerald-800/70 font-light leading-relaxed flex-grow mb-8">
                {service.description}
              </p>
              
              <a 
                href="https://wa.me/260963343748" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm font-bold uppercase tracking-widest text-emerald-900 group-hover:text-gold transition-colors mt-auto"
              >
                <span className="border-b border-transparent group-hover:border-gold pb-1 transition-all">Book This</span>
                <span className="ml-2 transform group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </motion.div>
          ))}
          
          {/* Custom CTA Card within grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="bg-emerald-900 p-10 rounded-2xl shadow-xl flex flex-col justify-center items-center text-center relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-gold/10 rounded-bl-full"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-gold/10 rounded-tr-full"></div>
            
            <h3 className="font-serif text-2xl font-medium text-white mb-4 relative z-10">
              Not sure what to choose?
            </h3>
            <p className="text-white/80 font-light mb-8 relative z-10">
              Our expert therapists can recommend the perfect custom treatment upon arrival.
            </p>
            <a 
              href="#contact" 
              className="px-6 py-3 bg-gold text-emerald-900 font-semibold rounded-full hover:bg-white transition-colors relative z-10"
            >
              Contact Us
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
