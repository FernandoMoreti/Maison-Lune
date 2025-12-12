import { ReactNode } from "react";

interface ButtonProps {
	classname: string;
	description: string;
	icon: ReactNode;
}

export default function Button({
	classname,
	description,
	icon = null,
}: ButtonProps) {
	return (
		<button
			className={`transition-all duration-200 hover:-translate-y-1 cursor-pointer ${classname}`}
		>
			{icon}
			{description}
		</button>
	);
}
