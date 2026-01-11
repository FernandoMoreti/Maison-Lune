import Image from "next/image";
import Nav from "../UI/Nav";
import Button from "../UI/Button";
import { ShoppingBag } from "lucide-react";

export default function Header() {
	return (
		<header className="flex flex-col md:flex-row bg-[#b08a69] justify-between items-center gap-5 md:gap-0 py-5 px-15 md:py-5 md:px-20">
			<Image src={"/Ativo 20.png"} alt="Logo" width={150} height={200} />

			<Nav />

			<Button
				classname="flex items-center text-white bg-[#7e553a] gap-3 px-7 py-3 rounded-xl"
				description={" Ir para a loja"}
				icon={<ShoppingBag size={20} />}
				link="https://maisonlune5.lojavirtualnuvem.com.br/"
			/>
		</header>
	);
}
