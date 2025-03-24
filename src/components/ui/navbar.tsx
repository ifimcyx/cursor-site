"use client";

import * as React from "react";
import { motion } from "framer-motion";

export const Navbar = () => {
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/80 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <motion.div
            className="text-white font-bold text-xl flex items-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="text-purple-500 mr-2">Cursor</span>
            <span>AI编辑器</span>
          </motion.div>
        </div>
        <nav>
          <ul className="flex space-x-8">
            <motion.li whileHover={{ y: -2 }} whileTap={{ y: 0 }}>
              <a href="#intro" className="text-white hover:text-purple-400 transition-colors">
                简介
              </a>
            </motion.li>
            <motion.li whileHover={{ y: -2 }} whileTap={{ y: 0 }}>
              <a href="#projects" className="text-white hover:text-purple-400 transition-colors">
                实践项目
              </a>
            </motion.li>
            <motion.li whileHover={{ y: -2 }} whileTap={{ y: 0 }}>
              <a href="#design" className="text-white hover:text-purple-400 transition-colors">
                产品设计探索
              </a>
            </motion.li>
          </ul>
        </nav>
      </div>
    </motion.header>
  );
}; 