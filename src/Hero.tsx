import React from 'react';

const Hero = () => {
  return (
    <section className="bg-[#0B0B0B] text-white flex flex-col items-center py-20 px-4 min-h-[60vh] justify-center text-center">
      {/* This pulls from your public folder automatically */}
      <img 
        src="/shield-logo.svg" 
        alt="Morla Shield" 
        className="w-48 h-auto mb-8 opacity-90 hover:opacity-100 transition-opacity" 
      />
      
      <h1 className="text-4xl md:text-6xl font-light tracking-[0.2em] uppercase">
        Precision Crafted.
      </h1>
      
      <p className="text-[#8B4513] mt-6 text-xl font-serif italic tracking-wide">
        The Ritual of Self-Respect
      </p>

      <button className="mt-10 px-8 py-3 border border-[#8B4513] text-[#8B4513] uppercase tracking-widest hover:bg-[#8B4513] hover:text-white transition-all">
        Reserve Your Time
      </button>
    </section>
  );
};

export default Hero;
