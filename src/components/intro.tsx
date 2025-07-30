"use client";

import { useActiveSection } from "@/context/active-section-context";
import { useSectionInView } from "@/lib/hooks";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { HiDownload } from "react-icons/hi";
import SectionDivider from "./section-divider";
import { useState } from "react";

export default function Intro() {
    const { ref } = useSectionInView("Home", 0.9, true);
    const { setActiveSection, setTimeOfLastClick } = useActiveSection();
    const [showWaveEffect, setShowWaveEffect] = useState(false);

    const handleWaveClick = () => {
        setShowWaveEffect(true);
        setTimeout(() => setShowWaveEffect(false), 3000);
    };

    return (
        <div className="h-screen flex items-center justify-center text-center -mt-28 sm:-mt-52 mb-20 sm:mb-32 relative overflow-hidden">
            <AnimatePresence>
                {showWaveEffect && (
                    <motion.div
                        className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none"
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
                    >
                        {Array.from({ length: 50 }).map((_, index) => (
                            <motion.div
                                key={index}
                                className="absolute text-4xl"
                                initial={{
                                    opacity: 0,
                                    scale: 0,
                                    x: 0,
                                    y: 0,
                                }}
                                animate={{
                                    opacity: [0, 1, 0],
                                    scale: [0, 1.7, 0],
                                    x:
                                        (Math.random() - 0.5) *
                                        window.innerWidth,
                                    y:
                                        (Math.random() - 0.5) *
                                        window.innerHeight,
                                }}
                                transition={{
                                    type: "spring",
                                    stiffness: 60,
                                    damping: 14,
                                    mass: 0.7,
                                    duration: 2.2,
                                    delay: Math.random() * 0.7,
                                    ease: "easeInOut",
                                }}
                            >
                                👋
                            </motion.div>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>

            <section id="home" ref={ref}>
                <div className="flex items-center justify-center">
                    <div className="relative">
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{
                                type: "spring",
                                stiffness: 80,
                                damping: 18,
                                mass: 0.7,
                                ease: "easeInOut"
                            }}
                        >
                            <Image
                                src="/intro-image.png"
                                alt="image"
                                width="192"
                                height="192"
                                className="h-28 w-28 rounded-full object-cover shadow-xl border-[0.35rem] border-white"
                                priority
                            />
                        </motion.div>
                        <motion.span
                            className="absolute bottom-0 right-0 text-4xl cursor-pointer select-none"
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            whileHover={{
                                rotate: [0, 30, -30, 30, -30, 0],
                                scale: 1.1,
                                transition: {
                                    duration: 1.7,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                },
                            }}
                            transition={{
                                type: "spring",
                                stiffness: 90,
                                damping: 20,
                                mass: 0.7,
                                delay: 0.1,
                                ease: "easeInOut"
                            }}
                            onClick={handleWaveClick}
                            style={{ zIndex: 60 }}
                        >
                            👋
                        </motion.span>
                    </div>
                </div>

                <motion.h1
                    className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
                    initial={{ opacity: 0, y: 60 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        type: "spring",
                        stiffness: 70,
                        damping: 16,
                        mass: 0.7,
                        ease: "easeInOut"
                    }}
                >
                    <span className="font-bold">
                        Hello, I&apos;m Dipen Kumar.
                    </span>{" "}
                    I&apos;m a{" "}
                    <span className="font-bold underline underline-offset-4">
                        {" "}
                        Machine Learning Engineer Intern at SAP{" "}
                    </span>
                    and
                    <span className="font-bold"> Computer Science Honors </span>
                    Student at the{" "}
                    <span className="font-bold">University of Alberta.</span> I
                    enjoy learning & building apps.
                </motion.h1>

                <motion.div
                    className="flex flex-col sm:flex-row items-center justify-center gap-3 px-4 text-sm md:text-lg font-medium"
                    initial={{ opacity: 0, y: 60 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        type: "spring",
                        stiffness: 70,
                        damping: 16,
                        mass: 0.7,
                        delay: 0.1,
                        ease: "easeInOut"
                    }}
                >
                    <Link
                        href="#contact"
                        className="group bg-gray-900 text-white px-7 py-3 flex items-center justify-center gap-2 rounded-full outline-none hover:scale-105 active:scale-95 hover:bg-gray-950 transition-all border-2 dark:bg-white/5 border-black/20 dark:border-white/30 shadow-sm"
                        onClick={() => {
                            setActiveSection("About & Contact");
                            setTimeOfLastClick(Date.now());
                        }}
                    >
                        Contact me here{" "}
                        <BsArrowRight className="opacity-80 group-hover:translate-x-1 transition-all" />
                    </Link>

                    <a
                        className="group bg-white/20 text-black px-7 py-3 flex items-center justify-center gap-2 rounded-full outline-none hover:scale-105 active:scale-95 hover:bg-white-950 transition-all border-2 dark:bg-white/5 border-black/20 dark:border-white/30 dark:text-white shadow-sm"
                        href="/Dipen_Resume.pdf"
                        download
                    >
                        Download Resume{" "}
                        <HiDownload className="opacity-80 group-hover:translate-y-1 transition-all" />
                    </a>

                    <div className="flex gap-3">
                        <a
                            className="bg-white/20 text-black text-2xl border-2 border-black/20 p-4 flex items-center justify-center gap-2 rounded-full cursor-pointer outline-none hover:scale-110 active:scale-100 transition-all dark:bg-white/5 dark:text-gray-50 dark:border-white/30 shadow-sm"
                            href="https://linkedin.com/in/dipen-kumar"
                            target="_blank"
                        >
                            <BsLinkedin />
                        </a>

                        <a
                            className="bg-white/20 text-black text-2xl border-2 border-black/20 p-4 flex items-center justify-center gap-2 rounded-full cursor-pointer outline-none hover:scale-110 active:scale-100 transition-all dark:bg-white/5 dark:text-gray-50 dark:border-white/30 shadow-sm"
                            href="https://github.com/dipenkumarr"
                            target="_blank"
                        >
                            <FaGithub />
                        </a>
                    </div>
                </motion.div>
            </section>
            {/* <SectionDivider /> */}
        </div>
    );
}
