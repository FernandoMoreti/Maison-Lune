"use client";
import { ReactNode } from "react";

interface ButtonProps {
	classname: string;
	description: string;
	icon: ReactNode;
	link: string;
}

export default function Button({
	classname,
	description,
	icon = null,
	link,
}: ButtonProps) {
	return (
		<button
			className={`transition-all duration-200 hover:-translate-y-1 cursor-pointer ${classname}`}
			onClick={() => window.open(link)}
		>
			{icon}
			{description}
		</button>
	);
}
