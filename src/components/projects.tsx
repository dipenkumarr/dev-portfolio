"use client";
import React from "react";
import { projectsData } from "@/lib/data";
import SectionHeading from "./section-heading";
import Project from "./project";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function Projects() {
    const { ref } = useSectionInView("Projects", 0.2);

    // Card animation variants to prevent flicker
    const cardVariants = {
        hidden: { opacity: 0, y: 40, scale: 0.98 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                type: "spring",
                stiffness: 70,
                damping: 16,
                mass: 0.7,
                ease: "easeInOut"
            }
        }
    };

    return (
        <motion.section
            id="projects"
            className="scroll-mt-32 mb-28"
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
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
            <SectionHeading>
                My Projects
                <p className="flex justify-center items-center m-2 text-sm dark:text-white/30 text-gray-400">
                    Click to learn more
                </p>
            </SectionHeading>
            <motion.div
                className="sm:grid sm:grid-cols-2 sm:gap-6"
                variants={{
                    hidden: { opacity: 0 },
                    visible: {
                        opacity: 1,
                        transition: {
                            staggerChildren: 0.1,
                        },
                    },
                }}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
                {projectsData.map((project, index) => (
                    <motion.div
                        key={index}
                        variants={cardVariants}
                        className={
                            index === projectsData.length - 1 &&
                                projectsData.length % 2 !== 0
                                ? "sm:col-span-2 sm:flex sm:justify-center"
                                : ""
                        }
                    >
                        <Project {...project} />
                    </motion.div>
                ))}
            </motion.div>
        </motion.section>
    );
}
