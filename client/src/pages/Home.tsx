import Hero from "../components/Hero";
import Units from "../components/Units";

const Home = () => {
    return (
        <section className="bg-white h-screen flex flex-col gap-15 relative">
            <Hero />
            <Units />
        </section>
    )
}

export default Home;