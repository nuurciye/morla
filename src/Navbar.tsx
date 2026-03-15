import React from 'react';

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center py-6 px-8 bg-[#0B0B0B] border-b border-white/5 sticky top-0 z-50">
      {/* Minimalist Logo on the left */}
      <div className="flex items-center">
        <img src="/favicon.svg" alt="Morla Logo" className="w-8 h-8" />
        <span className="ml-3 text-white tracking-[0.3em] uppercase text-sm font-light">Morla</span>
      </div>

      {/* Navigation Links */}
      <div className="hidden md:flex space-x-8">
        <a href="#ritual" className="text-white/70 hover:text-[#8B4513] transition-colors text-xs uppercase tracking-widest">The Ritual</a>
        <a href="#sanctuary" className="text-white/70 hover:text-[#8B4513] transition-colors text-xs uppercase tracking-widest">The Sanctuary</a>
      </div>

      {/* Booking CTA */}
      <a href="#reserve" className="text-[#8B4513] border border-[#8B4513]/30 px-4 py-2 text-[10px] uppercase tracking-widest hover:bg-[#8B4513] hover:text-white transition-all">
        Book Now
      </a>
    </nav>
  );
};

export default Navbar;
