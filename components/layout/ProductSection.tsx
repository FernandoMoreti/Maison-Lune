"use client";

import Button from "../UI/Button";
import Product from "../UI/Product";
import image1 from "@/public/mocassim.jpg";
import image2 from "@/public/tenis.jpg";
import image3 from "@/public/Rasteirinha.jpg";
import image4 from "@/public/sandalias.jpg";

import { motion } from "framer-motion";

export default function ProductSection() {
	return (
		<motion.section
			initial={{ opacity: 0, x: -80 }}
			whileInView={{ opacity: 1, x: 0 }}
			viewport={{ once: false, amount: 0.3 }}
			transition={{ duration: 1, ease: "easeOut" }}
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
				<Product image={image1} name="Mocassim Dourado" price={139.99} />
				<Product image={image2} name="Tênis Branco" price={189.99} />
				<Product
					image={image3}
					name="Rasteirinha Pérola Dourada"
					price={165.99}
				/>
				<Product image={image4} name="Sandália Marrom" price={109.99} />
			</div>

			<Button
				icon={""}
				description="Ver Todos os Produtos"
				classname="flex w-100 justify-center items-center border-[#7e553a] text-[#7e553a] gap-3 px-7 py-3 border-2 rounded-xl"
				link="https://maisonlune5.lojavirtualnuvem.com.br/"
			/>
		</motion.section>
	);
}
