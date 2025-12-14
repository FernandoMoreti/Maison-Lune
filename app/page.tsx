import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import Hero from "@/components/layout/Hero";
import ProductSection from "@/components/layout/ProductSection";
import About from "@/components/layout/About";
import Category from "@/components/layout/Category";
import Feedback from "@/components/layout/Feedback";
import SeeMore from "@/components/layout/SeeMore";

export default function Home() {
	return (
		<>
			<Header />
			<Hero />
			<ProductSection />
			<About />
			<Category />
			<Feedback />
			<SeeMore />
			<Footer />
		</>
	);
}
