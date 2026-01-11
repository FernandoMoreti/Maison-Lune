import Image from "next/image";
import Button from "../UI/Button";
import { ShoppingBag } from "lucide-react";

export default function Hero() {
	return (
		<section className="grid grid-cols-1 md:grid-cols-2 px-5 md:px-20 py-10 bg-linear-to-b from-[#b08a69] to-white">
			<div>
				<h1 className="w-full md:w-150 text-center md:text-start font-display text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 animate-fade-up leading-tight">
					Descubra o{" "}
					<span className="bg-linear-to-r from-yellow-900 via-yellow-300 to-yellow-900 bg-clip-text text-transparent">
						Extraordinário
					</span>{" "}
					em Cada Detalhe
				</h1>
				<p className="text-md md:text-xl text-muted-foreground mb-8 text-[#977e6c] text-center md:text-start animate-fade-up-delayed max-w-xl">
					Sapatos femininos pensados para valorizar seu dia a dia com estilo e
					conforto. Peças selecionadas com carinho, feitas para quem busca
					qualidade e elegância.
				</p>

				<div className="flex flex-col items-center md:items-start md:flex-row gap-5">
					<Button
						classname="flex w-75 md:w-50 justify-center items-center border-[#7e553a] text-white bg-[#7e553a] gap-3 px-7 py-3 border rounded-xl"
						description="Explorar loja"
						icon={<ShoppingBag size={20} />}
						link="https://maisonlune5.lojavirtualnuvem.com.br/"
					/>
					<Button
						classname="flex w-75 md:w-50 justify-center items-center border-[#7e553a] text-[#7e553a] gap-3 px-7 py-3 border-2 rounded-xl"
						description="Ver Produtos"
						icon={<ShoppingBag size={20} />}
						link="https://maisonlune5.lojavirtualnuvem.com.br/"
					/>
				</div>
			</div>
			<div className="flex justify-center items-center animate-pulse">
				<Image
					className="hidden md:flex"
					src={"/Ativo 22.png"}
					alt="Logo"
					width={300}
					height={300}
				/>
			</div>
		</section>
	);
}
