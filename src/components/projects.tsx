"use client";
import React from "react";
import { projectsData } from "@/lib/data";
import SectionHeading from "./section-heading";
import Project from "./project";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function Projects() {
	const { ref } = useSectionInView("Projects", 0.2);

	return (
		<motion.section
			id="projects"
			className="scroll-mt-32 mb-28"
			initial={{ opacity: 0, y: 70 }}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5 }}
			viewport={{ once: true }}
			ref={ref}
		>
			<SectionHeading>
				My Projects
				<p className="flex justify-center items-center m-2 text-sm dark:text-white/30 text-gray-400">
					Click to learn more
				</p>
			</SectionHeading>
			<div className="sm:grid sm:grid-cols-2 sm:gap-6">
				{projectsData.map((project, index) => (
					<React.Fragment key={index}>
						{index === projectsData.length - 1 &&
						projectsData.length % 2 !== 0 ? (
							<div className="sm:col-span-2 sm:flex sm:justify-center">
								<Project {...project} />
							</div>
						) : (
							<Project {...project} />
						)}
					</React.Fragment>
				))}
			</div>
		</motion.section>
	);
}
