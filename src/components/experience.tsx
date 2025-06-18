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
			initial={{ opacity: 0, y: 70 }}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5 }}
			viewport={{ once: true }}
			ref={ref}
		>
			<SectionHeading>Experience</SectionHeading>

			<div className="space-y-12">
				{experiencesData.map((item, index) => (
					<ExperienceItem key={index} item={item} />
				))}
			</div>
		</motion.section>
	);
}

function ExperienceItem({ item }: { item: any }) {
	const [isExpanded, setIsExpanded] = React.useState(false);

	// Split description into main and additional parts
	const words = item.description.split(" ");
	const maxWords = 20;
	const hasMoreContent = words.length > maxWords;

	const mainDescription = hasMoreContent
		? words.slice(0, maxWords).join(" ")
		: item.description;

	const additionalDescription = hasMoreContent
		? words.slice(maxWords).join(" ")
		: "";

	return (
		<div className="group relative pl-8 border-l-2 border-gray-200 dark:border-gray-700">
			{/* Timeline dot */}
			<div className="absolute w-4 h-4 bg-gray-200 rounded-full -left-[9px] top-0 dark:bg-gray-600" />

			{/* Flex container for icon and text */}
			<div className="flex items-center gap-4 mb-2">
				{/* Logo container */}
				<span className="flex-shrink-0">
					<Image
						src={item.icon}
						alt={`${item.location} logo`}
						width={52}
						height={52}
						quality={95}
						className="rounded-md shadow-sm object-contain"
					/>
				</span>

				{/* Text content container */}
				<div>
					<h3 className="font-semibold text-lg">{item.title}</h3>
					<p className="text-base text-gray-800 dark:text-gray-300">
						{item.location}
					</p>
					<p className="text-base mt-1 text-gray-500 dark:text-gray-400">
						{item.date}
					</p>
				</div>
			</div>

			{/* Description with collapsible content */}
			<div className="mt-2 text-gray-700 dark:text-gray-300 leading-relaxed">
				<p>
					{mainDescription}
					{hasMoreContent && !isExpanded && (
						<span className="text-gray-500"> ...</span>
					)}
					{isExpanded && hasMoreContent && (
						<span> {additionalDescription}</span>
					)}
				</p>
			</div>

			{/* Toggle button - only show if there's more content */}
			{hasMoreContent && (
				<div className="mt-3">
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
							className={`w-4 h-4 transition-transform duration-200 ${
								isExpanded ? "rotate-180" : ""
							}`}
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
				</div>
			)}
		</div>
	);
}
