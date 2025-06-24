"use client";
import React, { forwardRef } from "react";

const BgBlob = forwardRef<
	HTMLDivElement,
	{
		className: string;
		style: React.CSSProperties;
		children?: React.ReactNode;
	}
>(({ className, style, children }, ref) => {
	return (
		<div ref={ref} className={className} style={style}>
			{children}
		</div>
	);
});

export default BgBlob;
