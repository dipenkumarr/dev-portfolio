"use client";

import { useActiveSection } from "@/context/active-section-context";
import { links } from "@/lib/data";
import clsx from "clsx";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

export default function Header() {
	const { activeSection, setActiveSection, setTimeOfLastClick } =
		useActiveSection();

	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	return (
		<header className="z-[999] relative">
			<motion.div
				className="fixed mt-2 top-0 left-1/2 -translate-x-1/2 h-[4.5rem] w-[95%] rounded-full border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[38rem] sm:rounded-full dark:bg-gray-950/80 dark:border-black/30 md:block hidden"
				initial={{ y: -100, x: "-50%", opacity: 0 }}
				animate={{ y: 0, x: "-50%", opacity: 1 }}
			></motion.div>

			{/* Mobile menu button */}
			<button
				className="md:hidden fixed top-3 right-4 z-[1000] p-2 text-gray-700 dark:text-gray-300"
				onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
			>
				{isMobileMenuOpen ? <HiX size={24} /> : <HiMenu size={24} />}
			</button>

			{/* Desktop navigation */}
			<nav className="fixed mt-2 top-[0.15rem] left-1/2 h-12 -translate-x-1/2 p-4 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0 md:flex hidden">
				<ul className="flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-600 sm:w-[initial] sm:flex-nowrap sm:gap-5">
					{links.map((link) => (
						<motion.li
							key={link.hash}
							className="h-3/4 flex items-center justify-center relative dark:text-gray-400 dark:hover:text-gray-200"
							initial={{ y: -100, opacity: 0 }}
							animate={{ y: 0, opacity: 1 }}
						>
							<Link
								href={link.hash}
								className={clsx(
									"flex items-center justify-center w-full px-3 py-3 hover:text-gray-950 transition dark:text-gray-400 dark:hover:text-gray-300",
									{
										"text-black dark:text-white":
											activeSection === link.name,
									}
								)}
								onClick={() => {
									setActiveSection(link.name);
									setTimeOfLastClick(Date.now());
								}}
							>
								{link.name}

								{link.name === activeSection && (
									<motion.span
										className="bg-gray-200/80 rounded-full absolute inset-0 -z-10 dark:bg-gray-700"
										layoutId="activeSection"
										transition={{
											type: "spring",
											stiffness: 380,
											damping: 30,
										}}
									></motion.span>
								)}
							</Link>
						</motion.li>
					))}
				</ul>
			</nav>

			{/* Mobile menu */}
			{isMobileMenuOpen && (
				<motion.div
					className="md:hidden fixed inset-0 z-[999] bg-white dark:bg-gray-950 flex flex-col items-center justify-center bg-opacity-85 dark:bg-opacity-90 backdrop-blur-sm"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
				>
					<ul className="flex flex-col items-center gap-5 text-lg">
						{links.map((link) => (
							<li key={link.hash}>
								<Link
									href={link.hash}
									className={clsx(
										"px-4 py-2 hover:text-gray-950 transition-colors dark:hover:text-gray-200",
										{
											"font-medium text-gray-950 dark:text-white":
												activeSection === link.name,
											"text-gray-600 dark:text-gray-400":
												activeSection !== link.name,
										}
									)}
									onClick={() => {
										setActiveSection(link.name);
										setTimeOfLastClick(Date.now());
										setIsMobileMenuOpen(false);
									}}
								>
									{link.name}
								</Link>
							</li>
						))}
					</ul>
				</motion.div>
			)}
		</header>
	);
}
