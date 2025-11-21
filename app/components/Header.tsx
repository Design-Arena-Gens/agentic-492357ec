"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = ["About", "Skills", "Experience", "Projects", "Contact"];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md py-4" : "bg-transparent py-6"
      }`}
    >
      <nav className="container mx-auto px-6 flex justify-between items-center">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="text-2xl font-bold gradient-text"
        >
          &lt;Dev/&gt;
        </motion.div>
        <ul className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="text-gray-700 hover:text-primary transition-colors duration-300 font-medium"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href="#contact"
          className="bg-primary text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors"
        >
          Hire Me
        </motion.a>
      </nav>
    </motion.header>
  );
}
