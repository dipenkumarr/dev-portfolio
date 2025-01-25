"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { useTheme } from "@/context/theme-context";
import { FaBriefcase, FaGraduationCap } from "react-icons/fa";

export default function Experience() {
	const { ref } = useSectionInView("Experience");
	const { theme } = useTheme();

	return (
		<section
			id="experience"
			ref={ref}
			className="scroll-mt-28 mb-28 sm:mb-40 mx-16"
		>
			<SectionHeading>Experience</SectionHeading>

			<div className="space-y-12">
				{experiencesData.map((item, index) => (
					<div
						key={index}
						className="group relative pl-8 border-l-2 border-gray-200 dark:border-gray-700"
					>
						<div className="absolute w-4 h-4 bg-gray-200 rounded-full -left-[9px] top-0 dark:bg-gray-600" />

						<div className="flex items-center gap-4 mb-2">
							<span
								className={`text-2xl ${
									item.icon.type === FaGraduationCap
										? "text-blue-500"
										: "text-green-500"
								}`}
							>
								{item.icon}
							</span>
							<div>
								<h3 className="font-semibold text-lg">
									{item.title}
								</h3>
								<p className="text-sm text-gray-600 dark:text-gray-400">
									{item.location}
								</p>
								<p className="text-sm text-gray-500 dark:text-gray-500">
									{item.date}
								</p>
							</div>
						</div>

						<p
							className={`mt-2 text-gray-700 dark:text-gray-300 leading-relaxed ${
								theme === "light"
									? "text-gray-800"
									: "text-gray-300"
							}`}
						>
							{item.description}
						</p>
					</div>
				))}
			</div>
		</section>
	);
}
