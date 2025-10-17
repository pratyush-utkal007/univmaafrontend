import Navbar from "../components/Navbar";
import "../App.css";
import ServiceSection from "../components/ServiceSection";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import HeroSection2 from "../components/HeroSection2";
import SalesforcePage from "../components/SalesforcePage";
import SalesforceTabs from "../components/SalesforceTabs";

const Home = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <HeroSection2 />
        <SalesforcePage />
        <SalesforceTabs />
        <ServiceSection />
        <Contact />
        <Footer />
      </main>
    </>
  );
};

export default Home;
