import React from "react";
import { FaBriefcase, FaGraduationCap, FaResearchgate } from "react-icons/fa";

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
		name: "Experience",
		hash: "#experience",
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
		name: "Contact",
		hash: "#contact",
	},
] as const;

export const experiencesData = [
	{
		title: "Machine Learning Engineer Intern",
		location: "SAP, Vancouver, BC",
		description:
			"Developing an unsupervised NLP model using SBERT transformers to automate ticket categorization, targeting a 60% reduction in approval time. Performing extensive EDA on Azure Databricks and integrating models into scalable API endpoints.",
		icon: "/sap-logo.jpg",
		// icon: React.createElement(FaBriefcase),
		date: "Jan 2025 - Present",
	},
	{
		title: "Software/Research Intern",
		location: "University of Alberta - ANCL Lab, Edmonton, AB",
		description:
			"Led Docker containerization of autonomous navigation systems, reducing environment setup time by 50%. Refactored ROS navigation algorithms (C++/Python) and enhanced version control with Git/GitHub, decreasing merge conflicts by 40%.",
		// icon: React.createElement(FaBriefcase),
		icon: "/ua-logo.png",
		date: "May 2024 - June 2024",
	},
	{
		title: "BSc Honors in Computer Science",
		location: "University of Alberta, Edmonton, AB",
		description:
			"Relevant Coursework: Software Engineering, Data Structures & Algorithms, Relational Database Management, Machine Learning, Artificial Intelligence.",
		// icon: React.createElement(FaGraduationCap),
		icon: "/ua-logo.png",
		date: "Sep 2022 - Dec 2026",
	},
] as const;

export const projectsData = [
	{
		title: "SpotLotto - Event Lottery System",
		description:
			"Developed an Android-based event lottery application using Java and Firebase, designed to streamline event registration through a fair, automated lottery system. Implemented Firebase Firestore for real-time data management, Firebase Authentication for secure user access, and Firebase Cloud Messaging (FCM) for instant push notifications. Key features include a multi-role user system (entrants, organizers, admins), QR code integration for event access, and geolocation-based event registration. Achieved 95% test coverage through JUnit and test-driven development, ensuring robust functionality and reliability.",
		tags: [
			"Java",
			"Android Studio",
			"Firebase",
			"Firestore",
			"Firebase Authentication",
			"Firebase Cloud Messaging",
			"JUnit",
			"Agile",
			"Git",
			"GitHub",
			"CI/CD",
		],
		githubUrl: "https://github.com/CMPUT301F24ocelot/ocelot-novels",
		liveUrl: "",
		imageUrl: "/SpotLotto.jpeg", // Add an image for SpotLotto in your public folder
	},
	{
		title: "UniWays - Google Hacks Winner",
		description:
			"Led a team of three to develop a full-stack campus navigation app using Next.js, React, and TypeScript, significantly reducing students’ travel time by up to 20% with Google Maps API integration and pathway suggestions. Implemented secure user authentication via Clerk OAuth, enabling secure login and personalized schedules, stored in a Prisma-managed PostgrsSQL database. Designed a user-centric, responsive interface, using TailwindCSS, enhancing user experience with geocoding for precise location mapping.",
		tags: [
			"Next.js",
			"React",
			"TypeScript",
			"Google Maps API",
			"Prisma",
			"PostgreSQL",
			"Clerk",
			"OAuth",
			"TailwindCSS",
		],
		githubUrl: "https://github.com/dipenkumarr/UniWays-GHacks",
		liveUrl: "",
		imageUrl: "/UniWays.jpeg",
	},
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
		imageUrl: "/bloom_ai.jpeg",
	},
	{
		title: "SurfWeb RAG-Based Web Interaction Tool",
		description:
			"Developed a web application that allows users to interact with any website by entering its URL, creating searchable indexes, and enabling chat-based queries using a custom vector and redis database with Upstash. Leveraged Tailwind CSS for UI design and Vercel AI SDK to enhance the user experience, facilitating efficient content retrieval and interaction across diverse websites.",
		tags: [
			"Next.js",
			"React",
			"TypeScript",
			"TailwindCSS",
			"Vector Database",
			"Redis",
			"Vercel AI SDK",
		],
		githubUrl: "https://github.com/dipenkumarr/SurfWeb-RAG-LLama",
		liveUrl: "https://surf-web.vercel.app/",
		imageUrl: "/SurfWeb.jpeg",
	},
	{
		title: "Classification on NotMNIST-RGB and NotMNIST DL using CNN",
		description:
			"Developed and implemented a modified LeNet CNN for classification on the RGB NotMNIST dataset, optimizing architecture and weight initialization. Optimized object detection using sliding window detection on the NotMNIST-DL dataset, achieving a detection accuracy of 82.8% and classification accuracy of 97.53%.",
		tags: ["Python", "PyTorch"],
		githubUrl: "https://github.com/dipenkumarr/CNN-Classification",
		liveUrl: "",
		imageUrl: "/CNN.jpeg",
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
		imageUrl: "/AudioScribe.jpeg",
	},
	{
		title: "BlogSpot",
		description:
			"Developed a full-stack blogging platform using React for the frontend, integrated with Appwrite for user authentication and data storage. Implemented real-time user authentication flow using Appwrite’s auth service, allowing for secure login, logout, and user data retrieval.",
		tags: ["React", "Redux-Toolkit", "HTML", "Tailwind CSS", "Appwrite"],
		githubUrl: "https://github.com/dipenkumarr/BlogSpot",
		liveUrl: "https://blog-spot-drab.vercel.app/",
		imageUrl: "/Blog.jpeg",
	},
	{
		title: "ChatPDF",
		description:
			"Developed ChatPDF, a Streamlit web app powered by LangChain and Hugging Face models. Enabled users to upload PDFs, ask context-aware questions, and receive informative answers. Utilized NLP techniques for efficient information retrieval, enhancing user interaction with PDF documents",
		tags: ["Python", "LangChain", "Hugging Face API", "Streamlit"],
		githubUrl: "https://github.com/dipenkumarr/ChatPDF",
		liveUrl: "",
		imageUrl: "/ChatPDF.jpeg",
	},
] as const;

export const skillsData = [
	// Programming Languages
	"Python",
	"Java",
	"JavaScript",
	"TypeScript",
	"C/C++",
	"SQL",
	"HTML",
	"CSS",

	// Frameworks & Libraries
	"React.js",
	"Next.js",
	"Node.js",
	"Express.js",
	"Flask",
	"PyTorch",
	"LangChain",
	"Pandas",
	"NumPy",
	"Tailwind CSS",
	"JUnit",

	// Tools & Platforms
	"Git",
	"GitHub",
	"Docker",
	"Azure Databricks",
	"Azure DevOps",
	"Firebase",
	"MongoDB",
	"PostgreSQL",
	"MySQL",
	"SQLite",
	"VS Code",
	"Android Studio",
	"Linux/Unix",
] as const;
