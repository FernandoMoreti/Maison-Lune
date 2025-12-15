"use client";

import Image from "next/image";
import Card from "../UI/Card";
import { Heart, Package, Truck, Shield } from "lucide-react";

import { motion } from "framer-motion";

export default function About() {
	return (
		<motion.section
			initial={{ opacity: 0, y: 60 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, amount: 0 }}
			transition={{ duration: 0.6, ease: "easeOut" }}
		>
			<section
				id="about"
				className="grid grid-cols-2 gap-10 bg-linear-to-l from-[#d1c3b5] to-[#ffff] px-15 py-10"
			>
				<div className="">
					<div className="flex flex-col">
						<p className="text-sm tracking-widest">SOBRE NÓS</p>
						<h1 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
							Paixão por
							<span className="bg-linear-to-r from-yellow-900 via-yellow-300 to-yellow-900 bg-clip-text text-transparent text-gradient">
								{" "}
								Sapatos{" "}
							</span>
							Femininos
						</h1>
						<p className="text-[#b08a69] mb-6 text-lg">
							A<strong> Passos Elegantes </strong>nasceu do amor por calçados
							femininos que combinam estilo, conforto e qualidade. Há mais de 8
							anos, selecionamos os melhores modelos para mulheres que valorizam
							cada detalhe.
						</p>
						<p className="text-[#b08a69] mb-8">
							Do salto alto clássico às sapatilhas confortáveis, cada par é
							escolhido pensando em você. Trabalhamos com os melhores
							fabricantes nacionais para garantir durabilidade e sofisticação em
							cada passo.
						</p>
					</div>
					<motion.div
						initial={{ opacity: 0, y: 100 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, amount: 0.5 }}
						transition={{ duration: 0.6 }}
						className="grid grid-cols-2 gap-10"
					>
						<Card
							icon={Heart}
							title={"Conforto Garantido"}
							text={
								"Palmilhas ergonômicas e materiais de alta qualidade para seu bem-estar."
							}
						/>
						<Card
							icon={Package}
							title={"Embalagem Premium"}
							text={
								"Caixa exclusiva com saquinho protetor. Perfeito para presente!"
							}
						/>
						<Card
							icon={Truck}
							title={"Entrega Rápida"}
							text={"Frete grátis para todo Brasil em compras acima de R$ 299."}
						/>
						<Card
							icon={Shield}
							title={"Troca Garantida"}
							text={
								"30 dias para trocar. Se não servir, devolvemos seu dinheiro."
							}
						/>
					</motion.div>
				</div>
				<motion.div
					initial={{ opacity: 0, scale: 0.9 }}
					whileInView={{ opacity: 1, scale: 1 }}
					viewport={{ once: true, amount: 0.5 }}
					transition={{ duration: 0.5 }}
					className="flex justify-center  rounded-4xl items-center bg-[#7e553c]"
				>
					<Image src={"/Ativo 6.jpg"} alt="Logo" width={600} height={200} />
				</motion.div>
			</section>
		</motion.section>
	);
}
