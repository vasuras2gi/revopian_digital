'use client';

import React, { useLayoutEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Gallery Data


const galleryData = [
  { id: 1, span: "md:col-span-2 md:row-span-2", title: "Smart Classroom Training", category: "Classes", img: "https://revopionsdigitalacademy.com/wp-content/uploads/2025/05/g29.jpg" },
  { id: 2, span: "md:col-span-1 md:row-span-1", title: "Achievement", category: "Awards", img: "https://revopionsdigitalacademy.com/wp-content/uploads/2025/05/g7.jpg" },
  { id: 3, span: "md:col-span-1 md:row-span-2", title: "Interactive Session", category: "Discussion", img: "https://revopionsdigitalacademy.com/wp-content/uploads/2025/05/g3.png" },
  { id: 4, span: "md:col-span-1 md:row-span-1", title: "Tech Lab", category: "Batches", img: "https://revopionsdigitalacademy.com/wp-content/uploads/2025/05/g10.jpg" },
  { id: 5, span: "md:col-span-2 md:row-span-1", title: "RDA Smart Classroom", category: "Learning", img: "https://revopionsdigitalacademy.com/wp-content/uploads/2025/05/g1.png" },
  { id: 6, span: "md:col-span-1 md:row-span-1", title: "Success Stories", category: "Instaa", img: "https://revopionsdigitalacademy.com/wp-content/uploads/2025/05/g4.png" },
  { id: 7, span: "md:col-span-1 md:row-span-1", title: "Guest Felicitations", category: "Events", img: "https://revopionsdigitalacademy.com/wp-content/uploads/2025/05/g11.jpg" },
  { id: 8, span: "md:col-span-2 md:row-span-2", title: "Expert Sessions", category: "Events", img: "https://revopionsdigitalacademy.com/wp-content/uploads/2025/05/g23.jpg" },
  { id: 9, span: "md:col-span-1 md:row-span-1", title: "Team Connect", category: "Network", img: "https://revopionsdigitalacademy.com/wp-content/uploads/2025/05/g24.jpg" },
  { id: 10, span: "md:col-span-1 md:row-span-2", title: "Student Support", category: "Mentorship", img: "https://revopionsdigitalacademy.com/wp-content/uploads/2025/05/g16.jpg" },
  { id: 11, span: "md:col-span-1 md:row-span-1", title: "Digital Marketing", category: "Training", img: "https://revopionsdigitalacademy.com/wp-content/uploads/2025/05/g12.jpg" },
  { id: 12, span: "md:col-span-2 md:row-span-1", title: "Live Projects", category: "Practical", img: "https://revopionsdigitalacademy.com/wp-content/uploads/2025/05/g2.png" },
  
  // Niche 13 se 20 tak apne alag URLs update kar lijiye
  { id: 13, span: "md:col-span-1 md:row-span-1", title: "Campus Tour", category: "Infrastructure", img: "https://revopionsdigitalacademy.com/wp-content/uploads/2025/05/g22.jpg" },
  { id: 14, span: "md:col-span-1 md:row-span-1", title: "Certification", category: "Awards", img: "https://revopionsdigitalacademy.com/wp-content/uploads/2025/05/g27.jpg" },
  { id: 15, span: "md:col-span-2 md:row-span-2", title: "Annual Fest", category: "Events", img: "https://revopionsdigitalacademy.com/wp-content/uploads/2025/05/g28.jpg" },
  { id: 16, span: "md:col-span-1 md:row-span-1", title: "Skill Building", category: "Classes", img: "https://revopionsdigitalacademy.com/wp-content/uploads/2025/05/g34.jpg" },
  { id: 17, span: "md:col-span-1 md:row-span-2", title: "Placement Drive", category: "Careers", img: "https://revopionsdigitalacademy.com/wp-content/uploads/2025/05/g30.jpg" },
  { id: 18, span: "md:col-span-1 md:row-span-1", title: "Industry Experts", category: "Seminars", img: "https://revopionsdigitalacademy.com/wp-content/uploads/2025/05/g15.jpg" },
  { id: 19, span: "md:col-span-2 md:row-span-1", title: "Workspace", category: "Labs", img: "https://revopionsdigitalacademy.com/wp-content/uploads/2025/07/alex-rohit-gupta4-1152x1536.jpg" }
];

export const MediaGallery = () => {
  const containerRef = useRef(null);
  const [selectedImg, setSelectedImg] = useState(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      
      gsap.to(".cinematic-text", {
        z: 1500,
        scale: 4,
        opacity: 0,
        scrollTrigger: {
          trigger: ".hero-section",
          start: "top top",
          end: "+=1200",
          scrub: 1,
          pin: true,
        }
      });

      gsap.utils.toArray(".gallery-item").forEach((card, index) => {
        const tiltX = gsap.utils.random(-30, 30);
        const tiltY = gsap.utils.random(-30, 30);

        gsap.fromTo(card,
          { 
            z: -3000, 
            opacity: 0, 
            scale: 0.2, 
            rotationX: tiltX, 
            rotationY: tiltY 
          },
          {
            z: 0, 
            opacity: 1, 
            scale: 1, 
            rotationX: 0, 
            rotationY: 0,
            ease: "power2.out",
            scrollTrigger: {
              trigger: card,
              start: "top 120%", 
              end: "top 50%",    
              scrub: 1.5,        
            }
          }
        );
      });

    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="bg-[#000e1c] text-white font-sans overflow-x-hidden perspective-2000 relative">
      
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] bg-[#00f6ff]/5 blur-[150px] rounded-full pointer-events-none z-0" />
      <div className="fixed top-1/3 left-1/3 w-[40vw] h-[40vw] bg-purple-600/5 blur-[120px] rounded-full pointer-events-none z-0" />

      <div className="hero-section relative w-full h-screen flex items-center justify-center transform-style-3d z-10">
        <div className="cinematic-text flex flex-col items-center justify-center pointer-events-none text-center px-4 w-full">
          <h4 className="text-[#00f6ff] uppercase tracking-[0.5em] text-xs md:text-sm font-bold mb-4 drop-shadow-[0_0_15px_rgba(0,246,255,0.8)]">
            Immersive Experience
          </h4>
          <h1 className="text-5xl md:text-8xl lg:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-600 drop-shadow-2xl leading-none">
            OUR <br/><span className="text-[#00f6ff]">GALLERY</span>
          </h1>
          <div className="mt-12 animate-bounce w-8 h-12 rounded-full border-2 border-white/20 flex justify-center p-1">
            <div className="w-1.5 h-3 bg-[#00f6ff] rounded-full" />
          </div>
        </div>
      </div>

      <div className="relative z-20 w-full max-w-7xl mx-auto px-4 md:px-8 pb-32 transform-style-3d">
        {/* ROW HEIGHT INCREASED: 250px se 300px kar diya taaki face cut na ho */}
        <div className="grid grid-cols-2 md:grid-cols-4 grid-flow-row-dense auto-rows-[200px] md:auto-rows-[300px] gap-4 md:gap-6">
          
          {galleryData.map((item) => (
            <div 
              key={item.id}
              onClick={() => setSelectedImg(item.img)}
              className={`gallery-item relative group bg-[#050d1a] border border-white/10 rounded-2xl md:rounded-3xl overflow-hidden cursor-pointer shadow-[0_20px_50px_rgba(0,0,0,0.8)] transform-style-3d hover:border-[#00f6ff]/40 transition-colors duration-300 ${item.span}`}
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-[#00f6ff]/30 to-purple-600/30 opacity-0 group-hover:opacity-100 transition duration-700 z-10 pointer-events-none mix-blend-overlay" />

              {/* IMAGE POSITION FIX: item.pos se control hoga */}
              <img 
                src={item.img} 
                alt={item.title} 
                loading="lazy"
                className={`w-full h-full object-cover scale-[1.02] group-hover:scale-110 transition-transform duration-700 ease-out brightness-[0.75] group-hover:brightness-110 ${item.pos}`}
              />

              <div className="absolute bottom-0 left-0 w-full p-4 md:p-6 bg-gradient-to-t from-black/95 via-black/50 to-transparent z-20 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <span className="inline-block bg-[#00f6ff]/10 text-[#00f6ff] border border-[#00f6ff]/30 text-[9px] md:text-[10px] font-black uppercase tracking-widest px-2.5 py-1 rounded-full mb-2 backdrop-blur-md">
                  {item.category}
                </span>
                <h3 className="text-white font-black text-sm md:text-lg leading-tight drop-shadow-md line-clamp-1">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}

        </div>
      </div>

      {selectedImg && (
        <div 
          className="fixed inset-0 bg-black/95 backdrop-blur-3xl z-50 flex items-center justify-center p-4 cursor-zoom-out animate-[fadeIn_0.3s_ease-out]"
          onClick={() => setSelectedImg(null)}
        >
          <button className="absolute top-6 right-6 text-white hover:text-[#00f6ff] transition-colors p-3 text-2xl font-bold bg-white/5 rounded-full border border-white/10 hover:border-[#00f6ff]/40">
            &times;
          </button>
          <img 
            src={selectedImg} 
            alt="Expanded view" 
            className="max-w-full max-h-[90vh] rounded-2xl border border-white/10 shadow-[0_0_80px_rgba(0,246,255,0.15)] object-contain"
          />
        </div>
      )}

    </div>
  );
};

export default MediaGallery;
