//COMPONENTS
import Hero from "../../components/Hero";
import About from "../../components/About";
import Goals from "../../components/Goals";
import Info from "../../components/Info";
import Connect from "../../components/Connect";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
export default function LandingPage() {
  return (
    <section>
      <Navbar />
      <Hero />
      <About />
      <Goals />
      <Info />
      <Connect />
      <Footer />
    </section>
  );
}
