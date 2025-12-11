import { Heart, LucideIcon } from "lucide-react";

interface CardProps {
	icon: LucideIcon;
	title: string;
	text: string;
}

export default function Card({ icon: Icon, title, text }: CardProps) {
	return (
		<div className="flex gap-5 animate-pulse bg-white rounded-2xl p-5">
			<div className="p-2 rounded-xl h-10 bg-linear-to-r from-yellow-900 via-yellow-300 to-yellow-900">
				<Icon className="text-white" size={25} />
			</div>
			<div>
				<p className="font-bold mb-1">{title}</p>
				<p className="text-sm text-[#b08a69]">{text}</p>
			</div>
		</div>
	);
}
