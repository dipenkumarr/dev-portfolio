"use client";
import { motion } from "framer-motion";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
	const { ref } = useSectionInView("About & Contact", 0.5);

	return (
		<motion.section
			className="w-full text-center leading-8 text-base md:text-xl scroll-mt-28"
			initial={{ opacity: 0, y: 50 }}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5 }}
			viewport={{ once: true }}
			id="about"
			ref={ref}
		>
			<SectionHeading>About Me</SectionHeading>
			<div className="space-y-4 mt-6 text-base md:text-base text-justify">
				<p>
					Hello! I&apos;m{" "}
					<span className="font-medium">Dipen Kumar Maheshwari</span>,
					a Computer Science Honors student at the University of
					Alberta and currently a{" "}
					<span className="font-medium">
						Machine Learning Engineer Intern
					</span>{" "}
					at SAP.
				</p>
				<p>
					At SAP, I&apos;m developing an{" "}
					<span className="font-medium">
						unsupervised NLP model using transformers like SBERT
					</span>{" "}
					to automate ticket categorization, aiming to significantly
					reduce approval times. My previous experience as a{" "}
					<span className="font-medium">
						Software/Research Intern
					</span>{" "}
					at the University of Alberta involved containerizing
					autonomous navigation systems with{" "}
					<span className="font-medium">Docker</span>, which cut setup
					time by 50%, and refactoring C++/Python code in{" "}
					<span className="font-medium">ROS</span>.
				</p>
				<p>
					My technical skills include{" "}
					<span className="font-medium">
						Python, Java, JavaScript/TypeScript, C++, and Go
					</span>
					, along with frameworks like{" "}
					<span className="font-medium">
						PyTorch, React, and Next.js
					</span>
					. I have hands-on experience building full-stack
					applications (like{" "}
					<span className="font-medium">UniWays</span> and{" "}
					<span className="font-medium">Bloom.ai</span>), implementing
					ML models, working with databases (SQL/NoSQL), and utilizing
					tools like <span className="font-medium">Docker</span> and{" "}
					<span className="font-medium">Azure Databricks</span>.
				</p>
				<p>
					I am actively seeking internship opportunities for{" "}
					<span className="font-medium">
						Fall 2025 or Winter/Summer 2026
					</span>{" "}
					in{" "}
					<span className="font-medium">
						Software Engineering, Machine Learning Engineering, or
						Data Science
					</span>{" "}
					where I can apply my skills in AI and software development
					to contribute to meaningful projects.
				</p>
			</div>
		</motion.section>
	);
}
