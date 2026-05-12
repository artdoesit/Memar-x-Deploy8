import { motion, useScroll, useTransform, useSpring } from 'motion/react';
import { useRef, useEffect, useState } from 'react';
import { ChevronDown, ArrowRight } from 'lucide-react';
import Lenis from 'lenis';

function Header() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
      className="absolute top-0 left-0 w-full p-6 md:p-8 flex justify-between items-center z-50 mix-blend-difference"
    >
      <div className="font-serif text-xl md:text-2xl tracking-widest text-[#f5f2ed]">AETERNA</div>
      <nav className="hidden md:flex gap-8 text-xs tracking-[0.2em] uppercase text-[#f5f2ed]/70">
        <a href="#vision" className="hover:text-white transition-colors p-2">Vision</a>
        <a href="#structure" className="hover:text-white transition-colors p-2">Structure</a>
        <a href="#materials" className="hover:text-white transition-colors p-2">Materials</a>
      </nav>
      <button className="text-xs tracking-[0.1em] uppercase border border-[#f5f2ed]/30 rounded-full px-6 py-3 min-h-[44px] hover:bg-[#f5f2ed] hover:text-black transition-all flex items-center justify-center">
        Enquire
      </button>
    </motion.header>
  );
}

function Hero() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 200]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);

  return (
    <div className="relative h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background Video Component */}
      <div className="absolute inset-0 z-0 overflow-hidden bg-zinc-950">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
        {/* Gradient overlays for seamless blending with the site */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-[#050505]/30" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#050505_100%)] opacity-40" />
      </div>

      <motion.div style={{ y: y1, opacity }} className="text-center z-10 px-4">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-xs tracking-[0.3em] uppercase text-[#f5f2ed]/50 mb-6"
        >
          Precision meets Eternity
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="font-serif text-5xl sm:text-7xl md:text-9xl font-light tracking-tighter leading-none mb-6"
        >
          KINETIC<br /><span className="italic text-[#f5f2ed]/80">Form</span>
        </motion.h1>
      </motion.div>


    </div>
  );
}

// Concept 1: The Kinetic Architecture - Assembly
function KineticAssembly() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Smooth out the scroll progress
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 50,
    damping: 15,
    restDelta: 0.001
  });

  // Calculate positions for architectural pieces (Slabs, Beams)
  // They start disjointed and slide smoothly into a unified structure

  // Left Base Slab
  const x1 = useTransform(smoothProgress, [0.2, 0.5], ["-50vw", "0vw"]);
  const opacity1 = useTransform(smoothProgress, [0.1, 0.4], [0, 1]);

  // Right Pillar
  const y2 = useTransform(smoothProgress, [0.3, 0.6], ["50vh", "0vh"]);
  const opacity2 = useTransform(smoothProgress, [0.2, 0.5], [0, 1]);

  // Top Cantilever Slab (Marble)
  const x3 = useTransform(smoothProgress, [0.4, 0.7], ["50vw", "0vw"]);
  const opacity3 = useTransform(smoothProgress, [0.3, 0.6], [0, 1]);

  // Center Metal Beam (Slides from back)
  const scale4 = useTransform(smoothProgress, [0.5, 0.8], [0.5, 1]);
  const opacity4 = useTransform(smoothProgress, [0.4, 0.7], [0, 1]);

  // Subtle floating background fragments
  const bgY1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const bgY2 = useTransform(scrollYProgress, [0, 1], [0, 300]);

  return (
    <div ref={containerRef} id="structure" className="relative h-[200vh] bg-[#050505] py-20">
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">

        {/* Floating background fragments */}
        <motion.div style={{ y: bgY1 }} className="absolute top-[20%] left-[10%] w-32 h-32 border border-[#f5f2ed]/5 rotate-45 pointer-events-none" />
        <motion.div style={{ y: bgY2 }} className="absolute bottom-[20%] right-[10%] w-64 h-64 border border-[#f5f2ed]/5 rotate-[30deg] pointer-events-none" />

        <div className="relative w-full max-w-5xl aspect-square md:aspect-video mx-4">

          {/* Base structure grid for context */}
          <div className="absolute inset-0 grid grid-cols-6 grid-rows-3 gap-px opacity-[0.03]">
            {Array.from({ length: 18 }).map((_, i) => (
              <div key={i} className="border border-[#f5f2ed]" />
            ))}
          </div>

          {/* Assembly Pieces */}

          {/* Piece 4: The Center Bronze Structural Core */}
          <motion.div
            style={{ scale: scale4, opacity: opacity4 }}
            className="absolute top-1/4 left-1/3 w-1/3 h-2/4 bg-amber-900/20 border border-amber-800/40 backdrop-blur-xl z-20 flex items-center justify-center shadow-2xl"
          >
            <span className="[writing-mode:vertical-rl] text-[8px] uppercase tracking-[0.3em] font-mono opacity-50 rotate-180">Core Module A-1</span>
          </motion.div>

          {/* Piece 2: The Right Dark Stone Pillar */}
          <motion.div
            style={{ y: y2, opacity: opacity2 }}
            className="absolute bottom-0 right-[20%] w-[15%] h-[80%] bg-[#121212] border-l border-t border-zinc-800 shadow-[0_-20px_60px_rgba(0,0,0,0.8)] z-30"
          >
            {/* Hint of internal texture */}
            <div className="w-full h-full opacity-20 bg-[url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=600&auto=format&fit=crop')] bg-cover mix-blend-luminosity" />
          </motion.div>

          {/* Piece 1: The Left Base Concrete Slab */}
          <motion.div
            style={{ x: x1, opacity: opacity1 }}
            className="absolute bottom-[10%] left-[10%] w-[50%] h-[20%] bg-zinc-900 border-t border-zinc-700 shadow-2xl z-40 overflow-hidden"
          >
            <div className="p-4">
              <div className="h-px w-12 bg-white/20 mb-2" />
              <p className="text-[9px] uppercase tracking-widest text-zinc-500 font-mono">Foundation Plinth</p>
            </div>
          </motion.div>

          {/* Piece 3: The Top Marble Cantilever */}
          <motion.div
            style={{ x: x3, opacity: opacity3 }}
            className="absolute top-[20%] left-[25%] w-[60%] h-[15%] bg-[#ffffff] shadow-[0_30px_60px_rgba(0,0,0,0.5)] z-50 overflow-hidden"
          >
            <div className="w-full h-full opacity-90 bg-[url('https://images.unsplash.com/photo-1590240470701-443bba1d8800?q=80&w=800&auto=format&fit=crop')] bg-cover mix-blend-multiply filter grayscale" />
          </motion.div>

        </div>

        {/* Text Overlay synced with assembly */}
        <div className="absolute top-[12%] md:top-1/4 left-[5%] md:left-[10%] max-w-sm pointer-events-none z-50 mix-blend-difference">
          <h2 className="font-serif text-3xl md:text-5xl font-light leading-tight mb-4 text-[#f5f2ed]">
            Architectural <br className="hidden md:block" /><span className="italic">Precision.</span>
          </h2>
          <p className="font-sans text-[10px] md:text-xs uppercase tracking-[0.15em] leading-relaxed opacity-60">
            Form follows process. Watch massive structural elements lock into place with uncompromising accuracy.
          </p>
        </div>

      </div>
    </div>
  );
}

