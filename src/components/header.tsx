"use client";
import { useActiveSection } from "@/context/active-section-context";
import { links } from "@/lib/data";
import clsx from "clsx";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

export default function Header() {
	const { activeSection, setActiveSection, setTimeOfLastClick } =
		useActiveSection();
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	return (
		<header className="z-[999] relative">
			{/* Header background - responsive width */}
			<motion.div
				className="fixed mt-2 top-0 left-1/2 -translate-x-1/2 h-[4.5rem] w-[95%] max-w-[40rem] min-w-[20rem] rounded-full border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[40rem] sm:rounded-full dark:bg-gray-950/80 dark:border-black/30 hidden lg:block"
				initial={{ y: -100, x: "-50%", opacity: 0 }}
				animate={{ y: 0, x: "-50%", opacity: 1 }}
				transition={{
					type: "spring",
					stiffness: 80,
					damping: 18,
					mass: 0.7,
					ease: "easeInOut",
				}}
			></motion.div>

			{/* Mobile menu button */}
			<button
				className="lg:hidden fixed top-3 right-4 z-[1000] p-2 text-gray-700 dark:text-gray-300 rounded-full backdrop-blur-sm"
				onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
			>
				{isMobileMenuOpen ? <HiX size={24} /> : <HiMenu size={24} />}
			</button>

			{/* Desktop navigation */}
			<nav className="fixed mt-2 top-[0.15rem] left-1/2 h-12 -translate-x-1/2 p-2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0 hidden lg:flex">
				<ul className="flex w-full flex-wrap items-center justify-center gap-x-1 gap-y-1 text-[0.85rem] font-medium text-gray-600 sm:text-[0.9rem] sm:flex-nowrap sm:gap-x-3 lg:gap-x-5">
					{links.map((link) => (
						<motion.li
							key={link.hash}
							className="h-3/4 flex items-center justify-center relative dark:text-gray-400 dark:hover:text-gray-200"
							initial={{ y: -100, opacity: 0 }}
							animate={{ y: 0, opacity: 1 }}
							transition={{
								type: "spring",
								stiffness: 90,
								damping: 20,
								mass: 0.7,
								ease: "easeInOut",
							}}
						>
							<Link
								href={link.hash}
								className={clsx(
									"flex items-center justify-center w-full px-2 py-2 sm:px-3 sm:py-3 hover:text-gray-950 transition dark:text-gray-400 dark:hover:text-gray-300 whitespace-nowrap",
									{
										"text-black dark:text-white":
											activeSection === link.name,
									}
								)}
								onClick={(e) => {
									if (link.hash === "#home") {
										e.preventDefault();
										window.scrollTo({
											top: 0,
											behavior: "smooth",
										});
									}
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
											stiffness: 120,
											damping: 18,
											mass: 0.7,
											ease: "easeInOut",
										}}
									></motion.span>
								)}
							</Link>
						</motion.li>
					))}
				</ul>
			</nav>

			{/* Mobile menu */}
			<AnimatePresence>
				{isMobileMenuOpen && (
					<motion.div
						className="lg:hidden fixed inset-0 z-[999] bg-white dark:bg-gray-950 flex flex-col items-center justify-center bg-opacity-90 dark:bg-opacity-90 backdrop-blur-sm"
						initial={{ x: "100%", opacity: 0 }}
						animate={{ x: 0, opacity: 1 }}
						exit={{ x: "100%", opacity: 0 }}
						transition={{
							type: "spring",
							stiffness: 90,
							damping: 12,
							mass: 0.7,
							ease: "easeInOut",
						}}
					>
						<motion.ul
							className="flex flex-col items-center gap-6 text-lg"
							initial={{ opacity: 0, y: 0 }}
							animate={{ opacity: 1, y: 0 }}
							exit={{ opacity: 0, y: 0 }}
							transition={{
								type: "spring",
								stiffness: 90,
								damping: 12,
								mass: 0.4,
								delay: 0.05,
							}}
						>
							{links.map((link, index) => (
								<motion.li
									key={link.hash}
									initial={{ opacity: 0, x: 30 }}
									animate={{ opacity: 1, x: 0 }}
									exit={{ opacity: 0, x: 30 }}
									transition={{
										type: "spring",
										stiffness: 80,
										damping: 18,
										mass: 0.4,
										delay: 0.15,
									}}
								>
									<Link
										href={link.hash}
										className={clsx(
											"px-4 py-2 hover:text-gray-950 transition-colors dark:hover:text-gray-200 text-center",
											{
												"font-medium text-gray-950 dark:text-white":
													activeSection === link.name,
												"text-gray-600 dark:text-gray-400":
													activeSection !== link.name,
											}
										)}
										onClick={(e) => {
											if (link.hash === "#home") {
												e.preventDefault();
												window.scrollTo({
													top: 0,
													behavior: "smooth",
												});
											}
											setActiveSection(link.name);
											setTimeOfLastClick(Date.now());
											setIsMobileMenuOpen(false);
										}}
									>
										{link.name}
									</Link>
								</motion.li>
							))}
						</motion.ul>
					</motion.div>
				)}
			</AnimatePresence>
		</header>
	);
}
