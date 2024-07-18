"use client";

import React from "react";
import { projectsData } from "@/lib/data";
import SectionHeading from "./section-heading";
import Project from "./project";
import { motion } from "framer-motion";

export default function Projects() {
	return (
		<motion.section
			initial={{ opacity: 0, y: 100 }}
			animate={{ opacity: 1, y: 0 }}
			id="projects"
			className="scroll-mt-32"
		>
			<SectionHeading>My Projects</SectionHeading>

			<div className="sm:grid sm:grid-cols-2 sm:gap-6">
				{projectsData.map((project, index) => (
					<React.Fragment key={index}>
						<Project {...project} />
					</React.Fragment>
				))}
			</div>
		</motion.section>
	);
}
