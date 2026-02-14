import { Routes, Route } from "react-router-dom"; // Убрали BrowserRouter
import { HelmetProvider } from 'react-helmet-async';
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Projects from "./Pages/Projects";
import Technologies from "./Pages/Technologies";

function App() {
  return (
    <HelmetProvider>
      {/* Убрали Router — он уже есть в index.js */}
      <Header />
      <div className="pt-24">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/technologies" element={<Technologies />} />
        </Routes>
      </div>
      <Footer />
    </HelmetProvider>
  );
}

export default App;