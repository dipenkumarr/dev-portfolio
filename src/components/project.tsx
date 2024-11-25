"use client";

import { projectsData } from "@/lib/data";
import Image from "next/image";
import { FaExternalLinkAlt, FaGlobe, FaLink } from "react-icons/fa";
import { useState } from "react";

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
		<section className="bg-gray-100 flex flex-col max-w-[42rem] border border-black/5 overflow-hidden rounded-2xl mt-4 sm:mt-0 h-full hover:bg-gray-200 transition-all dark:bg-white/10 dark:hover:bg-white/15 dark:text-gray-50 dark:border-white/10">
			<div
				className="relative w-full h-[300px] overflow-hidden cursor-pointer group"
				onClick={() => setIsModalOpen(true)}
			>
				<Image
					src={imageUrl}
					alt={`${title} project screenshot`}
					fill
					sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
					priority
					className="object-cover hover:scale-105 transition-transform duration-500"
					quality={95}
				/>
				<div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
					<span className="text-white text-sm">
						Click to view full image
					</span>
				</div>
			</div>

			<ImageModal
				isOpen={isModalOpen}
				onClose={() => setIsModalOpen(false)}
				imageUrl={imageUrl}
				title={title}
			/>

			<div className="p-6 sm:p-8 flex flex-col flex-grow">
				<h3 className="text-2xl font-semibold">{title}</h3>
				<p className="mt-2 leading-relaxed text-gray-800 dark:text-white/70">
					{description}
				</p>

				<div className="flex gap-3 items-center my-6">
					<a
						href={githubUrl}
						target="_blank"
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

				<ul className="flex flex-wrap mt-auto gap-2">
					{tags.map((tag, index) => (
						<li
							key={index}
							className="bg-black/70 px-3 py-1 text-sm uppercase tracking-wider text-white rounded-full dark:text-white/80"
						>
							{tag}
						</li>
					))}
				</ul>
			</div>
		</section>
	);
}

function ImageModal({
	isOpen,
	onClose,
	imageUrl,
	title,
}: {
	isOpen: boolean;
	onClose: () => void;
	imageUrl: string;
	title: string;
}) {
	if (!isOpen) return null;

	return (
		<div
			className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 z-[1000]"
			onClick={onClose}
		>
			<div className="relative max-w-7xl w-full max-h-[90vh] flex items-center justify-center">
				<Image
					src={imageUrl}
					alt={title}
					width={1920}
					height={1080}
					className="object-contain max-h-[90vh] rounded-lg"
					quality={100}
				/>
				<button
					onClick={onClose}
					className="absolute top-4 right-4 text-white hover:text-gray-300"
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
				</button>
			</div>
		</div>
	);
}
