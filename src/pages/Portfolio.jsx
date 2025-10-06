import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar.jsx';
import bikesBeardsImg from '../ReactTailwindWS01/Bikes and beards 1.png';
import learnifyImg from '../ReactTailwindWS01/Learnify 1.png';
import figmaCommunityImg from '../ReactTailwindWS01/Figma to HTML (Community) 1.png';
import edtechImg from '../ReactTailwindWS01/EdTech 1.png';

export default function Portfolio() {
  const pc = { color: 'yellow' };
  const [lightbox, setLightbox] = useState(null);
  const items = [
    { id: 1, title: 'Bikes and Beards', img: bikesBeardsImg, desc: 'A clean layout for a cycling community site.' },
    { id: 2, title: 'Learnify', img: learnifyImg, desc: 'An education platform focused on learning paths.' },
    { id: 3, title: 'Anime-X', img: figmaCommunityImg, desc: 'A fun community theme for anime fans.' },
    { id: 4, title: 'Tech-Z', img: edtechImg, desc: 'Modern design system for EdTech products.' },
  ];

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add('in-view')),
      { threshold: 0.18 }
    );
    document.querySelectorAll('.portfolio-section').forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <>
      <Navbar pc={pc} />
      <main className="max-w-6xl mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold mb-8">Portfolio</h2>
        <div className="grid gap-12">
          {items.map((item, idx) => (
            <article key={item.id} className="grid md:grid-cols-2 gap-8 items-center portfolio-section p-6 rounded-2xl bg-white/3 shadow-lg" data-idx={idx}>
              <div className={`${idx % 2 === 1 ? 'md:order-2' : 'md:order-1'} flex items-center justify-center`}>
                <div className="w-full overflow-hidden rounded-xl shadow-xl">
                  <img src={item.img} alt={item.title} className="w-full h-64 object-cover" />
                </div>
              </div>
              <div className={`${idx % 2 === 1 ? 'md:order-1' : 'md:order-2'} flex flex-col justify-center text-gray-200 px-2 text-center md:text-left`}>
                <h3 className="text-2xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-300 mb-4">{item.desc}</p>
                <div className="flex items-center gap-4">
                  <button onClick={() => setLightbox(item)} className="bg-yellow-400 text-black py-2 px-6 rounded-full font-medium">Preview</button>
                  <a className="text-white underline" href="#">View on Git</a>
                </div>
              </div>
            </article>
          ))}
        </div>

        {lightbox && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80" role="dialog" aria-modal="true" onClick={() => setLightbox(null)}>
            <div className="bg-gray-900 p-6 rounded-2xl max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold">{lightbox.title}</h3>
                <button onClick={() => setLightbox(null)} className="text-white">Close</button>
              </div>
              <img src={lightbox.img} alt={lightbox.title} className="w-full object-contain rounded-2xl" />
            </div>
          </div>
        )}
      </main>
    </>
  );
}
