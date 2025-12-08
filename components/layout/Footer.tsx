import {
	Instagram,
	Facebook,
	Twitter,
	Mail,
	MapPin,
	Phone,
} from "lucide-react";
import Link from "next/link";

export default function Footer() {
	return (
		<footer className="bg-foreground text-background py-16">
			<div className="container mx-auto px-4">
				<div className="grid md:grid-cols-4 gap-10 md:gap-8">
					{/* Brand */}
					<div className="md:col-span-1">
						<Link
							href="/"
							className="font-display text-3xl font-bold text-background"
						>
							Essência
						</Link>
						<p className="text-background/60 mt-4 text-sm leading-relaxed">
							Transformando seu dia a dia em momentos especiais com produtos
							únicos e de qualidade excepcional.
						</p>
						{/* Social Links */}
						<div className="flex gap-4 mt-6">
							<a
								href="#"
								className="w-10 h-10 bg-background/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
								aria-label="Instagram"
							>
								<Instagram className="w-5 h-5" />
							</a>
							<a
								href="#"
								className="w-10 h-10 bg-background/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
								aria-label="Facebook"
							>
								<Facebook className="w-5 h-5" />
							</a>
							<a
								href="#"
								className="w-10 h-10 bg-background/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
								aria-label="Twitter"
							>
								<Twitter className="w-5 h-5" />
							</a>
						</div>
					</div>

					{/* Links */}
					<div>
						<h4 className="font-semibold text-background mb-4">Navegação</h4>
						<ul className="space-y-3 text-background/60 text-sm">
							<li>
								<a
									href="#produtos"
									className="hover:text-primary transition-colors"
								>
									Produtos
								</a>
							</li>
							<li>
								<a
									href="#sobre"
									className="hover:text-primary transition-colors"
								>
									Sobre Nós
								</a>
							</li>
							<li>
								<a
									href="#categorias"
									className="hover:text-primary transition-colors"
								>
									Categorias
								</a>
							</li>
							<li>
								<a
									href="https://loja.exemplo.com"
									className="hover:text-primary transition-colors"
								>
									Loja Online
								</a>
							</li>
						</ul>
					</div>

					{/* Support */}
					<div>
						<h4 className="font-semibold text-background mb-4">Suporte</h4>
						<ul className="space-y-3 text-background/60 text-sm">
							<li>
								<a href="#" className="hover:text-primary transition-colors">
									Central de Ajuda
								</a>
							</li>
							<li>
								<a href="#" className="hover:text-primary transition-colors">
									Política de Troca
								</a>
							</li>
							<li>
								<a href="#" className="hover:text-primary transition-colors">
									Rastrear Pedido
								</a>
							</li>
							<li>
								<a href="#" className="hover:text-primary transition-colors">
									Fale Conosco
								</a>
							</li>
						</ul>
					</div>

					{/* Contact */}
					<div>
						<h4 className="font-semibold text-background mb-4">Contato</h4>
						<ul className="space-y-3 text-background/60 text-sm">
							<li className="flex items-center gap-2">
								<Mail className="w-4 h-4 text-primary" />
								contato@essencia.com.br
							</li>
							<li className="flex items-center gap-2">
								<Phone className="w-4 h-4 text-primary" />
								(11) 99999-9999
							</li>
							<li className="flex items-start gap-2">
								<MapPin className="w-4 h-4 text-primary mt-0.5" />
								São Paulo, SP - Brasil
							</li>
						</ul>
					</div>
				</div>

				{/* Bottom Bar */}
				<div className="border-t border-background/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
					<p className="text-background/40 text-sm">
						© 2024 Essência. Todos os direitos reservados.
					</p>
					<div className="flex gap-6 text-background/40 text-sm">
						<a href="#" className="hover:text-primary transition-colors">
							Termos de Uso
						</a>
						<a href="#" className="hover:text-primary transition-colors">
							Privacidade
						</a>
					</div>
				</div>
			</div>
		</footer>
	);
}
