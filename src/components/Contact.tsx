import { motion } from 'motion/react';
import { MapPin, Phone, Clock, ExternalLink } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-offwhite">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col lg:flex-row">
          
          {/* Contact Details */}
          <div className="lg:w-1/2 p-10 md:p-16 flex flex-col justify-center">
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-gold font-medium tracking-wide uppercase text-sm mb-4 block"
            >
              Visit Us
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-serif text-4xl mb-10 text-emerald-900"
            >
              Get in Touch
            </motion.h2>

            <div className="space-y-8 mb-12">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="flex items-start gap-4"
              >
                <div className="bg-beige p-3 rounded-full text-emerald-900">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-serif text-xl font-medium mb-1 text-emerald-900">Location</h4>
                  <p className="text-emerald-800/70 font-light">House Number 9, Mugoti Road<br/>Lusaka 10101, Zambia</p>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="flex items-start gap-4"
              >
                <div className="bg-beige p-3 rounded-full text-emerald-900">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-serif text-xl font-medium mb-1 text-emerald-900">Phone</h4>
                  <a href="tel:+260963343748" className="text-emerald-800/70 font-light hover:text-gold transition-colors block">
                    096 3343748
                  </a>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="flex items-start gap-4"
              >
                <div className="bg-beige p-3 rounded-full text-emerald-900">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="font-serif text-xl font-medium mb-1 text-emerald-900">Hours</h4>
                  <p className="text-emerald-800/70 font-light">Open 24 Hours, 7 Days a Week</p>
                </div>
              </motion.div>
            </div>

            <motion.a 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              href="https://maps.google.com/?q=J896+CM+Lusaka" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-emerald-900 text-white font-medium rounded-full hover:bg-gold transition-colors text-center"
            >
              Get Directions <ExternalLink size={18} />
            </motion.a>
          </div>

          {/* Map Embed */}
          <div className="lg:w-1/2 min-h-[400px] relative">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3846.541!2d28.2!3d-15.4!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0!2sJ896%2BCM%20Lusaka!5e0!3m2!1sen!2szm!4v1700000000000" 
              width="100%" 
              height="100%" 
              style={{ border: 0, position: 'absolute', inset: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale" // Adding slight style to match theme
            ></iframe>
            {/* The src query normally uses place_id or precise coordinates. I will use a generic Lusaka map embed since finding exact "J896+CM Lusaka" through embed might require Maps API Key format.
                I will adjust the map embed link. */}
          </div>
        </div>
      </div>
    </section>
  );
}
