import { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const Footer = () => {
  const footerRef = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      
      // Footer Columns Stagger Reveal
      gsap.from(".footer-col", {
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 85%", 
        },
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out"
      });

      // Bottom bar reveal
      gsap.from(".footer-bottom", {
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 95%",
        },
        y: 20,
        opacity: 0,
        duration: 0.6,
        delay: 0.4,
        ease: "power2.out"
      });

    }, footerRef);

    return () => ctx.revert();
  }, []);

  return (
    // Changed bg-black to bg-[#000e1c] to perfectly match the sections above it
    <footer ref={footerRef} className="relative w-full bg-[#000e1c] pt-20 pb-8 overflow-hidden font-sans border-t border-white/5">
      
      {/* 1. PREMIUM NEON CYAN TOP GLOW LINE */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#00f6ff] to-transparent shadow-[0_0_15px_rgba(0,246,255,0.8),0_0_30px_rgba(0,246,255,0.4)]" />
      
      {/* Background ambient spotlight (Cyan) */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#00f6ff]/5 blur-[150px] rounded-[100%] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* COLUMN 1: About RDA */}
          <div className="footer-col">
            <h3 className="text-[#00f6ff] text-xl font-black uppercase tracking-wider mb-6 flex items-center gap-2 drop-shadow-[0_0_8px_rgba(0,246,255,0.3)]">
              <span className="w-2 h-2 rounded-full bg-[#00f6ff] animate-pulse shadow-[0_0_10px_#00f6ff]" />
              About RDA
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-8">
              Welcome to Revopions Digital Academy, the premier Digital Marketing Academy in Noida and Meerut, empowering professionals, students, and businesses with cutting-edge digital skills since 2018.
            </p>
            <div className="flex gap-4">
              <div className="flex flex-col items-center justify-center p-3 border border-white/10 rounded-xl bg-white/5 backdrop-blur-sm shadow-[0_0_15px_rgba(0,0,0,0.5)]">
                <span className="text-white font-bold text-xs uppercase">ISO</span>
                <span className="text-gray-500 text-[10px]">9001:2015</span>
              </div>
              <div className="flex flex-col items-center justify-center p-3 border border-white/10 rounded-xl bg-white/5 backdrop-blur-sm shadow-[0_0_15px_rgba(0,0,0,0.5)]">
                <span className="text-white font-bold text-xs uppercase">MSME</span>
                <span className="text-gray-500 text-[10px]">Certified</span>
              </div>
            </div>
          </div>

          {/* COLUMN 2: Training Centers & Business Hours */}
          <div className="footer-col">
            <h3 className="text-[#00f6ff] text-xl font-black uppercase tracking-wider mb-6 drop-shadow-[0_0_8px_rgba(0,246,255,0.3)]">
              Training Centers
            </h3>
            <div className="flex flex-wrap gap-2 mb-10">
              {['Noida', 'Meerut', 'Mumbai', 'Chandigarh', 'Lucknow', 'Madhya Pradesh'].map((city) => (
                <span key={city} className="text-gray-300 text-sm bg-white/5 border border-white/10 px-3 py-1.5 rounded-lg hover:border-[#00f6ff]/50 hover:text-[#00f6ff] hover:shadow-[0_0_15px_rgba(0,246,255,0.15)] hover:bg-[#00f6ff]/5 transition-all cursor-default">
                  {city}
                </span>
              ))}
            </div>

            <h3 className="text-[#00f6ff] text-xl font-black uppercase tracking-wider mb-4 drop-shadow-[0_0_8px_rgba(0,246,255,0.3)]">
              Business Hours
            </h3>
            <p className="text-white text-sm font-medium bg-white/5 border border-white/10 px-4 py-3 rounded-xl inline-block shadow-[inset_0_0_10px_rgba(0,246,255,0.05)]">
              Mon-Sun: <span className="text-[#00f6ff]">10:00 AM - 7:00 PM</span>
            </p>
          </div>

          {/* COLUMN 3: Important Links & Socials */}
          <div className="footer-col">
            <h3 className="text-[#00f6ff] text-xl font-black uppercase tracking-wider mb-6 drop-shadow-[0_0_8px_rgba(0,246,255,0.3)]">
              Important Links
            </h3>
            <ul className="space-y-4 mb-10">
              {['Contact Us', 'Privacy Policy', 'Terms and Conditions', 'Refunds and Cancellation'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-gray-400 text-sm hover:text-[#00f6ff] transition-all duration-300 flex items-center gap-2 group">
                    <span className="w-0 h-[1px] bg-[#00f6ff] transition-all duration-300 group-hover:w-3 shadow-[0_0_5px_#00f6ff]"></span>
                    {link}
                  </a>
                </li>
              ))}
            </ul>

            <h3 className="text-[#00f6ff] text-xl font-black uppercase tracking-wider mb-4 drop-shadow-[0_0_8px_rgba(0,246,255,0.3)]">
              Connect With Us
            </h3>
            <div className="flex gap-3">
              {['facebook', 'youtube', 'instagram', 'linkedin'].map((social) => (
                <a key={social} href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:bg-[#00f6ff] hover:text-[#000e1c] hover:shadow-[0_0_20px_rgba(0,246,255,0.5)] transition-all duration-300 hover:-translate-y-1">
                  <span className="text-xs uppercase font-bold">{social[0]}</span>
                </a>
              ))}
            </div>
          </div>

          {/* COLUMN 4: Contact & Locations */}
          <div className="footer-col">
            <h3 className="text-[#00f6ff] text-xl font-black uppercase tracking-wider mb-6 drop-shadow-[0_0_8px_rgba(0,246,255,0.3)]">
              Reach Us
            </h3>
            
            <div className="mb-6 group">
              <h4 className="text-white font-bold text-sm mb-2 flex items-center gap-2">
                <svg className="w-4 h-4 text-[#00f6ff] drop-shadow-[0_0_5px_rgba(0,246,255,0.5)]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                Head Office
              </h4>
              <p className="text-gray-400 text-sm leading-relaxed pl-6 group-hover:text-gray-200 transition-colors">
                A-112, Ithum Tower, Near Noida Electronic City Metro Station, Sector-62, Noida (201301)
              </p>
            </div>

            <div className="mb-6 group">
              <h4 className="text-white font-bold text-sm mb-2 flex items-center gap-2">
                <svg className="w-4 h-4 text-[#00f6ff] drop-shadow-[0_0_5px_rgba(0,246,255,0.5)]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/></svg>
                Branch Office
              </h4>
              <p className="text-gray-400 text-sm leading-relaxed pl-6 group-hover:text-gray-200 transition-colors">
                3rd Floor, Sharda Plaza, Near Bahadur Motor, Delhi Road, Meerut 250002
              </p>
            </div>

            <div className="space-y-3 pt-4 border-t border-white/10">
              <a href="tel:+919429692002" className="flex items-center gap-3 text-gray-400 hover:text-[#00f6ff] transition-colors text-sm font-medium">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                +91-94-2969-2002
              </a>
              <a href="mailto:info@revopionsdigitalacademy.com" className="flex items-center gap-3 text-gray-400 hover:text-[#00f6ff] transition-colors text-sm font-medium break-all">
                <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                info@revopionsdigitalacademy.com
              </a>
            </div>

          </div>
        </div>

      </div>

      {/* 2. BOTTOM COPYRIGHT BAR */}
      <div className="footer-bottom border-t border-white/5 relative z-10 bg-[#050914]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <p className="text-gray-500 text-sm font-medium">
            Copyright © 2026 <span className="text-white">Revopions Digital Academy</span>
          </p>
          <p className="text-gray-500 text-sm font-medium">
            Powered by <span className="text-[#00f6ff] hover:underline cursor-pointer transition-colors drop-shadow-[0_0_5px_rgba(0,246,255,0.4)]">Revopions Technologies</span>
          </p>
        </div>
      </div>

    </footer>
  );
};