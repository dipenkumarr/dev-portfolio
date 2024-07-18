import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
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
		title: "Graduated bootcamp",
		location: "Miami, FL",
		description:
			"I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
		icon: React.createElement(LuGraduationCap),
		date: "2019",
	},
	{
		title: "Front-End Developer",
		location: "Orlando, FL",
		description:
			"I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
		icon: React.createElement(CgWorkAlt),
		date: "2019 - 2021",
	},
	{
		title: "Full-Stack Developer",
		location: "Houston, TX",
		description:
			"I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
		icon: React.createElement(FaReact),
		date: "2021 - present",
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
	"HTML",
	"CSS",
	"JavaScript",
	"TypeScript",
	"React",
	"Next.js",
	"Node.js",
	"Git",
	"Tailwind",
	"Prisma",
	"MongoDB",
	"Redux",
	"GraphQL",
	"Apollo",
	"Express",
	"PostgreSQL",
	"Python",
	"Django",
	"Framer Motion",
] as const;
