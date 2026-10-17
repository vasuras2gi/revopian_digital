import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import GooeyNav from './PillNav'; 
import logo from '../assets/logo.png';

const NavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openMobileMenus, setOpenMobileMenus] = useState([]); // Tracks which mobile accordions are open
  
  const navigate = useNavigate();

  // Nested structure for dropdowns
  const navItems = [
    { label: 'Home', href: '/' },
    { 
      label: 'About', 
      href: '/about-us', 
      subItems: [
        { label: 'About Us', href: '/about-us' },
        { label: 'Our Team', href: '/our-team' },
        { label: 'Franchise', href: '/franchise' },
        { label: 'Placement & Records', href: '/placement-records' },
        { 
          label: 'Media', 
          href: '#', 
          subItems: [
            { label: 'News', href: '/media/news' },
            { label: 'Award', href: '/media/award' },
            { label: 'Gallery', href: '/media/gallery' }
          ]
        }
      ]
    },
    { label: 'Contact', href: '/contact' }
  ];

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const toggleMobileAccordion = (label) => {
    setOpenMobileMenus((prev) => 
      prev.includes(label) ? prev.filter(item => item !== label) : [...prev, label]
    );
  };

  const handleMobileNavigation = (href) => {
    if (href !== '#') {
      setIsMobileMenuOpen(false);
      navigate(href);
    }
  };

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 bg-gradient-to-b from-black/80 to-transparent border-b border-white/5 backdrop-blur-sm transition-all duration-300">
        <div className="w-full max-w-[1400px] mx-auto px-6 md:px-10 flex items-center justify-between h-24">
          
          {/* LOGO */}
          <div 
            onClick={() => navigate('/')}
            className="flex-shrink-0 cursor-pointer hover:scale-105 transition-transform duration-500 relative z-50"
          >
            <img 
              src={logo} 
              alt="Revopions Digital Academy Logo" 
              className="h-12 md:h-15 object-contain drop-shadow-[0_0_15px_rgba(0,246,255,0.2)]"
            />
          </div>

          {/* DESKTOP GOOEY NAV */}
          <div className="flex-1 flex justify-center hidden lg:flex">
            <GooeyNav items={navItems} />
          </div>

          {/* DESKTOP BUTTON */}
          <div className="hidden lg:flex flex-shrink-0 ml-8">
            <button className="px-8 py-3 bg-white text-black font-black text-[13px] uppercase tracking-[0.15em] rounded-full shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:scale-105 hover:bg-[#00f6ff] hover:text-black hover:shadow-[0_0_25px_rgba(0,246,255,0.5)] transition-all duration-300">
              Join Now
            </button>
          </div>

          {/* MOBILE HAMBURGER ICON */}
          <div className="lg:hidden flex items-center relative z-50">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white hover:text-[#00f6ff] transition-colors p-2 focus:outline-none"
            >
              {isMobileMenuOpen ? (
                <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
              ) : (
                <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
              )}
            </button>
          </div>

        </div>
      </header>

      {/* MOBILE SLIDING MENU */}
      <div 
        className={`fixed inset-0 bg-[#050505]/95 backdrop-blur-xl z-40 lg:hidden transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full pt-28 px-6 pb-10 overflow-y-auto">
          <ul className="flex flex-col gap-2">
            {navItems.map((item, index) => (
              <li key={index} className="flex flex-col border-b border-white/10 last:border-0">
                <div 
                  className="flex justify-between items-center py-4 cursor-pointer text-gray-300 hover:text-white"
                  onClick={() => item.subItems ? toggleMobileAccordion(item.label) : handleMobileNavigation(item.href)}
                >
                  <span className="text-sm font-bold uppercase tracking-[0.15em]">{item.label}</span>
                  {item.subItems && (
                    <svg 
                      className={`w-5 h-5 transition-transform duration-300 ${openMobileMenus.includes(item.label) ? 'rotate-180 text-[#00f6ff]' : ''}`} 
                      fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </div>

                {/* LEVEL 1 ACCORDION */}
                {item.subItems && (
                  <div className={`overflow-hidden transition-all duration-300 ${openMobileMenus.includes(item.label) ? 'max-h-96 opacity-100 mb-4' : 'max-h-0 opacity-0'}`}>
                    <ul className="flex flex-col pl-4 border-l border-white/20 gap-1">
                      {item.subItems.map((subItem, subIndex) => (
                        <li key={subIndex} className="flex flex-col">
                          <div 
                            className="flex justify-between items-center py-3 cursor-pointer text-gray-400 hover:text-[#00f6ff]"
                            onClick={() => subItem.subItems ? toggleMobileAccordion(subItem.label) : handleMobileNavigation(subItem.href)}
                          >
                            <span className="text-[13px] font-semibold">{subItem.label}</span>
                            {subItem.subItems && (
                              <svg 
                                className={`w-4 h-4 transition-transform duration-300 ${openMobileMenus.includes(subItem.label) ? 'rotate-180' : ''}`} 
                                fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"
                              >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                              </svg>
                            )}
                          </div>

                          {/* LEVEL 2 ACCORDION (Nested) */}
                          {subItem.subItems && (
                            <div className={`overflow-hidden transition-all duration-300 ${openMobileMenus.includes(subItem.label) ? 'max-h-48 opacity-100 mb-2' : 'max-h-0 opacity-0'}`}>
                              <ul className="flex flex-col pl-4 border-l border-white/10 gap-2 mt-1">
                                {subItem.subItems.map((nestedItem, nestedIndex) => (
                                  <li 
                                    key={nestedIndex}
                                    className="py-2 text-xs font-semibold text-gray-500 hover:text-white cursor-pointer"
                                    onClick={() => handleMobileNavigation(nestedItem.href)}
                                  >
                                    {nestedItem.label}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </li>
            ))}
          </ul>

          <div className="mt-8">
            <button className="w-full py-4 bg-[#00f6ff] text-black font-black text-[13px] uppercase tracking-[0.15em] rounded-full shadow-[0_0_20px_rgba(0,246,255,0.3)] active:scale-95 transition-transform duration-300">
              Join Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;





// round2


// import React from 'react';
// import GooeyNav from './PillNav'; 
// import logo from '../assets/logo.png';

// const NavBar = () => {
//   // Nested structure for dropdowns
//   const navItems = [
//     { label: 'Home', href: '/' },
//     { 
//       label: 'About', 
//       href: '/about-us', // Default link for parent
//       subItems: [
//         { label: 'About Us', href: '/about-us' },
//         { label: 'Our Team', href: '/our-team' },
//         { label: 'Franchise', href: '/franchise' },
//         { label: 'Placement & Records', href: '/placement-records' },
//         { 
//           label: 'Media', 
//           href: '#', // Sub-dropdown trigger
//           subItems: [
//             { label: 'News', href: '/media/news' },
//             { label: 'Award', href: '/media/award' },
//             { label: 'Gallery', href: '/media/gallery' }
//           ]
//         }
//       ]
//     },
//     // { label: 'Courses', href: '/courses' },
//     { label: 'Contact', href: '/contact' }
//   ];

//   return (
//     <header className="fixed top-0 left-0 w-full z-50 bg-gradient-to-b from-black/80 to-transparent border-b border-white/5 backdrop-blur-sm transition-all duration-300">
//       <div className="w-full max-w-[1400px] mx-auto px-6 md:px-10 flex items-center justify-between h-24">
        
//         {/* LOGO */}
//         <div className="flex-shrink-0 cursor-pointer hover:scale-105 transition-transform duration-500">
//           <img 
//             src={logo} 
//             alt="Revopions Digital Academy Logo" 
//             className="h-15 md:h-17 object-contain drop-shadow-[0_0_15px_rgba(0,246,255,0.2)]"
//           />
//         </div>

//         {/* GOOEY NAV */}
//         <div className="flex-1 flex justify-center hidden lg:flex">
//           <GooeyNav items={navItems} />
//         </div>

//         {/* BUTTON */}
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




// round1

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