import { motion } from "framer-motion";
import { useState } from "react";
import Magnetic from "../components/Magnetic";

export default function Hero() {
  const [imgSrc, setImgSrc] = useState('/hero.png');

  // Typewriter Logic
  const typewriterText = "Architecting intelligent RAG pipelines and high-performance inference systems.";
  
  const sentence = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: { delay: 0.5, staggerChildren: 0.02 },
    },
  };

  const letter = {
    hidden: { opacity: 0, y: 5 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="home" className="relative w-full h-screen flex items-center bg-[#050505] overflow-hidden px-6 md:px-12">
      
      {/* --- 1. AMBIENCE & TEXTURE --- */}
      {/* Grain Texture */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
      
      {/* Spotlight: Subtle white glow behind text */}
      <div className="absolute top-1/4 left-[-10%] w-[800px] h-[800px] bg-white/5 rounded-full blur-[150px] pointer-events-none" />


      {/* --- 2. MAIN GRID LAYOUT --- */}
      <div className="max-w-[1600px] mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10 h-full">

        {/* === LEFT COLUMN: TEXT === */}
        <div className="lg:col-span-7 flex flex-col justify-center h-full">
          
          {/* Container for stacking text to prevent overlap */}
          <div className="flex flex-col items-start gap-8">

            {/* A. Label */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center gap-4"
            >
              <div className="w-12 h-[1px] bg-[#bf9b30]" />
              <span className="text-[11px] uppercase tracking-[0.3em] text-[#bf9b30] font-medium">
                Krishna &mdash; Portfolio
              </span>
            </motion.div>

            {/* B. Title */}
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-6xl md:text-8xl lg:text-[7rem] leading-[0.9] font-serif font-light text-white tracking-tight"
            >
              GenAI <br />
              <span className="font-sans font-bold mix-blend-difference tracking-tighter text-white">
                Engineer.
              </span>
            </motion.h1>

            {/* C. Typewriter Description */}
            <motion.div
                variants={sentence}
                initial="hidden"
                animate="visible"
                className="min-h-[60px] max-w-xl"
            >
                <h3 className="text-lg md:text-xl text-neutral-400 font-light leading-relaxed">
                  {typewriterText.split("").map((char, index) => (
                    <motion.span key={char + "-" + index} variants={letter}>
                      {char}
                    </motion.span>
                  ))}
                </h3>
            </motion.div>

            {/* D. Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5, duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-row items-center gap-8 pt-4"
            >
              {/* Resume Button */}
              <Magnetic strength={0.3}>
                <a
                  href="https://drive.google.com/file/d/19JAoq6NV-7nrJiXHHaB0cUUX_vOdxpKz/view?usp=sharing"
                  target= "_blank"
                  rel="noopener noreferrer"
                  className="relative group overflow-hidden bg-[#e8e8e8] text-green px-8 py-4 rounded-full flex items-center gap-2 shadow-[0_0_20px_rgba(255,255,255,0.1)]"
                >
                  <span className="relative z-10 text-xs font-bold uppercase tracking-[0.2em]">
                    Get Resume
                  </span>
                  <svg 
                    className="relative z-10 w-3 h-3 transition-transform duration-300 group-hover:translate-x-1" 
                    fill="none" stroke="currentColor" viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                  <div className="absolute inset-0 bg-[#bf9b30] translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500 ease-[0.22,1,0.36,1]" />
                </a>
              </Magnetic>

              {/* Contact Link */}
              <Magnetic strength={0.2}>
                <a href="#contact" className="group flex items-center gap-3 px-4 py-2">
                  <span className="text-xs font-medium uppercase tracking-[0.2em] text-white/70 group-hover:text-white transition-colors border-b border-transparent hover:border-white/50 pb-1">
                    Contact Me
                  </span>
                </a>
              </Magnetic>
            </motion.div>

          </div>
        </div>

        {/* === RIGHT COLUMN: IMAGE === */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="hidden lg:block lg:col-span-5 relative h-[70vh] w-full"
        >
           {/* 1. Luxury Frame Lines (Corners) */}
           <div className="absolute top-0 right-0 w-[1px] h-24 bg-white/30 z-20" />
           <div className="absolute top-0 right-0 w-24 h-[1px] bg-white/30 z-20" />
           <div className="absolute bottom-0 left-0 w-[1px] h-24 bg-white/30 z-20" />
           <div className="absolute bottom-0 left-0 w-24 h-[1px] bg-white/30 z-20" />

           {/* 2. Image Container */}
           <div className="relative w-full h-full overflow-hidden group">
              <img
                src={imgSrc}
                alt="Krishna"
                onError={() => setImgSrc('/hero2.jpeg')}
                className="w-full h-full object-cover object-center grayscale opacity-80 transition-all duration-[1.5s] ease-out group-hover:grayscale-0 group-hover:scale-105 group-hover:opacity-100"
              />
              
              {/* 3. Bottom Fade (Seamless blend with bg) */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-90" />
           </div>
        </motion.div>

      </div>

      {/* --- 3. SCROLL INDICATOR (Centered Bottom) --- */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 z-30"
      >
        <span className="text-[9px] uppercase tracking-[0.2em] text-white/40">
          Scroll
        </span>
        <div className="w-[1px] h-16 bg-white/10 overflow-hidden relative">
            <div className="absolute top-0 left-0 w-full h-full bg-[#bf9b30] animate-[slideDown_2s_infinite]"></div>
        </div>
      </motion.div>

      <style>{`
        @keyframes slideDown {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100%); }
        }
      `}</style>
    </section>
  );
}