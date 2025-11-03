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
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router className="main-container"> {/* ✅ Wrap everything in Router */}
      <Header />
      <Home />
      <About />
       <Room/>
       <Gallery/>
       <Activity/>
       <Contact/>
      <main>
      
        <Routes>
          <Route
            path="/"
            element={
              <>
                {/* <h2>Start Shopping With Bed & Breakfast</h2> */}
              </>
            }
          />
          
        </Routes>
      </main>

      <Footer />
    </Router>
  );
}

export default App;
