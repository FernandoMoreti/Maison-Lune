import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import Hero from "@/components/layout/Hero";
import ProductSection from "@/components/layout/ProductSection";
import Product from "@/components/UI/Product";

export default function Home() {
	return (
		<>
			<Header />
			<Hero />

			<ProductSection />

			<Footer />
		</>
	);
}
