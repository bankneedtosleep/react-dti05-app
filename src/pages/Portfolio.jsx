import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar.jsx';

export default function Portfolio() {
  const pc = { color: 'yellow' };
  const [lightbox, setLightbox] = useState(null);
  const items = [ 
     {
      id: 1,
      title: 'Bikes and Beards',
      img: '/src/ReactTailwindWS01/Bikes and beards 1.png',
      desc:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vitae justo vitae orci posuere fermentum. Integer convallis, nisl at aliquet cursus, urna sapien bibendum erat, at cursus dui sapien a felis.',
    },
    {
      id: 2,
      title: 'Learnify',
      img: '/src/ReactTailwindWS01/Learnify 1.png',
      desc:
        'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.',
    },
    {
      id: 3,
      title: 'Anime-X',
      img: '/src/ReactTailwindWS01/Figma to HTML (Community) 1.png',
      desc:
        'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati.',
    },
    {
      id: 4,
      title: 'Tech-Z',
      img: '/src/ReactTailwindWS01/EdTech 1.png',
      desc:
        'Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit.',
    },
  ];
  return (
    <>
      <Navbar pc={pc} />
      <main className="max-w-6xl mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold mb-8">Portfolio</h2>
        <div className="flex flex-col gap-16">
          {items.map((item, idx) => (
            <section key={item.id} className="grid md:grid-cols-2 gap-8 items-center portfolio-section" data-idx={idx}>
              <div className={`${idx % 2 === 1 ? 'md:order-2' : 'md:order-1'} flex items-center justify-center`}> 
                <div className="card w-full" style={{ animationDelay: `${idx * 120}ms` }}>
                  <img src={item.img} alt={item.title} className="card-img rounded-2xl shadow-2xl object-cover w-full max-h-72 md:max-h-96" />
                </div>
              </div>
              <div className={`${idx % 2 === 1 ? 'md:order-1' : 'md:order-2'} flex flex-col justify-center text-gray-200 px-2 text-center`}> 
                <h3 className="text-3xl lg:text-4xl font-semibold mb-4">{item.title}</h3>
                <p className="leading-relaxed mb-6">{item.desc}</p>
                <div className="flex items-center gap-6 justify-center">
                  <button onClick={() => setLightbox(item)} className="border border-white rounded-full py-2 px-8 text-white transition hover:bg-white/5">View</button>
                  <button className="flex items-center gap-3 text-white">
                    <span className="w-12 h-12 rounded-full border border-white flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-6 h-6 fill-white" aria-hidden="true">
                        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.757-1.333-1.757-1.089-.744.084-.729.084-.729 1.205.084 1.84 1.236 1.84 1.236 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.304.762-1.604-2.665-.305-5.467-1.332-5.467-5.93 0-1.31.468-2.381 1.236-3.221-.124-.303-.536-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.98-.399 3-.404 1.02.005 2.043.138 3 .404 2.291-1.552 3.297-1.23 3.297-1.23.656 1.653.244 2.874.12 3.176.77.84 1.234 1.911 1.234 3.221 0 4.61-2.807 5.624-5.48 5.921.43.372.823 1.102.823 2.222v3.293c0 .322.218.694.825.576C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                      </svg>
                    </span>
                    <span className="hidden sm:inline">Git code</span>
                  </button>
                </div>
              </div>
            </section>
          ))}
        </div>
        {lightbox && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75" role="dialog" aria-modal="true" onClick={() => setLightbox(null)}>
            <div className="bg-black p-6 rounded-2xl max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
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

function _attachObserver() {
  if (typeof window === 'undefined') return;
  const obs = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
        }
      });
    },
    { threshold: 0.18 }
  );
  document.querySelectorAll('.portfolio-section').forEach((el) => obs.observe(el));
}

if (typeof window !== 'undefined') {
  // small delay to attach after initial render
  setTimeout(_attachObserver, 300);
}
