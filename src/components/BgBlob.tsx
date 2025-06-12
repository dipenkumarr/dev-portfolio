"use client";
import React, { useEffect, useState } from "react";

function BgBlob({
	className,
	style,
	children,
}: {
	className: string;
	style: React.CSSProperties;
	children?: React.ReactNode;
}) {
	return (
		<div className={className} style={style}>
			{children}
		</div>
	);
}

export default BgBlob;
