import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Tools array
const toolsRow1 = ['YouTube', 'Yoast', 'Ahrefs', 'Grammarly', 'Shopify', 'KWFinder'];
const toolsRow2 = ['Quora', 'Pinterest', 'Google Analytics', 'Semrush', 'Mailchimp', 'Canva'];

// Google Reviews Data from Screenshot
const reviewsData = [
  {
    name: "sohit malik",
    time: "1 year ago",
    avatar: "https://i.pravatar.cc/100?img=11",
    review: "I recently started working with Revopions and i am experiencing the amazing work experience and also getting great opportunities.",
    rating: 5
  },
  {
    name: "Dheeraj Joshi",
    time: "1 year ago",
    avatar: "D",
    review: "I completed my digital marketing course from Revopions Digital academy and now I started my internship and I am experiencing the best work experience fro...",
    rating: 5
  },
  {
    name: "Ayush Verma",
    time: "1 year ago",
    avatar: "A",
    review: "I want to learn digital marketing but due to some personal reasons, i was unable to join an offline course. Suddenly i knew about RDA and i joined this course 3 months ago....",
    rating: 5
  },
  {
    name: "A_S AMAN",
    time: "1 year ago",
    avatar: "https://i.pravatar.cc/100?img=15",
    review: "I recently joined RDA. I am very interested to learn digital marketing. Mujhe yaha ka learning environment kafi achha laga. Yaha practical based learning karayi jati h. Mai...",
    rating: 5
  },
  {
    name: "Shruti kaushik",
    time: "1 year ago",
    avatar: "S",
    review: "I have completed my digital marketing course from Revopions Digital Academy. I am very happy after getting the job as a digital marketing executive. They provide u...",
    rating: 5
  },
  {
    name: "Queenscouture Byritam",
    time: "1 year ago",
    avatar: "Q",
    review: "I am Ritam. I am running an Online Ethnic Wear store. I wanted to learn a digital marketing course to promote my business. After joining Revopions Digital Academy, I...",
    rating: 5
  }
];

