import "./index.css";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// Components
import NavBar from "./components/Navbar";
import Footer from "./components/Footer";
import WaLink from "./components/whatsapp/WaLink";
// Pages
import Home from "./pages/Home";
import About from './pages/About';
import Contact from './pages/Contact';
import Services from "./pages/Services";

function App() {
  return (
    <>
      <Router>
        <WaLink/>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
