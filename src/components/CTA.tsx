import { motion } from 'motion/react';
import { Calendar } from 'lucide-react';

export function CTA() {
  return (
    <section className="relative py-32 overflow-hidden bg-emerald-900 border-t border-white/5">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=80&w=2000"
          alt="Spa background"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-emerald-900/80 mix-blend-multiply"></div>
      </div>
      
      <div className="max-w-4xl mx-auto px-6 lg:px-12 relative z-10 text-center">
        <motion.span 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-block px-4 py-1.5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-gold font-bold tracking-widest uppercase text-xs mb-8"
        >
          Limited Appointments Available
        </motion.span>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-serif text-5xl md:text-6xl font-semibold mb-8 text-white leading-tight"
        >
          Don't Wait. <br/>
          <span className="italic font-light text-gold">Claim Your Peace Today.</span>
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-white/80 font-light text-xl mb-12 max-w-2xl mx-auto leading-relaxed"
        >
          Whether it is 2 PM or 2 AM, our sanctuary is open. <strong className="text-white font-medium">Slots fill up incredibly fast</strong>, so secure your luxury treatment now before we are fully booked.
        </motion.p>
        
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ delay: 0.2 }}
           className="flex flex-col sm:flex-row justify-center items-center gap-6"
        >
          <a
            href="tel:+260963343748"
            className="group relative inline-flex items-center justify-center gap-3 px-10 py-5 bg-gold text-emerald-900 font-bold uppercase tracking-wide rounded-full overflow-hidden hover:bg-white transition-all transform hover:-translate-y-1 shadow-[0_0_20px_rgba(197,160,89,0.4)] text-lg w-full sm:w-auto"
          >
            <div className="absolute inset-0 bg-white/20 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></div>
            <Calendar size={24} className="relative z-10 group-hover:text-emerald-900 transition-colors" />
            <span className="relative z-10">Call to Book Now</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
