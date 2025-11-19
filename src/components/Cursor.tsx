import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function Cursor() {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // 1. Raw Mouse Values
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // 2. THE PILOT (The tiny dot) - Fast & Snappy
  const pilotSpring = { damping: 20, stiffness: 800, mass: 0.5 };
  const pilotX = useSpring(mouseX, pilotSpring);
  const pilotY = useSpring(mouseY, pilotSpring);

  // 3. THE GHOST (The outer ring) - Slow, Heavy, Elegant (Rolls Royce suspension)
  const ghostSpring = { damping: 40, stiffness: 200, mass: 1.5 };
  const ghostX = useSpring(mouseX, ghostSpring);
  const ghostY = useSpring(mouseY, ghostSpring);

  useEffect(() => {
    // Hide default cursor via CSS to prevent "double cursor" look
    document.documentElement.style.cursor = 'none';

    // Touch detection
    const isTouchDevice = "ontouchstart" in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) {
      document.documentElement.style.cursor = 'auto'; // Restore if touch
      return;
    }

    setIsVisible(true);

    const moveCursor = (e: MouseEvent) => {
        
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false);

    // Add listeners to all interactive elements (automatically, no class needed)
    const addHoverListeners = () => {
      const targets = document.querySelectorAll("a, button, input, .magnetic-target");
      targets.forEach((el) => {
        el.addEventListener("mouseenter", handleMouseEnter);
        el.addEventListener("mouseleave", handleMouseLeave);
      });
    };

    window.addEventListener("mousemove", moveCursor);
    addHoverListeners();

    // Observer for dynamic content (popups, mobile menus loading)
    const observer = new MutationObserver(addHoverListeners);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      document.documentElement.style.cursor = 'auto'; // Cleanup
      window.removeEventListener("mousemove", moveCursor);
      observer.disconnect();
      // Note: Individual element cleanup is tricky with observer, 
      // but standard garbage collection usually handles this in React.
    };
  }, [mouseX, mouseY]);

  if (!isVisible) return null;

  return (
    <>
      {/* --- LAYER 1: The "Pilot" (Sharp Dot) --- */}
      {/* This stays centered and precise */}
      <motion.div
        className="fixed top-0 left-0 w-1.5 h-1.5 bg-[#bf9b30] rounded-full pointer-events-none z-[9999]"
        style={{ x: pilotX, y: pilotY, translateX: "-50%", translateY: "-50%" }}
      />

      {/* --- LAYER 2: The "Ghost" (Heavy Ring) --- */}
      {/* This lags behind and expands gracefully */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998] mix-blend-difference"
        style={{ x: ghostX, y: ghostY, translateX: "-50%", translateY: "-50%" }}
        animate={{
          height: isHovered ? 60 : 40,
          width: isHovered ? 60 : 40,
          opacity: isHovered ? 0.8 : 0.5,
          backgroundColor: isHovered ? "white" : "transparent",
          border: isHovered ? "none" : "1px solid rgba(255, 255, 255, 0.3)"
        }}
        transition={{
            type: "spring",
            stiffness: 300,
            damping: 25
        }}
      >
        {/* Optional: A subtle blur to soften the edge (Glass effect) */}
        <div className={`w-full h-full rounded-full transition-all duration-500 ${isHovered ? "backdrop-invert" : ""}`} />
      </motion.div>
    </>
  );
}