import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import AboutUs from './AboutUs';
import Blog from './components/Blog'; 
import BlogPost from './components/BlogPost';
import Contact from './Contact';
import Services from './Services';
import Home from './Home';
import Products from './Products';
import Header from './components/Header';
import Footer from './components/Footer';
import WeddingDecoration from './products/WeddingDecoration';
import Exterior from './products/Exterior';
import Gates from './products/Gates';
import Mandap from './products/Mandap';
import Interior from './products/Interior';
import Work from './products/Work';
import Stage from './products/Stage';
import Fountain from './products/Fountain';
import Gazebo from './products/Gazebo';
import AirConditioning from './services/AirConditioning';
import ArchitecturalLayout from './services/ArchitecturalLayout';
import ElectricalLighting from './services/ElectricalLighting';
import FireFighting from './services/FireFighting';
import Mep from './services/Mep';
import Stp from './services/Stp';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { GlobalStyle } from './GlobalStyle';

const App = () => {
  const theme = {
    colors: {
      heading: "rgb(24 24 29)",
      text: "rgb(24 24 29)",
      white: "#fff",
      black: " #212529",
      helper: "#8490ff",
      bg: "rgb(249 249 255)",
      footer_bg: "#0a1435",
      btn: "rgb(98 84 243)",
      border: "rgba(98, 84, 243, 0.5)",
      hr: "#ffffff",
      gradient:
        "linear-gradient(0deg, rgb(132 144 255) 0%, rgb(98 189 252) 100%)",
      shadow:
        "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;",
      shadowSupport: " rgba(0, 0, 0, 0.16) 0px 1px 4px",
    },
    media: { mobile: "768px", tab: "998px" },
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          <Route path="/products" element={<Products />} />
          <Route path="/wedding-decoration" element={<WeddingDecoration />} />
          <Route path="/exterior" element={<Exterior />} />
          <Route path="/gates" element={<Gates />} />
          <Route path="/fiber-mandaps" element={<Mandap />} />
          <Route path="/gazebo" element={<Gazebo />} />
          <Route path="/fountain" element={<Fountain />} />
          <Route path="/fiber-stage" element={<Stage />} />
          <Route path="/fiber-work" element={<Work />} />
          <Route path="/airconditioning" element={<AirConditioning />} />
          <Route path="/architecturallayout" element={<ArchitecturalLayout />} />
          <Route path="/electricallighting" element={<ElectricalLighting />} />
          <Route path="/firefighting" element={<FireFighting />} />
          <Route path="/mep" element={<Mep />} />
          <Route path="/stp" element={<Stp />} />
          <Route path="/interior" element={<Interior />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
