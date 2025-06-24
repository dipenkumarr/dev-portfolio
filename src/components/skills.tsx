"use client";

import { skillsData } from "@/lib/data";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";
import { animate, motion } from "framer-motion";

export default function Skills() {
	const { ref } = useSectionInView("Skills");

	return (
		<section
			className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
			id="skills"
			ref={ref}
		>
			<SectionHeading>Skills</SectionHeading>
			<ul className="flex gap-3 flex-wrap justify-center text-lg text-gray-800 ">
				{skillsData.map((skill, index) => (
					<motion.li
						key={index}
						className="bg-white/20 shadow-sm border border-black/20 rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/90"
						initial={{ opacity: 0, y: 100 }}
						whileInView={{ opacity: 1, y: 0 }}
						// animate={{ opacity: 1, y: 0 }}
						transition={{ delay: index * 0.03 }}
						viewport={{ once: true }}
					>
						{skill}
					</motion.li>
				))}
			</ul>
		</section>
	);
}
