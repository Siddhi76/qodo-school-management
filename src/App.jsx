import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Features from "./components/Features/Features";
import FeatureDetail from "./components/Features/FeatureDetail";
import Contact from "./components/Contact/Contact";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/features" element={<Features />} />
        <Route path="/features/:id" element={<FeatureDetail />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;