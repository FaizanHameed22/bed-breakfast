import React from "react";
import "./App.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Room from "./pages/rooms/Room";
import Gallery from "./pages/gallery/Gallery";
import Activity from "./pages/activities/Activity";
import Contact from "./pages/contact/Contact";
// Remove Router imports if not using routing
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="main-container">
      <Header />
      <Home />
      <About />
      <Room/>
      <Gallery/>
      <Activity/>
      <Contact/>
      <Footer />
    </div>
  );
}

export default App;