export const ToolsSection = () => {
  const sectionRef = useRef(null);
  const marquee1Ref = useRef(null);
  const marquee2Ref = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      
      // 1. Text Reveal Animation with ScrollTrigger
      gsap.from(".tool-header-text", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out"
      });

      // 2. Infinite Horizontal Marquee 1 (Moving Left)
      gsap.to(marquee1Ref.current, {
        xPercent: -50,
        ease: "none",
        duration: 25,
        repeat: -1,
      });

      // 3. Infinite Horizontal Marquee 2 (Moving Right)
      gsap.fromTo(marquee2Ref.current, 
        { xPercent: -50 },
        {
          xPercent: 0,
          ease: "none",
          duration: 30,
          repeat: -1,
        }
      );

      // 4. Student Trust Badge Reveal
      gsap.from(".student-badge", {
        scrollTrigger: {
          trigger: ".student-badge-container",
          start: "top 85%",
        },
        scale: 0.8,
        opacity: 0,
        y: 30,
        duration: 1,
        ease: "back.out(1.5)"
      });

      // 5. Reviews Stagger Animation
      gsap.from(".review-card", {
        scrollTrigger: {
          trigger: ".reviews-grid",
          start: "top 80%",
        },
        y: 60,
        opacity: 0,
        scale: 0.95,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out"
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const ToolCard = ({ name }) => (
    <div className="flex items-center justify-center px-8 py-4 mx-3 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm hover:bg-[#00f6ff]/10 hover:border-[#00f6ff]/50 transition-colors duration-300 group">
      <span className="text-xl font-bold text-gray-400 group-hover:text-white group-hover:shadow-[#00f6ff] transition-all tracking-wide">
        {name}
      </span>
    </div>
  );

  // Helper for rendering Google Stars
  const renderStars = (count) => {
    return [...Array(5)].map((_, i) => (
      <svg key={i} className={`w-4 h-4 ${i < count ? 'text-yellow-400' : 'text-gray-600'}`} fill="currentColor" viewBox="0 0 20 20">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  return (
    <section ref={sectionRef} className="w-full relative bg-[#000e1c] py-28 font-sans overflow-hidden border-t border-white/5">
      
      {/* Ambient Background Glows */}
      <div className="absolute top-1/3 left-0 w-64 h-64 bg-cyan-900/20 blur-[100px] -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-900/10 blur-[120px] pointer-events-none" />

      {/* --- TOOLS HEADER --- */}
      <div className="max-w-4xl mx-auto text-center px-4 mb-20 relative z-10">
        <h2 className="tool-header-text text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-6 tracking-tight">
          Discover 100+ Advanced Tools in <br className="hidden md:block"/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f6ff] to-[#8b5cf6]">Our Digital Marketing Course</span>
        </h2>
        <p className="tool-header-text text-gray-400 text-lg leading-relaxed max-w-3xl mx-auto">
          Join the best digital marketing institute in India and get hands-on experience with 100+ advanced tools. Master tools used by professionals and boost your career potential.
        </p>
      </div>

      {/* --- TOOLS MARQUEE --- */}
      <div className="relative w-full flex flex-col gap-6 z-10 mb-32">
        <div className="absolute left-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-r from-[#000e1c] to-transparent z-20 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-l from-[#000e1c] to-transparent z-20 pointer-events-none" />

        <div className="flex w-max" ref={marquee1Ref}>
          <div className="flex">
            {toolsRow1.map((tool, i) => <ToolCard key={`r1-a-${i}`} name={tool} />)}
            {toolsRow2.map((tool, i) => <ToolCard key={`r2-a-${i}`} name={tool} />)}
          </div>
          <div className="flex">
            {toolsRow1.map((tool, i) => <ToolCard key={`r1-b-${i}`} name={tool} />)}
            {toolsRow2.map((tool, i) => <ToolCard key={`r2-b-${i}`} name={tool} />)}
          </div>
        </div>

        <div className="flex w-max" ref={marquee2Ref}>
          <div className="flex">
            {toolsRow2.reverse().map((tool, i) => <ToolCard key={`r3-a-${i}`} name={tool} />)}
            {toolsRow1.reverse().map((tool, i) => <ToolCard key={`r4-a-${i}`} name={tool} />)}
          </div>
          <div className="flex">
            {toolsRow2.reverse().map((tool, i) => <ToolCard key={`r3-b-${i}`} name={tool} />)}
            {toolsRow1.reverse().map((tool, i) => <ToolCard key={`r4-b-${i}`} name={tool} />)}
          </div>
        </div>
      </div>

      {/* --- STUDENT TRUST BADGE --- */}
      <div className="student-badge-container flex flex-col items-center justify-center px-4 mb-20 relative z-10">
        <div className="student-badge text-center">
          <p className="text-[#00f6ff] font-bold tracking-[0.2em] uppercase text-xs mb-4">
            Revopions Digital Academy
          </p>
          <div className="inline-flex items-center gap-4 bg-white/5 border border-white/10 px-8 py-5 rounded-full shadow-[0_0_30px_rgba(0,246,255,0.05)] backdrop-blur-md">
            <h3 className="text-3xl md:text-5xl font-black text-white tracking-tight">
              15,250 <span className="font-light text-gray-400 text-xl md:text-3xl">students can't be wrong!</span>
            </h3>
          </div>
          <p className="text-gray-500 max-w-3xl mx-auto mt-6 text-sm leading-relaxed">
            With over 15,250 successful students, Revopions Digital Academy proudly ranks among the top 10 digital marketing institutes in Noida. Our expert-led training, practical approach, and placement support have made us a trusted choice.
          </p>
        </div>
      </div>

      {/* --- GOOGLE REVIEWS GRID --- */}
      <div className="reviews-grid max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
        {reviewsData.map((review, idx) => (
          <div key={idx} className="review-card bg-[#051122] border border-white/5 rounded-3xl p-6 hover:border-white/20 transition-colors duration-300 shadow-xl group">
            
            {/* Header: Avatar, Name & Google Logo */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                {review.avatar.length > 1 ? (
                  <img src={review.avatar} alt={review.name} className="w-10 h-10 rounded-full object-cover" />
                ) : (
                  <div className="w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center text-white font-bold text-lg">
                    {review.avatar}
                  </div>
                )}
                <div>
                  <h4 className="text-white font-bold text-sm leading-tight">{review.name}</h4>
                  <p className="text-gray-500 text-xs">{review.time}</p>
                </div>
              </div>
              {/* Fake Google 'G' Logo icon for vibe */}
              <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center opacity-80 group-hover:opacity-100 transition-opacity">
                 <span className="text-blue-500 font-bold text-xs">G</span>
              </div>
            </div>

            {/* Stars */}
            <div className="flex items-center gap-1 mb-4">
              {renderStars(review.rating)}
              {/* Verified Blue Tick Icon */}
              <svg className="w-4 h-4 text-blue-400 ml-1" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
            </div>

            {/* Review Text */}
            <p className="text-gray-400 text-sm leading-relaxed line-clamp-4">
              {review.review}
            </p>
            <button className="text-gray-500 hover:text-white text-xs mt-2 transition-colors">
              Read more
            </button>
          </div>
        ))}
      </div>

    </section>
  );
};