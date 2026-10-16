import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./App.css";
import { GridScan } from "./components/GridScan";
import DepthText from "./components/DepthText";
import { PremiumScroller } from "./components/PremiumScroller";
import { CourseSection } from "./components/CourseSection";
import { WhyChooseUs } from "./components/WhyChooseUs";
import { PlacementSection } from "./components/PlacementSection";
import { ToolsSection } from "./components/ToolsSection";
import { PlacementPartners } from "./components/PlacementPartners";

gsap.registerPlugin(ScrollTrigger);

function App() {
  const mainRef = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      
      // HERO SECTION ENTRANCE (Smoother & Slightly Slower Stagger for Premium Feel)
      gsap.fromTo(".gsap-hero-anim", 
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.5,
          stagger: 0.2, 
          ease: "power4.out",
          delay: 0.2, 
        }
      );

      // Scroll-Expand Animation
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".pin-wrapper",
          start: "top top",
          end: "+=2000",
          scrub: 1,
          pin: true,
          pinSpacing: true,
        },
      });

      tl.fromTo(
        ".expand-box",
        { scale: 0.55, borderRadius: "60px" },
        { scale: 1, borderRadius: "0px", duration: 1, ease: "none" }
      ).to(".expand-box", {
        duration: 1,
      });

    }, mainRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={mainRef} className="bg-[#000e1c] w-full overflow-x-hidden block">
      
      {/* --- HERO SECTION --- */}
      {/* Height slightly increased to ensure nothing feels cramped */}
      <div className="min-h-[100svh] w-full relative overflow-hidden flex flex-col items-center justify-center pt-28 pb-10">
        
        {/* Background Grid Scan */}
        <div className="absolute inset-0 z-0">
          <GridScan
            sensitivity={0.55}
            lineThickness={1}
            linesColor="#1a2536" // Thoda subtle aur premium dark blue/grey
            gridScale={0.1}
            scanColor="#00f6ff"
            scanOpacity={0.4}
            enablePost
            bloomIntensity={0.6}
            chromaticAberration={0.002}
            noiseIntensity={0.01}
            lineJitter={0.1}
            scanGlow={0.5}
            scanSoftness={2}
            enableWebcam={false}
            showPreview={false}
          />
        </div>

        {/* --- FOREGROUND CONTENT --- */}
        <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-5xl mx-auto pointer-events-auto">
          
          {/* Tagline / Subtitle */}
          <div className="gsap-hero-anim mb-10">
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-lg border border-[#00f6ff]/30 bg-[#00f6ff]/5 backdrop-blur-md shadow-[0_0_20px_rgba(0,246,255,0.1)]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00f6ff] animate-pulse"></span>
              <span className="text-[#00f6ff] text-xs font-bold tracking-[0.2em] uppercase">
                Professional Digital Marketing Program
              </span>
            </div>
          </div>

          {/* 3D Depth Title (Now properly formatted on two lines for visual balance) */}
          <div className="gsap-hero-anim w-full pointer-events-none mb-12">
            {/* Top Line */}
            <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-2">
              {["Revopions", "Digital"].map((word, index) => (
                <div key={`line1-${index}`} className="pointer-events-auto">
                  <DepthText
                    text={word}
                    layers={34}
                    depth={2.4}
                    faceColor="#ffffff" // Crisp white face for better readability
                    depthColor="#008b8b"
                    tilt={7.5}
                    pointerTracking
                    smoothing={0.14}
                    perspective={900}
                    autoOrbit
                    orbitSpeed={0.35}
                    fontSize="clamp(3.5rem, 8vw, 6.5rem)" // Properly scaled font
                    fontWeight={900}
                    shadow
                  />
                </div>
              ))}
            </div>
            {/* Bottom Line */}
            <div className="flex flex-wrap justify-center pointer-events-auto">
              <DepthText
                text="Academy"
                layers={34}
                depth={2.4}
                faceColor="#ffffff"
                depthColor="#008b8b"
                tilt={7.5}
                pointerTracking
                smoothing={0.14}
                perspective={900}
                autoOrbit
                orbitSpeed={0.35}
                fontSize="clamp(3.5rem, 8vw, 6.5rem)"
                fontWeight={900}
                shadow
              />
            </div>
          </div>

          {/* Premium Paragraph Text */}
          <p className="gsap-hero-anim text-gray-400 font-light text-base md:text-lg max-w-3xl leading-relaxed mb-12 drop-shadow-md">
            Master the future of online business with our <strong className="text-white font-medium">AI-Powered Digital Marketing Course</strong>. We blend creative strategy, data analytics, and next-gen AI tools to transform you into an industry-ready digital leader.
          </p>

          {/* CTA Buttons (Modern Soft-Square Aesthetic) */}
          <div className="gsap-hero-anim flex flex-col sm:flex-row gap-5 w-full sm:w-auto justify-center">
            
            {/* Primary Button */}
            <button className="relative overflow-hidden group px-10 py-4 bg-[#00f6ff] text-[#000e1c] font-black text-[13px] uppercase tracking-[0.2em] rounded-xl shadow-[0_0_20px_rgba(0,246,255,0.4)] hover:shadow-[0_10px_40px_rgba(0,246,255,0.6)] transition-all duration-500 hover:-translate-y-1">
              <span className="relative z-10">Explore Courses</span>
              {/* Premium Shimmer */}
              <div className="absolute inset-0 -translate-x-[150%] bg-gradient-to-r from-transparent via-white/50 to-transparent group-hover:animate-[shimmer_1.5s_infinite]" />
            </button>

            {/* Secondary Button */}
            <button className="px-10 py-4 bg-white/[0.03] border border-white/10 text-white font-bold text-[13px] uppercase tracking-[0.2em] rounded-xl backdrop-blur-md hover:bg-white/[0.08] hover:border-white/30 transition-all duration-300 hover:-translate-y-1">
              Download Syllabus
            </button>
            
          </div>

        </div>
      </div>

      {/* --- PREMIUM SCROLLER --- */}
      <div className="pin-wrapper w-full h-screen bg-[#000e1c] flex items-center justify-center overflow-hidden relative z-20">
        <div className="expand-box w-full h-full origin-center overflow-hidden shadow-[0_0_50px_rgba(0,246,255,0.15)] bg-[#050914]">
          <PremiumScroller />
        </div>
      </div>

      {/* --- ALL OTHER SECTIONS --- */}
      <div className="relative z-10 w-full bg-[#000e1c]">
        <CourseSection />
        <WhyChooseUs />
        <PlacementSection />
        <ToolsSection />
        <PlacementPartners />
      </div>

    </div>
  );
}

