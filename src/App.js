import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Dash from "./components/Dash";
import NewsLetter from "./components/NewsLetter";
import Cards from "./components/Cards";
import Footer from "./components/Footer";

function App() {
  return (
    <div >
      <Navbar />
      <Hero />
      <Dash />
      <NewsLetter />
      <Cards />
      <Footer />
    </div>
  );
}

export default App;
