export default function About() {
	return (
		<section>
			<div className="grid grid-cols-2">
				<div className="flex flex-col px-20 gap-5">
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
						escolhido pensando em você. Trabalhamos com os melhores fabricantes
						nacionais para garantir durabilidade e sofisticação em cada passo.
					</p>
				</div>
				<div></div>
			</div>
		</section>
	);
}