export default App;





// import { useLayoutEffect, useRef } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import "./App.css";
// import { GridScan } from "./components/GridScan";
// import DepthText from "./components/DepthText";
// import { PremiumScroller } from "./components/PremiumScroller";
// import { CourseSection } from "./components/CourseSection";
// import { WhyChooseUs } from "./components/WhyChooseUs";
// import { PlacementSection } from "./components/PlacementSection";
// import { ToolsSection } from "./components/ToolsSection";
// import { PlacementPartners } from "./components/PlacementPartners";
// // Removed NavBar & Footer as they are in Index.jsx

// gsap.registerPlugin(ScrollTrigger);

// function App() {
//   const mainRef = useRef(null);

//   useLayoutEffect(() => {
//     let ctx = gsap.context(() => {
      
//       // 1. HERO SECTION ENTRANCE (Title, Subtitle, Para, Buttons)
//       // Sabhi '.gsap-hero-anim' class wale elements ek-ek karke smooth stagger ke sath aayenge
//       gsap.from(".gsap-hero-anim", {
//         y: 60,
//         opacity: 0,
//         duration: 1.2,
//         stagger: 0.15, // Har element 0.15s ke delay se aayega
//         ease: "power3.out",
//         delay: 0.2, // Initial page load hone ka thoda wait
//       });

//       // 2. Premium Scroll-Expand Animation with Pause
//       const tl = gsap.timeline({
//         scrollTrigger: {
//           trigger: ".pin-wrapper",
//           start: "top top",
//           end: "+=2000",
//           scrub: 1,
//           pin: true,
//           pinSpacing: true,
//         },
//       });

//       tl.fromTo(
//         ".expand-box",
//         { scale: 0.55, borderRadius: "60px" },
//         { scale: 1, borderRadius: "0px", duration: 1, ease: "none" }
//       ).to(".expand-box", {
//         duration: 1,
//       });

//     }, mainRef);
//     return () => ctx.revert();
//   }, []);

//   return (
//     <div ref={mainRef} className="bg-black w-full overflow-x-hidden block">
      
//       {/* --- HERO SECTION --- */}
//       <div className="h-screen w-full relative overflow-hidden flex flex-col items-center justify-center pt-20">
        
