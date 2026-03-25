import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hero from "./HeroSection/Hero";
import Navbar from "./NavBar/Navbar";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/*" element={<Navbar />} />
      </Routes>
    </Router>
  );
}

export default App;