"use client";

import React from "react";
import SectionHeading from "./section-heading";
import {
	VerticalTimeline,
	VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { useTheme } from "@/context/theme-context";

export default function Experience() {
	const { ref } = useSectionInView("Experience");
	const { theme } = useTheme();

	return (
		<section
			id="experience"
			ref={ref}
			className="scroll-mt-28 mb-28 sm:mb-40"
		>
			<SectionHeading>Experiences</SectionHeading>

			<VerticalTimeline
				lineColor={theme === "light" ? "#e5e7eb" : "#1f2937"}
			>
				{experiencesData.map((item, index) => (
					<React.Fragment key={index}>
						<VerticalTimelineElement
							visible={true}
							contentStyle={{
								background:
									theme === "light" ? "#f3f4f6" : "#374151",
								boxShadow: "none",
								border: `1px solid ${
									theme === "light"
										? "rgba(0,0,0, 0.05)"
										: "rgba(255,255,255, 0.05)"
								}`,
								textAlign: "left",
								padding: "1.7rem 2rem",
								borderRadius: "20px",
							}}
							contentArrowStyle={{
								borderRight: `0.4rem solid ${
									theme === "light" ? "#9ca3af" : "#6b7280"
								}`,
							}}
							date={item.date}
							icon={item.icon}
							iconStyle={{
								background:
									theme === "light" ? "white" : "#1f2937",
								fontSize: "1.5rem",
							}}
						>
							<h3 className="font-semibold capitalize">
								{item.title}
							</h3>
							<p className="font-normal !mt-0">{item.location}</p>
							<p
								className={`!mt-1 !font-normal ${
									theme === "light"
										? "text-gray-800"
										: "text-gray-300"
								}`}
							>
								{item.description}
							</p>
						</VerticalTimelineElement>
					</React.Fragment>
				))}
			</VerticalTimeline>
		</section>
	);
}
