import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// Components
import NavBar from "./components/Navbar";
import Footer from "./components/Footer";
// Pages
import Home from "./pages/Home";
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
