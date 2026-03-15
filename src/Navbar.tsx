import React from 'react';

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center py-5 px-6 bg-[#0B0B0B] border-b border-white/5 sticky top-0 z-50 w-full">
      {/* Minimalist Logo on the left */}
      <div className="flex items-center">
        <img 
          src="/favicon.svg" 
          alt="Morla Logo" 
          className="w-7 h-auto mix-blend-screen brightness-125" 
        />
        <span className="ml-3 text-white tracking-[0.4em] uppercase text-[10px] font-light">Morla</span>
      </div>

      {/* Booking CTA */}
      <a href="#reserve" className="text-[#8B4513] border border-[#8B4513]/40 px-4 py-2 text-[10px] uppercase tracking-widest hover:bg-[#8B4513] hover:text-white transition-all duration-500">
        Book Now
      </a>
    </nav>
  );
};

export default Navbar;
