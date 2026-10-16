import React from 'react';
import GooeyNav from './PillNav'; 
import logo from '../assets/logo.png';

const NavBar = () => {
  // Nested structure for dropdowns
  const navItems = [
    { label: 'Home', href: '/' },
    { 
      label: 'About', 
      href: '/about-us', // Default link for parent
      subItems: [
        { label: 'Our Team', href: '/our-team' },
        { label: 'About Us', href: '/about-us' },
        { label: 'Franchise', href: '/franchise' },
        { label: 'Placement & Records', href: '/placement-records' },
        { 
          label: 'Media', 
          href: '#', // Sub-dropdown trigger
          subItems: [
            { label: 'News', href: '/media/news' },
            { label: 'Award', href: '/media/award' },
            { label: 'Gallery', href: '/media/gallery' }
          ]
        }
      ]
    },
    // { label: 'Courses', href: '/courses' },
    { label: 'Contact', href: '/contact' }
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-gradient-to-b from-black/80 to-transparent border-b border-white/5 backdrop-blur-sm transition-all duration-300">
      <div className="w-full max-w-[1400px] mx-auto px-6 md:px-10 flex items-center justify-between h-24">
        
        {/* LOGO */}
        <div className="flex-shrink-0 cursor-pointer hover:scale-105 transition-transform duration-500">
          <img 
            src={logo} 
            alt="Revopions Digital Academy Logo" 
            className="h-15 md:h-17 object-contain drop-shadow-[0_0_15px_rgba(0,246,255,0.2)]"
          />
        </div>

        {/* GOOEY NAV */}
        <div className="flex-1 flex justify-center hidden lg:flex">
          <GooeyNav items={navItems} />
        </div>

        {/* BUTTON */}
        <div className="hidden md:flex flex-shrink-0 ml-8">
          <button className="px-8 py-3 bg-white text-black font-black text-[13px] uppercase tracking-[0.15em] rounded-full shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:scale-105 hover:bg-[#00f6ff] hover:text-black hover:shadow-[0_0_25px_rgba(0,246,255,0.5)] transition-all duration-300">
            Join Now
          </button>
        </div>

      </div>
    </header>
  );
};

export default NavBar;




// import React from 'react';
// import GooeyNav from './PillNav'; 
// import logo from '../assets/logo.png';

// const NavBar = () => {
//   const navItems = [
//     { label: 'Home', href: '/' },
//     { label: 'About', href: '/about' },
//     { label: 'Courses', href: '/courses' },
//     { label: 'Contact', href: '/contact' }
//   ];

//   return (
//     // Header me slight background fade add kiya hai taaki grid lines text ke sath clash na karein
//     <header className="fixed top-0 left-0 w-full z-50 bg-gradient-to-b from-black/80 to-transparent border-b border-white/5 backdrop-blur-sm transition-all duration-300">
//       <div className="w-full max-w-[1400px] mx-auto px-6 md:px-10 flex items-center justify-between h-18">
        
//         {/* 1. PREMIUM LOGO SECTION */}
//         <div className="flex-shrink-0 cursor-pointer hover:scale-105 transition-transform duration-500">
//           <img 
//             src={logo} 
//             alt="Revopions Digital Academy Logo" 
//             // Logo thoda zyada prominent kiya hai
//             className="h-10 md:h-12 object-contain drop-shadow-[0_0_15px_rgba(0,246,255,0.2)]"
//           />
//         </div>

//         {/* 2. CENTER: GOOEY NAV SECTION */}
//         <div className="flex-1 flex justify-center hidden lg:flex">
//           <GooeyNav items={navItems} />
//         </div>

//         {/* 3. CALL TO ACTION BUTTON */}
//         <div className="hidden md:flex flex-shrink-0 ml-8">
//           <button className="px-8 py-3 bg-white text-black font-black text-[13px] uppercase tracking-[0.15em] rounded-full shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:scale-105 hover:bg-[#00f6ff] hover:text-black hover:shadow-[0_0_25px_rgba(0,246,255,0.5)] transition-all duration-300">
//             Join Now
//           </button>
//         </div>

//       </div>
//     </header>
//   );
// };

// export default NavBar;