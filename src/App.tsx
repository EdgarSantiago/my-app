import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Prices from "./components/Prices";
import AboutUs from "./components/AboutUs";
import Teams from "./components/Teams";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="App">
      {/*<Navbar />*/}
      <Hero />
      <Prices />
      <AboutUs />
      <Teams />
      <Skills />
    </div>
  );
}

export default App;
