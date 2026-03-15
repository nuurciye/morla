import React from 'react';

const Reserve = () => {
  return (
    <footer id="reserve" className="bg-[#0B0B0B] text-white pt-24 pb-12 px-8 border-t border-white/5">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-light mb-8 tracking-wide">
          Your time is a luxury. <br />
          <span className="text-[#8B4513] italic font-serif">Spend it where details matter.</span>
        </h2>

        <button className="bg-[#8B4513] text-white px-10 py-4 uppercase tracking-[0.3em] text-[10px] hover:bg-white hover:text-[#0B0B0B] transition-all duration-700 mb-20">
          Confirm Reservation
        </button>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pt-12 border-t border-white/5 text-left opacity-80">
          <div>
            <span className="text-[#8B4513] text-[10px] uppercase tracking-widest block mb-4 font-bold">Location</span>
            <p className="text-xs font-light">Mogadishu, Somalia<br/>Central District</p>
          </div>
          <div>
            <span className="text-[#8B4513] text-[10px] uppercase tracking-widest block mb-4 font-bold">Hours</span>
            <p className="text-xs font-light">Sat — Thu: 9am - 9pm<br/>Fri: Closed</p>
          </div>
          <div>
            <span className="text-[#8B4513] text-[10px] uppercase tracking-widest block mb-4 font-bold">Inquiries</span>
            <p className="text-xs font-light">+252 61 5030234<br/>Haqabtire.sl@gmail.com</p>
          </div>
        </div>

        <div className="mt-20 flex justify-center">
          <img src="/favicon.svg" alt="Morla" className="w-8 h-auto opacity-20 mix-blend-screen" />
        </div>
      </div>
    </footer>
  );
};

export default Reserve;
