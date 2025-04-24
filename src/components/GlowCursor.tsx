
import React, { useEffect, useState } from "react";

const GlowCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseDown = () => setIsClicked(true);
    const handleMouseUp = () => setIsClicked(false);
    const handleMouseLeave = () => setIsVisible(false);

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <>
      <div
        className="fixed pointer-events-none z-50 transform -translate-x-1/2 -translate-y-1/2 transition-transform duration-100 ease-out"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
      >
        {/* Outer glow */}
        <div
          className={`absolute rounded-full bg-neon-purple/30 blur-md transition-all duration-300 ${
            isClicked ? "w-12 h-12 opacity-80" : "w-10 h-10 opacity-60"
          }`}
          style={{
            left: "-50%",
            top: "-50%",
          }}
        ></div>
        
        {/* Inner dot */}
        <div
          className={`absolute rounded-full bg-neon-purple transition-all duration-300 ${
            isClicked ? "w-3 h-3" : "w-2 h-2"
          }`}
          style={{
            left: "-50%",
            top: "-50%",
          }}
        ></div>
      </div>
      
      {/* Trail effect */}
      {Array.from({ length: 5 }).map((_, index) => (
        <div
          key={index}
          className="fixed pointer-events-none z-40 w-2 h-2 rounded-full bg-neon-purple/30 blur-sm opacity-0"
          style={{
            left: `${position.x}px`,
            top: `${position.y}px`,
            transform: "translate(-50%, -50%)",
            opacity: 0.5 - index * 0.1,
            transition: `opacity 0.2s ease-out, transform ${0.2 + index * 0.1}s ease-out`,
            transitionDelay: `${index * 0.05}s`,
          }}
        ></div>
      ))}
    </>
  );
};

export default GlowCursor;
