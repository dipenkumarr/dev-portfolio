"use client";

import React, { useEffect, useState } from "react";
import BgBlob from "@/components/BgBlob";
import {
    motion,
    useSpring,
    useTransform,
    useScroll,
    useReducedMotion,
} from "framer-motion";

const ParallaxBlobs = () => {
    const [isMobile, setIsMobile] = useState(false);
    const prefersReducedMotion = useReducedMotion();

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };
        handleResize();
        window.addEventListener("resize", handleResize, { passive: true });
        return () => {
            window.removeEventListener("resize", handleResize as any);
        };
    }, []);

    // Use framer-motion's scroll observer (internally optimized)
    const { scrollY } = useScroll();

    // Smooth springs derived from scrollY
    const blob1Y = useSpring(scrollY, { stiffness: 180, damping: 24, mass: 0.7 });
    const blob2Y = useSpring(scrollY, { stiffness: 180, damping: 24, mass: 0.7 });

    // Map scroll position to translateY values (use transform for GPU acceleration)
    const blob1TranslateY = useTransform(blob1Y, (y) => -106 + y * 1.07);
    const blob2TranslateY = useTransform(blob2Y, (y) => -16 + y * 0.98);

    // Reduce motion: fall back to static gradient background
    if (isMobile || prefersReducedMotion) {
        return (
            <div className="absolute top-0 -z-10 h-full w-full bg-white dark:bg-gray-950 pointer-events-none select-none">
                <div className="absolute top-0 z-[-2] h-screen w-screen bg-white dark:bg-gray-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
            </div>
        );
    }

    return (
        <>
            <motion.div
                // Keep absolute positioning but move with translateY for better perf
                style={{ top: 0, y: blob1TranslateY }}
                className="bg-[#f4d3d4] absolute -z-10 right-[-10rem] h-[38.25rem] w-[30.25rem] rounded-full blur-[5rem] sm:w-[68.75rem] dark:bg-[#946263] dark:bg-opacity-40 overscroll-none overflow-hidden bg-opacity-50 pointer-events-none select-none transform-gpu will-change-transform contain-paint"
            >
                <BgBlob className="w-full h-full" style={{}} />
            </motion.div>
            <motion.div
                style={{ top: 0, y: blob2TranslateY }}
                className="bg-[#dbd7fb] absolute -z-10 left-[-35rem] h-[31.25rem] w-[40rem] rounded-full blur-[6rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] bg-opacity-50 dark:bg-[#676394] dark:bg-opacity-50 overscroll-none overflow-hidden pointer-events-none select-none transform-gpu will-change-transform contain-paint"
            >
                <BgBlob className="w-full h-full" style={{}} />
            </motion.div>
        </>
    );
};

export default ParallaxBlobs;
