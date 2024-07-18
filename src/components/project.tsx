"use client";

import { projectsData } from "@/lib/data";

type ProjectProps = (typeof projectsData)[number];

export default function Project({
	title,
	description,
	tags,
	githubUrl,
	liveUrl,
}: ProjectProps) {
	return (
		<section className="bg-gray-100 flex flex-col max-w-[42rem] border border-black/5 overflow-hidden p-6 sm:pr-8 rounded-2xl mt-4 sm:mt-0 h-full hover:bg-gray-200 transition-all">
			<h3 className="text-2xl font-semibold">{title}</h3>
			<p className="mt-2 leading-relaxed text-gray-800">{description}</p>
			<div className="flex gap-3 items-center my-6 ">
				<a
					href={githubUrl}
					target="_blank"
					className="bg-slate-800 text-white text-base px-5 py-2 rounded-full hover:bg-slate-700 transition-all"
				>
					GitHub
				</a>
				{liveUrl.length > 0 ? (
					<a
						href={liveUrl}
						target="_blank"
						className="bg-slate-800 text-white text-base px-6 py-2 rounded-full hover:bg-slate-700 transition-all"
					>
						Live
					</a>
				) : (
					""
				)}
			</div>
			<ul className="flex flex-wrap mt-4 sm:mt-auto gap-2 ">
				{tags.map((tag, index) => (
					<li
						key={index}
						className="bg-black/70 px-3 py-1 text-sm uppercase tracking-wider text-white rounded-full"
					>
						{tag}
					</li>
				))}
			</ul>
		</section>
	);
}
