import { Instagram, Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";

export default function Footer() {
	return (
		<footer id="contact" className="bg-foreground text-background py-16">
			<div className="container mx-auto px-4">
				<div className="grid md:grid-cols-3 gap-10 md:gap-8">
					<div className="md:col-span-1">
						<Link
							href="/"
							className="font-display text-3xl font-bold text-background"
						>
							Maison Lune
						</Link>
						<p className="text-background/60 mt-4 text-sm leading-relaxed">
							Transformando seu dia a dia em passos marcantes com sapatos únicos
							e de qualidade excepcional.
						</p>
						<div className="flex gap-4 mt-6">
							<Link
								href="https://www.instagram.com/maisonlune.com.br/"
								className="w-10 h-10 bg-background/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
								aria-label="Instagram"
								target="_blank"
							>
								<Instagram className="w-5 h-5" />
							</Link>
						</div>
					</div>

					<div>
						<h4 className="font-semibold text-background mb-4">Navegação</h4>
						<ul className="space-y-3 text-background/60 text-sm">
							<li>
								<Link
									href="#produtos"
									className="hover:text-primary transition-colors"
								></Link>
							</li>
							<li>
								<Link
									href="#sobre"
									className="hover:text-primary transition-colors"
								>
									Sobre Nós
								</Link>
							</li>
							<li>
								<Link
									href="#categorias"
									className="hover:text-primary transition-colors"
								>
									Categorias
								</Link>
							</li>
							<li>
								<Link
									href="https://loja.exemplo.com"
									className="hover:text-primary transition-colors"
								>
									Loja Online
								</Link>
							</li>
						</ul>
					</div>

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
								Franca, SP - Brasil
							</li>
						</ul>
					</div>
				</div>

				<div className="border-t border-background/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
					<p className="text-background/40 text-sm">
						© 2025 Maison Lune. Todos os direitos reservados.
					</p>
					<p className="text-background/40 text-sm">
						Criado por Fernando Moreti
					</p>
				</div>
			</div>
		</footer>
	);
}
