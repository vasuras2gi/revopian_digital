import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const statsData = [
  {
    id: 1,
    endValue: 5.5,
    isFloat: true,
    suffix: " LPA",
    label: "Highest Package",
    icon: (
      <svg className="w-8 h-8 text-[#00f6ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    )
  },
  {
    id: 2,
    endValue: 2.5,
    isFloat: true,
    suffix: " LPA",
    label: "Average Package",
    icon: (
      <svg className="w-8 h-8 text-[#00f6ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    )
  },
  {
    id: 3,
    endValue: 85,
    isFloat: false,
    suffix: "%",
    label: "Placement Rate",
    icon: (
      <svg className="w-8 h-8 text-[#00f6ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    )
  },
  {
    id: 4,
    endValue: 50,
    isFloat: false,
    suffix: "%",
    label: "Average Salary Hike",
    icon: (
      <svg className="w-8 h-8 text-[#00f6ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  }
];

export const PlacementSection = () => {
  const sectionRef = useRef(null);
  const numbersRef = useRef([]);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      
      // 1. Text & Container Reveal
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        }
      });

      tl.from(".place-header", { y: 30, opacity: 0, duration: 0.8, stagger: 0.2, ease: "power3.out" })
        .from(".stat-card", { 
          y: 60, 
          opacity: 0, 
          scale: 0.9, 
          duration: 0.8, 
          stagger: 0.15, 
          ease: "back.out(1.2)" 
        }, "-=0.4");

      // 2. Animated Number Counter Magic
      numbersRef.current.forEach((el, index) => {
        if (!el) return;
        const targetValue = statsData[index].endValue;
        const isFloat = statsData[index].isFloat;
        
        gsap.to({ val: 0 }, {
          val: targetValue,
          duration: 2, // 2 seconds me count pura hoga
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
          },
          onUpdate: function() {
            // Agar decimal chahiye (LPA ke liye) toh toFixed(1), warna math.floor (%) ke liye
            el.innerText = isFloat ? this.targets()[0].val.toFixed(1) : Math.floor(this.targets()[0].val);
          }
        });
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="w-full relative bg-[#000e1c] py-28 px-4 md:px-8 font-sans border-t border-white/5">
      
      {/* Premium Gradient Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-64 bg-cyan-900/20 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header Content */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <span className="place-header inline-block px-4 py-1.5 bg-white/5 text-[#00f6ff] font-bold text-xs uppercase tracking-widest rounded-full border border-[#00f6ff]/30 shadow-[0_0_15px_rgba(0,246,255,0.15)] mb-6">
            Career Opportunities
          </span>
          <h2 className="place-header text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-6 tracking-tight">
            Guaranteed Placement Assistance <br className="hidden md:block"/> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f6ff] to-[#8b5cf6]">For All Students</span>
          </h2>
          <p className="place-header text-gray-400 text-lg leading-relaxed max-w-3xl mx-auto">
            Revopions Digital Academy is a leading digital marketing institute that offers career-focused training. We are committed to your success—from learning in the classroom to getting placed in top companies.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {statsData.map((stat, idx) => (
            <div 
              key={stat.id} 
              className="stat-card relative group p-8 rounded-3xl bg-[#051122] border border-white/5 hover:border-[#00f6ff]/50 transition-colors duration-500 overflow-hidden shadow-2xl flex flex-col items-center justify-center text-center"
            >
              {/* Card Hover Glow */}
              <div className="absolute inset-0 bg-gradient-to-b from-[#00f6ff]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="p-4 rounded-2xl bg-[#00f6ff]/10 border border-[#00f6ff]/20 mb-6 relative z-10 group-hover:scale-110 transition-transform duration-500">
                {stat.icon}
              </div>
              
              <h3 className="text-5xl font-black text-white mb-2 tracking-tighter relative z-10 flex items-center justify-center">
                <span ref={(el) => (numbersRef.current[idx] = el)}>0</span>
                <span className="text-3xl text-[#00f6ff] ml-1">{stat.suffix}</span>
              </h3>
              
              <p className="text-gray-400 font-medium uppercase tracking-wider text-sm relative z-10">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Footer Note */}
        <div className="text-center">
          <p className="place-header text-sm text-gray-500 font-medium tracking-wide">
            * Placement Statistics According to the 2024 Internal Report.
          </p>
        </div>

      </div>
    </section>
  );
};