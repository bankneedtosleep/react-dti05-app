import React from "react";
import Navbar from "../components/Navbar.jsx";
import profileIcon from "../ReactTailwindWS01/Profile Icon.png";
import c2Image from "../ReactTailwindWS01/C2-BPYOI9v0.png";
import c3Image from "../ReactTailwindWS01/C3-w0fAnKNh.png";

export default function Contact() {
  const cc = { color: "yellow" };
  return (
    <>
      <Navbar cc={cc} />
      <main className="max-w-6xl mx-auto px-6 py-24 text-white">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-8">Contact</h1>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold text-yellow-400 mb-3">Let's Connect</h2>
            <p className="text-gray-400 mb-8 max-w-prose">Interested in working together or have a question? Reach out — I typically respond within a few days.</p>
            <div className="flex gap-4">
              <a href="mailto:bank03124@gmail.com" className="bg-yellow-400 text-black py-3 px-6 rounded-full font-medium shadow">Email me</a>
              <a href="#" className="border border-white/10 py-3 px-5 rounded-full">Download CV</a>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 items-center justify-center">
            <div className="flex flex-col items-center">
              <img src={profileIcon} alt="email" className="w-24 h-24 mb-4 rounded-xl shadow-lg" />
              <p className="text-gray-200">bank03124@gmail.com</p>
            </div>
            <div className="flex flex-col items-center">
              <img src={c2Image} alt="location" className="w-24 h-24 mb-4 rounded-xl shadow-lg" />
              <p className="text-gray-200">Thailand, Bangkok</p>
            </div>
            <div className="flex flex-col items-center">
              <img src={c3Image} alt="linkedin" className="w-24 h-24 mb-4 rounded-xl shadow-lg" />
              <p className="text-gray-200">bankneedtosleep</p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
