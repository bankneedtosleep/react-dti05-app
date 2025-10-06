import React, { useState } from 'react';
import Navbar from '../components/Navbar.jsx';
import blobImage from '../assets/react.svg';

function ImageOrFallback() {
  const [err, setErr] = useState(false);
  const imgSrc = blobImage;
  if (!err) {
    return <img src={imgSrc} alt="decorative blob" className="absolute inset-0 w-full h-full object-contain blob-img" onError={() => setErr(true)} />;
  }
  return (
    <>
      <div className="absolute inset-0 blob blob-1" aria-hidden />
      <div className="absolute inset-0 blob blob-2" aria-hidden />
      <div className="absolute inset-0 blob blob-3" aria-hidden />
    </>
  );
}

async function handleDownload() {
  const cvUrl = '/CV.pdf';
  try {
    const res = await fetch(cvUrl);
    if (res.ok) {
      const blob = await res.blob();
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'CV.pdf';
      document.body.appendChild(a);
      a.click();
      a.remove();
      URL.revokeObjectURL(url);
      return;
    }
  } catch (e) {}
  const fallback = blobImage;
  try {
    const res2 = await fetch(fallback);
    if (res2.ok) {
      const blob = await res2.blob();
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'blob.svg';
      document.body.appendChild(a);
      a.click();
      a.remove();
      URL.revokeObjectURL(url);
    }
  } catch (e) {
    alert('No CV or image available to download.');
  }
}

export default function About() {
  const ac = { color: 'yellow' };
  return (
    <>
      <Navbar ac={ac} />
      <main className="max-w-6xl mx-auto px-6 py-24">
        <section className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative flex flex-col items-start">
            <h2 className="text-5xl md:text-6xl font-extrabold text-white leading-tight mb-6">About Me</h2>
            <p className="text-gray-300 mb-8 max-w-prose">I’m a frontend developer from Thailand focused on building performant and accessible web interfaces. I enjoy converting designs into interactive UI and optimizing user experiences.</p>
            <div className="w-64 h-64 md:w-72 md:h-72 relative rounded-xl overflow-hidden shadow-xl">
              <ImageOrFallback />
            </div>
          </div>

          <div className="text-gray-200">
            <h3 className="text-xl md:text-2xl font-semibold text-white mb-4">Hi, I'm Bank SAU.</h3>
            <p className="text-gray-400 leading-relaxed mb-6">I build modern front-end applications using React, Vite and Tailwind. I focus on performance, accessibility, and clear code. When I'm not coding, I enjoy learning design patterns and improving UX.</p>
            <div className="flex items-center mt-6 gap-4">
              <button onClick={handleDownload} className="inline-block bg-yellow-400 text-black py-3 px-6 rounded-full font-medium shadow hover:scale-105 transition">Download CV</button>
              <a href="/contact" className="inline-block text-white border border-white/10 py-3 px-5 rounded-full hover:bg-white/5 transition">Get in touch</a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
