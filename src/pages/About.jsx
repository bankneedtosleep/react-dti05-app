import React, { useState } from 'react';
import Navbar from '../components/Navbar.jsx';
import blobImage from '../assets/react.svg';

function ImageOrFallback() {
  const [err, setErr] = useState(false);
  const imgSrc = blobImage;
  if (!err) {
    return (
      <img src={imgSrc} alt="decorative blob" className="absolute inset-0 w-full h-full object-contain blob-img" onError={() => setErr(true)} />
    );
  }
  // fallback: three colored blobs
  return (
    <>
      <div className="absolute inset-0 blob blob-1" aria-hidden></div>
      <div className="absolute inset-0 blob blob-2" aria-hidden></div>
      <div className="absolute inset-0 blob blob-3" aria-hidden></div>
    </>
  );
}

async function handleDownload() {
  // try download CV from public/CV.pdf
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
  } catch (e) {
    // ignore and fallback
  }
  // fallback to blob image
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
    const ac = { color: 'yellow'}
    return (
    <>
      <Navbar ac={ac} />
      <main className="max-w-6xl mx-auto px-6 py-24">
        <section className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative flex flex-col items-start">
            <h2 className="text-6xl md:text-7xl font-extrabold text-white leading-tight mb-8">About Me</h2>

            <div className="w-64 h-64 md:w-72 md:h-72 relative">
              <ImageOrFallback />
            </div>
          </div>

          
          <div className="text-gray-200">
            <h3 className="text-xl md:text-2xl font-semibold text-white mb-4">Hi, I'm Bank SAU. A passionate Front-end Web Developer based in Thailand.</h3>
            <p className="text-gray-400 leading-relaxed mb-6">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio, nulla? Facilis asperiores nihil quos sed sequi nobis distinctio ipsam perferendis ut minima consequuntur blanditiis odio deleniti et voluptates facere, quia expedita beatae minus labore iusto? Quasi, adipisci voluptatibus culpa vero omnis cumque similique repellendus eum! Sit recusandae pariatur placeat impedit maiores eos maxime similique vitae! Ab doloremque unde, cum inventore eveniet esse accusantium libero fugiat est tempore deleniti dignissimos a!</p>

            <div className="flex items-center mt-6">
              <button onClick={handleDownload} className="inline-block bg-transparent border border-white text-white py-3 px-6 rounded-full hover:bg-white/5 transition">Download CV</button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
