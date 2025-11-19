import { useEffect } from "react";
import { useMotionValue, useSpring, motion } from "framer-motion";

export default function Background() {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // LUXURY PHYSICS: High damping = Heavy, expensive feel.
    // It shouldn't zip around; it should glide like a heavy sedan.
    const springConfig = { damping: 100, stiffness: 300, mass: 3 }; 
    const x = useSpring(mouseX, springConfig);
    const y = useSpring(mouseY, springConfig);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, [mouseX, mouseY]);

    return (
        <div className="fixed inset-0 z-[-1] overflow-hidden bg-[#050505]">
            
            {/* 1. THE TEXTURE (The "Expensive Paper" Feel) 
                Using a finer, higher frequency noise for a premium grain.
            */}
            <div className="absolute inset-0 z-[1] opacity-[0.04] pointer-events-none mix-blend-overlay"
                style={{ backgroundImage: 'url("https://grainy-gradients.vercel.app/noise.svg")' }}
            />

            {/* 2. THE AMBIENT WARMTH (Gold Undercurrent) 
                Static, very subtle warm glow in the center-bottom to give depth.
                No neon blues. Just warm tungsten.
            */}
            <div className="absolute bottom-[-20%] left-1/2 -translate-x-1/2 w-[120%] h-[80%] rounded-[100%] bg-[radial-gradient(circle,rgba(191,155,48,0.08)_0%,transparent_60%)] blur-[120px] pointer-events-none" />

            {/* 3. THE MOUSE SPOTLIGHT (The "Flashlight on Velvet") 
                Instead of a colored orb, this is a white "reveal" light.
                It brightens the background texture where you hover.
            */}
            <motion.div
                className="absolute z-[2] rounded-full opacity-100 mix-blend-soft-light pointer-events-none"
                style={{
                    x,
                    y,
                    width: "800px",
                    height: "800px",
                    translateX: "-50%",
                    translateY: "-50%",
                    background: "radial-gradient(circle, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.05) 30%, transparent 70%)",
                    filter: "blur(40px)", 
                }}
            />

            {/* 4. THE VIGNETTE (Cinematic Focus) 
                Darkens the corners to force focus to the center content.
            */}
            <div className="absolute inset-0 z-[3] bg-[radial-gradient(circle_at_center,transparent_0%,#050505_110%)] pointer-events-none" />
        </div>
    );
}