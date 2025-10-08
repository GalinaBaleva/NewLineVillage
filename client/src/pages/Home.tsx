import BarSection from "../components/BarSection";
import Hero from "../components/Hero";
import Units from "../components/Units";

const Home = () => {
    return (
        <section className="bg-white flex flex-col gap-15 relative">
            <Hero />
            <Units />
            <BarSection />
        </section>
    )
}

export default Home;