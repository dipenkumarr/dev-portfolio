import React from "react";
import { FaBriefcase, FaGraduationCap, FaResearchgate } from "react-icons/fa";

export const links = [
    {
        name: "Home",
        hash: "#home",
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
    // {
    // 	name: "About",
    // 	hash: "#about",
    // },
    {
        name: "About & Contact",
        hash: "#contact",
    },
] as const;

export const experiencesData = [
    {
        title: "Machine Learning Engineer Intern",
        location: "SAP, Vancouver, BC",
        description: `Engineered an end-to-end data processing and unsupervised NLP pipeline on Azure Databricks (PySpark) to process ~38k raw tickets, reducing message volume by ~85% via FAISS-optimized semantic de-duplication.
      Implemented comprehensive data quality workflows using NLTK/Spacy, reducing noisy data by 15% and significantly improving data consistency for model training.
      Leveraged LLMs (GPT-4o/Gemini) with structured Pydantic outputs to evaluate and categorize tickets, projecting a nearly 60% reduction in manual triage time.
      Prototyped an advanced RAG pipeline using DSPy and ColBERT to enhance an enterprise system, exploring late-interaction retrieval to generate highly accurate summaries from large-scale partner documentation.`,
        icon: "/sap-logo.jpg", // Ensure this image path is correct in your public folder
        date: "Jan 2025 - Present",
    },
    {
        title: "Software/Research Intern",
        location: "University of Alberta - ANCL Lab, Edmonton, AB",
        description: `Led the containerization of autonomous navigation systems using Docker, reducing development environment setup time by 50% and enhancing system reliability.
      Refactored autonomous navigation algorithms in ROS, Linux, C++, and Python, boosting readability and reducing runtime errors.
      Implemented robust Git and GitHub version control practices, including branch protection and pull request reviews, decreasing merge conflicts by 40%.`,
        icon: "/ua-logo.png", // Ensure this image path is correct in your public folder
        date: "May 2024 - June 2024",
    },
    {
        title: "BSc Honors in Computer Science",
        location: "University of Alberta, Edmonton, AB",
        description: `Relevant Coursework: Software Engineering, Data Structures & Algorithms, Relational Database Management, Machine Learning, Artificial Intelligence.`,
        icon: "/ua-logo.png", // Ensure this image path is correct in your public folder
        date: "Sep 2022 - May 2027",
    },
] as const;

export const projectsData = [
    {
        title: "Hooked/ai",
        description: `Built a production-ready, full-stack platform that transforms long-form podcasts into viral short-form videos using a modular AI pipeline.
        Integrated WhisperX for speech-to-text transcription, Cohere Command A for semantic analysis and viral moment detection, and Active Speaker Detection for auto-cropping around the speaker's face.
        Architected GPU-accelerated processing with FastAPI and Modal, coordinated via Inngest queues to handle asynchronous workloads reliably.
        Managed video storage, uploads, and retrieval with AWS S3.`,
        tags: [
            "FastAPI",
            "Next.js",
            "TypeScript",
            "Python",
            "Cohere Command A",
            "SQLite",
            "Modal",
            "AWS S3",
            "Inngest",
            "WhisperX",
            "Active Speaker Detection",
        ],
        githubUrl: "https://github.com/dipenkumarr/hooked-ai",
        liveUrl: "",
        imageUrl: "",
    },
    {
        title: "SpotLotto - Event Lottery System",
        description: `Built an Android application using Java and Firebase to automate event registrations via a fair lottery system, integrating Google ML Kit for QR code scanning and geolocation features.
      Led a 6-member Agile team to design a multi-role user system and implement Firebase Cloud Messaging (FCM) for real-time push notifications, achieving 80% test coverage with JUnit through test-driven development, ensuring robust functionality and reliability.`,
        tags: [
            "Java",
            "Android Studio",
            "Firebase",
            "Firestore",
            "Firebase Authentication",
            "Firebase Cloud Messaging",
            "Google ML Kit",
            "JUnit",
            "Agile",
            "Git",
            "GitHub",
        ],
        githubUrl: "https://github.com/CMPUT301F24ocelot/ocelot-novels",
        liveUrl: "",
        imageUrl: "/SpotLotto.jpeg", // Ensure this image exists in your public folder
    },
    {
        title: "UniWays - GHacks Winner",
        description: `Led a team of three to develop a full-stack campus navigation web application using Next.js, React, and TypeScript, achieving a 20% reduction in estimated student travel time through Google Maps API integration and real-time route optimization.
      Designed robust REST APIs with Prisma and PostgreSQL, incorporating secure OAuth via Clerk for enhanced user authentication and data protection. Crafted a user-centric, responsive interface with TailwindCSS, utilizing geocoding for precise location mapping.`,
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
        imageUrl: "/UniWays.jpeg", // Ensure this image exists in your public folder
    },
    {
        title: "Bloom.ai",
        description: `Built Bloom.ai, a full-stack web application leveraging Next.js, React, and TypeScript, that facilitates anonymous feedback and incorporates AI-powered message suggestions, reducing message composition time by 40% through Google’s Gemini-AI LLM integration via Vercel AI SDK.
      Implemented a secure backend and authentication system using MongoDB and NextAuth, with Zod schema validation for enhanced data integrity and security, while crafting a responsive UI using Tailwind CSS and shadcn/ui.`,
        tags: [
            "Next.js",
            "React",
            "TypeScript",
            "TailwindCSS",
            "MongoDB",
            "Zod",
            "Gemini-AI",
            "Vercel AI SDK",
            "NextAuth",
        ],
        githubUrl: "https://github.com/dipenkumarr/bloom.ai",
        liveUrl: "https://bloom-ai-three.vercel.app/",
        imageUrl: "/bloom_ai.jpeg", // Ensure this image exists in your public folder
    },
    {
        title: "Classification on NotMNIST-RGB and NotMNIST DL using CNN",
        description: `Engineered a convolutional neural network (CNN) deep learning model with a modified LeNet architecture for classification on the RGB NotMNIST dataset, achieving 97.5% accuracy in image classification.
      Optimized object detection using sliding window detection on the NotMNIST-DL dataset, reaching a detection accuracy of 82.8%.`,
        tags: ["Python", "PyTorch", "CNN", "Deep Learning"],
        githubUrl: "https://github.com/dipenkumarr/CNN-Classification",
        liveUrl: "",
        imageUrl: "/CNN.jpeg", // Ensure this image exists in your public folder
    },
    {
        title: "AudioScribe",
        description: `Developed a dynamic web application leveraging React and Web Workers for real-time audio transcription and translation, utilizing advanced NLP models from Hugging Face for accurate and efficient language processing.
      Designed a user-friendly interface with responsive design, allowing users to easily transcribe and translate audio content with minimal delay and maximum accuracy.`,
        tags: [
            "React",
            "HTML",
            "CSS",
            "Tailwind CSS",
            "Hugging Face Models",
            "Transformers",
            "NLP",
        ],
        githubUrl: "https://github.com/dipenkumarr/AudioScribe",
        liveUrl: "https://audio-scribe.vercel.app/",
        imageUrl: "/AudioScribe.jpeg", // Ensure this image exists in your public folder
    },
    // {
    // 	title: "BlogSpot",
    // 	description:
    // 		"Developed a full-stack blogging platform using React for the frontend, integrated with Appwrite for user authentication and data storage. Implemented real-time user authentication flow using Appwrite’s auth service, allowing for secure login, logout, and user data retrieval.",
    // 	tags: ["React", "Redux-Toolkit", "HTML", "Tailwind CSS", "Appwrite"],
    // 	githubUrl: "https://github.com/dipenkumarr/BlogSpot",
    // 	liveUrl: "https://blog-spot-drab.vercel.app/",
    // 	imageUrl: "/Blog.jpeg",
    // },
    // {
    // 	title: "ChatPDF",
    // 	description:
    // 		"Developed ChatPDF, a Streamlit web app powered by LangChain and Hugging Face models. Enabled users to upload PDFs, ask context-aware questions, and receive informative answers. Utilized NLP techniques for efficient information retrieval, enhancing user interaction with PDF documents",
    // 	tags: ["Python", "LangChain", "Hugging Face API", "Streamlit"],
    // 	githubUrl: "https://github.com/dipenkumarr/ChatPDF",
    // 	liveUrl: "",
    // 	imageUrl: "/ChatPDF.jpeg",
    // },
] as const;

export const skillsData = [
    // Programming Languages
    "Python",
    "TypeScript",
    "JavaScript",
    "Go",
    "Java",
    "C/C++",
    "SQL",
    "HTML",
    "CSS",

    // Frameworks & Libraries
    "Next.js",
    "React.js",
    "Node.js",
    "Express.js",
    "FastAPI",
    "PyTorch",
    "LangChain",
    "Pandas",
    "NumPy",
    "Tailwind CSS",

    // Tools & Platforms
    "Git",
    "GitHub",
    "Docker",
    "Azure Databricks",
    "Firebase",
    "MongoDB",
    "PostgreSQL",
    "MySQL",
    "SQLite",
    "VS Code",
    "Android Studio",
    "Linux/Unix",
] as const;
