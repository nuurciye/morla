import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Wind, Flame, Droplets } from 'lucide-react';

export default function Sanctuary() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full bg-canvas text-obsidian"
    >
      {/* Sanctuary Hero */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden bg-obsidian text-canvas">
        <div className="absolute inset-0 z-0 opacity-40">
          <img
            src="https://images.unsplash.com/photo-1622286342621-4bd786c2447c?auto=format&fit=crop&q=80&w=2940"
            alt="Barbershop interior"
            className="w-full h-full object-cover"
            style={{ filter: 'grayscale(50%) sepia(20%) hue-rotate(-10deg) brightness(0.8)' }}
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-obsidian/80 via-transparent to-obsidian"></div>
        </div>
        
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter uppercase mb-6 leading-tight">
              A Restorative Sanctuary<br />
              <span className="text-brass font-light italic">Away From City Noise.</span>
            </h1>
            <p className="text-lg md:text-xl text-canvas/70 font-light tracking-wide mb-12">
              Aged Cognac leather, brushed brass, and obsidian canvas.
            </p>
          </motion.div>
        </div>
      </section>

      {/* The Experience */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="order-2 lg:order-1 relative h-[700px] rounded-sm overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1593702275687-f8b402bf1fb5?auto=format&fit=crop&q=80&w=2940"
              alt="Barber chair"
              className="w-full h-full object-cover grayscale"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-cognac/10 mix-blend-multiply"></div>
          </div>
          
          <div className="order-1 lg:order-2">
            <h2 className="text-sm uppercase tracking-widest font-semibold text-cognac mb-8">The Sensory Signature</h2>
            <h3 className="text-4xl font-bold tracking-tighter uppercase mb-8 leading-tight">
              Quiet Luxury Over<br />Hyper-Masculinity.
            </h3>
            <p className="text-xl text-obsidian/80 font-light leading-relaxed mb-12">
              We reject the loud, chaotic environment of traditional barbershops. Morla is designed as a retreat—a place to decompress and recalibrate.
            </p>
            
            <div className="space-y-8">
              {[
                {
                  icon: <Wind className="w-6 h-6 text-brass" />,
                  title: 'Sandalwood',
                  desc: 'A grounding, woody base that anchors the space in calm.',
                },
                {
                  icon: <Droplets className="w-6 h-6 text-brass" />,
                  title: 'Bergamot',
                  desc: 'A crisp, citrus top note that invigorates the senses upon entry.',
                },
                {
                  icon: <Flame className="w-6 h-6 text-brass" />,
                  title: 'Black Pepper',
                  desc: 'A subtle, spicy warmth that lingers in the hot towels.',
                },
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-6">
                  <div className="w-12 h-12 rounded-full bg-obsidian flex items-center justify-center shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold uppercase tracking-widest mb-2">{item.title}</h4>
                    <p className="text-obsidian/70 font-light leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* The Patron & Artisan */}
      <section className="py-40 px-6 bg-obsidian text-canvas text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-sm uppercase tracking-widest font-semibold text-brass mb-8">The Philosophy</h2>
          <h3 className="text-4xl md:text-5xl font-bold tracking-tighter uppercase mb-12 leading-tight">
            The Knowledgeable Artisan<br />
            <span className="font-light italic">& The Discerning Patron.</span>
          </h3>
          <p className="text-xl text-canvas/70 font-light leading-relaxed mb-16">
            A haircut is not a transaction; it is a collaboration. We provide the expertise, the tools, and the environment. You bring the vision. Together, we craft a look that is undeniably yours.
          </p>
          <Link
            to="/reserve"
            className="inline-flex items-center gap-2 px-10 py-5 bg-brass text-obsidian text-sm uppercase tracking-widest font-semibold hover:bg-canvas hover:text-obsidian transition-all duration-300"
          >
            Experience Morla
          </Link>
        </div>
      </section>
    </motion.div>
  );
}
