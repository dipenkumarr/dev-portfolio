"use client";
import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/actions/sendEmail";
import SubmitBtn from "./submit-btn";
import toast from "react-hot-toast";

export default function Contacts() {
	const { ref } = useSectionInView("About & Contact");

	return (
		<motion.section
			id="contact"
			className="w-full text-center scroll-mt-28"
			initial={{ opacity: 0, y: 50 }}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5 }}
			viewport={{ once: true }}
			ref={ref}
		>
			<SectionHeading>Contact Me</SectionHeading>
			<p className="text-gray-700 sm:text-lg mt-6 mb-10 dark:text-white/80">
				Please contact me directly at{" "}
				<a
					href="mailto:dipenkum@ualberta.ca"
					className="underline text-gray-900 dark:text-white/90"
				>
					dipenkum@ualberta.ca
				</a>{" "}
				or through the form below.
			</p>
			<form
				className="flex flex-col space-y-3 dark:text-black/80"
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
					className="h-14 p-4 rounded-xl border-2 border-black/30 bg-inherit outline-gray-700 dark:bg-inherit dark:focus:outline-2 transition-all dark:border-white/60 dark:text-gray-100 font-sf-pro-expanded-regular"
					placeholder="Your Email"
				/>
				<textarea
					className="min-h-52 max-h-80 p-4 rounded-xl border-2 bg-inherit border-black/30 outline-gray-700 dark:bg-inherit dark:focus:outline-2 transition-all dark:border-white/60 dark:text-gray-100 font-sf-pro-expanded-regular resize-y"
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
