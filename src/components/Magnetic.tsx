import { useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function Magnetic({ children, strength = 0.3 }: { children: React.ReactNode; strength?: number }) {
    const ref = useRef<HTMLDivElement>(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const springConfig = { damping: 15, stiffness: 150 };
    const springX = useSpring(x, springConfig);
    const springY = useSpring(y, springConfig);

    const handleMouse = (e: React.MouseEvent) => {
        if (!ref.current) return;
        const { clientX, clientY } = e;
        const { height, width, left, top } = ref.current.getBoundingClientRect();
        const middleX = clientX - (left + width / 2);
        const middleY = clientY - (top + height / 2);
        x.set(middleX * strength);
        y.set(middleY * strength);
    };

    const reset = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <div
            ref={ref}
            onMouseMove={handleMouse}
            onMouseLeave={reset}
            className="magnetic-target"
            style={{ position: "relative" }}
        >
            <motion.div
                style={{
                    x: springX,
                    y: springY,
                    position: "relative",
                }}
            >
                {children}
            </motion.div>
        </div>
    );
}
