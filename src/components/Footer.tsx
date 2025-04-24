
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="py-8 relative">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center">
          <p className="text-gray-400 text-center">
            © 2025 Hiro | Built with <span className="text-neon-purple">❤️</span> by Hiro
          </p>
          
          <div className="h-0.5 w-20 bg-neon-purple/50 my-4 rounded-full"></div>
          
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-neon-purple transition-colors duration-300">
              Twitter
            </a>
            <a href="#" className="text-gray-400 hover:text-neon-cyan transition-colors duration-300">
              LinkedIn
            </a>
            <a href="#" className="text-gray-400 hover:text-neon-blue transition-colors duration-300">
              GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
