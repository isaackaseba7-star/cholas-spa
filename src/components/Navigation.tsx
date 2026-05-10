import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      {/* Urgency Banner */}
      <div className="bg-emerald-900 text-gold text-xs tracking-widest uppercase font-medium py-2 px-4 text-center border-b border-gold/20 flex justify-center items-center gap-2 relative z-50">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-gold"></span>
        </span>
        Limited slots available today — Open 24/7
      </div>

      <header
        className={`fixed left-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? 'top-0 glass-nav py-4 shadow-md' : 'top-8 bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex justify-between items-center">
          {/* Logo */}
          <a href="#" className="flex items-center space-x-2 z-50">
            <span className={`font-serif text-2xl tracking-wider font-semibold transition-colors ${isScrolled || isMobileMenuOpen ? 'text-emerald-900' : 'text-white'}`}>
              CHOLAS SPA
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8 lg:space-x-10">
            <ul className="flex space-x-8">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className={`text-sm tracking-widest uppercase font-medium transition-colors hover:text-gold ${
                      isScrolled ? 'text-emerald-900' : 'text-white'
                    }`}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            
            <div className="flex items-center gap-4">
              <a
                href="tel:+260963343748"
                className={`flex items-center gap-2 px-4 lg:px-6 py-2.5 border rounded-full text-sm font-medium transition-all hover:bg-gold hover:border-gold hover:text-white ${
                  isScrolled 
                    ? 'border-emerald-900/30 text-emerald-900'
                    : 'border-white/50 text-white'
                }`}
              >
                <Phone size={16} />
                <span className="hidden lg:inline">096 3343748</span>
              </a>
              <a
                href="#contact"
                className="bg-gold text-emerald-900 px-6 py-2.5 rounded-full text-sm font-bold tracking-wide uppercase hover:bg-white hover:text-emerald-900 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                Book Now
              </a>
            </div>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className={`md:hidden z-50 transition-colors ${
              isScrolled || isMobileMenuOpen ? 'text-emerald-900' : 'text-white'
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-0 left-0 w-full h-screen glass-nav bg-beige/95 backdrop-blur-xl flex flex-col items-center justify-center -z-10"
            >
              <ul className="flex flex-col space-y-8 items-center text-center">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-2xl font-serif text-emerald-900 hover:text-gold transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
                <li className="pt-8 flex flex-col gap-4 w-full px-8">
                   <a
                    href="tel:+260963343748"
                    className="flex items-center justify-center gap-3 w-full px-8 py-4 border border-emerald-900 text-emerald-900 rounded-full font-medium active:bg-emerald-900/10"
                  >
                    <Phone size={20} />
                    <span>Call 096 3343748</span>
                  </a>
                  <a
                    href="#contact"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center justify-center gap-3 w-full px-8 py-4 bg-gold text-emerald-900 rounded-full font-bold uppercase tracking-wide shadow-lg"
                  >
                    Book Appointment
                  </a>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
