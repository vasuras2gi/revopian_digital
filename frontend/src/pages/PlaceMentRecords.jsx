import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const PlacementRecords = () => {
  const containerRef = useRef(null);

  // Student Data (Extracted from provided screenshots)
  const students = [
    { name: "Lavish", company: "Revopions Technologies", role: "Social Media Executive", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkggbPHEOxemWDTrIiHqgIiV2EpBqaMaNW3Im2Vz3-iA&s" },
    { name: "Sakshi", company: "Travel Tech", role: "Digital Marketing Executive", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfgCMpGDEkMYtZ3pLYsSSgmq-_dZzTWGJV8c71_2sjNQ&s=10" },
    { name: "Krishna", company: "Revopions Technologies", role: "(Ads Executive)", img: "https://revopionsdigitalacademy.com/wp-content/uploads/2026/05/krishna.png" },
    { name: "Dikshant Chaudhary", company: "Accentrix Technologies", role: "Digital Marketing Executive", img: "https://revopionsdigitalacademy.com/wp-content/uploads/2025/04/student1.jpg" },
    { name: "Jhalak Rajvanshi", company: "Revopions Technologies", role: "Social Media Executive", img: "https://revopionsdigitalacademy.com/wp-content/uploads/2025/03/Jhalak-Rajvanshi.jpg" },
    { name: "Geetika", company: "Chawla Enterprises", role: "HR", img: "https://revopionsdigitalacademy.com/wp-content/uploads/2025/03/chawal.jpg" },
    { name: "Khushbu Goyal", company: "Globax Solutions", role: "Social Media Executive", img: "https://revopionsdigitalacademy.com/wp-content/uploads/2025/05/Khushbu-Goyal.png" },
    { name: "Sahil", company: "Revopions Technologies", role: "Sr. Social Media & Ads Exec.", img: "https://revopionsdigitalacademy.com/wp-content/uploads/2025/03/shahil1.jpg" },
    { name: "Mohit Panwar", company: "Revopions Technologies", role: "Website Developer", img: "https://revopionsdigitalacademy.com/wp-content/uploads/2025/04/student.jpg" },
    { name: "Sumit", company: "RS Builders", role: "Social Media Executive", img: "https://revopionsdigitalacademy.com/wp-content/uploads/2025/05/sumit.png" },
    { name: "Sohit Malik", company: "Revopions Technologies", role: "HR", img: "https://revopionsdigitalacademy.com/wp-content/uploads/2025/03/sobit.jpg" },
  ];

  // Industry Sectors for the Approach Section
  const sectors = ["IT Sector", "Travel | Medical", "E-Commerce", "Startup", "Small Scale Business"];

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      
      // 1. Hero Reveal Parallax
      gsap.fromTo(".hero-element", 
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, stagger: 0.2, ease: "power4.out" }
      );

      // 2. SVG Line Draw Animation (Connecting the approach nodes)
      gsap.fromTo(".connector-line", 
        { strokeDasharray: 500, strokeDashoffset: 500 },
        { 
          strokeDashoffset: 0, 
          duration: 2, 
          ease: "power2.inOut",
          scrollTrigger: {
            trigger: ".approach-section",
            start: "top 60%",
          }
        }
      );

      // 3. Staggered reveal for Approach Nodes
      gsap.fromTo(".approach-node",
        { scale: 0.8, opacity: 0, y: 30 },
        {
          scale: 1, opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: "back.out(1.5)",
          scrollTrigger: {
            trigger: ".approach-section",
            start: "top 70%",
          }
        }
      );

      // 4. 3D Floating Reveal for Student Cards
      gsap.utils.toArray(".student-card").forEach((card, i) => {
        gsap.fromTo(card,
          { opacity: 0, y: 80, rotationX: 45, transformPerspective: 800 },
          {
            opacity: 1, y: 0, rotationX: 0, duration: 1, ease: "power3.out",
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
    <div ref={containerRef} className="bg-[#000e1c] min-h-screen text-white font-sans overflow-x-hidden pt-32 pb-24 relative">
      
      {/* Background Ambient Cyber-glows */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[10%] left-[-10%] w-[50vw] h-[50vw] bg-teal-600/5 blur-[150px] rounded-full" />
        <div className="absolute bottom-[20%] right-[-10%] w-[60vw] h-[60vw] bg-[#00f6ff]/5 blur-[150px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">

        {/* ---------------- HEADER SECTION ---------------- */}
        <div className="text-center mb-24">
          <h4 className="hero-element text-[#00f6ff] uppercase tracking-[0.3em] text-sm font-bold mb-4">Our Success Stories</h4>
          <h1 className="hero-element text-5xl md:text-7xl font-black leading-tight text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-500">
            Placement <span className="text-[#00f6ff]">Records</span>
          </h1>
          <p className="hero-element text-gray-400 mt-6 max-w-2xl mx-auto font-light text-lg">
            Transforming aspirations into achievements. See how our comprehensive training approach bridges the gap between raw talent and top-tier industry roles.
          </p>
        </div>

        {/* ---------------- APPROACH SECTION (Modern Flowchart) ---------------- */}
        <section className="approach-section mb-40 relative">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-black text-white">RDA Training <span className="text-teal-400">Approach</span></h2>
          </div>

          <div className="relative flex flex-col md:flex-row items-center justify-between max-w-5xl mx-auto gap-8 md:gap-0">
            
            {/* SVG Connectors (Visible on desktop) */}
            <div className="hidden md:block absolute inset-0 pointer-events-none -z-10">
              <svg className="w-full h-full" preserveAspectRatio="none">
                {/* Line from Start to Middle */}
                <line x1="25%" y1="50%" x2="50%" y2="50%" stroke="#00f6ff" strokeWidth="2" className="connector-line" strokeOpacity="0.5" />
                {/* Forking lines from Middle to End Sectors */}
                <path d="M 50% 50% L 75% 15%" stroke="#00f6ff" strokeWidth="2" fill="none" className="connector-line" strokeOpacity="0.3" />
                <path d="M 50% 50% L 75% 32.5%" stroke="#00f6ff" strokeWidth="2" fill="none" className="connector-line" strokeOpacity="0.3" />
                <path d="M 50% 50% L 75% 50%" stroke="#00f6ff" strokeWidth="2" fill="none" className="connector-line" strokeOpacity="0.5" />
                <path d="M 50% 50% L 75% 67.5%" stroke="#00f6ff" strokeWidth="2" fill="none" className="connector-line" strokeOpacity="0.3" />
                <path d="M 50% 50% L 75% 85%" stroke="#00f6ff" strokeWidth="2" fill="none" className="connector-line" strokeOpacity="0.3" />
              </svg>
            </div>

            {/* Node 1: Audience */}
            <div className="approach-node w-full md:w-[25%]">
              <div className="bg-white/[0.03] border border-white/10 backdrop-blur-md p-6 rounded-2xl shadow-[0_0_30px_rgba(0,0,0,0.5)] text-center relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <h3 className="text-xl font-bold text-teal-400 mb-2">Students</h3>
                <h3 className="text-xl font-bold text-white mb-2">Job Seekers</h3>
                <h3 className="text-xl font-bold text-gray-400">Career Option</h3>
              </div>
            </div>

            {/* Node 2: Core Process */}
            <div className="approach-node w-full md:w-[25%] z-10 relative">
              <div className="absolute -inset-4 bg-[#00f6ff]/10 blur-xl rounded-full animate-pulse" />
              <div className="bg-gradient-to-br from-[#02182b] to-[#010a14] border border-[#00f6ff]/30 p-8 rounded-3xl shadow-[0_0_40px_rgba(0,246,255,0.2)] text-center relative z-10">
                <div className="w-12 h-12 bg-[#00f6ff]/10 rounded-full flex items-center justify-center mx-auto mb-4 border border-[#00f6ff]/40">
                  <span className="text-[#00f6ff] font-black">AI</span>
                </div>
                <h3 className="text-xl font-black text-white mb-2">100% Practical</h3>
                <p className="text-[#00f6ff] font-medium text-sm uppercase tracking-widest leading-relaxed">
                  AI-Powered<br/>Digital Marketing<br/>Projects
                </p>
              </div>
            </div>

            {/* Node 3: Target Sectors */}
            <div className="w-full md:w-[25%] flex flex-col gap-4">
              {sectors.map((sector, idx) => (
                <div key={idx} className="approach-node bg-white/[0.02] hover:bg-white/[0.05] border border-white/5 hover:border-[#00f6ff]/30 transition-all duration-300 backdrop-blur-md py-3 px-6 rounded-xl text-center cursor-default flex items-center justify-center gap-3 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-gray-500 group-hover:bg-[#00f6ff] transition-colors" />
                  <span className="text-sm font-bold text-gray-300 group-hover:text-white transition-colors">{sector}</span>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* ---------------- PLACED STUDENTS GRID ---------------- */}
        <section className="pt-20 border-t border-white/5">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-black text-white">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-[#00f6ff]">Placed Students</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {students.map((student, idx) => (
              <div key={idx} className="student-card group relative">
                {/* Holographic glowing background on hover */}
                <div className="absolute -inset-0.5 bg-gradient-to-br from-[#00f6ff] to-purple-600 rounded-3xl blur opacity-0 group-hover:opacity-30 transition duration-500" />
                
                <div className="relative h-full bg-[#030914] border border-white/10 rounded-3xl p-6 flex flex-col items-center text-center overflow-hidden transition-all duration-500 group-hover:-translate-y-2 group-hover:border-white/20">
                  
                  {/* Avatar Container */}
                  <div className="relative w-32 h-32 mb-6">
                    <div className="absolute inset-0 bg-[#00f6ff]/10 rounded-full blur-md" />
                    <div className="w-full h-full rounded-full border-2 border-white/10 group-hover:border-[#00f6ff]/50 overflow-hidden relative z-10 transition-colors duration-500">
                      <img 
                        src={student.img || "https://via.placeholder.com/150"} 
                        alt={student.name}
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                      />
                    </div>
                  </div>

                  {/* Student Details */}
                  <h3 className="text-xl font-black text-white mb-2 group-hover:text-[#00f6ff] transition-colors">
                    {student.name}
                  </h3>
                  <div className="w-full h-[1px] bg-white/5 my-3" />
                  <p className="text-sm font-bold text-gray-300 mb-1">{student.company}</p>
                  <p className="text-xs text-teal-400 font-medium uppercase tracking-wider">{student.role}</p>

                </div>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
};

export default PlacementRecords;