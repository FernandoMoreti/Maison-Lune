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
		<button className={classname}>
			{icon}
			{description}
		</button>
	);
}
