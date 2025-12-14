import CardCategory from "../UI/CardCategory";

export default function Category() {
	return (
		<section id="category" className="py-15 bg-[#d1c2b4]">
			<div className="flex flex-col justify-center items-center">
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
			</div>
			<div className="grid grid-cols-2 gap-5 px-25 mt-15">
				<CardCategory
					name={"Saltos"}
					models={"Salto Alto, Salto Baixo, Salto Pequeno"}
				/>
				<CardCategory
					name={"Rasteirinha"}
					models={"Rasteirinha, Rasteirinha"}
				/>
				<CardCategory name={"Tênis"} models={"Tênis, Tênis"} />
				<CardCategory name={"Sandalias"} models={"Sandalias, Sandalias"} />
			</div>
		</section>
	);
}
