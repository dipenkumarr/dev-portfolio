"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { FaPaperPlane } from "react-icons/fa";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { format } from "path";
import { sendEmail } from "@/actions/sendEmail";
import { useFormStatus } from "react-dom";
import { LuLoader2 } from "react-icons/lu";
import SubmitBtn from "./submit-btn";
import toast from "react-hot-toast";

export default function Contacts() {
	const { ref } = useSectionInView("Contact");

	return (
		<motion.section
			id="contact"
			className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center scroll-mt-28"
			initial={{ opacity: 0, y: 50 }}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5 }}
			viewport={{ once: true }}
			ref={ref}
		>
			<SectionHeading>Contact Me</SectionHeading>
			<p className="text-gray-700 sm:text-lg -mt-3 dark:text-white/80">
				Please contact me directly at{" "}
				<a
					href="mailto:dipenkum@ualberta.ca"
					className="underline text-gray-900 dark:text-white/90"
				>
					dipenkum@ualberta.ca
				</a>{" "}
				or through the form below.{" "}
			</p>

			<form
				className="mt-10 flex flex-col dark:text-black/80"
				action={async (FormData) => {
					const { data, error } = await sendEmail(FormData);
					if (error) {
						toast.error(error);
						return;
					} else {
						toast.success("Message sent successfully!");
					}
				}}
			>
				<input
					type="email"
					required
					maxLength={500}
					name="senderEmail"
					className="h-14 p-4 rounded-xl border border-black/10 outline-black dark:bg-white/85 dark:focus:bg-white transition-all dark:outline-none"
					placeholder="You Email"
				/>
				<textarea
					className="min-h-52 max-h-96 my-3 px-4 rounded-xl border border-black/10 p-4 outline-black dark:bg-white/85 dark:focus:bg-white transition-all dark:outline-none"
					placeholder="Your Message"
					required
					maxLength={5000}
					name="senderMessage"
				/>
				<SubmitBtn />
			</form>
		</motion.section>
	);
}
