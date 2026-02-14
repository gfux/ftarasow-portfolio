// App.js
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Заменил HashRouter на BrowserRouter
import { HelmetProvider } from 'react-helmet-async';
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Projects from "./Pages/Projects";
import Technologies from "./Pages/Technologies";

// Если Analytics — это реальный компонент, его нужно импортировать:
// import Analytics from "./Components/Analytics"; // Раскомментируйте и укажите правильный путь
// Если Analytics не нужен — просто удалите строку с <Analytics />

function App() {
  return (
    <HelmetProvider>
      <Router>
        {/* Либо импортируйте Analytics, либо удалите эту строку */}
        {/* <Analytics /> */}
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
      </Router>
    </HelmetProvider>
  );
}

export default App;