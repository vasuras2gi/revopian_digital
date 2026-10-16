import React, { useState, useRef, useLayoutEffect, useEffect } from 'react';
import { gsap } from 'gsap';

const slidesData = [
  {
    id: 1,
    title: "AI REVOLUTION",
    subtitle: "PROGRAM",
    duration: "2 MONTHS",
    buttonText: "NOW AVAILABLE",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1920&auto=format&fit=crop", 
    highlightColor: "#f59e0b"
  },
  {
    id: 2,
    title: "Ai Digital Marketing",
    subtitle: "Course",
    duration: "6 MONTHS",
    buttonText: "ENROLL NOW",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1920&auto=format&fit=crop",
    highlightColor: "#06b6d4"
  },
  {
    id: 3,
    title: "Ai Video-Editing",
    subtitle: "Course",
    duration: "3 MONTHS",
    buttonText: "EXPLORE",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=1920&auto=format&fit=crop",
    highlightColor: "#8b5cf6"
  },
  {
    id: 4,
    title: "Motion Graphics",
    subtitle: "Course",
    duration: "3 MONTHS",
    buttonText: "EXPLORE",
    image: "https://images.unsplash.com/photo-1725347740938-73127ed5d91c?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    highlightColor: "#8b5cf6"
  }
];

export const PremiumScroller = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef(null);
  const slidesRef = useRef([]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === slidesData.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? slidesData.length - 1 : prev - 1));
  };

  // --- NEW: Auto Slide Feature ---
  useEffect(() => {
    const slideTimer = setInterval(() => {
      nextSlide();
    }, 5000); // 5000ms = 5 seconds me slide change hogi

    // Cleanup: Jab user manual click karega (currentIndex change hoga), 
    // toh purana timer clear hokar naya shuru ho jayega taaki overlapping na ho.
    return () => clearInterval(slideTimer);
  }, [currentIndex]);
  // -------------------------------

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      slidesRef.current.forEach((slide, index) => {
        if (!slide) return;
        
        const img = slide.querySelector('.slide-bg');
        const textElements = slide.querySelectorAll('.gsap-text');
        const badge = slide.querySelector('.gsap-badge');

        if (index === currentIndex) {
          // ACTIVE SLIDE ANIMATION
          gsap.to(slide, { opacity: 1, zIndex: 10, duration: 0.8, ease: "power2.inOut" });
          
          // Image scale effect
          gsap.fromTo(img, 
            { scale: 1.1, filter: "blur(4px)" }, 
            { scale: 1, filter: "blur(0px)", duration: 1.5, ease: "power3.out" }
          );

          // Text stagger reveal
          gsap.fromTo(textElements, 
            { y: 50, opacity: 0 }, 
            { y: 0, opacity: 1, duration: 1, stagger: 0.15, ease: "power4.out", delay: 0.3 }
          );

          // Badge drop-in
          gsap.fromTo(badge, 
            { y: -30, opacity: 0, rotationX: 90 }, 
            { y: 0, opacity: 1, rotationX: 0, duration: 1, ease: "back.out(1.7)", delay: 0.6 }
          );
        } else {
          // INACTIVE SLIDE ANIMATION
          gsap.to(slide, { opacity: 0, zIndex: 0, duration: 0.8, ease: "power2.inOut" });
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, [currentIndex]);

  return (
    <div ref={containerRef} className="relative w-full h-screen bg-[#050914] overflow-hidden text-white font-sans">
      
      {/* Slides Container */}
      {slidesData.map((slide, index) => (
        <div 
          key={slide.id} 
          ref={(el) => (slidesRef.current[index] = el)}
          className="absolute inset-0 opacity-0"
        >
          {/* Background Image with Gradient Overlay */}
          <div className="absolute inset-0 w-full h-full">
            <img 
              src={slide.image} 
              alt={slide.title}
              className="slide-bg w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#050914]/80 to-[#050914] z-10" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050914] via-transparent to-transparent z-10" />
          </div>

          {/* Content Wrapper */}
          <div className="absolute inset-0 z-20 flex flex-col justify-center items-end pr-10 md:pr-32">
            
            {/* Floating Duration Badge */}
            <div className="gsap-badge absolute top-16 right-10 md:right-32 border border-white/20 rounded-xl p-4 flex flex-col items-center justify-center bg-black/40 backdrop-blur-md">
              <span className="text-xs tracking-[0.2em] text-gray-300">DURATION</span>
              <span className="text-5xl font-black mt-1">{slide.duration.split(' ')[0]}</span>
              <span className="text-sm tracking-widest mt-1 text-gray-400">{slide.duration.split(' ')[1]}</span>
            </div>

            {/* Main Typography */}
            <div className="text-right">
              <div className="overflow-hidden">
                <h1 className="gsap-text text-6xl md:text-8xl font-black tracking-tighter" style={{ color: slide.highlightColor }}>
                  {slide.title.split(' ')[0]}
                </h1>
              </div>
              <div className="overflow-hidden">
                <h1 className="gsap-text text-6xl md:text-8xl font-black tracking-tighter text-white drop-shadow-lg">
                  {slide.title.split(' ').slice(1).join(' ')}
                </h1>
              </div>
              <div className="overflow-hidden mt-2">
                <div className="gsap-text flex items-center justify-end gap-4">
                  <div className="h-[1px] w-12 md:w-24 bg-white/50" />
                  <h2 className="text-xl md:text-3xl tracking-[0.3em] font-light text-gray-300">
                    {slide.subtitle}
                  </h2>
                  <div className="h-[1px] w-12 md:w-24 bg-white/50" />
                </div>
              </div>

              {/* Call to Action Button */}
              <div className="overflow-hidden mt-10">
                <button 
                  className="gsap-text group relative inline-flex items-center gap-4 px-8 py-4 rounded-full font-bold tracking-widest text-sm md:text-base overflow-hidden"
                  style={{ backgroundColor: slide.highlightColor, color: '#000' }}
                >
                  <span className="relative z-10">{slide.buttonText}</span>
                  <div className="relative z-10 bg-black/20 p-2 rounded-full transition-transform group-hover:translate-x-1">
                    <svg className="w-4 h-4 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                  <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                </button>
              </div>
            </div>

          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <div className="absolute inset-y-0 left-4 md:left-10 z-30 flex items-center">
        <button 
          onClick={prevSlide}
          className="p-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 backdrop-blur-md transition-all hover:scale-110 active:scale-95"
        >
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
      </div>

      <div className="absolute inset-y-0 right-4 md:right-10 z-30 flex items-center hidden md:flex">
        <button 
          onClick={nextSlide}
          className="p-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 backdrop-blur-md transition-all hover:scale-110 active:scale-95"
        >
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

    </div>
  );
};




// import React, { useState, useRef, useLayoutEffect } from 'react';
// import { gsap } from 'gsap';

// const slidesData = [
//   {
//     id: 1,
//     title: "AI REVOLUTION",
//     subtitle: "PROGRAM",
//     duration: "2 MONTHS",
//     buttonText: "NOW AVAILABLE",
//     // Replace with your actual robot/tech image path
//     image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1920&auto=format&fit=crop", 
//     highlightColor: "#f59e0b" // Orange/Amber
//   },
//   {
//     id: 2,
//     title: "Ai Digital Marketing",
//     subtitle: "Course",
//     duration: "6 MONTHS",
//     buttonText: "ENROLL NOW",
//     image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1920&auto=format&fit=crop",
//     highlightColor: "#06b6d4" // Cyan
//   },
//   {
//     id: 3,
//     title: "Ai Video-Editing",
//     subtitle: "Course",
//     duration: "3 MONTHS",
//     buttonText: "EXPLORE",
//     image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=1920&auto=format&fit=crop",
//     highlightColor: "#8b5cf6" // Purple
//   },
//   {
//     id: 4,
//     title: "Motion Graphics",
//     subtitle: "Course",
//     duration: "3 MONTHS",
//     buttonText: "EXPLORE",
//     image: "https://images.unsplash.com/photo-1725347740938-73127ed5d91c?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     highlightColor: "#8b5cf6" // Purple
//   }
// ];

// export const PremiumScroller = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const containerRef = useRef(null);
//   const slidesRef = useRef([]);

//   const nextSlide = () => {
//     setCurrentIndex((prev) => (prev === slidesData.length - 1 ? 0 : prev + 1));
//   };

//   const prevSlide = () => {
//     setCurrentIndex((prev) => (prev === 0 ? slidesData.length - 1 : prev - 1));
//   };

//   useLayoutEffect(() => {
//     let ctx = gsap.context(() => {
//       slidesRef.current.forEach((slide, index) => {
//         if (!slide) return;
        
//         const img = slide.querySelector('.slide-bg');
//         const textElements = slide.querySelectorAll('.gsap-text');
//         const badge = slide.querySelector('.gsap-badge');

//         if (index === currentIndex) {
//           // ACTIVE SLIDE ANIMATION
//           gsap.to(slide, { opacity: 1, zIndex: 10, duration: 0.8, ease: "power2.inOut" });
          
//           // Image scale effect (Premium slow zoom)
//           gsap.fromTo(img, 
//             { scale: 1.1, filter: "blur(4px)" }, 
//             { scale: 1, filter: "blur(0px)", duration: 1.5, ease: "power3.out" }
//           );

//           // Text stagger reveal from bottom
//           gsap.fromTo(textElements, 
//             { y: 50, opacity: 0 }, 
//             { y: 0, opacity: 1, duration: 1, stagger: 0.15, ease: "power4.out", delay: 0.3 }
//           );

//           // Badge drop-in
//           gsap.fromTo(badge, 
//             { y: -30, opacity: 0, rotationX: 90 }, 
//             { y: 0, opacity: 1, rotationX: 0, duration: 1, ease: "back.out(1.7)", delay: 0.6 }
//           );
//         } else {
//           // INACTIVE SLIDE ANIMATION
//           gsap.to(slide, { opacity: 0, zIndex: 0, duration: 0.8, ease: "power2.inOut" });
//         }
//       });
//     }, containerRef);

//     return () => ctx.revert();
//   }, [currentIndex]);

//   return (
//     <div ref={containerRef} className="relative w-full h-screen bg-[#050914] overflow-hidden text-white font-sans">
      
//       {/* Slides Container */}
//       {slidesData.map((slide, index) => (
//         <div 
//           key={slide.id} 
//           ref={(el) => (slidesRef.current[index] = el)}
//           className="absolute inset-0 opacity-0"
//         >
//           {/* Background Image with Gradient Overlay */}
//           <div className="absolute inset-0 w-full h-full">
//             <img 
//               src={slide.image} 
//               alt={slide.title}
//               className="slide-bg w-full h-full object-cover object-center"
//             />
//             {/* Dark gradient mapping the screenshot's vibe */}
//             <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#050914]/80 to-[#050914] z-10" />
//             <div className="absolute inset-0 bg-gradient-to-t from-[#050914] via-transparent to-transparent z-10" />
//           </div>

//           {/* Content Wrapper */}
//           <div className="absolute inset-0 z-20 flex flex-col justify-center items-end pr-10 md:pr-32">
            
//             {/* Floating Duration Badge (Top Right) */}
//             <div className="gsap-badge absolute top-16 right-10 md:right-32 border border-white/20 rounded-xl p-4 flex flex-col items-center justify-center bg-black/40 backdrop-blur-md">
//               <span className="text-xs tracking-[0.2em] text-gray-300">DURATION</span>
//               <span className="text-5xl font-black mt-1">{slide.duration.split(' ')[0]}</span>
//               <span className="text-sm tracking-widest mt-1 text-gray-400">{slide.duration.split(' ')[1]}</span>
//             </div>

//             {/* Main Typography */}
//             <div className="text-right">
//               <div className="overflow-hidden">
//                 <h1 className="gsap-text text-6xl md:text-8xl font-black tracking-tighter" style={{ color: slide.highlightColor }}>
//                   {slide.title.split(' ')[0]}
//                 </h1>
//               </div>
//               <div className="overflow-hidden">
//                 <h1 className="gsap-text text-6xl md:text-8xl font-black tracking-tighter text-white drop-shadow-lg">
//                   {slide.title.split(' ').slice(1).join(' ')}
//                 </h1>
//               </div>
//               <div className="overflow-hidden mt-2">
//                 <div className="gsap-text flex items-center justify-end gap-4">
//                   <div className="h-[1px] w-12 md:w-24 bg-white/50" />
//                   <h2 className="text-xl md:text-3xl tracking-[0.3em] font-light text-gray-300">
//                     {slide.subtitle}
//                   </h2>
//                   <div className="h-[1px] w-12 md:w-24 bg-white/50" />
//                 </div>
//               </div>

//               {/* Call to Action Button */}
//               <div className="overflow-hidden mt-10">
//                 <button 
//                   className="gsap-text group relative inline-flex items-center gap-4 px-8 py-4 rounded-full font-bold tracking-widest text-sm md:text-base overflow-hidden"
//                   style={{ backgroundColor: slide.highlightColor, color: '#000' }}
//                 >
//                   <span className="relative z-10">{slide.buttonText}</span>
//                   <div className="relative z-10 bg-black/20 p-2 rounded-full transition-transform group-hover:translate-x-1">
//                     <svg className="w-4 h-4 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M9 5l7 7-7 7" />
//                     </svg>
//                   </div>
//                   {/* Button Hover Glow */}
//                   <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
//                 </button>
//               </div>
//             </div>

//           </div>
//         </div>
//       ))}

//       {/* Navigation Arrows (Left/Right) */}
//       <div className="absolute inset-y-0 left-4 md:left-10 z-30 flex items-center">
//         <button 
//           onClick={prevSlide}
//           className="p-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 backdrop-blur-md transition-all hover:scale-110 active:scale-95"
//         >
//           <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
//           </svg>
//         </button>
//       </div>

//       <div className="absolute inset-y-0 right-4 md:right-10 z-30 flex items-center hidden md:flex">
//          {/* Right button hidden on mobile if it overlaps with text, adjust as needed */}
//         <button 
//           onClick={nextSlide}
//           className="p-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 backdrop-blur-md transition-all hover:scale-110 active:scale-95"
//         >
//           <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
//           </svg>
//         </button>
//       </div>

//     </div>
//   );
// };