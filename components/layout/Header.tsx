import Image from "next/image";
import Nav from "../UI/Nav";
import Button from "../UI/Button";
import { ShoppingBag } from "lucide-react";

export default function Header() {
	return (
		<header className="flex border-b border-gray-400 bg-[#b08a69] justify-between items-center py-5 px-20">
			<Image src={"/Ativo 20.png"} alt="Logo" width={150} height={200} />

			<Nav />

			<Button
				classname="flex items-center text-white bg-[#7e553a] gap-3 px-7 py-3 border rounded-xl"
				description={" Ir para a loja"}
				icon={<ShoppingBag size={20} />}
			/>
		</header>
	);
}
