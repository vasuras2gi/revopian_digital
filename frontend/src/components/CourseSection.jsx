import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import FlipCard from './FlipCard'; 

gsap.registerPlugin(ScrollTrigger);

const coursesData = [
  {
    id: 1,
    title: "AI Revolution Program",
    desc: "Master the latest AI tools and automation techniques to boost productivity, creativity, and career growth in the digital era.",
    duration: "2 MONTHS",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=600&auto=format&fit=crop",
    themeColor: "#00f6ff", // Neon Cyan
    buttonGlow: "rgba(0, 246, 255, 0.4)"
  },
  {
    id: 2,
    title: "Digital Marketing",
    desc: "Master AI-powered digital marketing strategies to boost online visibility, generate leads, and grow your business effectively.",
    duration: "6 MONTHS",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=600&auto=format&fit=crop",
    themeColor: "#8b5cf6", // Neon Purple
    buttonGlow: "rgba(139, 92, 246, 0.4)"
  },
  {
    id: 3,
    title: "Video Editing",
    desc: "Create cinematic sequences and master industry-standard AI video editing workflows for the modern creator economy.",
    duration: "4 MONTHS",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=600&auto=format&fit=crop",
    themeColor: "#f59e0b", // Neon Amber
    buttonGlow: "rgba(245, 158, 11, 0.4)"
  },
  {
    id: 4,
    title: "Motion Graphics",
    desc: "Bring designs to life. Master 2D/3D animation, typography, and visual effects to build stunning digital experiences.",
    duration: "4 MONTHS",
    image: "https://images.unsplash.com/photo-1725347740938-73127ed5d91c?q=80&w=600&auto=format&fit=crop",
    themeColor: "#ec4899", // Neon Pink
    buttonGlow: "rgba(236, 72, 153, 0.4)"
  }
];

