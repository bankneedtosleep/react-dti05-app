import React from "react";
import { Link } from "react-router-dom";

export default function Navbar({ hc, ac, pc, cc }) {
  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-black/60 text-white border-b border-white/5">
      <div className="max-w-6xl mx-auto px-4">
        <nav className="flex items-center justify-between h-16">
          <div className="flex items-center gap-4">
            <div className="text-2xl font-extrabold tracking-wide">bankneedtosleep</div>
            <div className="hidden md:flex items-center gap-6 ml-6 text-sm opacity-95">
              <Link style={hc} to="/" className="hover:text-yellow-400 transition">Home</Link>
              <Link style={ac} to="/about" className="hover:text-yellow-400 transition">About</Link>
              <Link style={pc} to="/portfolio" className="hover:text-yellow-400 transition">Portfolio</Link>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Link to="/contact" className="hidden sm:inline-block bg-gradient-to-r from-yellow-400 to-orange-300 text-black font-medium py-2 px-4 rounded-full shadow hover:scale-105 transition">Let's Talk</Link>
            <button className="md:hidden p-2 rounded-md hover:bg-white/5">Menu</button>
          </div>
        </nav>
      </div>
    </header>
  );
}
