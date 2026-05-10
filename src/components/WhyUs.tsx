import { motion } from 'motion/react';
import { Clock, ShieldCheck, Sparkles, Diamond, Heart } from 'lucide-react';

const features = [
  {
    title: 'Open 24/7 Convenience',
    description: 'Relaxation on your schedule. We are always open when you need us most.',
    icon: <Clock size={24} />,
  },
  {
    title: 'Experienced Therapists',
    description: 'Our team consists of highly trained, certified massage professionals.',
    icon: <ShieldCheck size={24} />,
  },
  {
    title: 'Pristine Environment',
    description: 'We maintain the highest standards of cleanliness and hygiene.',
    icon: <Sparkles size={24} />,
  },
  {
    title: 'Affordable Luxury',
    description: 'Premium spa experiences accessible without the premium price tag.',
    icon: <Diamond size={24} />,
  },
  {
    title: 'Private & Comfortable',
    description: 'Dedicated private rooms designed to maximize your comfort and peace.',
    icon: <Heart size={24} />,
  },
];

const galleryImages = [
  "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1608248593842-88baf9d15024?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1554057009-ceeee634fd65?auto=format&fit=crop&q=80&w=800"
];

export function WhyUs() {
  return (
    <section className="py-24 md:py-32 bg-emerald-900 text-white relative overflow-hidden">
      {/* Decorative floral pattern opacity */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-5 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #C5A059 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Text Side */}
          <div className="lg:col-span-5">
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-gold font-medium tracking-wide uppercase text-sm mb-4 block"
            >
              The Cholas Difference
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-serif text-4xl md:text-5xl font-semibold mb-8 leading-tight"
            >
              Why Choose <br/>
              <span className="italic font-light text-gold-hover">Our Spa</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-white/80 font-light text-lg mb-12"
            >
              We believe that true relaxation requires an environment built on trust, professionalism, and unwavering quality.
            </motion.p>
            
            <div className="space-y-8">
              {features.map((feature, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + (idx * 0.1) }}
                  className="flex gap-4"
                >
                  <div className="mt-1 text-gold flex-shrink-0">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="font-serif text-xl font-medium mb-1">{feature.title}</h4>
                    <p className="text-white/60 font-light">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Gallery Side */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-2 gap-4 h-full">
              {galleryImages.map((img, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + (idx * 0.1), duration: 0.6 }}
                  className={`rounded-2xl overflow-hidden shadow-2xl relative group ${idx === 0 || idx === 3 ? 'h-48 md:h-64' : 'h-64 md:h-80'} ${idx === 1 ? 'mt-12 md:mt-16' : ''}`}
                >
                  <div className="absolute inset-0 bg-emerald-900/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                  <img src={img} alt={`Spa Image ${idx+1}`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out" />
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