// Concept 2 Hint: The Material Morph Focus
function Materials() {
  return (
    <div id="materials" className="py-20 md:py-32 px-6 md:px-8 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          <div>
            <h2 className="font-serif text-4xl md:text-5xl font-light mb-6 md:mb-8">Tactile <span className="italic">Elegance</span></h2>
            <div className="w-12 h-px bg-[#f5f2ed]/30 mb-6 md:mb-8" />
            <p className="font-sans text-xs md:text-sm tracking-wide leading-relaxed text-[#f5f2ed]/70 mb-10 md:mb-12 max-w-md">
              We believe true luxury is felt, not just seen. From fluted concrete to hand-selected Calacatta marble, every surface transitions seamlessly to elevate the spatial experience.
            </p>

            <ul className="space-y-6 border-l border-[#f5f2ed]/10 pl-6">
              {['Brushed Titanium', 'Noir Saint Laurent Marble', 'Smoked European Oak'].map((mat, i) => (
                <motion.li
                  key={i}
                  whileHover={{ x: 10 }}
                  className="group flex flex-col gap-1 cursor-pointer"
                >
                  <span className="text-[10px] uppercase font-mono tracking-widest text-[#f5f2ed]/40 group-hover:text-amber-500 transition-colors">0{i + 1}</span>
                  <span className="font-serif text-2xl tracking-wide">{mat}</span>
                </motion.li>
              ))}
            </ul>
          </div>

          <div className="relative aspect-[3/4] group overflow-hidden bg-zinc-900 rounded-sm">
            <motion.img
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=800&auto=format&fit=crop"
              alt="Marble texture"
              className="absolute inset-0 w-full h-full object-cover filter grayscale mix-blend-lighten opacity-60 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-700"
            />
            <div className="absolute inset-0 border border-[#f5f2ed]/10 m-4 pointer-events-none" />
          </div>
        </div>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer className="py-12 md:py-20 px-6 md:px-8 border-t border-[#f5f2ed]/10 text-center">
      <div className="font-serif text-2xl md:text-3xl tracking-widest text-[#f5f2ed] mb-8">AETERNA</div>
      <div className="flex flex-wrap justify-center gap-6 md:gap-12 text-[10px] uppercase tracking-widest text-[#f5f2ed]/40">
        <a href="#" className="hover:text-white">Instagram</a>
        <a href="#" className="hover:text-white">Contact</a>
        <a href="#" className="hover:text-white">Legal</a>
      </div>
    </footer>
  );
}

export default function App() {
  useEffect(() => {
    const lenis = new Lenis({
      autoRaf: true,
    });

    // In case autoRaf isn't enough in this specific lenis version, manual RAF loop:
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="bg-[#050505] min-h-screen text-[#f5f2ed] selection:bg-[#f5f2ed] selection:text-black">
      <div className="texture-overlay" />
      <Header />
      <Hero />
      <KineticAssembly />
      <Materials />
      <Footer />
    </div>
  );
}
