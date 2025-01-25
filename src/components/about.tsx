"use client";

import { motion } from "framer-motion";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
	const { ref } = useSectionInView("About", 0.5);

	return (
		<motion.section
			className="mb-28 max-w-5xl text-center leading-8 sm:mb-40 text-base md:text-xl scroll-mt-28 sm:scroll-mt-72"
			initial={{ opacity: 0, y: 100 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ delay: 0.175 }}
			id="about"
			ref={ref}
		>
			<SectionHeading>About Me</SectionHeading>
			<p className="mb-5">
				Hello! I&apos;m{" "}
				<span className="font-medium">Dipen Kumar Maheshwari</span>, a
				Computer Science Honors student at the University of Alberta and
				a{" "}
				<span className="font-medium">
					Machine Learning Developer Intern
				</span>{" "}
				at SAP. I specialize in building scalable, AI-driven solutions
				and robust software systems, with hands-on experience in both
				machine learning and full-stack development.
			</p>
			<p className="mb-5">
				At SAP, I&apos;m part of the GenAI team, working on cutting-edge
				projects like developing a{" "}
				<span className="font-medium">
					Generative AI-powered digital assistant
				</span>{" "}
				using Python, LangChain, and Azure Databricks. I also fine-tune
				LLMs (like GPT-4 and Llama) and implement Retrieval-Augmented
				Generation (RAG) workflows to enhance enterprise applications.
				Previously, as a{" "}
				<span className="font-medium">Software/Research Intern</span> at
				the University of Alberta, I optimized autonomous navigation
				algorithms and containerized systems using Docker, reducing
				setup time by 50%.
			</p>
			<p className="mb-5">
				My technical toolkit includes{" "}
				<span className="font-medium">
					Python, Java, C++, and JavaScript/TypeScript
				</span>
				, along with frameworks like{" "}
				<span className="font-medium">PyTorch, React, and Next.js</span>
				. I&apos;m proficient in building RESTful APIs, designing CI/CD
				pipelines, and working with databases like{" "}
				<span className="font-medium">PostgreSQL and MongoDB</span>.
				I&apos;m particularly passionate about the intersection of AI
				and software engineering, where I can leverage machine learning
				to solve real-world problems.
			</p>
			<p className="mb-5">
				I&apos;m currently open to internship opportunities in{" "}
				<span className="font-medium">
					Software Engineering (SWE), Machine Learning Engineering
					(MLE), and Data Analytics (DA)
				</span>
				. I thrive in collaborative environments where I can apply my
				technical skills to create impactful solutions while
				continuously learning and growing. If you&apos;re looking for
				someone who can bridge the gap between AI and software
				development, let&apos;s connect!
			</p>
		</motion.section>
	);
}
