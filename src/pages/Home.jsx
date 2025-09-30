import React from "react";
import Navbar from "../components/Navbar";
import profile from "../assets/profile.png";
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

      <div className="flex items-center justify-center mt-20">
        <div className="text-white mr-20">
          <h1 style={{ fontFamily: "Lora" }} className="text-3xl">
            Frontend Web
          </h1>
          <h1 style={{ fontFamily: "Lora" }} className="text-3xl">
            Developer
          </h1>
          <br />
          <span>
            Hi, I'm Marc. <br />
          </span>
          <br />
          <span>Web developer based in the Thailand</span>
          <br />
          <div className="flex mt-5">
            <FaInstagramSquare className="mr-2 text-4xl bg-white text-black p-2 rounded-xl" />
            <GrGithub className="ml-2 text-4xl" />
          </div>
        </div>
        <div className="ml-20">
          <img className="w-48 rounded-full" src={profile} alt="profile" />
        </div>
      </div>
      <div className="flex flex-col items-center mt-12">
        <h2 className="text-white text-2xl font-bold mb-6">My Tech Stack</h2>
        <div className="flex flex-wrap justify-center">
          <img className="w-8 mx-2" src={img1} alt="figma" />
          <img className="w-8 mx-2" src={img2} alt="java" />
          <img className="w-8 mx-2" src={img3} alt="firebase" />
          <img className="w-8 mx-2" src={img4} alt="js" />
          <img className="w-8 mx-2" src={img5} alt="springboot" />
          <img className="w-8 mx-2" src={img6} alt="css" />
          <img className="w-8 mx-2" src={img7} alt="html" />
          <img className="w-8 mx-2" src={img8} alt="node" />
          <img className="w-8 mx-2" src={img9} alt="react" />
        </div>
      </div>
    </>
  );
}
