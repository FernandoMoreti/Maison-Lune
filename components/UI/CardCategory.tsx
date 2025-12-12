import { ArrowLeft, ArrowRight } from "lucide-react";

interface CardProps {
	name: string;
	models: string;
}

export default function CardCategory({ name, models }: CardProps) {
	return (
		<div className="w-full p-5 rounded-3xl transition-all duration-200 bg-[#f4eee3] hover:-translate-y-0.5 hover:shadow-2xl">
			<p className="font-display w-50 text-2xl md:text-3xl font-bold bg-linear-to-r from-yellow-900 via-yellow-300 to-yellow-900 bg-clip-text text-transparent mt-2 mb-3">
				{name}
			</p>
			<p className="text-[#b08a69] mb-6">{models}</p>
			<button className="flex cursor-pointer gap-3 text-[#b08a69] hover:translate-x-1 transition-all duration-300">
				Explorar <ArrowRight />
			</button>
		</div>
	);
}
