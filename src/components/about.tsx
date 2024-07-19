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
			<p className="mb-3">
				I am{" "}
				<span className="font-semibold">Dipen Kumar Maheshwari</span>,
				currently pursuing a{" "}
				<span className="font-semibold">
					Bachelor of Science Honors in Computer Science{" "}
				</span>
				at the{" "}
				<span className="font-medium">University of Alberta</span>. My
				education has equipped me with a strong foundation in topics
				like{" "}
				<span className="font-medium">
					Python and Systems Programming
				</span>
				,<span className="font-medium"> Databases</span>,
				<span className="font-medium"> Machine Learning</span>,
				<span className="font-medium"> AI</span>,
				<span className="font-medium">
					{" "}
					Data Structures & Algorithms
				</span>
				, and more. I have hands-on experience as a{" "}
				<span className="font-medium">
					Summer Software/Research Intern
				</span>
				at the{" "}
				<span className="font-medium">
					University of Alberta's ANCL LAB
				</span>
				, where I improved the structure and readability of code for
				autonomous navigation algorithms using
				<span className="font-medium"> ROS</span>,
				<span className="font-medium"> Linux</span>, and
				<span className="font-medium"> C++</span>. I also initiated the
				containerization of applications using
				<span className="font-medium"> Docker</span>, which
				significantly reduced setup time for team members.
			</p>
			<p className="mb-3">
				My core stack includes{" "}
				<span className="font-medium">
					React, Next.js, Node.js, and MongoDB
				</span>
				, and I am also proficient with{" "}
				<span className="font-medium">TypeScript</span>,
				<span className="font-medium">Prisma</span>, and other modern
				web development tools. I have built full-stack applications like
				<span className="font-medium"> Bloom.ai</span> and{" "}
				<span className="font-medium">BlogSpot</span>, leveraging
				technologies like{" "}
				<span className="font-medium"> TailwindCSS</span>,
				<span className="font-medium"> Appwrite</span>, and advanced NLP
				models from
				<span className="font-medium"> Hugging Face</span>.
			</p>
			<p className="mb-3">
				I am passionate about the problem-solving aspect of programming
				and love the feeling of finding solutions to complex problems.
				My projects often involve creating responsive, user-friendly
				interfaces and implementing secure, efficient back-end systems.
				I am currently seeking
				<span className="font-semibold">
					{" "}
					Software Developer Internships
				</span>
				. I am always eager to learn new technologies and improve my
				skills.
			</p>
		</motion.section>
	);
}
