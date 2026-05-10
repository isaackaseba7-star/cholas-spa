import { motion } from 'motion/react';

export function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-beige overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Images */}
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8 }}
              className="relative z-10 w-4/5 rounded-2xl overflow-hidden shadow-2xl"
            >
              <img 
                src="https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?auto=format&fit=crop&q=80&w=1000" 
                alt="Spa details"
                className="w-full h-auto aspect-[4/5] object-cover"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="absolute -bottom-10 -right-4 w-2/3 rounded-2xl overflow-hidden shadow-xl border-4 border-beige z-20 hidden md:block"
            >
              <img 
                src="https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&q=80&w=800" 
                alt="Relaxing massage"
                className="w-full h-auto aspect-square object-cover"
              />
            </motion.div>

            {/* Decorative background circle */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] aspect-square rounded-full border border-gold/20 -z-0"></div>
          </div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="lg:pl-10"
          >
            <span className="text-gold font-medium tracking-wide uppercase text-sm mb-4 block">The Cholas Experience</span>
            <h2 className="font-serif text-4xl md:text-5xl font-semibold mb-8 text-emerald-900 leading-tight">
              A Sanctuary of <br className="hidden lg:block"/>
              <span className="italic font-light">Peace & Healing</span>
            </h2>
            <div className="prose prose-lg text-emerald-800/80 mb-10">
              <p className="font-light leading-relaxed mb-6">
                Located in the heart of Lusaka on Mugoti road, Cholas Spa is a premium destination designed to help you escape the stresses of daily life. Our mission is simple: to provide an unparalleled relaxation experience focused on your total well-being.
              </p>
              <p className="font-light leading-relaxed">
                With our team of highly trained therapists and our commitment to absolute professionalism, we ensure every treatment is tailored to your body's unique needs. Whether you seek deep muscle relief or a gentle, calming escape, we are here for you—<strong className="font-medium text-emerald-900">open 24 hours a day, 7 days a week.</strong>
              </p>
            </div>

            <div className="flex items-center gap-6 pt-6 border-t border-emerald-900/10">
              <div className="text-center">
                <span className="block font-serif text-3xl text-gold mb-1">24/7</span>
                <span className="text-xs uppercase tracking-wider font-semibold text-emerald-900/60">Availability</span>
              </div>
              <div className="w-[1px] h-12 bg-emerald-900/10"></div>
              <div className="text-center">
                <span className="block font-serif text-3xl text-gold mb-1">100%</span>
                <span className="text-xs uppercase tracking-wider font-semibold text-emerald-900/60">Professional</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
