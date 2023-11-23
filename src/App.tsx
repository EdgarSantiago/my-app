import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Prices from "./components/Prices";
import AboutUs from "./components/AboutUs";

function App() {
  return (
    <div className="App">
      {/*<Navbar />*/}
      <Hero />
      <Prices />
      <AboutUs />
    </div>
  );
}

export default App;
