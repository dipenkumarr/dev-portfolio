"use client";

import { useActiveSection } from "@/context/active-section-context";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaArrowDown } from "react-icons/fa";

export default function SectionDivider() {
	const { setActiveSection } = useActiveSection();
	return (
		// <motion.div
		// 	className="bg-gray-200 my-24 h-16 w-1 rounded-full hidden sm:block"
		// 	initial={{ opacity: 0, y: 100 }}
		// 	animate={{ opacity: 1, y: 0 }}
		// 	transition={{ delay: 0.1 }}
		// ></motion.div>
		<Link href={"#about"}>
			<motion.button
				className="my-24 p-14 h-16 w-1 rounded-full hidden sm:block animate-bounce"
				onClick={() => setActiveSection("About")}
				initial={{ scale: 0, opacity: 0 }}
				animate={{ scale: 1, opacity: 1 }}
				transition={{ type: "tween", duration: 0.2 }}
			>
				<FaArrowDown />
			</motion.button>
		</Link>
	);
}
