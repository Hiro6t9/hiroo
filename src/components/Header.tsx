
import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = ["Home", "About", "Skills", "Projects", "Contact"];

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-black/80 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <a 
            href="#hero" 
            className="text-2xl font-bold relative group"
          >
            <span className="text-white group-hover:text-neon-purple transition-colors duration-300">
              HIRO
            </span>
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-neon-purple transition-all duration-300 group-hover:w-full"></span>
          </a>

          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white hover:text-neon-purple transition-colors duration-300"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <nav className={`
            md:flex items-center space-x-8
            ${isOpen ? 'absolute top-16 left-0 w-full bg-black/90 backdrop-blur-md border-t border-neon-purple/30 md:relative md:top-0 md:border-none md:bg-transparent' : 'hidden md:flex'}
          `}>
            {menuItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setIsOpen(false)}
                className="block md:inline-block py-3 md:py-0 px-4 md:px-0 text-white hover:text-neon-purple transition-colors duration-300 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-neon-purple after:scale-x-0 after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
              >
                {item}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
