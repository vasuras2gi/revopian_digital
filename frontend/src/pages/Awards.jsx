import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
// Dhyan rakhein ki CircularGallery ka path sahi ho aapke folder structure ke hisaab se
import CircularGallery from '../components/CircularGallery'; 

export const Awards = () => {
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      // Title Animation - Drops in from top
      gsap.fromTo(".title-anim", 
        { y: -50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, stagger: 0.2, ease: "power4.out" }
      );

      // Gallery Container Animation - Scales up and fades in
      gsap.fromTo(".gallery-anim",
        { opacity: 0, scale: 0.95 },
        { opacity: 1, scale: 1, duration: 1.5, delay: 0.4, ease: "power3.out" }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="bg-[#000e1c] min-h-screen text-white font-sans overflow-hidden pt-32 pb-24 relative flex flex-col items-center">
      
      {/* --- Ambient Cyber Glows (Background) --- */}
      <div className="absolute top-[20%] left-[-10%] w-[50vw] h-[50vw] bg-[#00f6ff]/5 blur-[150px] rounded-full pointer-events-none z-0" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-purple-600/5 blur-[150px] rounded-full pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full flex flex-col items-center">
        
        {/* --- Header Section --- */}
        <div className="text-center mb-12 title-anim">
          <h4 className="text-[#00f6ff] uppercase tracking-[0.4em] text-sm font-bold mb-4">Excellence</h4>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight">
            Awards & <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f6ff] to-blue-500">Recognitions</span>
          </h1>
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto font-light text-sm md:text-lg">
            A 3D interactive journey through our milestones, accolades, and the defining moments of our commitment to digital excellence. Drag to explore.
          </p>
        </div>

        {/* --- Circular Gallery Container (Premium Glass Box) --- */}
        <div className="gallery-anim w-full relative group mt-8">
          
          {/* Subtle animated neon border behind the frame */}
          <div className="absolute -inset-1 bg-gradient-to-r from-[#00f6ff]/20 via-transparent to-purple-600/20 rounded-3xl blur-md opacity-60 group-hover:opacity-100 transition duration-700" />
          
          <div className="relative bg-[#020914]/80 backdrop-blur-md border border-white/10 rounded-3xl p-2 md:p-6 shadow-2xl overflow-hidden w-full h-[60vh] min-h-[500px] md:h-[700px]">
            
            {/* Corner Decorative Elements */}
            <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-[#00f6ff] rounded-tl-3xl opacity-30 m-4 pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-[#00f6ff] rounded-br-3xl opacity-30 m-4 pointer-events-none" />

            {/* The React Bits Circular Gallery */}
            <div className="w-full h-full relative cursor-grab active:cursor-grabbing rounded-2xl overflow-hidden">
              <CircularGallery
                bend={2} // Slightly curved for 3D effect (Adjust 1 to 3 as you like)
                textColor="#ffffff"
                borderRadius={0.05}
                scrollEase={0.05}
                // Loaded Orbitron Font automatically for that Sci-Fi look
                fontUrl="https://fonts.googleapis.com/css2?family=Orbitron:wght@700&display=swap"
                font="bold 30px 'Orbitron', sans-serif"
                scrollSpeed={2}
              />
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default Awards;