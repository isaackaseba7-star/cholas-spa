import { motion } from 'motion/react';
import { MapPin, Phone, Clock, ExternalLink } from 'lucide-react';
import { useState } from 'react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    date: '',
    time: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate booking action
    alert('Thank you for your booking request! We will confirm with you shortly.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      date: '',
      time: '',
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-24 bg-offwhite relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        <div className="text-center mb-16">
           <motion.span 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-gold font-medium tracking-wide uppercase text-sm mb-4 block"
            >
              Reservations
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-serif text-4xl md:text-5xl font-semibold mb-6 text-emerald-900"
            >
              Book Your <span className="italic font-light">Experience</span>
            </motion.h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          
          {/* Contact Details & Map */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-5/12 flex flex-col gap-8"
          >
            <div className="bg-white rounded-3xl p-8 md:p-10 shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-beige/50">
              <h3 className="font-serif text-2xl font-medium mb-8 text-emerald-900">Get in Touch</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-beige p-3 rounded-full text-emerald-900 shrink-0">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1 text-emerald-900">Location</h4>
                    <p className="text-emerald-800/70 font-light text-sm leading-relaxed">House Number 9, Mugoti Road<br/>Lusaka 10101, Zambia</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-beige p-3 rounded-full text-emerald-900 shrink-0">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1 text-emerald-900">Phone</h4>
                    <a href="tel:+260963343748" className="text-emerald-800/70 font-light text-sm hover:text-gold transition-colors block">
                      096 3343748
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-beige p-3 rounded-full text-emerald-900 shrink-0">
                    <Clock size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1 text-emerald-900">Hours</h4>
                    <p className="text-emerald-800/70 font-light text-sm">Open 24 Hours<br/>7 Days a Week</p>
                  </div>
                </div>
              </div>

              <a 
                href="https://maps.google.com/?q=J896+CM+Lusaka" 
                target="_blank" 
                rel="noopener noreferrer"
                className="mt-10 flex items-center justify-center gap-2 w-full py-4 border border-emerald-900/20 text-emerald-900 font-medium rounded-full hover:bg-emerald-900 hover:text-white hover:border-emerald-900 transition-colors"
              >
                Get Directions <ExternalLink size={16} />
              </a>
            </div>
            
            <div className="rounded-3xl overflow-hidden shadow-md h-64 border border-beige/50 bg-white">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3846.541!2d28.2!3d-15.4!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0!2sJ896%2BCM%20Lusaka!5e0!3m2!1sen!2szm!4v1700000000000" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale opacity-90 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
              ></iframe>
            </div>
          </motion.div>

          {/* Booking Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-7/12"
          >
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-beige/50 h-full flex flex-col">
              <h3 className="font-serif text-2xl font-medium mb-8 text-emerald-900">Request an Appointment</h3>
              <form onSubmit={handleSubmit} className="flex flex-col flex-grow">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-emerald-900 mb-2">Full Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name" 
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3.5 bg-offwhite border border-emerald-900/10 rounded-xl focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-all font-light text-emerald-900 placeholder-emerald-900/30"
                      placeholder="Jane Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-emerald-900 mb-2">Email Address</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email" 
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3.5 bg-offwhite border border-emerald-900/10 rounded-xl focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-all font-light text-emerald-900 placeholder-emerald-900/30"
                      placeholder="jane@example.com"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-emerald-900 mb-2">Phone Number</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      name="phone" 
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3.5 bg-offwhite border border-emerald-900/10 rounded-xl focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-all font-light text-emerald-900 placeholder-emerald-900/30"
                      placeholder="096 XXXXXXX"
                    />
                  </div>
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-emerald-900 mb-2">Desired Service</label>
                    <div className="relative">
                      <select 
                        id="service" 
                        name="service" 
                        required
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-4 py-3.5 bg-offwhite border border-emerald-900/10 rounded-xl focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-all font-light appearance-none text-emerald-900"
                      >
                        <option value="" disabled>Select a treatment...</option>
                        <option value="Full Body Massage">Full Body Massage</option>
                        <option value="Deep Tissue Massage">Deep Tissue Massage</option>
                        <option value="Aromatherapy Massage">Aromatherapy Massage</option>
                        <option value="Couples Massage">Couples Massage</option>
                        <option value="Hot Stone Therapy">Hot Stone Therapy</option>
                        <option value="Custom Treatment">Not sure / Recommend me</option>
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-emerald-900/50">
                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                  <div>
                    <label htmlFor="date" className="block text-sm font-medium text-emerald-900 mb-2">Preferred Date</label>
                    <input 
                      type="date" 
                      id="date" 
                      name="date" 
                      required
                      value={formData.date}
                      onChange={handleChange}
                      className="w-full px-4 py-3.5 bg-offwhite border border-emerald-900/10 rounded-xl focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-all font-light text-emerald-900/80"
                    />
                  </div>
                  <div>
                    <label htmlFor="time" className="block text-sm font-medium text-emerald-900 mb-2">Preferred Time</label>
                    <input 
                      type="time" 
                      id="time" 
                      name="time" 
                      required
                      value={formData.time}
                      onChange={handleChange}
                      className="w-full px-4 py-3.5 bg-offwhite border border-emerald-900/10 rounded-xl focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-all font-light text-emerald-900/80"
                    />
                    <p className="text-xs text-emerald-900/50 mt-2">We are open 24 hours</p>
                  </div>
                </div>

                <button 
                  type="submit" 
                  className="mt-auto group relative w-full py-4 bg-emerald-900 text-gold font-bold uppercase tracking-widest rounded-xl overflow-hidden hover:bg-emerald-800 transition-colors shadow-lg hover:shadow-xl"
                >
                  <div className="absolute inset-0 bg-white/10 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></div>
                  <span className="relative z-10">Book Appointment</span>
                </button>
                <p className="text-center text-xs text-emerald-900/50 mt-4 font-light">
                  A representative will contact you shortly to confirm your slot.
                </p>
              </form>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
