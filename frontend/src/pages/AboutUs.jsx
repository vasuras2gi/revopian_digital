import React, { useLayoutEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// --- FAQ ACCORDION COMPONENT ---
const FaqItem = ({ question, answer, isOpen, onClick }) => {
  const contentRef = useRef(null);

  return (
    <div className="border border-white/10 bg-white/[0.02] backdrop-blur-md rounded-2xl mb-4 overflow-hidden transition-all duration-500 hover:border-[#00f6ff]/30">
      <button 
        onClick={onClick}
        className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
      >
        <h4 className={`text-sm md:text-base font-bold transition-colors duration-300 ${isOpen ? 'text-[#00f6ff]' : 'text-white'}`}>
          {question}
        </h4>
        <div className={`relative w-6 h-6 rounded-full border border-white/20 flex items-center justify-center transition-transform duration-500 ${isOpen ? 'rotate-180 bg-[#00f6ff]/10 border-[#00f6ff]/50' : ''}`}>
          <div className="w-3 h-[2px] bg-white absolute" />
          <div className={`w-[2px] h-3 bg-white absolute transition-all duration-300 ${isOpen ? 'rotate-90 opacity-0' : ''}`} />
        </div>
      </button>
      
      <div 
        ref={contentRef}
        className="overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]"
        style={{ maxHeight: isOpen ? `${contentRef.current?.scrollHeight}px` : '0px' }}
      >
        <div className="px-6 pb-6 pt-2 text-gray-400 text-sm leading-relaxed font-light">
          {answer}
        </div>
      </div>
    </div>
  );
};

export const AboutUs = () => {
  const containerRef = useRef(null);
  const [openFaq, setOpenFaq] = useState(0);

  // Data from screenshots
  const faqs = [
    {
      q: "What is a digital marketing course?",
      a: "A digital marketing course helps to improve the skills and knowledge necessary to increase market products or services online. It covers various aspects of digital marketing, including search engine optimization (SEO), pay-per-click (PPC) advertising, social media marketing, content creation, email marketing, and web analytics. Students will learn how to develop and implement successful online marketing campaigns with theoretical knowledge and practical exercises. Revopions Digital Academy provides hands-on projects, real-world case studies, and access to industry-standard tools, preparing participants for a career in the rapidly evolving digital marketing landscape."
    },
    { q: "Which is the best digital marketing training institute?", a: "Revopions Digital Academy is highly regarded as one of the best institutes, offering 100% placement support, live projects, and expert mentorship in Noida and Meerut." },
    { q: "Who is eligible for digital marketing?", a: "Anyone from students and recent graduates to working professionals and business owners can enroll in our digital marketing courses. No prior technical background is required." },
    { q: "Is digital marketing a good career?", a: "Yes, digital marketing is one of the fastest-growing industries globally, offering high-paying jobs, creative roles, and immense growth opportunities." },
    { q: "How can I start digital marketing?", a: "You can start by enrolling in our comprehensive Master Digital Marketing Course, where you will learn from scratch through practical, hands-on training." },
    { q: "Can I study digital marketing at home?", a: "While we encourage in-person learning for hands-on experience, digital marketing inherently allows for remote practice once you grasp the core concepts." },
    { q: "Do you provide digital marketing courses with certification?", a: "Yes, we are an ISO 9001:2015 certified academy and provide recognized certifications upon course completion." },
    { q: "Do you assist in job placement?", a: "Absolutely. We offer 100% placement assistance, interview preparation, and resume-building support to help you land high-paying jobs." },
  ];

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      
      // 1. Hero 3D Parallax Title
      gsap.fromTo(".hero-title", 
        { rotationX: 45, opacity: 0, z: -500 }, 
        { rotationX: 0, opacity: 1, z: 0, duration: 1.5, ease: "power4.out", transformPerspective: 1000 }
      );

      // 2. Scrubbing Background Orbs
      gsap.to(".bg-orb", {
        y: "300px",
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: 1
        }
      });

      // 3. Text Reveal Stagger
      gsap.utils.toArray(".fade-up").forEach(elem => {
        gsap.fromTo(elem, 
          { y: 50, opacity: 0 },
          { 
            y: 0, opacity: 1, duration: 1, ease: "power3.out",
            scrollTrigger: { trigger: elem, start: "top 85%" }
          }
        );
      });

      // 4. "Why Choose Us" Pinning & Card Scroll
      ScrollTrigger.create({
        trigger: ".sticky-container",
        start: "top 15%",
        end: "bottom bottom",
        pin: ".sticky-title", // Pins the left title while right side scrolls
      });

      gsap.utils.toArray(".floating-card").forEach((card, i) => {
        gsap.fromTo(card, 
          { x: 100, opacity: 0, rotationY: 15 },
          { 
            x: 0, opacity: 1, rotationY: 0, duration: 1, ease: "back.out(1.2)", transformPerspective: 1000,
            scrollTrigger: { trigger: card, start: "top 80%" }
          }
        );
      });

    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="bg-[#000e1c] min-h-screen text-white font-sans overflow-x-hidden relative">
      
      {/* Cinematic Ambient Backgrounds */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="bg-orb absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] bg-[#00f6ff]/5 blur-[120px] rounded-full" />
        <div className="bg-orb absolute top-[40%] right-[-10%] w-[50vw] h-[50vw] bg-purple-600/5 blur-[150px] rounded-full" />
      </div>

      {/* ---------------- SECTION 1: HERO & INTRO ---------------- */}
      <section className="relative z-10 pt-40 pb-20 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="text-center mb-32">
          <h4 className="text-[#00f6ff] uppercase tracking-[0.4em] text-xs md:text-sm font-bold mb-4 fade-up">Discover Our Journey</h4>
          <h1 className="hero-title text-6xl md:text-8xl lg:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-gray-600 leading-none">
            ABOUT US
          </h1>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left Intro Text */}
          <div className="lg:col-span-7 space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold leading-tight fade-up">
              Empowering Professionals with <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f6ff] to-blue-500">Cutting-Edge</span> Digital Skills.
            </h2>
            <div className="space-y-4 text-gray-400 font-light leading-relaxed text-sm md:text-base">
              <p className="fade-up">
                Welcome to Revopions Digital Academy, the premier Digital Marketing Academy in Noida and Meerut, empowering professionals, students, and businesses with cutting-edge digital skills since 2018. As a trusted Digital Marketing Academy in Noida, we offer industry-aligned training in SEO, PPC, social media marketing, content marketing, and more.
              </p>
              <p className="fade-up">
                Our Digital Marketing Academy in Meerut provides hands-on learning with live projects, expert mentors, and 100% placement support. Beyond digital marketing, we also offer advanced courses in web design and development, ensuring holistic career growth.
              </p>
              <p className="fade-up font-medium text-white">
                Join Revopions Digital Academy—where expertise meets excellence—and transform your career in the digital world!
              </p>
            </div>
          </div>

          {/* Right Floating 3D Banner */}
          <div className="lg:col-span-5 fade-up">
            <div className="relative group perspective-1000">
              <div className="absolute inset-0 bg-[#00f6ff] blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500 rounded-2xl" />
              <div className="relative w-full aspect-[4/5] bg-gradient-to-br from-[#051324] to-[#020812] border border-white/10 rounded-2xl shadow-2xl p-8 flex flex-col justify-between transform group-hover:rotate-y-12 group-hover:-rotate-x-12 transition-transform duration-700 ease-out overflow-hidden">
                {/* Tech Grid Background inside card */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:20px_20px]" />
                
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-full bg-[#00f6ff]/20 flex items-center justify-center mb-6 border border-[#00f6ff]/50">
                    <span className="text-[#00f6ff] font-bold text-xl">AI</span>
                  </div>
                  <h3 className="text-3xl font-black text-white leading-tight mb-2">Become a Qualified</h3>
                  <h3 className="text-2xl font-bold text-[#00f6ff] mb-4">AI-Based Digital Marketing Professional</h3>
                </div>
                
                <button className="relative z-10 w-full py-4 bg-white text-black font-black uppercase tracking-widest text-sm rounded-xl hover:bg-[#00f6ff] transition-colors duration-300">
                  Enroll Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- SECTION 2: WHY CHOOSE US (Sticky Scroll) ---------------- */}
      <section className="relative z-10 py-32 px-6 md:px-12 bg-[#020b16] border-y border-white/5 shadow-[0_0_50px_rgba(0,0,0,0.5)]">
        <div className="max-w-7xl mx-auto sticky-container grid lg:grid-cols-12 gap-12">
          
          {/* Sticky Left Title */}
          <div className="lg:col-span-5 h-full">
            <div className="sticky-title space-y-4">
              <h4 className="text-purple-400 uppercase tracking-[0.3em] text-xs font-bold fade-up">Our Edge</h4>
              <h2 className="text-5xl md:text-6xl font-black leading-tight fade-up">
                Why Choose <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">Revopions?</span>
              </h2>
              <p className="text-gray-400 mt-6 fade-up">
                The top choice for digital marketing training. Transform your career with industry-recognized skills, expert guidance, and career success.
              </p>
            </div>
          </div>

          {/* Scrolling Right Cards */}
          <div className="lg:col-span-7 space-y-8">
            <div className="floating-card p-8 rounded-3xl bg-white/[0.02] border border-white/5 backdrop-blur-md hover:border-[#00f6ff]/30 transition-colors">
              <h3 className="text-2xl font-bold text-white mb-4">Master In-Demand Skills</h3>
              <p className="text-gray-400 font-light leading-relaxed">
                Revopions Digital Academy is best for mastering in-demand digital marketing skills and accelerating your career growth. With industry-expert trainers and job-focused training, we ensure you gain hands-on expertise in SEO, PPC, social media marketing, content marketing, and analytics.
              </p>
            </div>
            
            <div className="floating-card p-8 rounded-3xl bg-white/[0.02] border border-white/5 backdrop-blur-md hover:border-[#00f6ff]/30 transition-colors">
              <h3 className="text-2xl font-bold text-white mb-4">Live Projects & 100% Placement</h3>
              <p className="text-gray-400 font-light leading-relaxed">
                What makes Revopions the best digital academy? We offer personalized mentorship, live projects, and 100% placement assistance to help you land high-paying jobs. Our comprehensive curriculum is designed for students, professionals, and entrepreneurs looking to thrive in the digital world.
              </p>
            </div>

            <div className="floating-card p-8 rounded-3xl bg-white/[0.02] border border-white/5 backdrop-blur-md hover:border-[#00f6ff]/30 transition-colors">
              <h3 className="text-2xl font-bold text-white mb-4">Flexible & Supportive Learning</h3>
              <p className="text-gray-400 font-light leading-relaxed">
                Our affordable fees, flexible batches, and certification add value to your learning journey. Whether in Noida or Meerut, our academy provides a supportive learning environment with real-world case studies. Enroll today and step into a brighter future!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- SECTION 3: ISO CERTIFICATION (Cinematic Focus) ---------------- */}
      <section className="relative z-10 py-32 px-6 md:px-12 max-w-7xl mx-auto flex flex-col items-center">
        
        <div className="text-center max-w-3xl mb-16 space-y-6">
          <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-yellow-500/30 bg-yellow-500/10 fade-up">
            <span className="w-2 h-2 rounded-full bg-yellow-500 animate-pulse"></span>
            <span className="text-yellow-500 font-bold tracking-widest uppercase text-xs">Achievement Unlocked</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black fade-up">
            ISO 9001:2015 <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">Certified</span> Academy
          </h2>
          <p className="text-gray-400 font-light leading-relaxed fade-up">
            Revopions Digital Academy is thrilled to announce that we are now ISO Certified! This prestigious certification is a testament to our unwavering commitment to delivering high-quality education and training in the field of digital marketing. We strive for excellence in every aspect, ensuring that our students receive the highest standard of learning experience.
          </p>
        </div>

        {/* 3D Glowing Certificate Representation */}
        <div className="relative w-full max-w-4xl fade-up perspective-1000">
          <div className="absolute inset-0 bg-yellow-500 blur-[80px] opacity-10 rounded-3xl" />
          <div className="relative bg-gradient-to-br from-white/[0.05] to-transparent border border-white/10 rounded-3xl p-1 lg:p-2 backdrop-blur-md shadow-2xl">
            <div className="w-full bg-[#020812] rounded-2xl p-8 md:p-12 border border-white/5 flex flex-col md:flex-row gap-8 items-center justify-between">
              
              <div className="flex-1 space-y-6">
                <h3 className="text-3xl font-black text-white">Certificate of Registration</h3>
                <p className="text-gray-400 text-sm">
                  This is to certify that the Quality Management System of Revopions Digital Academy has been assessed and found to be in compliance with the requirements of the standard:
                </p>
                <div className="py-4 border-y border-white/10">
                  <h4 className="text-2xl font-bold text-yellow-500">ISO 9001: 2015</h4>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-gray-500 mb-2">For The Following Scope:</p>
                  <p className="text-sm font-medium text-gray-300 leading-relaxed">
                    Master Digital Marketing Course, Data Science Course, Personality Development Training, Interview Preparations, Artificial Intelligence
                  </p>
                </div>
              </div>

              {/* Decorative Quality Badge */}
              <div className="w-48 h-48 flex-shrink-0 rounded-full border-4 border-yellow-500/30 flex items-center justify-center relative bg-gradient-to-b from-yellow-500/10 to-transparent">
                <div className="absolute inset-2 border border-dashed border-yellow-500/50 rounded-full animate-[spin_20s_linear_infinite]" />
                <div className="text-center">
                  <p className="text-yellow-500 font-black text-3xl">ISO</p>
                  <p className="text-white font-bold text-xs tracking-widest mt-1">CERTIFIED</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ---------------- SECTION 4: FAQs (Glass Accordion) ---------------- */}
      <section className="relative z-10 py-32 px-6 md:px-12 bg-[#020b16] border-t border-white/5">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 fade-up">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">Frequently Asked <span className="text-[#00f6ff]">Questions</span></h2>
            <p className="text-gray-400 font-light">Everything you need to know about our courses and academy.</p>
          </div>

          <div className="space-y-4 fade-up">
            {faqs.map((faq, index) => (
              <FaqItem 
                key={index} 
                question={faq.q} 
                answer={faq.a} 
                isOpen={openFaq === index} 
                onClick={() => setOpenFaq(openFaq === index ? -1 : index)} 
              />
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default AboutUs;