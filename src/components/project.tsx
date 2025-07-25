"use client";

import { projectsData } from "@/lib/data";
import Image from "next/image";
import { FaExternalLinkAlt, FaGlobe, FaLink } from "react-icons/fa";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type ProjectProps = (typeof projectsData)[number] & {
	imageUrl: string;
};

export default function Project({
	title,
	description,
	tags,
	githubUrl,
	liveUrl,
	imageUrl,
}: ProjectProps) {
	const [isModalOpen, setIsModalOpen] = useState(false);

	return (
		<section
			className="bg-gray-100/20 flex flex-col max-w-[42rem] border border-black/20 overflow-hidden rounded-2xl mt-4 sm:mt-0 h-full hover:shadow-2xl transition-all dark:bg-white/10 dark:hover:bg-white/15 dark:text-gray-50 dark:border-white/10 cursor-pointer shadow-lg shadow-gray-500/10"
			onClick={() => setIsModalOpen(true)}
		>
			<div className="p-6 sm:p-8 flex flex-col flex-grow">
				<h3 className="text-2xl font-semibold mb-5">{title}</h3>

				<div className="flex gap-3 items-center mt-auto">
					<a
						href={githubUrl}
						target="_blank"
						onClick={(e) => e.stopPropagation()}
						className="bg-slate-800 text-white text-base px-5 py-2 rounded-full hover:bg-slate-700 transition-all border border-black/20 dark:bg-white/20 dark:text-white dark:hover:bg-black/30 flex items-center gap-2"
					>
						<svg
							className="w-5 h-5"
							fill="currentColor"
							viewBox="0 0 24 24"
							aria-hidden="true"
						>
							<path
								fillRule="evenodd"
								d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
								clipRule="evenodd"
							/>
						</svg>
						GitHub
					</a>
					{liveUrl.length > 0 && (
						<a
							href={liveUrl}
							target="_blank"
							onClick={(e) => e.stopPropagation()}
							className="bg-slate-800 text-white text-base px-6 py-2 rounded-full hover:bg-slate-700 transition-all border border-black/20 dark:bg-white/20 dark:text-white dark:hover:bg-black/30 flex items-center gap-2"
						>
							<svg
								className="w-5 h-5"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
								/>
							</svg>
							Live
						</a>
					)}
				</div>
			</div>

			<ProjectModal
				isOpen={isModalOpen}
				onClose={() => setIsModalOpen(false)}
				title={title}
				description={description}
				tags={tags}
				githubUrl={githubUrl}
				liveUrl={liveUrl}
			/>
		</section>
	);
}

function ProjectModal({
	isOpen,
	onClose,
	title,
	description,
	tags,
	githubUrl,
	liveUrl,
}: {
	isOpen: boolean;
	onClose: () => void;
	title: string;
	description: string;
	tags: readonly string[];
	githubUrl: string;
	liveUrl: string;
}) {
	return (
		<AnimatePresence>
			{isOpen && (
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					transition={{ duration: 0.2 }}
					className="fixed inset-0 bg-black/20 backdrop-blur-md flex items-center justify-center p-4 z-[1000]"
					onClick={onClose}
				>
					<motion.div
						initial={{ scale: 0.95, opacity: 0 }}
						animate={{ scale: 1, opacity: 1 }}
						exit={{ scale: 0.95, opacity: 0 }}
						transition={{ duration: 0.2, ease: "easeOut" }}
						className="relative max-w-4xl w-full bg-white/70 dark:bg-gray-900/80 backdrop-blur-md rounded-xl p-8 max-h-[90vh] overflow-y-auto shadow-2xl border border-white/20 dark:border-white/10"
						onClick={(e) => e.stopPropagation()}
					>
						<h2 className="text-3xl font-bold mb-6 dark:text-white">
							{title}
						</h2>

						<p className="text-gray-900 dark:text-gray-300 mb-8 leading-relaxed">
							{description}
						</p>

						<div className="flex gap-3 items-center mb-8">
							<a
								href={githubUrl}
								target="_blank"
								className="bg-slate-800/90 text-white text-base px-5 py-2 rounded-full hover:bg-slate-700 transition-all border border-black/20 dark:bg-white/20 dark:text-white dark:hover:bg-black/30 flex items-center gap-2 backdrop-blur-sm"
							>
								<svg
									className="w-5 h-5"
									fill="currentColor"
									viewBox="0 0 24 24"
									aria-hidden="true"
								>
									<path
										fillRule="evenodd"
										d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
										clipRule="evenodd"
									/>
								</svg>
								GitHub
							</a>
							{liveUrl.length > 0 && (
								<a
									href={liveUrl}
									target="_blank"
									className="bg-slate-800/90 text-white text-base px-6 py-2 rounded-full hover:bg-slate-700 transition-all border border-black/20 dark:bg-white/20 dark:text-white dark:hover:bg-black/30 flex items-center gap-2 backdrop-blur-sm"
								>
									<svg
										className="w-5 h-5"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
										/>
									</svg>
									Live
								</a>
							)}
						</div>

						<ul className="flex flex-wrap gap-2">
							{tags.map((tag, index) => (
								<motion.li
									key={index}
									initial={{ opacity: 0, y: 20 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ delay: index * 0.1 }}
									className="bg-black/70 px-3 py-1 text-sm uppercase tracking-wider text-white rounded-full dark:text-white/80 backdrop-blur-sm"
								>
									{tag}
								</motion.li>
							))}
						</ul>

						<motion.button
							whileHover={{ scale: 1.1 }}
							whileTap={{ scale: 0.9 }}
							onClick={onClose}
							className="absolute top-6 right-6 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-6 w-6"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M6 18L18 6M6 6l12 12"
								/>
							</svg>
						</motion.button>
					</motion.div>
				</motion.div>
			)}
		</AnimatePresence>
	);
}
