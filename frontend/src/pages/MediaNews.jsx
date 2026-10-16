import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';

export const MediaNews = () => {
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      // 1. Title Reveal Animation
      gsap.fromTo(".title-anim", 
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power4.out" }
      );

      // 2. 3D Image Reveal Animation
      gsap.fromTo(".image-anim",
        { y: 100, opacity: 0, rotationX: 15, transformPerspective: 1000 },
        { y: 0, opacity: 1, rotationX: 0, duration: 1.2, delay: 0.3, ease: "back.out(1.2)" }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="bg-[#000e1c] min-h-screen text-white font-sans overflow-x-hidden pt-32 pb-24 relative flex flex-col items-center">
      
      {/* Background Ambient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80vw] h-[50vh] bg-[#00f6ff]/5 blur-[120px] rounded-full pointer-events-none z-0" />

      <div className="max-w-5xl mx-auto px-6 relative z-10 w-full flex flex-col items-center">
        
        {/* Header Section */}
        <div className="text-center mb-16 title-anim">
          <h4 className="text-[#00f6ff] uppercase tracking-[0.4em] text-sm font-bold mb-4">Press & Media</h4>
          <h1 className="text-4xl md:text-6xl font-black text-white">
            Revopions In The <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f6ff] to-blue-500">News</span>
          </h1>
        </div>

        {/* Newspaper Image Container (Premium Glassmorphism Frame) */}
        <div className="image-anim relative group w-full max-w-3xl mx-auto">
          {/* Neon Glow behind the frame that activates on hover */}
          <div className="absolute -inset-1 bg-gradient-to-br from-[#00f6ff]/30 to-purple-600/30 rounded-3xl blur-xl opacity-40 group-hover:opacity-100 transition duration-700" />
          
          <div className="relative bg-[#030914] border border-white/10 p-2 md:p-4 rounded-3xl shadow-2xl transform transition-transform duration-500 group-hover:-translate-y-2">
            
            {/* Corner styling elements */}
            <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[#00f6ff] rounded-tl-3xl opacity-50 m-2 pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[#00f6ff] rounded-br-3xl opacity-50 m-2 pointer-events-none" />

            {/* The Actual Image */}
            <img 
              src="https://revopionsdigitalacademy.com/wp-content/uploads/2025/04/news1-967x1536.jpeg" 
              alt="Revopions Digital Academy in News" 
              className="w-full h-auto object-contain rounded-2xl border border-white/5"
            />
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default MediaNews;