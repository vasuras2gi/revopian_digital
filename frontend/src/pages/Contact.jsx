'use client';

import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const Contact = () => {
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      
      // 1. Hero Reveal (Top Down)
      gsap.fromTo(".hero-element", 
        { y: -50, opacity: 0, rotationX: 20 },
        { y: 0, opacity: 1, rotationX: 0, duration: 1.2, stagger: 0.15, ease: "power4.out", transformPerspective: 1000 }
      );

      // 2. Split Screen Entrance
      // Left Cards coming from left
      gsap.fromTo(".contact-card",
        { x: -100, opacity: 0, rotationY: -15 },
        { x: 0, opacity: 1, rotationY: 0, duration: 1.2, stagger: 0.2, ease: "back.out(1.2)", delay: 0.5, transformPerspective: 1000 }
      );
      // Right Form coming from right
      gsap.fromTo(".glass-form-contact",
        { x: 100, opacity: 0, rotationY: 15 },
        { x: 0, opacity: 1, rotationY: 0, duration: 1.2, ease: "back.out(1.2)", delay: 0.8, transformPerspective: 1000 }
      );

      // 3. Map Cards Scroll Reveal
      gsap.utils.toArray(".map-card").forEach((card, i) => {
        gsap.fromTo(card,
          { opacity: 0, y: 100, scale: 0.9 },
          {
            opacity: 1, y: 0, scale: 1, duration: 1.2, ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
            }
          }
        );
      });

    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="bg-[#000e1c] min-h-screen text-white font-sans overflow-x-hidden pt-32 pb-24 relative perspective-2000">
      
      {/* --- Ambient Deep Space Glows --- */}
      <div className="fixed top-[10%] left-[-10%] w-[50vw] h-[50vw] bg-[#00f6ff]/10 blur-[150px] rounded-full pointer-events-none z-0" />
      <div className="fixed bottom-[10%] right-[-10%] w-[40vw] h-[40vw] bg-green-500/10 blur-[120px] rounded-full pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">

        {/* ---------------- HEADER SECTION ---------------- */}
        <div className="text-center mb-20 transform-style-3d">
          <h4 className="hero-element text-[#00f6ff] uppercase tracking-[0.4em] text-sm font-bold mb-4 drop-shadow-[0_0_10px_rgba(0,246,255,0.5)]">
            Let's Connect
          </h4>
          <h1 className="hero-element text-5xl md:text-7xl font-black leading-tight text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-500 drop-shadow-2xl">
            Get In <span className="text-green-500">Touch</span>
          </h1>
          <p className="hero-element text-gray-400 mt-6 max-w-2xl mx-auto font-light text-lg">
            Have questions about our courses or franchise? Reach out to us directly or visit our branches in Noida and Meerut.
          </p>
        </div>

        {/* ---------------- SPLIT SCREEN: INFO & FORM ---------------- */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 mb-32 items-stretch">
          
          {/* LEFT: Info Cards (Replacing the 3 horizontal boxes) */}
          <div className="lg:col-span-5 space-y-6 flex flex-col justify-between">
            
            {/* Location Card */}
            <div className="contact-card group relative bg-white/[0.02] hover:bg-white/[0.05] border border-white/10 hover:border-[#00f6ff]/50 rounded-3xl p-8 backdrop-blur-md transition-all duration-500 flex items-start gap-6 shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
              <div className="absolute inset-0 bg-gradient-to-br from-[#00f6ff]/10 to-transparent opacity-0 group-hover:opacity-100 transition duration-500 rounded-3xl pointer-events-none" />
              <div className="w-14 h-14 rounded-full bg-[#00f6ff]/10 border border-[#00f6ff]/30 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6 text-[#00f6ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-3">Institute Locations</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-3">
                  <strong className="text-gray-300">Noida:</strong> A-112, Ithum Tower, Near Noida Electronic City Metro Station, Sector-62 (201301)
                </p>
                <p className="text-gray-400 text-sm leading-relaxed">
                  <strong className="text-gray-300">Meerut:</strong> 3rd Floor, Sharda Plaza, Near Bahadur Motor, Delhi Road, Meerut (250002)
                </p>
              </div>
            </div>

            {/* Phone Card */}
            <div className="contact-card group relative bg-white/[0.02] hover:bg-white/[0.05] border border-white/10 hover:border-[#00f6ff]/50 rounded-3xl p-8 backdrop-blur-md transition-all duration-500 flex items-start gap-6 shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
              <div className="absolute inset-0 bg-gradient-to-br from-[#00f6ff]/10 to-transparent opacity-0 group-hover:opacity-100 transition duration-500 rounded-3xl pointer-events-none" />
              <div className="w-14 h-14 rounded-full bg-[#00f6ff]/10 border border-[#00f6ff]/30 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6 text-[#00f6ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-3">Contact Numbers</h3>
                <p className="text-gray-400 font-medium hover:text-[#00f6ff] transition-colors cursor-pointer block mb-1">+91 9429692002</p>
                <p className="text-gray-400 font-medium hover:text-[#00f6ff] transition-colors cursor-pointer block mb-1">+91 8958888821</p>
                <p className="text-gray-400 font-medium hover:text-[#00f6ff] transition-colors cursor-pointer block">+91 7417605177</p>
              </div>
            </div>

            {/* Email Card */}
            <div className="contact-card group relative bg-white/[0.02] hover:bg-white/[0.05] border border-white/10 hover:border-[#00f6ff]/50 rounded-3xl p-8 backdrop-blur-md transition-all duration-500 flex items-start gap-6 shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
              <div className="absolute inset-0 bg-gradient-to-br from-[#00f6ff]/10 to-transparent opacity-0 group-hover:opacity-100 transition duration-500 rounded-3xl pointer-events-none" />
              <div className="w-14 h-14 rounded-full bg-[#00f6ff]/10 border border-[#00f6ff]/30 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6 text-[#00f6ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-3">Email Us</h3>
                <p className="text-gray-400 font-medium hover:text-[#00f6ff] transition-colors cursor-pointer block mb-1">info@revopionsdigitalacademy.com</p>
                <p className="text-gray-400 font-medium hover:text-[#00f6ff] transition-colors cursor-pointer block">partner@revopionsdigitalacademy.com</p>
              </div>
            </div>

          </div>

          {/* RIGHT: WhatsApp Form */}
          <div className="lg:col-span-7 h-full">
            <div className="glass-form-contact relative h-full bg-[#020914]/80 backdrop-blur-2xl border border-white/10 p-8 md:p-12 rounded-3xl shadow-[0_30px_60px_rgba(0,0,0,0.8)] flex flex-col">
              
              <div className="absolute -inset-1 bg-gradient-to-bl from-green-500/20 via-transparent to-[#00f6ff]/20 rounded-3xl blur-xl opacity-50 pointer-events-none" />
              
              <div className="relative z-10 flex-1">
                <h3 className="text-3xl font-black text-white mb-8">Send a <span className="text-green-500">Message</span></h3>
                
                <form className="space-y-6 flex flex-col h-full" onSubmit={(e) => e.preventDefault()}>
                  
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-gray-400 ml-1">Name <span className="text-red-500">*</span></label>
                    <input type="text" placeholder="Enter Your Full Name" className="w-full bg-[#050d1a] border border-white/5 text-white px-5 py-4 rounded-xl focus:outline-none focus:border-green-500/50 focus:shadow-[0_0_15px_rgba(34,197,94,0.15)] transition-all duration-300" />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-gray-400 ml-1">Phone Number <span className="text-red-500">*</span></label>
                    <div className="flex">
                      <span className="bg-[#0a1526] border border-white/5 border-r-0 text-white px-4 py-4 rounded-l-xl flex items-center font-bold">🇮🇳 +91</span>
                      <input type="tel" className="w-full bg-[#050d1a] border border-white/5 text-white px-5 py-4 rounded-r-xl focus:outline-none focus:border-green-500/50 focus:shadow-[0_0_15px_rgba(34,197,94,0.15)] transition-all duration-300" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-gray-400 ml-1">Email <span className="text-red-500">*</span></label>
                    <input type="email" placeholder="Email Id" className="w-full bg-[#050d1a] border border-white/5 text-white px-5 py-4 rounded-xl focus:outline-none focus:border-green-500/50 focus:shadow-[0_0_15px_rgba(34,197,94,0.15)] transition-all duration-300" />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-gray-400 ml-1">Class Type <span className="text-red-500">*</span></label>
                    <div className="relative">
                      <select className="w-full bg-[#050d1a] border border-white/5 text-gray-300 px-5 py-4 rounded-xl focus:outline-none focus:border-green-500/50 appearance-none cursor-pointer transition-all duration-300">
                        <option value="online">Online</option>
                        <option value="offline">Offline</option>
                      </select>
                      <svg className="absolute right-5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/></svg>
                    </div>
                  </div>

                  <div className="pt-6 mt-auto">
                    <button type="submit" className="relative w-full overflow-hidden group/btn bg-green-500/10 text-green-500 font-black text-sm uppercase tracking-[0.2em] py-5 rounded-xl border border-green-500/30 hover:bg-green-500 hover:text-black hover:shadow-[0_0_30px_rgba(34,197,94,0.4)] transition-all duration-500 flex items-center justify-center gap-3">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
                      <span className="relative z-10">Submit on WhatsApp</span>
                      <div className="absolute inset-0 -translate-x-[150%] bg-gradient-to-r from-transparent via-white/40 to-transparent group-hover/btn:animate-[shimmer_1.5s_infinite]" />
                    </button>
                    <p className="text-center text-gray-500 text-xs mt-4">Safe and secure direct messaging.</p>
                  </div>
                </form>

              </div>
            </div>
          </div>
        </div>

        {/* ---------------- MAPS SECTION ---------------- */}
        <div className="pt-16 border-t border-white/5">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-white">
              Visit Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f6ff] to-blue-500">Branches</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-6xl mx-auto">
            {/* Meerut Map */}
            <div className="map-card group perspective-1000">
              <div className="h-full bg-[#030914] border border-white/10 p-4 rounded-3xl shadow-xl transition-all duration-500 hover:-translate-y-2 hover:border-[#00f6ff]/40">
                <div className="w-full h-[400px] rounded-2xl overflow-hidden relative">
                  <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-md px-4 py-2 rounded-xl border border-white/10 z-20">
                    <h3 className="font-bold text-white text-sm flex items-center gap-2">
                      <span className="w-2 h-2 bg-[#00f6ff] rounded-full animate-pulse"></span> Meerut HQ
                    </h3>
                  </div>
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3490.435747653835!2d77.6896245!3d28.9749175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390c67004baea76b%3A0xc3b8a1c97a5b3a32!2sRevopions%20Digital%20Academy!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" width="100%" height="100%" style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) contrast(85%)" }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="relative z-0"></iframe>
                </div>
              </div>
            </div>

            {/* Noida Map */}
            <div className="map-card group perspective-1000">
              <div className="h-full bg-[#030914] border border-white/10 p-4 rounded-3xl shadow-xl transition-all duration-500 hover:-translate-y-2 hover:border-purple-500/40">
                <div className="w-full h-[400px] rounded-2xl overflow-hidden relative">
                  <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-md px-4 py-2 rounded-xl border border-white/10 z-20">
                    <h3 className="font-bold text-white text-sm flex items-center gap-2">
                      <span className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></span> Noida Branch
                    </h3>
                  </div>
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.054366657904!2d77.3698246!3d28.6281358!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce50058cdfa01%3A0xcb1db3c19e7a83b2!2sThe%20iThum!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" width="100%" height="100%" style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) contrast(85%)" }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="relative z-0"></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Contact;