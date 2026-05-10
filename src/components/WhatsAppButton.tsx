import { MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';

export function WhatsAppButton() {
  return (
    <motion.a
      href="https://wa.me/260963343748"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 2, type: 'spring', stiffness: 200, damping: 20 }}
      className="fixed bottom-8 right-8 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:bg-[#1ebe57] hover:scale-110 transition-all cursor-pointer group flex items-center justify-center transform hover:-translate-y-2"
      aria-label="Chat on WhatsApp"
    >
      <div className="absolute -top-1 -right-1 w-4 h-4 bg-white rounded-full flex items-center justify-center">
        <div className="w-2.5 h-2.5 bg-[#25D366] rounded-full animate-ping absolute"></div>
        <div className="w-2.5 h-2.5 bg-[#25D366] rounded-full relative z-10"></div>
      </div>
      <MessageCircle size={32} className="group-hover:animate-pulse" />
      {/* Tooltip */}
      <span className="absolute right-full top-1/2 -translate-y-1/2 mr-4 px-4 py-2 bg-white text-emerald-900 border border-emerald-900/10 text-sm font-semibold rounded-lg shadow-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap flex items-center gap-2 pointer-events-none">
        <span className="w-2 h-2 rounded-full bg-[#25D366]"></span>
        Online Now - Book Fast!
      </span>
    </motion.a>
  );
}
