"use client";

import CardCategory from "../UI/CardCategory";
import { motion } from "framer-motion";

export default function Category() {
	return (
		<section id="category" className="py-15 bg-[#d1c2b4]">
			<motion.div
				initial={{ opacity: 0, y: 60 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true, amount: 0.3 }}
				transition={{ duration: 0.6, ease: "easeOut" }}
				className="flex flex-col justify-center items-center"
			>
				<h3 className="font-medium bg-linear-to-r from-yellow-400 via-yellow-300 to-yellow-500 bg-clip-text text-transparent text-sm uppercase tracking-widest">
					Explore
				</h3>
				<h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-4 mb-6">
					Nossas{" "}
					<span className="bg-linear-to-r from-yellow-900 via-yellow-300 to-yellow-900 bg-clip-text text-transparent">
						Categorias
					</span>
				</h1>
				<p className="text-md text-[#977e6c] max-w-xl text-center">
					Do escritório à balada, temos o sapato perfeito para cada momento.
					Navegue por nossas categorias e encontre seu próximo par favorito.
				</p>
			</motion.div>
			<div className="grid grid-cols-2 gap-5 px-25 mt-15">
				<motion.div
					initial={{ opacity: 0, x: -60 }}
					whileInView={{ opacity: 1, x: 0 }}
					viewport={{ once: false, amount: 0.3 }}
					transition={{ duration: 0.6, ease: "easeOut" }}
					className="flex flex-col gap-5"
				>
					<CardCategory
						name={"Saltos"}
						models={"Salto Alto, Salto Baixo, Salto Pequeno"}
					/>
					<CardCategory
						name={"Rasteirinha"}
						models={"Rasteirinha, Rasteirinha"}
					/>
				</motion.div>
				<motion.div
					initial={{ opacity: 0, x: 60 }}
					whileInView={{ opacity: 1, x: 0 }}
					viewport={{ once: false, amount: 0.3 }}
					transition={{ duration: 0.6, ease: "easeOut" }}
					className="flex flex-col gap-5"
				>
					<CardCategory name={"Tênis"} models={"Tênis, Tênis"} />
					<CardCategory name={"Sandalias"} models={"Sandalias, Sandalias"} />
				</motion.div>
			</div>
		</section>
	);
}
