"use client";

import { skillsData } from "@/lib/data";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";
import { animate, motion } from "framer-motion";

export default function Skills() {
    const { ref } = useSectionInView("Skills");

    // Animation variants for all skills together
    const allSkillsVariants = {
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
            className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
            id="skills"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 70, damping: 16, mass: 0.8, ease: "easeInOut" }}
            viewport={{ once: true }}
            ref={ref}
        >
            <SectionHeading>Skills</SectionHeading>
            <motion.ul
                className="flex gap-3 flex-wrap justify-center text-base md:text-lg text-gray-800 "
                variants={allSkillsVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
                {skillsData.map((skill, index) => (
                    <motion.li
                        key={index}
                        className="bg-white/20 shadow-sm border border-black/20 rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/90"
                    >
                        {skill}
                    </motion.li>
                ))}
            </motion.ul>
        </motion.section>
    );
}
