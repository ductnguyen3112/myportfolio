import { Route, Routes, useLocation } from "react-router-dom";
import React from "react";
import Home from "./components/Pages/Landing";
import Nav from "./components/Nav";
import MyStory from "./components/Pages/MyStory";
import Footer from "./components/Footer";
import { AnimatePresence } from "framer-motion";
import Portfolios from "./components/Pages/Portfolios";
import Skills from "./components/Pages/Skills";
import StickyNav from "./components/functions/StickyNav";
import Contact from "./components/Pages/Contact";

function App() {
  const location = useLocation();
  return (
    <>
      <Nav />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route index element={<Home />} />
          <Route path="/mystory" element={<MyStory />} />
          <Route path="/skill" element={<Skills />} />
          <Route path="/portfolios" element={<Portfolios />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <StickyNav/>
      </AnimatePresence>
      <Footer/>
    </>
  );
}

export default App;
