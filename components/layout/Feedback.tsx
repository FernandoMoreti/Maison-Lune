"use client";

import CardFeedback from "../UI/CardFeedback";
import { motion } from "framer-motion";

export default function Feedback() {
	return (
		<section className="py-15 bg-[#f5f1ea]">
			<div className="flex flex-col justify-center items-center">
				<h3 className="font-medium bg-linear-to-r from-yellow-900 via-yellow-300 to-yellow-900 bg-clip-text text-transparent text-sm uppercase tracking-widest">
					Depoimentos
				</h3>
				<h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-4 mb-6">
					O que Nossos Clientes{" "}
					<span className="bg-linear-to-r from-yellow-900 via-yellow-300 to-yellow-900 bg-clip-text text-transparent">
						Dizem
					</span>
				</h1>
				<p className="text-md text-[#977e6c] max-w-xl text-center">
					A satisfação dos nossos clientes é nossa maior conquista. Veja o que
					eles têm a dizer sobre a experiência com a Essência.
				</p>
			</div>

			<motion.div
				initial={{ opacity: 0, y: 60 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true, amount: 0.7 }}
				transition={{ duration: 0.6, ease: "easeOut" }}
				className="grid grid-cols-3 gap-5 p-15"
			>
				<CardFeedback
					feedback="Os produtos são incríveis! A qualidade supera todas as expectativas. A embalagem veio perfeita, como um presente. Com certeza comprarei novamente!"
					name="Maria Silva"
					letter="M"
					time="Cliente desde 2025"
				/>
				<CardFeedback
					feedback="Melhor loja online que já comprei! O atendimento é excepcional e a entrega foi super rápida. Os produtos são exatamente como nas fotos"
					name="João Pedro"
					letter="J"
					time="Cliente desde 2024"
				/>
				<CardFeedback
					feedback="Amo a curadoria de produtos da Essência! Cada item que compro parece ter sido escolhido especialmente para mim. Recomendo demais!"
					name="Ana Costa"
					letter="A"
					time="Cliente desde 2025"
				/>
			</motion.div>
		</section>
	);
}
