import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./Navbar";
import Footer from "./FooterComponent";
import Hero from './Hero';

function App() {
  return (
    <>
      <Navbar />
      <Hero/>
      <Footer />
    </>
  );
}

export default App;
