import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Magnetic from "./Magnetic";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { name: "Collection", href: "#work" },
    { name: "Expertise", href: "#skills" },
    { name: "Heritage", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  // Split the links: First 2 go left, Last 2 go right
  const leftLinks = navLinks.slice(0, 2);
  const rightLinks = navLinks.slice(2, 4);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-colors duration-500 ${
          isScrolled || menuOpen
            ? "bg-[#0b0b0b] border-b border-white/10"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        {/* Top "Ticker" Line - Luxury Detail */}
        <div className="hidden md:flex justify-between px-8 md:px-12 py-2 border-b border-white/5 text-[9px] uppercase tracking-[0.2em] text-neutral-500 font-medium">
          <span>Official Portfolio</span>
          <span>Est. 2024</span>
        </div>

        {/* Main Navbar Content */}
        <div className="h-20 px-6 md:px-12 flex items-center justify-between relative">
          
          {/* --- LEFT SIDE LINKS --- */}
          <div className="hidden md:flex flex-1 justify-start gap-12">
            {leftLinks.map((link) => (
              <Magnetic key={link.name}>
                <a href={link.href} className="relative group py-4 block">
                  <span className="text-[11px] font-medium uppercase tracking-[0.2em] text-neutral-300 transition-colors duration-300 group-hover:text-white">
                    {link.name}
                  </span>
                  {/* Gold Underline */}
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-[#bf9b30] scale-x-0 origin-center transition-transform duration-500 ease-out group-hover:scale-x-100" />
                </a>
              </Magnetic>
            ))}
          </div>

          {/* --- CENTER LOGO (The "Crown") --- */}
          <div className="flex-shrink-0 relative z-20 mx-auto">
            <Magnetic>
              <a href="#home" className="flex flex-col items-center group">
                <span className="text-3xl text-white font-serif tracking-tight group-hover:text-[#bf9b30] transition-colors duration-500">
                  K.
                </span>
                <span className="text-[9px] uppercase tracking-[0.3em] text-neutral-400 mt-1 group-hover:text-white transition-colors">
                  Design
                </span>
              </a>
            </Magnetic>
          </div>

          {/* --- RIGHT SIDE LINKS --- */}
          <div className="hidden md:flex flex-1 justify-end gap-12">
            {rightLinks.map((link) => (
              <Magnetic key={link.name}>
                <a href={link.href} className="relative group py-4 block">
                  <span className="text-[11px] font-medium uppercase tracking-[0.2em] text-neutral-300 transition-colors duration-300 group-hover:text-white">
                    {link.name}
                  </span>
                  {/* Gold Underline */}
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-[#bf9b30] scale-x-0 origin-center transition-transform duration-500 ease-out group-hover:scale-x-100" />
                </a>
              </Magnetic>
            ))}
          </div>

          {/* --- MOBILE MENU BUTTON --- */}
          <div className="md:hidden absolute right-6 top-1/2 -translate-y-1/2 z-50">
            <button 
              onClick={() => setMenuOpen(!menuOpen)} 
              className="text-white p-2 focus:outline-none"
            >
              <span className="text-[10px] uppercase tracking-[0.2em] font-medium">
                {menuOpen ? "Close" : "Menu"}
              </span>
            </button>
          </div>
        </div>
      </nav>

      {/* --- MOBILE OVERLAY --- */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 bg-[#0b0b0b] z-40 flex flex-col items-center justify-center"
          >
            <div className="flex flex-col items-center gap-8">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  onClick={() => setMenuOpen(false)}
                  className="text-4xl font-serif text-neutral-400 hover:text-[#bf9b30] transition-colors duration-300 italic"
                >
                  {link.name}
                </motion.a>
              ))}
            </div>
            
            <div className="absolute bottom-12 text-[10px] uppercase tracking-[0.3em] text-neutral-600">
              International
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}