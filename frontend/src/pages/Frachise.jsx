'use client';

import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const Franchise = () => {
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      
      // 1. Hero Text Reveal
      gsap.fromTo(".hero-element", 
        { y: 50, opacity: 0, rotationX: -20 },
        { y: 0, opacity: 1, rotationX: 0, duration: 1.2, stagger: 0.15, ease: "power3.out", transformPerspective: 1000 }
      );

      // 2. Glass Form 3D Entrance
      gsap.fromTo(".glass-form",
        { z: -500, opacity: 0, scale: 0.8 },
        { z: 0, opacity: 1, scale: 1, duration: 1.5, ease: "back.out(1.2)", delay: 0.3 }
      );

      // 3. Map Cards Scroll Reveal
      gsap.utils.toArray(".map-card").forEach((card, i) => {
        gsap.fromTo(card,
          { opacity: 0, y: 100, rotationY: i % 2 === 0 ? 15 : -15 },
          {
            opacity: 1, y: 0, rotationY: 0, duration: 1.2, ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
            }
          }
        );
      });

      // 4. Parallax Background Orbs
      gsap.to(".bg-orb", {
        y: "20vh",
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true
        }
      });

    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="bg-[#000e1c] min-h-screen text-white font-sans overflow-x-hidden pt-32 pb-24 relative perspective-2000">
      
      {/* --- Ambient 3D Cyber Glows --- */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="bg-orb absolute top-[5%] left-[-10%] w-[50vw] h-[50vw] bg-[#00f6ff]/10 blur-[150px] rounded-full" />
        <div className="bg-orb absolute bottom-[10%] right-[-10%] w-[40vw] h-[40vw] bg-purple-600/10 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">

        {/* ---------------- HEADER SECTION ---------------- */}
        <div className="text-center mb-16 transform-style-3d">
          <h4 className="hero-element text-[#00f6ff] uppercase tracking-[0.4em] text-sm font-bold mb-4 drop-shadow-[0_0_10px_rgba(0,246,255,0.5)]">
            Partner With Us
          </h4>
          <h1 className="hero-element text-5xl md:text-7xl font-black leading-tight text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-500 drop-shadow-2xl">
            Apply For <span className="text-[#00f6ff]">Franchise</span>
          </h1>
          <p className="hero-element text-gray-400 mt-6 max-w-2xl mx-auto font-light text-lg">
            Join the digital revolution. Bring our world-class training curriculum to your city and build a thriving educational business.
          </p>
        </div>

        {/* ---------------- 3D GLASS FORM SECTION ---------------- */}
        {/* Replaces the basic yellow/white form layout from the reference */}
        <div className="glass-form max-w-4xl mx-auto mb-32 relative group">
          {/* Animated Neon Border Behind Form */}
          <div className="absolute -inset-1 bg-gradient-to-br from-[#00f6ff]/30 via-transparent to-purple-600/30 rounded-3xl blur-xl opacity-50 group-hover:opacity-100 transition duration-700 pointer-events-none" />
          
          <div className="relative bg-[#020914]/80 backdrop-blur-2xl border border-white/10 p-8 md:p-12 rounded-3xl shadow-[0_30px_60px_rgba(0,0,0,0.8)]">
            
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Form fields based on the original requirements */}
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-400 ml-1">Your Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe"
                    className="w-full bg-[#050d1a] border border-white/5 text-white px-5 py-4 rounded-xl focus:outline-none focus:border-[#00f6ff]/50 focus:shadow-[0_0_15px_rgba(0,246,255,0.15)] transition-all duration-300"
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-400 ml-1">Your Email</label>
                  <input 
                    type="email" 
                    placeholder="john@example.com"
                    className="w-full bg-[#050d1a] border border-white/5 text-white px-5 py-4 rounded-xl focus:outline-none focus:border-[#00f6ff]/50 focus:shadow-[0_0_15px_rgba(0,246,255,0.15)] transition-all duration-300"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-400 ml-1">Your Phone No</label>
                  <input 
                    type="tel" 
                    placeholder="+91 98765 43210"
                    className="w-full bg-[#050d1a] border border-white/5 text-white px-5 py-4 rounded-xl focus:outline-none focus:border-[#00f6ff]/50 focus:shadow-[0_0_15px_rgba(0,246,255,0.15)] transition-all duration-300"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-400 ml-1">City</label>
                  <input 
                    type="text" 
                    placeholder="e.g. Mumbai"
                    className="w-full bg-[#050d1a] border border-white/5 text-white px-5 py-4 rounded-xl focus:outline-none focus:border-[#00f6ff]/50 focus:shadow-[0_0_15px_rgba(0,246,255,0.15)] transition-all duration-300"
                  />
                </div>
              </div>

              <div className="pt-6">
                <button 
                  type="submit"
                  className="relative w-full overflow-hidden group/btn bg-[#00f6ff]/10 text-[#00f6ff] font-black text-sm uppercase tracking-[0.2em] py-5 rounded-xl border border-[#00f6ff]/30 hover:bg-[#00f6ff] hover:text-black hover:shadow-[0_0_30px_rgba(0,246,255,0.4)] transition-all duration-500"
                >
                  <span className="relative z-10">Submit Application</span>
                  <div className="absolute inset-0 -translate-x-[150%] bg-gradient-to-r from-transparent via-white/40 to-transparent group-hover/btn:animate-[shimmer_1.5s_infinite]" />
                </button>
              </div>
            </form>

          </div>
        </div>

        {/* ---------------- BRANCH LOCATIONS (MAPS) ---------------- */}
        {/* Replaces the side-by-side basic maps from the reference */}
        <div className="pt-12 border-t border-white/5">
          <div className="text-center mb-16">
            <h2 className="hero-element text-4xl md:text-5xl font-black text-white">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-[#00f6ff]">Headquarters</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-6xl mx-auto">
            
            {/* Meerut Branch Card */}
            <div className="map-card group perspective-1000">
              <div className="h-full bg-[#030914] border border-white/10 p-4 rounded-3xl shadow-xl transition-all duration-500 hover:-translate-y-2 hover:border-[#00f6ff]/40 hover:shadow-[0_20px_40px_rgba(0,246,255,0.15)] flex flex-col">
                <div className="mb-6 px-4 pt-4">
                  <div className="inline-flex items-center gap-2 mb-2">
                    <div className="w-2 h-2 rounded-full bg-[#00f6ff] animate-pulse" />
                    <h3 className="text-2xl font-black text-white">Meerut Branch</h3>
                  </div>
                  <p className="text-sm text-gray-400 font-light leading-relaxed">
                    Sharda Plaza, Delhi Rd, New Punjabi Pura, Beripura, Meerut, Uttar Pradesh 250002
                  </p>
                </div>
                {/* Embedded Map */}
                <div className="w-full h-[350px] rounded-2xl overflow-hidden border border-white/5 relative bg-[#01050b] mt-auto">
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#00f6ff]/10 to-transparent pointer-events-none mix-blend-overlay z-10" />
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3490.435747653835!2d77.6896245!3d28.9749175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390c67004baea76b%3A0xc3b8a1c97a5b3a32!2sRevopions%20Digital%20Academy!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) contrast(85%)" }} // Dark mode filter for map
                    allowFullScreen="" 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    className="relative z-0"
                  ></iframe>
                </div>
              </div>
            </div>

            {/* Noida Branch Card */}
            <div className="map-card group perspective-1000">
              <div className="h-full bg-[#030914] border border-white/10 p-4 rounded-3xl shadow-xl transition-all duration-500 hover:-translate-y-2 hover:border-purple-500/40 hover:shadow-[0_20px_40px_rgba(168,85,247,0.15)] flex flex-col">
                <div className="mb-6 px-4 pt-4">
                  <div className="inline-flex items-center gap-2 mb-2">
                    <div className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" />
                    <h3 className="text-2xl font-black text-white">Noida Branch</h3>
                  </div>
                  <p className="text-sm text-gray-400 font-light leading-relaxed">
                    ITHUM TOWER, 112, 1st Floor, TOWER A, Block A, Industrial Area, Sector 62, Noida, Uttar Pradesh 201309
                  </p>
                </div>
                {/* Embedded Map */}
                <div className="w-full h-[350px] rounded-2xl overflow-hidden border border-white/5 relative bg-[#01050b] mt-auto">
                  <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/10 to-transparent pointer-events-none mix-blend-overlay z-10" />
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.054366657904!2d77.3698246!3d28.6281358!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce50058cdfa01%3A0xcb1db3c19e7a83b2!2sThe%20iThum!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) contrast(85%)" }} // Dark mode filter for map
                    allowFullScreen="" 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    className="relative z-0"
                  ></iframe>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default Franchise;