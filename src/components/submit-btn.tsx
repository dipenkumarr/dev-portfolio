import React from "react";
import { useFormStatus } from "react-dom";
import { FaPaperPlane } from "react-icons/fa";
import { LuLoader2 } from "react-icons/lu";

export default function SubmitBtn() {
	const { pending } = useFormStatus();
	return (
		<button
			type="submit"
			className="group flex justify-center items-center mt-2 gap-3 h-12 w-32 bg-gray-900 rounded-full text-white outline-none transition-all hover:scale-105 active:scale-95 hover:bg-gray-950 disabled:opacity-70 disabled:scale-100"
			disabled={pending}
		>
			{pending ? (
				<div className="animate-spin">
					<LuLoader2 />
				</div>
			) : (
				<>
					Submit{" "}
					<FaPaperPlane className="text-sm opacity-80 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />
				</>
			)}
		</button>
	);
}
