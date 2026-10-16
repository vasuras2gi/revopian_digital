import React, { useLayoutEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// --- 3D TILT CARD WRAPPER ---
const TiltImage = ({ src, alt, shapeClass }) => {
  const imageRef = useRef(null);

  const handleMouseMove = (e) => {
    const { left, top, width, height } = imageRef.current.getBoundingClientRect();
    const x = (e.clientX - left - width / 2) / 15;
    const y = (e.clientY - top - height / 2) / 15;
    
    gsap.to(imageRef.current, {
      rotationY: x,
      rotationX: -y,
      ease: "power2.out",
      transformPerspective: 900,
      transformOrigin: "center"
    });
  };

  const handleMouseLeave = () => {
    gsap.to(imageRef.current, { rotationY: 0, rotationX: 0, ease: "power3.out", duration: 1 });
  };

  return (
    <div 
      className={`relative w-full max-w-[400px] aspect-square group perspective-1000 mx-auto ${shapeClass}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div 
        ref={imageRef} 
        className="w-full h-full overflow-hidden border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-shadow duration-500 group-hover:shadow-[0_20px_60px_rgba(0,246,255,0.2)]"
        style={{ borderRadius: 'inherit' }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-[#000e1c] via-transparent to-transparent z-10 opacity-60" />
        {/* Placeholder src - replace with actual image imports */}
        <img src={src || "https://via.placeholder.com/500"} alt={alt} className="w-full h-full object-cover scale-110 group-hover:scale-105 transition-transform duration-700" />
      </div>
      {/* Cinematic Glow Behind Image */}
      <div className="absolute inset-0 bg-[#00f6ff] blur-[100px] opacity-10 -z-10 group-hover:opacity-30 transition-opacity duration-700" />
    </div>
  );
};

export const OurTeam = () => {
  const containerRef = useRef(null);
  
  // Team Data based on reference image
  const teamMembers = [
    { name: "Pratyaksha Shukla", role: "HR Manager", img: "https://revopionsdigitalacademy.com/wp-content/uploads/2025/03/Pertesha.jpg" },
    { name: "Wajid", role: "Accountant", img: "https://revopionsdigitalacademy.com/wp-content/uploads/2025/03/wahid-bhai.jpg" },
    { name: "Gaurav Kumar", role: "AI Digital Marketing Trainer", img: "https://revopionsdigitalacademy.com/wp-content/uploads/2026/05/gaurav.png" },
    { name: "Zoya", role: "Office Assistant", img: "https://revopionsdigitalacademy.com/wp-content/uploads/2026/05/zoya.png" },
    { name: "Yug Jain", role: "Sr. Business Development Manager", img: "https://revopionsdigitalacademy.com/wp-content/uploads/2026/05/yug.png" },
    { name: "Deepika Chhabra", role: "Senior Team Leader", img: "https://revopionsdigitalacademy.com/wp-content/uploads/2026/05/deepika.png" },
    { name: "Vitanshi", role: "Admission Counsellor", img: "https://revopionsdigitalacademy.com/wp-content/uploads/2026/07/admission-counsellor.jpeg" }
  ];

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      
      // 1. Cinematic Scroll Overlay (Pinning Sections)
      const panels = gsap.utils.toArray(".cinematic-panel");
      
      panels.forEach((panel, i) => {
        ScrollTrigger.create({
          trigger: panel,
          start: "top top",
          pin: true,
          pinSpacing: false, // This creates the overlay effect where the next section slides over the current one
          scrub: true,
        });

        // Fade out previous panel as next one comes up
        if (i !== panels.length - 1) {
          gsap.to(panel.querySelector('.panel-content'), {
            opacity: 0,
            scale: 0.9,
            scrollTrigger: {
              trigger: panels[i + 1],
              start: "top bottom",
              end: "top top",
              scrub: true,
            }
          });
        }
      });

      // 2. Text Reveal Stagger
      gsap.utils.toArray(".reveal-text").forEach(elem => {
        gsap.from(elem, {
          scrollTrigger: {
            trigger: elem,
            start: "top 85%",
          },
          y: 40,
          opacity: 0,
          duration: 1,
          ease: "power4.out"
        });
      });

      // 3. Team Grid Stagger
      gsap.from(".team-card", {
        scrollTrigger: {
          trigger: ".team-grid",
          start: "top 75%",
        },
        y: 60,
        opacity: 0,
        rotationX: 45,
        stagger: 0.1,
        duration: 0.8,
        ease: "back.out(1.5)",
        transformOrigin: "bottom center"
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="bg-[#000e1c] text-white min-h-screen font-sans overflow-hidden">
      
      {/* ---------------- SECTION 1: THE CEO ---------------- */}
      <section className="cinematic-panel relative w-full min-h-screen flex items-center justify-center pt-24 pb-12 z-10 bg-[#000e1c]">
        
        {/* Abstract Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-[20%] right-[-10%] w-[60vw] h-[60vw] bg-[#00f6ff]/5 blur-[120px] rounded-full" />
        </div>

        <div className="panel-content max-w-7xl mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: 3D Image */}
          {/* shapeClass gives the asymmetric leaf-like border radius seen in the reference */}
          <div className="reveal-text order-2 lg:order-1">
            <TiltImage alt="Shivank Keshri - CEO" shapeClass="rounded-tl-[100px] rounded-br-[100px] rounded-tr-xl rounded-bl-xl" src="https://revopionsdigitalacademy.com/wp-content/uploads/elementor/thumbs/Shivank-Keshri-r8bbl5ffy05qszha7me0x2rdzp1mf80jolljdgey6g.webp"/>
          </div>

          {/* Right: Content */}
          <div className="order-1 lg:order-2 space-y-8">
            <div className="reveal-text">
              <h4 className="text-[#00f6ff] uppercase tracking-[0.3em] text-sm font-bold mb-2 flex items-center gap-4">
                <span className="w-8 h-[1px] bg-[#00f6ff]"></span> Message From
              </h4>
              <h1 className="text-5xl md:text-7xl font-black text-white leading-tight">
                THE <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f6ff] to-blue-500">CEO</span>
              </h1>
            </div>
            
            <div className="reveal-text p-8 rounded-3xl bg-white/[0.02] border border-white/5 backdrop-blur-md shadow-[inset_0_0_20px_rgba(255,255,255,0.02)] relative">
              <svg className="absolute top-4 left-4 w-8 h-8 text-white/10" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/></svg>
              <p className="text-gray-300 text-lg leading-relaxed relative z-10 font-light text-justify">
                Welcome to Revopions Digital Academy, a space where innovation and expertise drive success. As the Director, it is my privilege to lead you through a transformative journey in digital marketing. We are more than an educational center; we are a hub where creativity, strategy, and technology unite to shape tomorrow's digital leaders. Our mission is to equip you with the confidence and tools needed to excel in a rapidly evolving digital landscape.
              </p>
            </div>

            <div className="reveal-text text-right">
              <h3 className="text-3xl font-black text-white">Shivank Keshri</h3>
              <p className="text-gray-400 font-medium tracking-widest uppercase text-sm mt-1">Founder & CEO</p>
            </div>
          </div>

        </div>
      </section>

      {/* ---------------- SECTION 2: THE MANAGER ---------------- */}
      <section className="cinematic-panel relative w-full min-h-screen flex items-center justify-center pt-24 pb-12 z-20 bg-[#000e1c] border-t border-white/5 shadow-[0_-20px_50px_rgba(0,0,0,0.8)]">
        
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute bottom-[10%] left-[-10%] w-[50vw] h-[50vw] bg-purple-600/5 blur-[120px] rounded-full" />
        </div>

        <div className="panel-content max-w-7xl mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: Content */}
          <div className="space-y-8">
            <div className="reveal-text">
              <h4 className="text-purple-400 uppercase tracking-[0.3em] text-sm font-bold mb-2 flex items-center gap-4">
                <span className="w-8 h-[1px] bg-purple-400"></span> Message From
              </h4>
              <h1 className="text-5xl md:text-7xl font-black text-white leading-tight">
                THE <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-[#00f6ff]">MANAGER</span>
              </h1>
            </div>
            
            <div className="reveal-text p-8 rounded-3xl bg-white/[0.02] border border-white/5 backdrop-blur-md shadow-[inset_0_0_20px_rgba(255,255,255,0.02)] relative">
              <svg className="absolute top-4 left-4 w-8 h-8 text-white/10" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/></svg>
              <p className="text-gray-300 text-lg leading-relaxed relative z-10 font-light text-justify">
                Dear Students, I am Annupriya, your guide in digital marketing and personality development. At Revopions Digital Academy, we focus on shaping your future. We offer advanced courses structured to build the essential skills required for today's dynamic digital environment. Our seasoned instructors bring practical, real-world insights directly into the classroom, keeping you ahead of the curve.
              </p>
            </div>

            <div className="reveal-text text-left">
              <h3 className="text-3xl font-black text-white">Annupriya Chaudhary</h3>
              <p className="text-gray-400 font-medium tracking-widest uppercase text-sm mt-1">Operational Manager</p>
            </div>
          </div>

          {/* Right: 3D Image */}
          {/* Asymmetric shield shape from reference */}
          <div className="reveal-text">
            <TiltImage alt="Annupriya Chaudhary - Manager" shapeClass="rounded-tr-[100px] rounded-bl-[100px] rounded-tl-xl rounded-br-xl" src="https://revopionsdigitalacademy.com/wp-content/uploads/2026/05/annupriya-1.png"/>
          </div>

        </div>
      </section>

      {/* ---------------- SECTION 3: TEAM MEMBERS ---------------- */}
      <section className="relative w-full min-h-screen py-32 z-30 bg-[#000e1c] border-t border-white/5 shadow-[0_-20px_50px_rgba(0,0,0,0.8)]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          <div className="text-center mb-20 reveal-text">
            <h2 className="text-4xl md:text-6xl font-black text-white mb-4">
              RDA Team <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f6ff] to-blue-500">Members</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto font-light text-lg">
              The brilliant minds working tirelessly behind the scenes to ensure your educational journey is seamless and successful.
            </p>
          </div>

          {/* Glowing Hexagon/Circle Grid */}
          <div className="team-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {teamMembers.map((member, idx) => (
              <div key={idx} className="team-card group flex flex-col items-center text-center">
                
                <div className="relative w-48 h-48 mb-6 perspective-1000">
                  <div className="w-full h-full rounded-full overflow-hidden border-2 border-white/10 group-hover:border-[#00f6ff]/50 transition-colors duration-500 relative z-10 transform group-hover:rotate-y-12 group-hover:scale-105">
                    <img 
                      src={member.img || "https://via.placeholder.com/200"} 
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* Outer glowing ring */}
                  <div className="absolute inset-0 rounded-full border border-[#00f6ff]/20 scale-110 opacity-0 group-hover:opacity-100 group-hover:animate-[spin_4s_linear_infinite] transition-opacity duration-500" />
                  <div className="absolute inset-0 bg-[#00f6ff] blur-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-full" />
                </div>

                <h3 className="text-xl font-bold text-white group-hover:text-[#00f6ff] transition-colors">
                  {member.name}
                </h3>
                <p className="text-gray-400 text-sm mt-1 font-medium">{member.role}</p>
                
              </div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
};