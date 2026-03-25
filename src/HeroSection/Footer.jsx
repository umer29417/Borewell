import React from "react";

const Footer = () => {
  return (
    <footer className="bg-slate-800 text-gray-300 pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 sm:grid-cols-2 gap-10">
        <div>
          <h2 className="text-2xl font-semibold text-white mb-4">
            Sri JayaLakshmi Rock Drillers
          </h2>
          <p className="text-sm leading-6">
            Sri JayaLakshmi Rock Drillers is a trusted name in the borewell
            industry, providing reliable and efficient solutions for all your
            water drilling needs.
          </p>
        </div>
        <div>
          <h3 className="text-xl text-white font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="/" className="hover:text-white">
                Home
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-white">
                About Us
              </a>
            </li>
            <li>
              <a href="/services" className="hover:text-white">
                Services
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-white">
                Contact
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                FAQ
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl text-white font-semibold mb-4">Contact Us</h3>
          <p className="text-sm mb-2">Sasalu, Karnataka 577518</p>
          <p>
            <a href="tel:8660995660" className="hover:text-white">
              📞 8660995660
            </a>
          </p>
          <p>
            <a href="tel:9611107988" className="hover:text-white">
              📞 9611107988
            </a>
          </p>
        </div>
        <div>
          <h3 className="text-xl text-white font-semibold mb-4">Location</h3>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3867.922552703763!2d76.11535194999999!3d14.199312999999998!2m3!1f0!3f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bba6a592eefd981%3A0xc9f37062338c3825!2sSasalu%2C%20Karnataka%20577518!5e0!3m2!1sen!2sin"
            className="w-full h-40 rounded-lg border-0"
            loading="lazy"
            title="Location Map"
          ></iframe>
        </div>
      </div>
      <div className="text-center text-sm text-gray-400 mt-10 border-t border-gray-600 pt-4">
        © {new Date().getFullYear()} Shree JayaLakshmi Rock Drillers. All Rights
        Reserved.
      </div>
    </footer>
  );
};

export default Footer;
