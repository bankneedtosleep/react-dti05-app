import React from "react";
import Navbar from "../components/Navbar.jsx";
import profile from "../assets/profile.jpg";
import linkedinIcon from "../assets/_Linkedin.png";
import { FaInstagramSquare } from "react-icons/fa";
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

      <div className="flex flex-col lg:flex-row items-center justify-center mt-16 lg:mt-20 gap-8 lg:gap-16 px-4">
        <div className="text-white text-center lg:text-left max-w-xl">
          <h1 style={{ fontFamily: "Lora" }} className="text-3xl lg:text-4xl font-semibold">
            Frontend Web
          </h1>
          <h1 style={{ fontFamily: "Lora" }} className="text-3xl lg:text-4xl font-semibold">
            Developer
          </h1>
          <p className="mt-4 text-lg lg:text-xl">
            Hi, I'm Bank. <br />
            Web developer based in Thailand
          </p>
          <div className="flex items-center justify-center lg:justify-start gap-4 mt-6">
            <img src={linkedinIcon} alt="linkedin" className="w-10 h-10 bg-white rounded-full p-1" />
            <GrGithub className="text-3xl lg:text-4xl" />
          </div>
        </div>
        <div className="flex-shrink-0">
          <img className="w-36 h-36 sm:w-44 sm:h-44 lg:w-56 lg:h-56 rounded-full object-cover border-4 border-white" src={profile} alt="profile" />
        </div>
      </div>
      <div className="flex flex-col items-center mt-12">
        <h2 className="text-white text-2xl font-bold mb-6">My Tech Stack</h2>
        <div className="flex flex-wrap justify-center items-center gap-4 px-2">
          <img className="w-10 h-10 sm:w-12 sm:h-12 mx-2" src={img1} alt="figma" />
          <img className="w-10 h-10 sm:w-12 sm:h-12 mx-2" src={img2} alt="java" />
          <img className="w-10 h-10 sm:w-12 sm:h-12 mx-2" src={img3} alt="firebase" />
          <img className="w-10 h-10 sm:w-12 sm:h-12 mx-2" src={img4} alt="js" />
          <img className="w-10 h-10 sm:w-12 sm:h-12 mx-2" src={img5} alt="springboot" />
          <img className="w-10 h-10 sm:w-12 sm:h-12 mx-2" src={img6} alt="css" />
          <img className="w-10 h-10 sm:w-12 sm:h-12 mx-2" src={img7} alt="html" />
          <img className="w-10 h-10 sm:w-12 sm:h-12 mx-2" src={img8} alt="node" />
          <img className="w-10 h-10 sm:w-12 sm:h-12 mx-2" src={img9} alt="react" />
        </div>
      </div>
    </>
  );
}
