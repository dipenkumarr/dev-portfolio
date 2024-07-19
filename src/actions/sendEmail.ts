"use server";

import ContactFormEmail from "@/email/contact-form-email";
import React from "react";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (FormData: FormData) => {
	const message = FormData.get("senderMessage");
	const senderEmail = FormData.get("senderEmail");

	if (!message || typeof message !== "string" || message.length > 5000) {
		return {
			error: "Invalid Message",
		};
	}
	if (
		!senderEmail ||
		typeof senderEmail !== "string" ||
		senderEmail.length > 500
	) {
		return {
			error: "Invalid Email",
		};
	}

	let data;
	try {
		data = await resend.emails.send({
			from: "Contact Form <onboarding@resend.dev>",
			to: ["dipenbachani@gmail.com"],
			subject: "Message from portfolio contact form",
			reply_to: senderEmail,
			// text: message,
			react: React.createElement(ContactFormEmail, {
				message,
				senderEmail,
			}),
		});
	} catch (error: any) {
		return {
			error: error.message,
		};
	}

	return {
		data,
	};
};
