"use client";
import { useActiveSection } from "@/context/active-section-context";
import { links } from "@/lib/data";
import clsx from "clsx";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import ThemeSwitch from "./theme-switch";
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
				className="fixed mt-2 top-0 left-1/2 -translate-x-1/2 h-[4.5rem] w-[95%] max-w-[42rem] min-w-[20rem] rounded-full border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:rounded-full dark:bg-gray-950/80 dark:border-black/30 hidden lg:block"
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
			<nav className="fixed mt-2 top-[0.15rem] left-1/2 h-12 -translate-x-1/2 p-2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0 hidden lg:flex w-[95%] max-w-[56rem]">
				<ul className="flex w-full flex-nowrap items-center justify-center gap-x-2 text-[0.85rem] font-medium text-gray-600 sm:text-[0.9rem] lg:gap-x-4">
					{links.map((link) => (
						<motion.li
							key={link.hash}
							className="h-3/4 flex items-center justify-center relative dark:text-gray-400 dark:hover:text-gray-200 shrink-0"
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
									"flex items-center justify-center w-full px-2 py-2 sm:px-3 sm:py-3 hover:text-gray-950 transition dark:text-gray-400 dark:hover:text-gray-300 whitespace-nowrap shrink-0",
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
					<motion.li
						className="ml-2 shrink-0"
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
						<ThemeSwitch
							variant="inline"
							ariaLabel="Toggle theme"
						/>
					</motion.li>
				</ul>
			</nav>

			{/* Mobile bottom-sheet menu */}
			<AnimatePresence>
				{isMobileMenuOpen && (
					<>
						{/* Backdrop */}
						<motion.div
							className="lg:hidden fixed inset-0 z-[990] bg-black/40 backdrop-blur-[2px]"
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							onClick={() => setIsMobileMenuOpen(false)}
						/>
						{/* Sheet */}
						<motion.div
							className="lg:hidden fixed bottom-0 left-0 right-0 z-[991] bg-white/95 dark:bg-gray-950/95 rounded-t-2xl shadow-xl p-4 pb-6 border-t border-gray-200 dark:border-gray-800"
							initial={{ y: "100%" }}
							animate={{ y: 0 }}
							exit={{ y: "100%" }}
							transition={{
								type: "spring",
								stiffness: 220,
								damping: 22,
								mass: 0.6,
							}}
						>
							<div className="mx-auto w-full max-w-md">
								<div className="mx-auto mb-3 h-1.5 w-12 rounded-full bg-gray-300 dark:bg-gray-700" />
								<motion.ul
									className="grid grid-cols-2 gap-2 text-[1rem]"
									initial={{ opacity: 0 }}
									animate={{ opacity: 1 }}
									exit={{ opacity: 0 }}
									transition={{ duration: 0.15 }}
								>
									{links.map((link, index) => {
										const isLastOdd =
											links.length % 2 !== 0 &&
											index === links.length - 1;
										return (
											<li
												key={link.hash}
												className={clsx("text-center", {
													"col-span-2": isLastOdd,
												})}
											>
												<Link
													href={link.hash}
													className={clsx(
														"block rounded-md px-2 py-3 transition-colors",
														{
															"font-medium text-gray-950 dark:text-white":
																activeSection ===
																link.name,
															"text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100":
																activeSection !==
																link.name,
														}
													)}
													onClick={(e) => {
														if (
															link.hash ===
															"#home"
														) {
															e.preventDefault();
															window.scrollTo({
																top: 0,
																behavior:
																	"smooth",
															});
														}
														setActiveSection(
															link.name
														);
														setTimeOfLastClick(
															Date.now()
														);
														setIsMobileMenuOpen(
															false
														);
													}}
												>
													{link.name}
												</Link>
											</li>
										);
									})}
								</motion.ul>
							</div>
						</motion.div>
					</>
				)}
			</AnimatePresence>
		</header>
	);
}
