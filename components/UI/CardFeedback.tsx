import { Star, Stars } from "lucide-react";

interface CardProps {
	feedback: string;
	name: string;
	letter: string;
	time: string;
}

export default function CardFeedback({
	feedback,
	name,
	letter,
	time,
}: CardProps) {
	return (
		<div className="bg-white rounded-4xl shadow-xl p-8 flex flex-col justify-between">
			<div className="flex pb-3">
				<Star className="text-[#7e553c]" />
				<Star className="text-[#7e553c]" />
				<Star className="text-[#7e553c]" />
				<Star className="text-[#7e553c]" />
				<Star className="text-[#7e553c]" />
			</div>
			<p className="pb-3 text-[#7e553c]">"{feedback}"</p>
			<div className="flex gap-5 items-center">
				<p className="bg-[#f5f1ea] p-8 rounded-4xl h-10 w-10 flex justify-center font-bold text-[#b08a69] items-center">
					{letter}
				</p>
				<div>
					<p className="font-bold">{name}</p>
					<p className="text-[#7e553c]">{time}</p>
				</div>
			</div>
		</div>
	);
}
