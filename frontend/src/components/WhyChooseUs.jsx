import React, { useState, useEffect, useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Demo images (Replace with your actual images from the screenshots)
const galleryImages = [
  "https://revopionsdigitalacademy.com/wp-content/uploads/2025/04/slider1-768x768.jpg", // Team/Students
  "https://revopionsdigitalacademy.com/wp-content/uploads/2025/04/slider_sir-768x768.jpg", // Discussion
  "https://revopionsdigitalacademy.com/wp-content/uploads/2025/04/slider-768x768.jpg"  // Award/Event
];

const listItems = [
  "We let our students work on live projects campaigns under our mentorship.",
  "Dedicated community manager for 24x7 assistance.",
  "Live projects for deep learning.",
  "Job Assistance After The Digital Marketing Course.",
  "We provide students with well-structured Pdf Notes for effective study."
];

export const WhyChooseUs = () => {
  const sectionRef = useRef(null);
  const imagesRef = useRef([]);
  const [currentImg, setCurrentImg] = useState(0);

  // Auto-Slider Logic
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImg((prev) => (prev === galleryImages.length - 1 ? 0 : prev + 1));
    }, 4000); // Har 4 second me image change hogi
    return () => clearInterval(timer);
  }, []);

  // GSAP Animations
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      
      // 1. Scroll Trigger for Text Reveal
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        }
      });

      tl.from(".wcu-title", { y: 40, opacity: 0, duration: 0.8, ease: "power3.out" })
        .from(".wcu-desc", { y: 20, opacity: 0, duration: 0.6, ease: "power2.out" }, "-=0.4")
        .from(".wcu-list-item", { x: -30, opacity: 0, duration: 0.6, stagger: 0.15, ease: "back.out(1.5)" }, "-=0.2")
        .from(".wcu-btn", { y: 20, opacity: 0, scale: 0.9, duration: 0.6, ease: "power3.out" }, "-=0.2");

      // 2. Image Crossfade & Scale Animation
      imagesRef.current.forEach((imgEl, index) => {
        if (!imgEl) return;
        if (index === currentImg) {
          // Active Image: Fade In & Slow Zoom
          gsap.fromTo(imgEl, 
            { opacity: 0, scale: 1.05, zIndex: 10 }, 
            { opacity: 1, scale: 1, duration: 1.2, ease: "power2.out", zIndex: 10 }
          );
        } else {
          // Inactive Image: Fade Out
          gsap.to(imgEl, { opacity: 0, duration: 1.2, ease: "power2.inOut", zIndex: 0 });
        }
      });

    }, sectionRef);

    return () => ctx.revert();
  }, [currentImg]);

  return (
    <section ref={sectionRef} className="w-full h-full bg-[#000e1c] py-24 px-6 md:px-12 flex items-center justify-center relative overflow-hidden">
      
      {/* Background Ambient Glow */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-cyan-900/20 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        
        {/* LEFT SIDE: Image Auto-Slider */}
        <div className="relative w-full aspect-[4/3] md:aspect-square lg:aspect-[4/5] rounded-[32px] overflow-hidden shadow-[0_0_40px_rgba(0,246,255,0.1)] border border-white/10 group">
          {galleryImages.map((src, idx) => (
            <img 
              key={idx}
              ref={(el) => (imagesRef.current[idx] = el)}
              src={src}
              alt="Revopian Academy Event"
              className="absolute inset-0 w-full h-full object-cover object-center opacity-0"
            />
          ))}
          {/* Subtle gradient overlay to make it look premium */}
          <div className="absolute inset-0 bg-gradient-to-tr from-[#000e1c]/60 via-transparent to-transparent z-20 pointer-events-none" />
          
          {/* Floating Aesthetic Element */}
          <div className="absolute bottom-6 left-6 z-30 bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-2xl flex items-center gap-4 shadow-xl">
             <div className="w-12 h-12 bg-cyan-500/20 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-[#00f6ff]" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
             </div>
             <div>
               <p className="text-white font-bold text-lg leading-tight">15,250+</p>
               <p className="text-gray-300 text-xs tracking-wider">SUCCESS STORIES</p>
             </div>
          </div>
        </div>

        {/* RIGHT SIDE: Content & List */}
        <div className="flex flex-col justify-center">
          
          <h2 className="wcu-title text-4xl md:text-5xl font-black text-white leading-tight mb-6">
            Why Do People Choose Us Over A <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f6ff] to-[#8b5cf6]">Regular Digital Marketing Institute?</span>
          </h2>
          
          <p className="wcu-desc text-gray-400 text-lg mb-8 leading-relaxed">
            15250+ students choose us over the regular Digital Marketing Institute to start their careers in reputed companies.
          </p>
          
          <ul className="space-y-5 mb-10">
            {listItems.map((item, index) => (
              <li key={index} className="wcu-list-item flex items-start gap-4">
                <div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-cyan-500/20 flex items-center justify-center border border-cyan-500/30">
                  <svg className="w-3.5 h-3.5 text-[#00f6ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-gray-300 text-base md:text-lg font-medium">{item}</span>
              </li>
            ))}
          </ul>
          
          <div className="wcu-btn">
            <button className="relative inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white transition-all duration-200 bg-[#00f6ff]/10 border border-[#00f6ff]/50 rounded-full hover:bg-[#00f6ff] hover:text-[#000e1c] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#00f6ff] overflow-hidden group shadow-[0_0_20px_rgba(0,246,255,0.2)] hover:shadow-[0_0_30px_rgba(0,246,255,0.6)]">
              Admission Open
              <svg className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};