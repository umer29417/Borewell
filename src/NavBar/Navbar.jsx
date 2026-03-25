import { useState } from "react";
import { Link, Routes, Route } from "react-router-dom";
import "remixicon/fonts/remixicon.css";
import logo from "../images/logo.png";

import BillGen from "../HeroSection/BillGen";
import Home from "../HeroSection/Home";
import Services from "../HeroSection/Services";
import About from "../HeroSection/About";
import Contact from "../HeroSection/Contact";
import Footer from "../HeroSection/Footer";
import Quote from "../HeroSection/Quote";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="h-auto w-full bg-blue-900">
      <div className="w-full bg-gray-400 shadow-md">
        <div className="max-w-[1200px] mx-auto flex items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Logo" className="h-12 w-auto rounded-full" />
            <h2 className="text-lg md:text-xl uppercase font-bold text-blue-700">
              Sri JayaLakshmi Rock Drillers
            </h2>
          </div>

          <div className="hidden md:flex items-center gap-6 text-lg">
            <Link to="/home">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/services">Services</Link>
            <Link to="/contact">Contact</Link>

            <a
              href="tel:8660995660"
              className="bg-blue-600 text-white px-4 py-2 rounded-md"
            >
              Call Us
            </a>

            <Link
              to="/adminLogin"
              className="bg-blue-600 text-white px-4 py-2 rounded-md"
            >
              Admin Login
            </Link>
          </div>

          <i
            className="ri-menu-line text-2xl md:hidden cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}
          ></i>
        </div>

        {menuOpen && (
          <div className="md:hidden flex flex-col items-center gap-4 pb-6 text-lg bg-gray-200">
            <Link to="/home" onClick={() => setMenuOpen(false)}>
              Home
            </Link>
            <Link to="/about" onClick={() => setMenuOpen(false)}>
              About
            </Link>
            <Link to="/services" onClick={() => setMenuOpen(false)}>
              Services
            </Link>
            <Link to="/contact" onClick={() => setMenuOpen(false)}>
              Contact
            </Link>

            <a
              href="tel:8660995660"
              className="bg-blue-600 text-white px-4 py-2 rounded-md"
            >
              Call Us
            </a>

            <Link
              to="/adminLogin"
              onClick={() => setMenuOpen(false)}
              className="bg-blue-600 text-white px-4 py-2 rounded-md"
            >
              Admin Login
            </Link>
          </div>
        )}
      </div>

      <div className="showOrNot">
        <Routes>
          <Route
            path="/home"
            element={
              <>
                <Home />
                <About />
                <Services />
                <Contact />
              </>
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/adminLogin" element={<BillGen />} />
          <Route path="/quote" element={<Quote />} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
}
