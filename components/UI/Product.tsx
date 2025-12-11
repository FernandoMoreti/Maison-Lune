import Image from "next/image";
import { StaticImageData } from "next/image";

interface ProductProps {
	image: StaticImageData;
	name: string;
	price: number;
}

export default function Product({ image, name, price }: ProductProps) {
	return (
		<div className="group flex flex-col w-75 transition-all duration-300 rounded-2xl shadow-xl hover:shadow-2xl">
			<Image
				className="rounded-t-2xl transition-all duration-300 group-hover:scale-110"
				src={image}
				alt="Produto Imagem"
			></Image>

			<div className="bg-[#f6ece2] rounded-b-2xl py-5 px-5 transition-all duration-300 group-hover:scale-110">
				<h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
					{name}
				</h3>
				<h2 className="text-lg font-bold bg-linear-to-r from-yellow-400 via-yellow-300 to-yellow-500 bg-clip-text text-transparent">
					R$ {price}
				</h2>
			</div>
		</div>
	);
}
