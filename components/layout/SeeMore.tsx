import { Star, Stars, ShoppingBag, Check } from "lucide-react";
import Button from "../UI/Button";

interface listaObjetos {
	name: string;
}

const list: listaObjetos[] = [
	{
		name: "Frete Grátis",
	},
	{
		name: "Pagamento Seguro",
	},
	{
		name: "Troca em 30 dias",
	},
	{
		name: "Todos os Tamanhos",
	},
];

export default function SeeMore() {
	return (
		<section className="bg-linear-to-r py-20 from-[#80583c] via-[#ad8864] to-[#80583c] text-white">
			<div className="flex flex-col justify-center items-center">
				<p className="flex py-2 shadow-2xl px-5 rounded-4xl text-sm gap-2 font-bold items-center bg-linear-to-r from-yellow-900 via-yellow-300 to-yellow-900 justify-center">
					<Stars size={15} />
					Oferta Especial
				</p>
				<h1 className="text-center md:text-start font-display shadow-2xl rounded-xl px-10 text-3xl md:text-7xl font-bold text-foreground mt-4 mb-6">
					Pronta para Arrasar?
				</h1>
				<p className="text-lg tracking-wide text-[#ede3da] max-w-2xl text-center mt-5 px-5">
					Visite nossa loja agora e encontre sapatos incríveis com até{" "}
					<strong className="text-white">40% de desconto</strong>. Frete grátis
					em compras acima de R$ 299!
				</p>

				<Button
					classname="flex items-center shadow-2xl shadow-yellow-900 justify-center gap-5 bg-linear-to-r from-yellow-900 via-yellow-300 to-yellow-900 py-5 px-10 mt-10 rounded-2xl hover:scale-105 hover:shadow-yellow-600"
					description="Ir para a Loja Agora"
					icon={<ShoppingBag />}
					link="https://maisonlune5.lojavirtualnuvem.com.br/"
				/>
			</div>

			<div className="grid grid-cols-2 md:grid-cols-4 text-start px-5 justify-center items-center gap-5 mt-10 text-[#ede3da]">
				{list.map((bonus, index) => (
					<p
						key={index}
						className="flex md:justify-center items-center gap-1 text-sm"
					>
						<Check />
						{bonus.name}
					</p>
				))}
			</div>
		</section>
	);
}
