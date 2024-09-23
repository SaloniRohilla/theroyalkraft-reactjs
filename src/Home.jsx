import { useEffect } from "react";
import HeroSection from "./components/HeroSection";
import Products from "./Products";
import Contact from "./Contact";
import Blog from "./components/Blog";
import AboutUs from './AboutUs';
import Intro from "./components/Intro";

const Home = () => {
  return (
    <>
      <HeroSection />
      <Intro />
      <Products/>
      <AboutUs/>
      <Blog/>
      <Contact />
    </>
  );
};

export default Home;