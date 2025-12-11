import Link from "next/link";

export default function Nav() {
	return (
		<nav className="flex gap-10">
			<Link
				href="#produtos"
				className="text-md font-light text-white transition-all duration-300 hover:text-[#7e553a]"
			>
				Produtos
			</Link>
			<Link
				href="#produtos"
				className="text-md font-light text-white transition-all duration-300 hover:text-[#7e553a]"
			>
				Sobre
			</Link>
			<Link
				href="#produtos"
				className="text-md font-light text-white transition-all duration-300 hover:text-[#7e553a]"
			>
				Categorias
			</Link>
			<Link
				href="#produtos"
				className="text-md font-light text-white transition-all duration-300 hover:text-[#7e553a]"
			>
				Contato
			</Link>
		</nav>
	);
}
