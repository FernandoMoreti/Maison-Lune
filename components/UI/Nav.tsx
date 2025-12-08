import Link from "next/link";

export default function Nav() {
    return (
        <nav className="flex gap-10">
            <Link href="#produtos" className="text-md font-light text-[#977e6c] transition-all duration-300 hover:text-[#dd643c]">Produtos</Link>
            <Link href="#produtos" className="text-md font-light text-[#977e6c] transition-all duration-300 hover:text-[#dd643c]">Sobre</Link>
            <Link href="#produtos" className="text-md font-light text-[#977e6c] transition-all duration-300 hover:text-[#dd643c]">Categorias</Link>
            <Link href="#produtos" className="text-md font-light text-[#977e6c] transition-all duration-300 hover:text-[#dd643c]">Contato</Link>
        </nav>
    )
}