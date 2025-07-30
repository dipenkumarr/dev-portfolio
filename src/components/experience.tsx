"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { useTheme } from "@/context/theme-context";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function Experience() {
    const { ref } = useSectionInView("Experience", 0.5);
    const { theme } = useTheme();

    return (
        <motion.section
            id="experience"
            className="scroll-mt-28 mb-28 sm:mb-40 mx-4 sm:mx-16"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
                type: "spring",
                stiffness: 70,
                damping: 16,
                mass: 0.7,
                ease: "easeInOut"
            }}
            viewport={{ once: true }}
            ref={ref}
        >
            <SectionHeading>Experience</SectionHeading>

            <motion.div
                className="space-y-12"
                initial="hidden"
                animate="visible"
                variants={{
                    hidden: {},
                    visible: {
                        transition: {
                            staggerChildren: 0.13,
                        },
                    },
                }}
            >
                {experiencesData.map((item, index) => (
                    <ExperienceItem key={index} item={item} />
                ))}
            </motion.div>
        </motion.section>
    );
}

function ExperienceItem({ item }: { item: any }) {
    const [isExpanded, setIsExpanded] = React.useState(false);

    // Split description into main and additional parts, with fallback
    const words = (item.description ?? "").split(" ");
    const maxWords = 20;
    const hasMoreContent = words.length > maxWords;

    const mainDescription = hasMoreContent
        ? words.slice(0, maxWords).join(" ")
        : item.description ?? "";

    const additionalDescription = hasMoreContent
        ? words.slice(maxWords).join(" ")
        : "";

    return (
        <motion.div
            className="group relative pl-8 border-l-2 border-gray-200 dark:border-gray-700"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
                type: "spring",
                stiffness: 70,
                damping: 16,
                mass: 0.7,
                ease: "easeInOut"
            }}
        >
            {/* Timeline dot */}
            <motion.div
                className="absolute w-4 h-4 bg-gray-200 rounded-full -left-[9px] top-0 dark:bg-gray-600"
                initial={{ scale: 0.7, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{
                    type: "spring",
                    stiffness: 90,
                    damping: 18,
                    mass: 0.7,
                    ease: "easeInOut"
                }}
            />

            {/* Flex container for icon and text */}
            <div className="flex items-center gap-4 mb-2">
                {/* Logo container */}
                <motion.span
                    className="flex-shrink-0"
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
                        src={item.icon}
                        alt={`${item.location} logo`}
                        width={52}
                        height={52}
                        quality={95}
                        className="rounded-md shadow-sm object-contain"
                    />
                </motion.span>

                {/* Text content container */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        type: "spring",
                        stiffness: 70,
                        damping: 16,
                        mass: 0.7,
                        ease: "easeInOut"
                    }}
                >
                    <h3 className="font-semibold text-lg">{item.title}</h3>
                    <p className="text-base text-gray-800 dark:text-gray-300">
                        {item.location}
                    </p>
                    <p className="text-base mt-1 text-gray-500 dark:text-gray-400">
                        {item.date}
                    </p>
                </motion.div>
            </div>

            {/* Description with collapsible content */}
            <motion.div
                className="mt-2 text-gray-700 dark:text-gray-300 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    type: "spring",
                    stiffness: 70,
                    damping: 16,
                    mass: 0.7,
                    ease: "easeInOut"
                }}
            >
                <p>
                    {mainDescription}
                    {hasMoreContent && !isExpanded && (
                        <span className="text-gray-500"> ...</span>
                    )}
                    <AnimatePresence initial={false}>
                        {isExpanded && hasMoreContent && (
                            <motion.span
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{
                                    type: "spring",
                                    stiffness: 80,
                                    damping: 13,
                                    mass: 0.2,
                                    ease: "easeInOut"
                                }}
                                style={{ display: "block", overflow: "hidden" }}
                            >
                                {" "}{additionalDescription}
                            </motion.span>
                        )}
                    </AnimatePresence>
                </p>
            </motion.div>

            {/* Toggle button - only show if there's more content */}
            {hasMoreContent && (
                <motion.div
                    className="mt-3"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        type: "spring",
                        stiffness: 70,
                        damping: 16,
                        mass: 0.7,
                        ease: "easeInOut"
                    }}
                >
                    <button
                        onClick={() => setIsExpanded(!isExpanded)}
                        className="text-sm text-slate-600 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-300 font-medium flex items-center gap-1 transition-colors"
                        aria-expanded={isExpanded}
                        aria-label={
                            isExpanded
                                ? "Show less content"
                                : "Show more content"
                        }
                    >
                        {isExpanded ? "Show less" : "Show more"}
                        <svg
                            className={`w-4 h-4 transition-transform duration-200 ${isExpanded ? "rotate-180" : ""}`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M19 9l-7 7-7-7"
                            />
                        </svg>
                    </button>
                </motion.div>
            )}
        </motion.div>
    );
}
