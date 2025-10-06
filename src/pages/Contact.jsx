import React from "react";
import Navbar from "../components/Navbar.jsx";

export default function Contact() {
  const cc = { color: "yellow" };

  return (
    <>
      <Navbar cc={cc} />
      <main className="max-w-6xl mx-auto px-6 py-24 text-white">
        {/* Contact title */}
        <h1 className="text-6xl md:text-7xl font-serif font-bold text-left mb-16 tracking-tight">
          Contact
        </h1>

        {/* Let’s Connect และข้อความกลาง */}
        <div className="flex flex-col items-center text-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-3 text-yellow-400">
            Let’s Connect
          </h2>
          <p className="text-lg md:text-xl text-gray-400 mb-16 max-w-2xl">
            Don't be a stranger! Say hello and let's collaborate. I'm always
            excited to meet new people and work on interesting projects.
          </p>

          {/* ส่วนของไอคอน 3 อัน */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-12 md:gap-20">
            {/* Email */}
            <div className="flex flex-col items-center hover:scale-110 transition-transform duration-300">
              <img
                src="/src/ReactTailwindWS01/Profile Icon.png"
                alt="email"
                className="w-20 h-20 mb-4"
              />
              <p className="text-base md:text-lg text-gray-200 hover:text-yellow-400 transition-colors duration-300">
                bank03124@gmail.com
              </p>
            </div>

            {/* Location */}
            <div className="flex flex-col items-center hover:scale-110 transition-transform duration-300">
              <img
                src="/src/ReactTailwindWS01/C2-BPYOI9v0.png"
                alt="location"
                className="w-20 h-20 mb-4"
              />
              <p className="text-base md:text-lg text-gray-200 hover:text-yellow-400 transition-colors duration-300">
                Thailand, Bangkok
              </p>
            </div>

            {/* LinkedIn */}
            <div className="flex flex-col items-center hover:scale-110 transition-transform duration-300">
              <img
                src="/src/ReactTailwindWS01/C3-w0fAnKNh.png"
                alt="linkedin"
                className="w-20 h-20 mb-4"
              />
              <p className="text-base md:text-lg text-gray-200 hover:text-yellow-400 transition-colors duration-300">
                bankneedtosleep
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
