import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaGraduationCap, FaReact, FaResearchgate } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";

export const links = [
	{
		name: "Home",
		hash: "#home",
	},
	{
		name: "About",
		hash: "#about",
	},
	{
		name: "Projects",
		hash: "#projects",
	},
	{
		name: "Skills",
		hash: "#skills",
	},
	{
		name: "Experience",
		hash: "#experience",
	},
	{
		name: "Contact",
		hash: "#contact",
	},
] as const;

export const experiencesData = [
	{
		title: "Bachelor of Science Honors in Computer Science",
		location: "University of Alberta, Edmonton, CA",
		description:
			"Pursuing a Bachelor of Science Honors in Computer Science with a GPA of 3.6. Relevant coursework includes Python and Systems Programming, Databases, Machine Learning, AI, Data Structures & Algorithms, and more.",
		icon: React.createElement(FaGraduationCap),
		date: "Sep 2022 - May 2026",
	},
	{
		title: "Summer Software/Research Intern",
		location: "University of Alberta - ANCL LAB, Edmonton, AB",
		description:
			"Improved the structure and readability of code for autonomous navigation algorithms using ROS, Linux, and C++. Initiated the containerization of applications using Docker, reducing setup time by more than 50%. Utilized Git and GitHub for version control and collaboration.",
		icon: React.createElement(FaResearchgate),
		date: "May 2024 - June 2024",
	},
] as const;

export const projectsData = [
	{
		title: "Bloom.ai",
		description:
			"Built Bloom.ai, a full-stack web application leveraging Next.js, React, and TypeScript, that facilitates anonymous feedback and incorporates AI-powered message suggestions using Google’s Gemini AI through Vercel AI SDK. Implemented robust backend with MongoDB for data persistence, custom server middleware for enhanced security, and Zod for type validation, while crafting a responsive UI using Tailwind CSS and shadcn/ui.",
		tags: [
			"Next.js",
			"React",
			"TypeScript",
			"TailwindCSS",
			"MongoDB",
			"Zod",
			"GeminiAI",
		],
		githubUrl: "https://github.com/dipenkumarr/bloom.ai",
		liveUrl: "https://bloom-ai-three.vercel.app/",
	},
	{
		title: "BlogSpot",
		description:
			"Developed a full-stack blogging platform using React for the frontend, integrated with Appwrite for user authentication and data storage. Implemented real-time user authentication flow using Appwrite’s auth service, allowing for secure login, logout, and user data retrieval.",
		tags: ["React", "Redux-Toolkit", "HTML", "Tailwind CSS", "Appwrite"],
		githubUrl: "https://github.com/dipenkumarr/BlogSpot",
		liveUrl: "https://blog-spot-drab.vercel.app/",
	},
	{
		title: "AudioScribe",
		description:
			"Developed a dynamic web application leveraging React and Web Workers for real-time audio transcription and translation, utilizing advanced NLP models from Hugging Face for accurate and efficient language processing. Designed a user-friendly interface with responsive design, allowing users to easily transcribe and translate audio content with minimal delay and maximum accuracy.",
		tags: [
			"React",
			"HTML",
			"Tailwind CSS",
			"Hugging Face Models",
			"Transformers",
		],
		githubUrl: "https://github.com/dipenkumarr/AudioScribe",
		liveUrl: "https://audio-scribe.vercel.app/",
	},
	{
		title: "Classification on NotMNIST-RGB and NotMNIST DL using CNN",
		description:
			"Developed and implemented a modified LeNet CNN for classification on the RGB NotMNIST dataset, optimizing architecture and weight initialization. Optimized object detection using sliding window detection on the NotMNIST-DL dataset, achieving a detection accuracy of 82.8% and classification accuracy of 97.53%.",
		tags: ["Python", "PyTorch"],
		githubUrl: "https://github.com/dipenkumarr/CNN-Classification",
		liveUrl: "",
	},
] as const;

export const skillsData = [
	"Python",
	"JavaScript",
	"TypeScript",
	"C/C++",
	"SQL (MySQL, SQLite)",
	"HTML",
	"CSS",
	"React.js",
	"Next.js",
	"Node.js",
	"Express.js",
	"Tailwind CSS",
	"Numpy",
	"PyTorch",
	"Git",
	"GitHub",
	"VS Code",
	"Redux-Toolkit",
	"Linux/Unix",
	"Docker",
	"MongoDB",
	"Java",
] as const;
