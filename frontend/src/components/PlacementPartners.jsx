import { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Demo Partners Data
const partnersRow1 = ['Google', 'Amazon', 'Microsoft', 'Meta', 'Netflix', 'Adobe', 'Spotify'];
const partnersRow2 = ['TCS', 'Infosys', 'Wipro', 'Accenture', 'Tech Mahindra', 'Cognizant', 'IBM'];

export const PlacementPartners = () => {
  const sectionRef = useRef(null);
  const marquee1Ref = useRef(null);
  const marquee2Ref = useRef(null);
  
  // Tweens ko ref me save karenge taaki hover par pause/play kar sakein
  const m1Tween = useRef(null);
  const m2Tween = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      
      // 1. Text Reveal Animation
      gsap.from(".partner-header-text", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
        y: 50,
        opacity: 0,
        scale: 0.95,
        duration: 1,
        stagger: 0.15,
        ease: "power4.out"
      });

      // 2. Infinite Marquee Moving Left
      m1Tween.current = gsap.to(marquee1Ref.current, {
        xPercent: -50,
        ease: "none",
        duration: 35, 
        repeat: -1,
      });

      // 3. Infinite Marquee Moving Right
      m2Tween.current = gsap.fromTo(marquee2Ref.current, 
        { xPercent: -50 },
        {
          xPercent: 0,
          ease: "none",
          duration: 40, 
          repeat: -1,
        }
      );

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Hover Events for Pause/Play
  const handleMouseEnter = () => {
    m1Tween.current?.pause();
    m2Tween.current?.pause();
  };

  const handleMouseLeave = () => {
    m1Tween.current?.play();
    m2Tween.current?.play();
  };

  // Premium Partner Card Component
  const PartnerLogo = ({ name }) => (
    <div className="flex items-center justify-center w-56 h-24 mx-4 bg-white/[0.02] border border-white/5 rounded-2xl backdrop-blur-md grayscale opacity-40 
      group-hover/track:opacity-10 hover:!opacity-100 hover:!grayscale-0 hover:scale-110 hover:bg-gradient-to-br hover:from-[#00f6ff]/10 hover:to-transparent hover:border-[#00f6ff]/50 
      hover:shadow-[0_0_40px_rgba(0,246,255,0.3)] transition-all duration-500 cursor-pointer relative overflow-hidden group/card">
      
      {/* Light sweep effect on hover */}
      <div className="absolute inset-0 -translate-x-[150%] bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover/card:animate-[shimmer_1.5s_infinite]" />
      
      <span className="text-3xl font-black text-gray-500 group-hover/card:text-white transition-colors tracking-tighter relative z-10 drop-shadow-md">
        {name}
      </span>
    </div>
  );

  return (
    <section ref={sectionRef} className="w-full relative bg-[#000e1c] py-32 font-sans overflow-hidden border-t border-white/5">
      
      {/* Futuristic Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />

      {/* Background Ambient Spotlights */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[#00f6ff]/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-[#8b5cf6]/10 blur-[150px] rounded-full pointer-events-none" />

      {/* Header Section */}
      <div className="max-w-5xl mx-auto text-center px-4 mb-28 relative z-10">
        <span className="partner-header-text inline-flex items-center gap-2 px-5 py-2 bg-[#00f6ff]/5 text-[#00f6ff] font-bold text-xs uppercase tracking-[0.2em] rounded-full border border-[#00f6ff]/20 mb-6 shadow-[0_0_20px_rgba(0,246,255,0.1)] backdrop-blur-md">
          <span className="w-2 h-2 rounded-full bg-[#00f6ff] animate-pulse" />
          Global Alumni Network
        </span>
        <h2 className="partner-header-text text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight mb-6 tracking-tight">
          Top Hiring <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f6ff] to-[#8b5cf6]">Partners</span>
        </h2>
        <p className="partner-header-text text-gray-400 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto font-light">
          Our students are driving innovation at some of the world's most prestigious tech companies and fast-growing startups.
        </p>
      </div>

      {/* Diagonal Marquee Section */}
      <div 
        className="relative w-[110vw] -ml-[5vw] flex flex-col gap-8 z-10 transform -rotate-3 py-16 my-10 border-y border-white/5 bg-gradient-to-b from-[#021124] via-[#031428] to-[#021124] shadow-[inset_0_0_100px_rgba(0,0,0,0.8)] backdrop-blur-md group/track"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        
        {/* Left/Right Edge Fade Masks */}
        <div className="absolute left-0 top-0 bottom-0 w-32 md:w-80 bg-gradient-to-r from-[#000e1c] via-[#000e1c]/90 to-transparent z-20 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 md:w-80 bg-gradient-to-l from-[#000e1c] via-[#000e1c]/90 to-transparent z-20 pointer-events-none" />

        {/* Center glowing tech line */}
        <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#00f6ff]/30 to-transparent -translate-y-1/2 pointer-events-none" />

        {/* Row 1: Moves Left */}
        <div className="flex w-max" ref={marquee1Ref}>
          <div className="flex">
            {partnersRow1.map((partner, i) => <PartnerLogo key={`p1-a-${i}`} name={partner} />)}
            {partnersRow2.map((partner, i) => <PartnerLogo key={`p2-a-${i}`} name={partner} />)}
          </div>
          <div className="flex">
            {partnersRow1.map((partner, i) => <PartnerLogo key={`p1-b-${i}`} name={partner} />)}
            {partnersRow2.map((partner, i) => <PartnerLogo key={`p2-b-${i}`} name={partner} />)}
          </div>
        </div>

        {/* Row 2: Moves Right */}
        <div className="flex w-max" ref={marquee2Ref}>
          <div className="flex">
            {/* FIX: [...partnersRow2].reverse() prevents array mutation bugs */}
            {[...partnersRow2].reverse().map((partner, i) => <PartnerLogo key={`p3-a-${i}`} name={partner} />)}
            {[...partnersRow1].reverse().map((partner, i) => <PartnerLogo key={`p4-a-${i}`} name={partner} />)}
          </div>
          <div className="flex">
            {[...partnersRow2].reverse().map((partner, i) => <PartnerLogo key={`p3-b-${i}`} name={partner} />)}
            {[...partnersRow1].reverse().map((partner, i) => <PartnerLogo key={`p4-b-${i}`} name={partner} />)}
          </div>
        </div>

      </div>

      {/* Explore More Trigger */}
      <div className="text-center mt-12 relative z-10">
         <p className="text-gray-500 text-sm font-medium tracking-widest uppercase hover:text-[#00f6ff] transition-colors cursor-pointer inline-flex items-center gap-2">
            View All 50+ Partners
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
         </p>
      </div>

    </section>
  );
};