"use client";

import { useActiveSection } from "@/context/active-section-context";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { HiDownload } from "react-icons/hi";
import { useInView } from "react-intersection-observer";

export default function Intro() {
	const { ref } = useSectionInView("Home", 0.9, true);
	const { setActiveSection, setTimeOfLastClick } = useActiveSection();

	return (
		<section
			className="mb-28 max-w-[54rem] text-center sm:mb-96 scroll-mt-[100rem] 2xl:my-96"
			// className="h-screen flex flex-col items-center justify-center max-w-[54rem] text-center"
			id="home"
			ref={ref}
		>
			<div className="flex items-center justify-center">
				<div className="relative">
					<motion.div
						initial={{ scale: 0, opacity: 0 }}
						animate={{ scale: 1, opacity: 1 }}
						transition={{ type: "tween", duration: 0.2 }}
					>
						<Image
							src="/intro-image.png"
							alt="image"
							width="192"
							height="192"
							className="h-28 w-28 rounded-full object-cover shadow-xl border-[0.35rem] border-white"
							priority
						/>
					</motion.div>
					<motion.span
						className="absolute bottom-0 right-0 text-4xl"
						initial={{ scale: 0, opacity: 0 }}
						animate={{ scale: 1, opacity: 1 }}
						transition={{
							type: "spring",
							duration: 0.7,
							stiffness: 125,
							delay: 0.1,
						}}
					>
						👋
					</motion.span>
				</div>
			</div>

			<motion.h1
				className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
				initial={{ opacity: 0, y: 100 }}
				animate={{ opacity: 1, y: 0 }}
			>
				<span className="font-bold">Hello, I'm Dipen Kumar.</span> I'm a{" "}
				<span className="font-bold">Computer Science Honors </span>
				Student at the{" "}
				<span className="font-bold">University of Alberta.</span> I
				enjoy learning & building apps.
			</motion.h1>

			<motion.div
				className="flex flex-col sm:flex-row items-center justify-center gap-3 px-4 text-sm md:text-lg font-medium"
				initial={{ opacity: 0, y: 100 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ delay: 0.1 }}
			>
				<Link
					href="#contact"
					className="group bg-gray-900 text-white px-7 py-3 flex items-center justify-center gap-2 rounded-full outline-none hover:scale-105 active:scale-95 hover:bg-gray-950 transition-all border border-black/20 dark:border-white/20"
					onClick={() => {
						setActiveSection("Contact");
						setTimeOfLastClick(Date.now());
					}}
				>
					Contact me here{" "}
					<BsArrowRight className="opacity-80 group-hover:translate-x-1 transition-all" />
				</Link>

				<a
					className="group bg-white text-black border border-black/20 w-52 md:w-auto px-7 py-3 flex items-center cursor-pointer justify-center gap-2 rounded-full outline-none hover:scale-105 active:scale-95 transition-all dark:bg-white/10 dark:text-gray-50 dark:border-white/10"
					href="/Dipen_Resume.pdf"
					download
				>
					Download Resume{" "}
					<HiDownload className="opacity-80 group-hover:translate-y-1 transition-all" />
				</a>

				<div className="flex gap-3">
					<a
						className="bg-white text-black text-2xl border border-black/20 p-4 flex items-center justify-center gap-2 rounded-full cursor-pointer outline-none hover:scale-110 active:scale-100 transition-all dark:bg-white/10 dark:text-gray-50 dark:border-white/10"
						href="https://linkedin.com/in/dipen-kumar"
						target="_blank"
					>
						<BsLinkedin />
					</a>

					<a
						className="bg-white text-black text-2xl border border-black/20 p-4 flex items-center justify-center gap-2 rounded-full cursor-pointer outline-none hover:scale-110 active:scale-100 transition-all dark:bg-white/10 dark:text-gray-50 dark:border-white/10"
						href="https://github.com/dipenkumarr"
						target="_blank"
					>
						<FaGithub />
					</a>
				</div>
			</motion.div>
		</section>
	);
}
