import { motion } from 'motion/react';
import { Star } from 'lucide-react';

const reviews = [
  {
    name: 'Sarah M.',
    review: 'Absolutely incredible experience. I walked in at 2 AM with massive shoulder tension, and the therapist worked miracles. The facility is spotless and very calming.',
  },
  {
    name: 'David K.',
    review: 'The best deep tissue massage I have had in Lusaka. Professional, clean, and the ambiance makes you feel like you are at a 5-star resort.',
  },
  {
    name: 'Grace C.',
    review: 'My husband and I came for a couples massage for our anniversary. The staff was so welcoming and the massage was heavenly. Highly recommended!',
  }
];

export function Testimonials() {
  return (
    <section className="py-24 bg-beige">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-gold font-medium tracking-wide uppercase text-sm mb-4 block"
        >
          Client Stories
        </motion.span>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-serif text-4xl md:text-5xl font-semibold mb-16 text-emerald-900"
        >
          What Our Clients Say
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((rev, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + (idx * 0.1) }}
              className="bg-white p-8 rounded-2xl shadow-sm text-left relative"
            >
              <div className="flex gap-1 text-gold mb-6">
                {[1,2,3,4,5].map(star => <Star key={star} size={18} fill="currentColor" />)}
              </div>
              <p className="font-light text-emerald-800/80 mb-6 italic leading-relaxed">
                "{rev.review}"
              </p>
              <span className="block font-medium text-emerald-900 font-serif">— {rev.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
