"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function FontLoader({
    children,
}: {
    children: React.ReactNode;
}) {
    const [fontLoaded, setFontLoaded] = useState(false);

    useEffect(() => {
        if (document.fonts) {
            document.fonts.ready.then(() => {
                setFontLoaded(true);
            });
        } else {
            setTimeout(() => setFontLoaded(true), 1000);
        }
    }, []);

    return (
        <div style={{ position: "relative", minHeight: "100vh" }}>
            <AnimatePresence>
                {!fontLoaded && (
                    <motion.div
                        className="fixed inset-0 flex items-center justify-center"
                        style={{
                            background: "var(--background, #fff)",
                            zIndex: 50,
                            fontSize: "4rem",
                        }}
                        initial={{ opacity: 0, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.98 }}
                        transition={{
                            type: "spring",
                            stiffness: 70,
                            damping: 16,
                            mass: 0.7,
                            ease: "easeInOut"
                        }}
                        aria-hidden={!fontLoaded}
                    >
                        <motion.span
                            role="img"
                            aria-label="Waving Hand"
                            style={{ display: "inline-block", transformOrigin: "70% 70%" }}
                            animate={{
                                rotate: [0, 14, -8, 14, -4, 10, 0, 0],
                            }}
                            transition={{
                                duration: 1.5,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                        >
                            👋
                        </motion.span>
                    </motion.div>
                )}
            </AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: fontLoaded ? 1 : 0 }}
                transition={{
                    type: "spring",
                    stiffness: 70,
                    damping: 16,
                    mass: 0.7,
                    ease: "easeInOut"
                }}
            >
                {children}
            </motion.div>
        </div>
    );
}
