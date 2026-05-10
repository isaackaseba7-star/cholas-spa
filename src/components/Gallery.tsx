import { motion } from 'motion/react';

const galleryImages = [
  "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&q=80&w=800",
  "https://lh3.googleusercontent.com/p/AF1QipNKDVzZ9dy33lHKdR_V7-SXRmAW4BxefW2CEjAZ=s800",
  "https://lh3.googleusercontent.com/p/AF1QipNV89XSo0aiCQBEZSDnB8t_Tb3Rr9-ONUwEbvOI=s800",
  "https://lh3.googleusercontent.com/p/AF1QipPlfOrwJ_NKBCPw8iVe_JmtdAd_ffBMCX-eYDZv=s800"
];

export function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center mb-16">
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-gold font-medium tracking-wide uppercase text-sm mb-4 block"
        >
          Visual Tour
        </motion.span>
        <motion.h2 
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ delay: 0.1 }}
           className="font-serif text-4xl md:text-5xl font-semibold text-emerald-900"
        >
          The Cholas <span className="italic font-light">Gallery</span>
        </motion.h2>
      </div>

      <div className="max-w-[1600px] mx-auto px-4 md:px-8">
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {galleryImages.map((img, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className="break-inside-avoid relative group rounded-xl overflow-hidden"
            >
              <div className="absolute inset-0 bg-emerald-900/20 group-hover:bg-transparent transition-colors duration-500 z-10 pointer-events-none"></div>
              <img 
                src={img} 
                alt={`Premium Spa Experience ${idx + 1}`} 
                className="w-full h-auto rounded-xl group-hover:scale-105 transition-transform duration-700 ease-out"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