//         {/* Background Grid Scan */}
//         <div className="absolute inset-0 z-0">
//           <GridScan
//             sensitivity={0.55}
//             lineThickness={1}
//             linesColor="#2F293A"
//             gridScale={0.1}
//             scanColor="#00f6ff"
//             scanOpacity={0.4}
//             enablePost
//             bloomIntensity={0.6}
//             chromaticAberration={0.002}
//             noiseIntensity={0.01}
//             lineJitter={0.1}
//             scanGlow={0.5}
//             scanSoftness={2}
//             enableWebcam={false}
//             showPreview={false}
//           />
//         </div>

//         {/* --- FOREGROUND CONTENT (Centered & Staggered) --- */}
//         <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-5xl mx-auto pointer-events-auto">
          
//           {/* Tagline / Subtitle */}
//           <div className="gsap-hero-anim mb-6">
//             <span className="inline-block px-4 py-1.5 rounded-full border border-[#00f6ff]/30 bg-[#00f6ff]/10 text-[#00f6ff] text-xs md:text-sm font-bold tracking-widest uppercase backdrop-blur-sm shadow-[0_0_15px_rgba(0,246,255,0.2)]">
//               Professional Digital Marketing Program
//             </span>
//           </div>

//           {/* 3D Depth Title */}
//           <div className="gsap-hero-anim flex flex-wrap justify-center gap-2 md:gap-5 mb-8 w-full pointer-events-none">
//             {["Revopian", "Digital", "Academy"].map((word, index) => (
//               <div key={index} className="pointer-events-auto">
//                 <DepthText
//                   text={word}
//                   layers={34}
//                   depth={2.4}
//                   faceColor="#e0ffff"
//                   depthColor="#008b8b"
//                   tilt={7.5}
//                   pointerTracking
//                   smoothing={0.14}
//                   perspective={900}
//                   autoOrbit
//                   orbitSpeed={0.35}
//                   fontSize="clamp(2.5rem, 8vw, 5.5rem)"
//                   fontWeight={900}
//                   shadow
//                 />
//               </div>
//             ))}
//           </div>

//           {/* Premium Paragraph Text */}
//           <p className="gsap-hero-anim text-gray-300 font-light text-base md:text-xl max-w-3xl leading-relaxed mb-10 drop-shadow-md">
//             Master the future of online business with our <strong className="text-white font-bold">AI-Powered Digital Marketing Course</strong>. We blend creative strategy, data analytics, and next-gen AI tools to transform you into an industry-ready digital leader.
//           </p>

//           {/* CTA Buttons */}
//           <div className="gsap-hero-anim flex flex-col sm:flex-row gap-4 sm:gap-6 w-full sm:w-auto justify-center">
            
//             {/* Primary Button (Glowing Cyan) */}
//             <button className="relative overflow-hidden group px-8 py-3.5 bg-[#00f6ff] text-[#000e1c] font-black text-sm uppercase tracking-[0.2em] rounded-full shadow-[0_0_20px_rgba(0,246,255,0.4)] hover:shadow-[0_0_35px_rgba(0,246,255,0.7)] transition-all duration-500 hover:scale-105">
//               <span className="relative z-10">Explore Courses</span>
//               <div className="absolute inset-0 -translate-x-[150%] bg-gradient-to-r from-transparent via-white/50 to-transparent group-hover:animate-[shimmer_1.5s_infinite]" />
//             </button>

//             {/* Secondary Button (Glass Outline) */}
//             <button className="px-8 py-3.5 bg-white/5 border border-white/20 text-white font-bold text-sm uppercase tracking-[0.2em] rounded-full backdrop-blur-md hover:bg-white/10 hover:border-white/40 transition-all duration-300">
//               Download Syllabus
//             </button>
            
//           </div>

//         </div>
//       </div>

//       {/* --- PREMIUM SCROLLER --- */}
//       <div className="pin-wrapper w-full h-screen bg-[#000e1c] flex items-center justify-center overflow-hidden relative z-20">
//         <div className="expand-box w-full h-full origin-center overflow-hidden shadow-[0_0_50px_rgba(0,246,255,0.15)] bg-[#050914]">
//           <PremiumScroller />
//         </div>
//       </div>

//       {/* --- ALL OTHER SECTIONS --- */}
//       <div className="relative z-10 w-full bg-[#000e1c]">
//         <CourseSection />
//         <WhyChooseUs />
//         <PlacementSection />
//         <ToolsSection />
//         <PlacementPartners />
//       </div>

