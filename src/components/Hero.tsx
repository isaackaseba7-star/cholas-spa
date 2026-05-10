import { motion } from 'motion/react';
import { Calendar, PhoneCall } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80&w=2000"
          alt="Luxury spa treatment room"
          className="w-full h-full object-cover scale-105 transform transition-transform duration-[20s] ease-out hover:scale-110"
        />
        <div className="absolute inset-0 bg-emerald-900/40 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/80 via-transparent to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 text-center text-white mt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full border border-gold/50 bg-emerald-900/40 backdrop-blur-md text-sm md:text-base font-medium tracking-[0.2em] uppercase mb-6 text-gold">
            Open 24 Hours • Appointments Available
          </span>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-semibold leading-tight mb-6 text-shadow-sm">
            Relax. Rejuvenate. <br className="hidden md:block"/>
            <span className="italic font-light">Restore.</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl font-light text-offwhite/90 mb-10 leading-relaxed">
            Experience premium massage therapy at Cholas Spa in Lusaka. We provide a luxury sanctuary of tranquility around the clock. Bookings fill up fast.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a
              href="#contact"
              className="relative group flex items-center justify-center gap-3 w-full sm:w-auto px-8 py-4 bg-gold text-emerald-900 font-bold uppercase tracking-wide rounded-full border-2 border-gold hover:bg-white hover:border-white transition-all transform hover:-translate-y-1 shadow-[0_0_20px_rgba(197,160,89,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] overflow-hidden"
            >
              <div className="absolute inset-0 bg-white/20 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></div>
              <Calendar size={20} className="relative z-10 group-hover:text-emerald-900 transition-colors" />
              <span className="relative z-10">Book Appointment</span>
            </a>
            <a
              href="tel:+260963343748"
              className="group flex items-center justify-center gap-3 w-full sm:w-auto px-8 py-4 bg-white/10 backdrop-blur-md border border-white/30 text-white font-medium rounded-full hover:bg-white/20 transition-all transform hover:-translate-y-1 shadow-lg"
            >
              <PhoneCall size={20} />
              <span>Call 096 3343748</span>
            </a>
          </div>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 hidden md:flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <span className="text-white/60 uppercase tracking-widest text-xs">Scroll</span>
        <div className="w-[1px] h-12 bg-white/30 relative">
          <motion.div 
            className="absolute top-0 left-0 w-full bg-gold h-4"
            animate={{ top: ['0%', '100%'], opacity: [1, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>
      </motion.div>
    </section>
  );
}
