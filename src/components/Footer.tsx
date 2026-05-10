export function Footer() {
  return (
    <footer className="bg-emerald-900 border-t border-white/10 pt-20 pb-10 text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-2">
            <h3 className="font-serif text-3xl font-semibold mb-6">CHOLAS SPA</h3>
            <p className="text-white/60 font-light max-w-sm mb-8 leading-relaxed">
              Your premium destination for massage therapy and relaxation in Lusaka. Open 24 hours to serve you whenever you need peace.
            </p>
          </div>
          
          <div>
            <h4 className="font-serif text-xl mb-6 text-gold">Quick Links</h4>
            <ul className="space-y-4">
              <li><a href="#about" className="text-white/70 hover:text-white transition-colors font-light">About Us</a></li>
              <li><a href="#services" className="text-white/70 hover:text-white transition-colors font-light">Services</a></li>
              <li><a href="#gallery" className="text-white/70 hover:text-white transition-colors font-light">Gallery</a></li>
              <li><a href="#contact" className="text-white/70 hover:text-white transition-colors font-light">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-serif text-xl mb-6 text-gold">Contact</h4>
            <ul className="space-y-4 font-light text-white/70">
              <li>House Number 9, Mugoti</li>
              <li>Lusaka 10101, Zambia</li>
              <li className="pt-2">
                <a href="tel:+260963343748" className="hover:text-white transition-colors">096 3343748</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/40 font-light">
          <p>&copy; {new Date().getFullYear()} Cholas Spa. All rights reserved.</p>
          <p>Designed for tranquility.</p>
        </div>
      </div>
    </footer>
  );
}
