import Button from "../UI/Button";
import Product from "../UI/Product";
import image1 from "@/public/sapato.jpg";

export default function ProductSection() {
	return (
		<section
			id="products"
			className="flex flex-col justify-center items-center gap-15 py-15"
		>
			<div className="flex flex-col justify-center items-center">
				<h3 className="font-medium bg-linear-to-r from-yellow-900 via-yellow-300 to-yellow-900 bg-clip-text text-transparent text-sm uppercase tracking-widest">
					Coleção em Destaque
				</h3>
				<h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-4 mb-6">
					Produtos que Você Vai{" "}
					<span className="bg-linear-to-r from-yellow-900 via-yellow-300 to-yellow-900 bg-clip-text text-transparent">
						Amar
					</span>
				</h1>
				<p className="text-md text-[#977e6c] max-w-xl text-center">
					Selecionamos os melhores produtos para tornar seu dia a dia mais
					especial. Cada item é escolhido com cuidado e atenção aos detalhes.
				</p>
			</div>

			<div className="flex justify-center gap-10">
				<Product image={image1} name="Mocassim Dourado" price={189.99} />
				<Product image={image1} name="Mocassim Dourado" price={189.99} />
				<Product image={image1} name="Mocassim Dourado" price={189.99} />
				<Product image={image1} name="Mocassim Dourado" price={189.99} />
			</div>

			<Button
				icon={""}
				description="Ver Todos os Produtos"
				classname="flex w-100 justify-center items-center border-[#7e553a] text-[#7e553a] gap-3 px-7 py-3 border-2 rounded-xl"
				link="https://maisonlune5.lojavirtualnuvem.com.br/"
			/>
		</section>
	);
}
