import "./App.css";
import About from "./components/About";
import Connect from "./components/Connect";
import Footer from "./components/Footer";
import Goals from "./components/Goals";
import Hero from "./components/Hero";
import Info from "./components/Info";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="app">
      <Navbar />
      <div>
        <Hero />
        <About />
        <Goals />
        <Info />
        <Connect />
      </div>

      <Footer />
    </div>
  );
}

export default App;
