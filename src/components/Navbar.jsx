import React from "react";
import { Link } from "react-router-dom";

export default function Navbar({ hc, ac, pc, cc }) {
  return (
    <>
      <div className="flex justify-around items-center bg-black text-white p-4 py-5">
        <h1 className="text-3xl font-bold">YARANAIKA</h1>
        <Link style={hc} to="/">Home</Link>
        <Link style={ac} to="/about">About</Link>
        <Link style={pc} to="/portfolio">Portfolio</Link>
        <Link style={cc} to="/contact" className="border border-white py-2 px-6 rounded-3xl">
          Let's Talk
        </Link>
      </div>
    </>
  );
}
