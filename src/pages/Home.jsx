import React from "react";
import Navbar from "../components/Navbar.jsx";
import profile from "../assets/profile.jpg";
import linkedinIcon from "../assets/_Linkedin.png";
import { GrGithub } from "react-icons/gr";
import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";
import img4 from "../assets/img4.png";
import img5 from "../assets/img5.png";
import img6 from "../assets/img6.png";
import img7 from "../assets/img7.png";
import img8 from "../assets/img8.png";
import img9 from "../assets/img9.png";

export default function Home() {
  const hc = { color: "yellow" };
  return (
    <>
      <Navbar hc={hc} />

      <section className="relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 py-20 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-4">Hi, I'm Bank — Frontend Developer</h1>
            <p className="text-gray-300 text-lg mb-6">I build responsive, accessible and modern user interfaces. Currently focused on React + Vite + Tailwind projects.</p>
            <div className="flex items-center gap-4">
              <a href="#portfolio" className="inline-block bg-yellow-400 text-black py-3 px-6 rounded-full font-medium shadow hover:scale-105 transition">See my work</a>
              <a href="/contact" className="inline-block text-white border border-white/10 py-3 px-5 rounded-full hover:bg-white/5 transition">Contact</a>
            </div>
            <div className="flex items-center gap-4 mt-8">
              <img src={linkedinIcon} alt="linkedin" className="w-10 h-10 bg-white rounded-full p-1" />
              <GrGithub className="text-3xl lg:text-4xl text-white" />
            </div>
          </div>

          <div className="flex justify-center">
            <div className="relative w-56 h-56 lg:w-72 lg:h-72 rounded-full overflow-hidden border-4 border-white shadow-xl">
              <img src={profile} alt="profile" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section id="stack" className="bg-gradient-to-b from-black/0 to-black/20 py-12">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-white text-2xl font-bold mb-6">Tech Stack</h2>
          <div className="flex flex-wrap justify-center items-center gap-6">
            <img className="w-12 h-12" src={img1} alt="figma" />
            <img className="w-12 h-12" src={img2} alt="java" />
            <img className="w-12 h-12" src={img3} alt="firebase" />
            <img className="w-12 h-12" src={img4} alt="js" />
            <img className="w-12 h-12" src={img5} alt="springboot" />
            <img className="w-12 h-12" src={img6} alt="css" />
            <img className="w-12 h-12" src={img7} alt="html" />
            <img className="w-12 h-12" src={img8} alt="node" />
            <img className="w-12 h-12" src={img9} alt="react" />
          </div>
        </div>
      </section>
    </>
  );
}