export const CourseSection = () => {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      // Sleek Header Reveal
      gsap.from(".course-header-item", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out"
      });

      // Premium Card Stagger (slight rotation for 3D feel)
      gsap.from(".course-card-wrapper", {
        scrollTrigger: {
          trigger: ".course-grid",
          start: "top 70%",
        },
        y: 100,
        rotationY: 15,
        opacity: 0,
        scale: 0.85,
        duration: 1.2,
        stagger: 0.15,
        ease: "back.out(1.5)"
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative w-full min-h-screen bg-[#000e1c] py-32 px-4 md:px-8 font-sans overflow-hidden">
      
      {/* Background Ambient Glows (For Premium Tech Feel) */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-900/20 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-cyan-900/20 blur-[120px] rounded-full pointer-events-none" />

      {/* Section Header */}
      <div className="max-w-4xl mx-auto text-center mb-24 relative z-10">
        <span className="course-header-item inline-block px-5 py-2 bg-white/5 text-[#00f6ff] font-bold text-xs uppercase tracking-[0.2em] rounded-full border border-white/10 backdrop-blur-md mb-6 shadow-[0_0_15px_rgba(0,246,255,0.2)]">
          Elite Programs
        </span>
        <h2 className="course-header-item text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-br from-white via-gray-200 to-gray-500 mb-6 tracking-tight">
          Next-Gen Courses
        </h2>
        <p className="course-header-item text-lg md:text-xl text-gray-400 max-w-2xl mx-auto font-light">
          Upgrade your skills with industry-oriented professional curriculums designed for the future.
        </p>
      </div>

      {/* Responsive Grid Layout (1 col -> 2 cols -> 4 cols for perfect balance) */}
      <div className="course-grid max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 place-items-center relative z-10">
        
        {coursesData.map((course) => (
          <div key={course.id} className="course-card-wrapper w-full flex justify-center perspective-[1200px]">
            
            <FlipCard
              width={320} // Slightly sleeker width for 4-column layout
              height={460}
              axis="y"
              flipOnClick={true}
              tilt={true}
              tiltMax={15}
              shadowOpacity={0.4}
              background="transparent"
              color="#ffffff"
              radius={24}
              
              /* CARD FRONT: Cinematic Image Overlay */
              front={
                <div className="w-full h-full relative rounded-[24px] overflow-hidden group border border-white/10 bg-[#061121] shadow-2xl">
                  <img 
                    src={course.image} 
                    alt={course.title} 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-70" 
                  />
                  {/* Smooth Multi-stop Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#000e1c] via-[#000e1c]/80 to-transparent flex flex-col justify-end p-6">
                    
                    {/* Glassmorphism Badge */}
                    <span 
                      className="backdrop-blur-md text-white text-xs font-bold px-4 py-1.5 rounded-full w-max mb-4 border border-white/20 shadow-lg"
                      style={{ backgroundColor: `${course.themeColor}33` }} // 20% opacity hex
                    >
                      {course.duration}
                    </span>
                    
                    <h3 className="text-white text-3xl font-black leading-tight mb-2 tracking-tight drop-shadow-lg">
                      {course.title}
                    </h3>
                    
                    <p className="text-gray-400 text-xs font-medium flex items-center gap-2 tracking-wide uppercase mt-2 opacity-80 group-hover:opacity-100 transition-opacity">
                      Explore Module 
                      <svg className="w-4 h-4 animate-bounce-x" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                    </p>
                  </div>
                </div>
              }

              /* CARD BACK: Premium Dark UI / Glassmorphism */
              back={
                <div className="w-full h-full p-8 flex flex-col justify-between bg-gradient-to-b from-[#0a192f] to-[#000e1c] rounded-[24px] border border-white/10 shadow-[inset_0_0_20px_rgba(255,255,255,0.05)]">
                  <div>
                    <h3 className="text-2xl font-black text-white mb-3 leading-tight tracking-tight">
                      {course.title}
                    </h3>
                    <div 
                      className="h-1 w-16 rounded-full mb-5 shadow-lg" 
                      style={{ backgroundColor: course.themeColor, boxShadow: `0 0 10px ${course.buttonGlow}` }}
                    ></div>
                    
                    <p className="text-gray-400 text-sm leading-relaxed font-light mb-6">
                      {course.desc}
                    </p>
                    
                    {/* Premium Tags */}
                    <div className="flex flex-wrap gap-2">
                      <span className="text-[10px] uppercase tracking-wider font-bold px-3 py-1.5 bg-white/5 text-gray-300 rounded-lg border border-white/10">EMI AVAILABLE</span>
                      <span className="text-[10px] uppercase tracking-wider font-bold px-3 py-1.5 bg-white/5 text-gray-300 rounded-lg border border-white/10">CERTIFIED</span>
                    </div>
                  </div>
                  
                  {/* Glowing Hover Button */}
                  <button 
                    className="w-full py-4 text-[#000e1c] rounded-xl font-black text-sm uppercase tracking-widest transition-all duration-300 hover:-translate-y-1 active:scale-95 group relative overflow-hidden"
                    style={{ backgroundColor: course.themeColor, boxShadow: `0 10px 20px -5px ${course.buttonGlow}` }}
                    onClick={(e) => {
                      e.stopPropagation(); 
                      alert(`${course.title} demo booked!`);
                    }}
                  >
                    <span className="relative z-10">Book Demo</span>
                    {/* Button shine effect */}
                    <div className="absolute inset-0 bg-white/30 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                  </button>
                </div>
              }
            />

          </div>
        ))}

      </div>
    </section>
  );
};






// import React, { useLayoutEffect, useRef } from 'react';
// import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import FlipCard from './FlipCard'; // Aapka FlipCard component

// gsap.registerPlugin(ScrollTrigger);

// // Dynamic Array: Future me naye courses bas yahan add karne hain
// const coursesData = [
//   {
//     id: 1,
//     title: "AI Revolution Program",
//     desc: "Master the latest AI tools and automation techniques to boost productivity, creativity, and career growth in the digital era.",
//     duration: "2 MONTHS",
//     image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=600&auto=format&fit=crop", // Demo image
//     themeColor: "#0f766e"
//   },
//   {
//     id: 2,
//     title: "AI Digital Marketing Course",
//     desc: "Master AI-powered digital marketing strategies to boost online visibility, generate leads, and grow your business effectively.",
//     duration: "6 MONTHS",
//     image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=600&auto=format&fit=crop", // Demo image
//     themeColor: "#0f766e"
//   },
//   {
//     id: 3,
//     title: "Ai Video Editing Course",
//     desc: "Build decentralized applications and master smart contract development for the next generation of the internet.",
//     duration: "4 MONTHS",
//     image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=600&auto=format&fit=crop", // Demo image
//     themeColor: "#0f766e"
//   },
//   {
//     id: 4,
//     title: "Motion Graphic Course",
//     desc: "Build decentralized applications and master smart contract development for the next generation of the internet.",
//     duration: "4 MONTHS",
//     image: "https://images.unsplash.com/photo-1725347740938-73127ed5d91c?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Demo image
//     themeColor: "#0f766e"
//   }
// ];

// export const CourseSection = () => {
//   const sectionRef = useRef(null);

//   useLayoutEffect(() => {
//     let ctx = gsap.context(() => {
//       // Header Animation
//       gsap.from(".course-header", {
//         scrollTrigger: {
//           trigger: sectionRef.current,
//           start: "top 80%",
//         },
//         y: 50,
//         opacity: 0,
//         duration: 1,
//         ease: "power3.out"
//       });

//       // Cards Stagger Animation
//       gsap.from(".course-card-wrapper", {
//         scrollTrigger: {
//           trigger: ".course-grid",
//           start: "top 75%",
//         },
//         y: 80,
//         opacity: 0,
//         scale: 0.9,
//         duration: 1,
//         stagger: 0.2,
//         ease: "back.out(1.2)"
//       });
//     }, sectionRef);

//     return () => ctx.revert();
//   }, []);

//   return (
//     <section ref={sectionRef} className="w-full min-h-screen bg-[#000e1c] py-24 px-4 md:px-8 font-sans">
      
//       {/* Section Header */}
//       <div className="course-header max-w-4xl mx-auto text-center mb-16">
//         <span className="inline-block px-4 py-1.5 bg-slate-950 text-white font-semibold text-sm rounded-full tracking-wider mb-4 border border-blue-100">
//           OUR PROGRAMS
//         </span>
//         <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
//           New Courses
//         </h2>
//         <p className="text-lg text-gray-500">
//           Upgrade your skills with our industry-oriented professional courses.
//         </p>
//       </div>

//       {/* Responsive Grid Layout */}
//       {/* Auto-fit property future me unlimited courses ko automatically screens par set karegi */}
//       <div className="course-grid max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 place-items-center">
        
//         {coursesData.map((course) => (
//           <div key={course.id} className="course-card-wrapper w-full flex justify-center">
            
//             <FlipCard
//               width={340} // Fixed width jisse cards ek size ke rahein
//               height={440} // Fixed height
//               axis="y"
//               flipOnClick={true}
//               tilt={true}
//               tiltMax={10}
//               shadowOpacity={0.15}
//               background="#ffffff"
//               color="#000000"
//               radius={24}
              
//               /* CARD FRONT: Image and Basic Title */
//               front={
//                 <div className="w-full h-full relative rounded-[24px] overflow-hidden group">
//                   <img 
//                     src={course.image} 
//                     alt={course.title} 
//                     className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-6">
//                     <span className="bg-white/20 backdrop-blur-md text-white text-xs font-bold px-3 py-1 rounded-md w-max mb-3 border border-white/20">
//                       {course.duration}
//                     </span>
//                     <h3 className="text-white text-2xl font-bold leading-snug">
//                       {course.title}
//                     </h3>
//                     <p className="text-gray-300 text-sm mt-2 flex items-center gap-2">
//                       Tap or drag to see details 
//                       <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
//                     </p>
//                   </div>
//                 </div>
//               }

//               /* CARD BACK: Details and Action Button */
//               back={
//                 <div className="w-full h-full p-8 flex flex-col justify-between bg-white rounded-[24px] border border-gray-100 shadow-inner">
//                   <div>
//                     <h3 className="text-2xl font-extrabold text-gray-900 mb-4 leading-tight">
//                       {course.title}
//                     </h3>
//                     <div className="h-1 w-12 rounded-full mb-4" style={{ backgroundColor: course.themeColor }}></div>
//                     <p className="text-gray-600 text-base leading-relaxed">
//                       {course.desc}
//                     </p>
                    
//                     <div className="mt-6 flex flex-wrap gap-2">
//                       <span className="text-xs font-semibold px-2 py-1 bg-gray-100 text-gray-600 rounded">EMI AVAILABLE</span>
//                       <span className="text-xs font-semibold px-2 py-1 bg-green-50 text-green-700 rounded">CERTIFICATION</span>
//                     </div>
//                   </div>
                  
//                   <button 
//                     className="w-full py-4 text-white rounded-xl font-bold text-lg hover:shadow-lg hover:-translate-y-1 transition-all duration-300 active:scale-95"
//                     style={{ backgroundColor: course.themeColor }}
//                     onClick={(e) => {
//                       e.stopPropagation(); // Card flip hone se rokne ke liye
//                       alert(`${course.title} demo booked!`);
//                     }}
//                   >
//                     Book Demo Class
//                   </button>
//                 </div>
//               }
//             />

//           </div>
//         ))}

//       </div>
//     </section>
//   );
// };