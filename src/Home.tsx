import Header from "./Components/Header";
import Hero from "./Components/Hero";
import PopularTools from "./Components/PopularTools";
import Sponsors from "./Components/Sponsors";
import Contributors from "./Components/Contributors";
import NewComer from "./Components/NewComer";
import Footer from "./Components/Footer";

function Home() {
    return (
        <div>
            <Header />
            <Hero />
            <PopularTools />
            <Sponsors />
            <NewComer />
            <Contributors />
            <Footer />
        </div>
    )
}

export default Home