"use client";
import { motion } from "framer-motion";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
    const { ref } = useSectionInView("About & Contact", 0.5);

    return (
        <motion.section
            className="w-full text-center leading-8 text-base md:text-xl scroll-mt-32"
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
            id="about"
            ref={ref}
        >
            <SectionHeading>About Me</SectionHeading>
            <motion.div
                className="space-y-4 mt-6 text-base md:text-base text-justify"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                    type: "spring",
                    stiffness: 70,
                    damping: 18,
                    mass: 0.7,
                    ease: "easeInOut"
                }}
                viewport={{ once: true }}
            >
                <p>
                    Hi, I&apos;m{" "}
                    <span className="font-medium">Dipen Kumar Maheshwari</span>, a Computer
                    Science Honors student at the University of Alberta and currently a{" "}
                    <span className="font-medium">Machine Learning Engineer Intern</span> at SAP.
                </p>
                <p>
                    My work focuses on combining{" "}
                    <span className="font-medium">software engineering</span> with{" "}
                    <span className="font-medium">applied machine learning</span>. At SAP, I build{" "}
                    <span className="font-medium">NLP and retrieval pipelines</span> that
                    streamline enterprise workflows, while my past internship centered on
                    optimizing robotics systems with{" "}
                    <span className="font-medium">Docker</span> and{" "}
                    <span className="font-medium">ROS</span>. Beyond internships, I&apos;ve built
                    projects ranging from{" "}
                    <span className="font-medium">full-stack applications</span> to{" "}
                    <span className="font-medium">AI-driven platforms</span>.
                </p>
                <p>
                    I enjoy working across the stack, from{" "}
                    <span className="font-medium">backend development</span> and{" "}
                    <span className="font-medium">cloud infrastructure</span> to{" "}
                    <span className="font-medium">applied ML</span>. My technical toolkit includes{" "}
                    <span className="font-medium">
                        Python, TypeScript, Go, Java, and C/C++
                    </span>
                    , along with frameworks like{" "}
                    <span className="font-medium">PyTorch, React, and Next.js</span>.
                </p>
                <p>
                    I&apos;m currently exploring internship opportunities for{" "}
                    <span className="font-bold underline">Winter 2026 or Summer 2026</span> in{" "}
                    <span className="font-medium">
                        Software Engineering, Machine Learning, or Data Science
                    </span>{" "}
                    where I can continue solving problems at the intersection of{" "}
                    <span className="font-medium">AI and software systems</span>.
                </p>

            </motion.div>
        </motion.section>
    );
}
