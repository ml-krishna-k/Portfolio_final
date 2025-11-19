import Magnetic from "../components/Magnetic";
import { FaArrowUp } from "react-icons/fa"; // Ensure you have react-icons installed

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative w-full bg-[#050505] pt-20 pb-10 overflow-hidden border-t border-white/10">
      
      <br />
      <br /> 
      <br />
      <br />
      {/* --- TEXTURE --- */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10 flex flex-col justify-between h-full">
        
        {/* --- 1. TOP ROW: NAV & ACTION --- */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-10 mb-20">
          
          {/* Left: The Philosophy */}
          <div className="max-w-sm">
             <div className="flex items-center gap-3 mb-6">
                <div className="w-2 h-2 bg-[#bf9b30] rounded-full" />
                <span className="text-xs uppercase tracking-[0.3em] text-neutral-500">
                  Manifesto
                </span>
             </div>
             <br />
             <br />
             <p className="text-2xl md:text-3xl font-serif text-white/90 leading-tight">
                "Models evolve. <br /> So do humans."
             </p>
             
          </div>

          {/* Right: Back to Top (Magnetic) */}
          <div onClick={scrollToTop} className="cursor-pointer">
             <Magnetic strength={0.3}>
                <div className="group relative w-24 h-24 rounded-full border border-white/10 bg-white/5 flex items-center justify-center overflow-hidden transition-colors duration-500 hover:border-[#bf9b30]">
                   {/* Gold Fill Effect */}
                   <div className="absolute inset-0 bg-[#bf9b30] translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500 ease-[0.22,1,0.36,1]" />
                   
                   {/* Arrow Icon */}
                   <FaArrowUp className="relative z-10 text-white text-xl group-hover:text-black transition-colors duration-300" />
                   
                   {/* Text Ring (Optional advanced CSS, simpler here for elegance) */}
                   <span className="absolute bottom-2 text-[8px] uppercase tracking-widest text-white/30 group-hover:text-black/50 transition-colors">
                     Top
                   </span>
                </div>
             </Magnetic>
          </div>
        </div>

        {/* --- 2. BOTTOM ROW: TECHNICAL DETAILS --- */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-10 border-t border-white/5 text-[10px] uppercase tracking-[0.2em] text-neutral-500 gap-4">
            
            {/* Copyright */}
            <div className="flex items-center gap-2">
                <span>&copy; {currentYear}</span>
                <span className="w-1 h-1 bg-neutral-700 rounded-full" />
                <span>Krishna's Portfolio</span>
            </div>

            {/* Stack */}
            <div className="flex items-center gap-4">
                <span className="hover:text-white transition-colors cursor-default">React</span>
                <span className="hover:text-white transition-colors cursor-default">Tailwind</span>
                <span className="hover:text-white transition-colors cursor-default">Framer Motion</span>
            </div>

            
        </div>

        {/* --- 3. THE MASSIVE SIGNATURE (Background Element) --- */}
        {/* This huge text sits at the bottom, cropped by the overflow, creating a massive foundation */}
        <div className="w-full mt-12 select-none pointer-events-none">
            <h1 className="text-[15vw] leading-[0.8] font-serif font-bold text-white/[0.02] text-center tracking-tighter translate-y-4">
                KRISHNA
            </h1>
        </div>

      </div>
    </footer>
  );
}