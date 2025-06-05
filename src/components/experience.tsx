"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { experiencesData } from "@/lib/data"; // Ensure this path and data structure are correct
import { useSectionInView } from "@/lib/hooks";
import { useTheme } from "@/context/theme-context";
// Removed FaBriefcase, FaGraduationCap imports as they seem replaced by Image
import Image from "next/image";
import { motion } from "framer-motion";

export default function Experience() {
	const { ref } = useSectionInView("Experience");
	const { theme } = useTheme(); // theme variable is declared but not used in the provided snippet for styling text colors conditionally below, consider using it if needed.

	// Validate experiencesData structure (ensure item.icon has the image path)
	// Example check (optional):
	// if (experiencesData.length > 0 && typeof experiencesData[0].icon !== 'string') {
	//     console.error("experiencesData item.icon should be an image source string");
	// }

	return (
		<motion.section
			id="experience"
			ref={ref}
			// Reduced horizontal margin for smaller screens, keeps mx-16 for larger screens
			className="scroll-mt-28 mb-28 sm:mb-40 mx-4 sm:mx-16"
			initial={{ opacity: 0, y: 70 }}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5 }}
			viewport={{ once: true }}
		>
			<SectionHeading>Experience</SectionHeading>

			<div className="space-y-12">
				{experiencesData.map((item, index) => (
					<div
						key={index}
						className="group relative pl-8 border-l-2 border-gray-200 dark:border-gray-700"
					>
						{/* Timeline dot */}
						<div className="absolute w-4 h-4 bg-gray-200 rounded-full -left-[9px] top-0 dark:bg-gray-600" />

						{/* Flex container for icon and text */}
						<div className="flex items-center gap-4 mb-2">
							{/* Logo container - Added flex-shrink-0 */}
							<span className="flex-shrink-0">
								{" "}
								{/* <--- Added flex-shrink-0 here */}
								<Image
									src={item.icon} // Ensure item.icon is the correct path/URL to your logo
									alt={`${item.location} logo`} // Use dynamic alt text
									width={52}
									height={52}
									quality={95} // Optional: Adjust image quality
									className="rounded-md shadow-sm object-contain" // Added object-contain just in case aspect ratio issues arise with different logos
								/>
							</span>

							{/* Text content container */}
							<div>
								<h3 className="font-semibold text-lg">
									{item.title}
								</h3>
								<p className="text-base text-gray-800 dark:text-gray-400">
									{item.location}
								</p>
								<p className="text-base mt-1 text-gray-500 dark:text-gray-500">
									{item.date}
								</p>
							</div>
						</div>

						{/* Description paragraph */}
						<p
							// Removed redundant theme check logic since Tailwind dark: variant handles it
							className="mt-2 text-gray-700 dark:text-gray-300 leading-relaxed"
						>
							{item.description}
						</p>
					</div>
				))}
			</div>
		</motion.section>
	);
}
