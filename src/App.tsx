import React, { useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/hero/Hero";
import Prices from "./components/Prices";
import AboutUs from "./components/AboutUs";
import Teams from "./components/Teams";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import { useScroll } from "framer-motion";

function App() {
  const { scrollXProgress } = useScroll();

  useEffect(() => {
    console.log(scrollXProgress);
  }, [scrollXProgress]);
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Prices />
      <AboutUs />
      <Teams />
      <Skills />
      <Footer />
    </div>
  );
}

export default App;
