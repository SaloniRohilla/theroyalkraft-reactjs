import React from "react";
import Header from "./components/Header"; // Ensure you're importing the Header
import HeroSection from "./components/HeroSection";
import Products from "./Products";
import InnerBanner from './components/InnerBanner.jsx';

import Contact from "./Contact";
import Blog from "./components/Blog";
import AboutUs from './AboutUs';
import Intro from "./components/Intro";

const Home = () => {
  return (
    <>
      <Header /> 
      <HeroSection />
      <Intro />
      <Products />
      <AboutUs />
      <Blog />
      <Contact />
    </>
  );
};

export default Home;
