import React from 'react';

const services = [
  { name: "The Signature Fade", price: "$45", duration: "45 min", desc: "Precision blending with a hot towel finish." },
  { name: "Beard Architecture", price: "$35", duration: "30 min", desc: "Sculpting and alignment using straight razor detailing." },
  { name: "The Full Ritual", price: "$75", duration: "75 min", desc: "Our premier fade paired with a classic hot lather shave." },
];

const Services = () => {
  return (
    <section id="ritual" className="bg-[#0B0B0B] text-white py-24 px-8 border-t border-white/5">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-[#8B4513] text-xs uppercase tracking-[0.4em] mb-12 text-center">The Ritual Menu</h2>
        
        <div className="space-y-12">
          {services.map((service, index) => (
            <div key={index} className="group border-b border-white/10 pb-8 flex flex-col md:flex-row md:justify-between md:items-end">
              <div className="max-w-md">
                <h3 className="text-2xl font-light tracking-wide group-hover:text-[#8B4513] transition-colors">
                  {service.name}
                </h3>
                <p className="text-white/40 text-sm mt-2 font-serif italic">
                  {service.desc}
                </p>
              </div>
              <div className="mt-4 md:mt-0 text-right">
                <span className="text-xl font-light text-[#8B4513] block">{service.price}</span>
                <span className="text-[10px] uppercase tracking-widest text-white/30">{service.duration}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
