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
				Hello! I&apos;m Dipen Kumar Maheshwari, a passionate and driven
				Computer Science Honors student at the University of Alberta,
				currently pursuing a Bachelor of Science degree. With a solid
				academic foundation and hands-on experience, I specialize in
				software development, particularly in full-stack web development
				and systems programming.
			</p>
			<p className="mb-5">
				I&apos;ve had the privilege of interning as a Software/Research
				Intern at the University of Alberta&apos;s ANCL Lab, where I
				improved autonomous navigation algorithms and reduced
				development setup time by 50% using Docker, ROS, Linux, and C++.
				This experience taught me the importance of scalable, efficient
				solutions, and I applied these lessons to my projects, including
				full-stack applications like Bloom.ai and UniWays.
			</p>
			<p className="mb-5">
				My core technical stack includes React, Next.js, Node.js, and
				MongoDB, with additional proficiency in TypeScript, Prisma, and
				modern tools like TailwindCSS and Docker. I have a passion for
				problem-solving and enjoy working on complex challenges that
				require robust, scalable back-end systems paired with intuitive,
				user-friendly front-ends. My work often involves integrating
				real-time data and ensuring security and performance in
				everything I build.
			</p>

			<p className="mb-5">
				Currently,{" "}
				<span className="underline underline-offset-4">
					I&apos;m seeking Software Engineering Internships{" "}
				</span>
				where I can continue to develop my skills, contribute to
				meaningful projects, and work in dynamic teams. I am always
				eager to learn and grow, constantly exploring new technologies
				to enhance my development toolkit.
			</p>
		</motion.section>
	);
}