//     </div>
//   );
// }

// export default App;






// one 1

// import { useLayoutEffect, useRef } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import "./App.css";
// import { GridScan } from "./components/GridScan";
// import DepthText from "./components/DepthText";
// import { PremiumScroller } from "./components/PremiumScroller";
// import { CourseSection } from "./components/CourseSection";
// import { WhyChooseUs } from "./components/WhyChooseUs";
// import { PlacementSection } from "./components/PlacementSection";
// import { ToolsSection } from "./components/ToolsSection";
// import { PlacementPartners } from "./components/PlacementPartners";
// import { Footer } from "./components/footer";
// import NavBar from "./components/NavBar";

// // GSAP Plugin Register
// gsap.registerPlugin(ScrollTrigger);

// function App() {
//   const mainRef = useRef(null);

//   useLayoutEffect(() => {
//     let ctx = gsap.context(() => {
//       // 1. Hero Section Text Animation
//       gsap.from(".gsap-stagger", {
//         y: 80,
//         opacity: 0,
//         duration: 1.5,
//         stagger: 0.2,
//         ease: "power3.out",
//         delay: 0.3,
//       });

//       // 2. Premium Scroll-Expand Animation with Pause
//       const tl = gsap.timeline({
//         scrollTrigger: {
//           trigger: ".pin-wrapper",
//           start: "top top",
//           end: "+=2000", // 2000px tak hold karega
//           scrub: 1,
//           pin: true,
//           pinSpacing: true, // Ye default true hota hai, explicitly likh diya for safety
//         },
//       });

//       tl.fromTo(
//         ".expand-box",
//         {
//           scale: 0.55,
//           borderRadius: "60px",
//         },
//         {
//           scale: 1,
//           borderRadius: "0px",
//           duration: 1,
//           ease: "none",
//         },
//       ).to(".expand-box", {
//         duration: 1, // Dummy tween screen ko hold karne ke liye
//       });
//     }, mainRef);

//     return () => ctx.revert();
//   }, []);

//   return (
//     // FIX: Removed NavBar and Footer from here because Index.jsx handles them globally now
//     <div ref={mainRef} className="bg-black w-full overflow-x-hidden block">
//       {/* --- HERO SECTION --- */}
//       <div className="h-screen w-full relative overflow-hidden">
//         <div className="absolute inset-0 z-0">
//           <GridScan
//             sensitivity={0.55}
//             lineThickness={1}
//             linesColor="#2F293A"
//             gridScale={0.1}
//             scanColor="#00f6ff"
//             scanOpacity={0.4}
//             enablePost
//             bloomIntensity={0.6}
//             chromaticAberration={0.002}
//             noiseIntensity={0.01}
//             lineJitter={0.1}
//             scanGlow={0.5}
//             scanSoftness={2}
//             enableWebcam={false}
//             showPreview={false}
//           />
//         </div>

//         <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none">
//           <div className="pointer-events-auto flex flex-wrap justify-center gap-2 md:gap-5">
//             {["Revopian", "Digital", "Academy"].map((word, index) => (
//               <div key={index} className="gsap-stagger">
//                 <DepthText
//                   text={word}
//                   layers={34}
//                   depth={2.4}
//                   faceColor="#e0ffff"
//                   depthColor="#008b8b"
//                   tilt={7.5}
//                   pointerTracking
//                   smoothing={0.14}
//                   perspective={900}
//                   autoOrbit
//                   orbitSpeed={0.35}
//                   fontSize="clamp(2.5rem, 8vw, 5.5rem)"
//                   fontWeight={900}
//                   shadow
//                 />
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* --- PREMIUM SCROLLER --- */}
//       <div className="pin-wrapper w-full h-screen bg-[#000e1c] flex items-center justify-center overflow-hidden relative z-20">
//         <div className="expand-box w-full h-full origin-center overflow-hidden shadow-[0_0_50px_rgba(0,246,255,0.15)] bg-[#050914]">
//           <PremiumScroller />
//         </div>
//       </div>
//       {/* --- ALL OTHER SECTIONS --- */}
//       <div className="relative z-10 w-full bg-[#000e1c]">
//         <CourseSection />
//         <WhyChooseUs />
//         <PlacementSection />
//         <ToolsSection />
//         <PlacementPartners />
//       </div>
//     </div>
//   );
// }

// export default App;
