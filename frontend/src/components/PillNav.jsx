// 'use client';

// import React, { useRef, useEffect, useState } from 'react';
// import { useNavigate, useLocation } from 'react-router-dom';

// const GooeyNav = ({ items, initialActiveIndex = 0 }) => {
//   const navRef = useRef(null);
//   const pillRef = useRef(null);
//   const [activeIndex, setActiveIndex] = useState(initialActiveIndex);
  
//   const navigate = useNavigate();
//   const location = useLocation();

//   // Page reload hone par URL ke hisaab se active tab set karne ke liye
//   useEffect(() => {
//     const currentIndex = items.findIndex(item => item.href === location.pathname);
//     if (currentIndex !== -1) {
//       setActiveIndex(currentIndex);
//     }
//   }, [location.pathname, items]);

//   useEffect(() => {
//     const activeItem = navRef.current?.children[activeIndex];
    
//     const updatePill = () => {
//       if (activeItem && pillRef.current) {
//         // Pill ko perfectly center aur scale karne ke liye
//         pillRef.current.style.left = `${activeItem.offsetLeft}px`;
//         pillRef.current.style.width = `${activeItem.offsetWidth}px`;
//       }
//     };

//     updatePill();
//     const timeoutId = setTimeout(updatePill, 100);
    
//     window.addEventListener('resize', updatePill);
//     return () => {
//       clearTimeout(timeoutId);
//       window.removeEventListener('resize', updatePill);
//     };
//   }, [activeIndex]);

//   return (
//     // Lighter glass container for a premium frosted look
//     <div className="relative p-1.5 bg-white/[0.03] border border-white/10 rounded-full backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.4)] flex items-center">
      
//       {/* --- THE SLIDING WHITE PILL --- */}
//       <div
//         ref={pillRef}
//         className="ml-2 absolute top-1.5 bottom-1.5 rounded-full bg-white shadow-[0_2px_15px_rgba(255,255,255,0.3)] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] z-10 pointer-events-none"
//       />

//       {/* --- NAV ITEMS --- */}
//       <ul ref={navRef} className="flex items-center relative z-20 m-0 p-0">
//         {items.map((item, index) => {
//           const isActive = activeIndex === index;
//           return (
//             <li key={index} className="list-none">
//               <a
//                 href={item.href}
//                 onClick={(e) => {
//                   e.preventDefault();
//                   setActiveIndex(index);
//                   navigate(item.href);
//                 }}
//                 // Text sizing aur padding ko balance kiya gaya hai
//                 className={`block px-7 py-2.5 text-[13px] uppercase tracking-[0.15em] transition-all duration-300 ${
//                   isActive
//                     ? 'text-black font-black' 
//                     : 'text-gray-400 font-bold hover:text-white'
//                 }`}
//               >
//                 {item.label}
//               </a>
//             </li>
//           );
//         })}
//       </ul>

//     </div>
//   );
// };

// export default GooeyNav;



'use client';

import React, { useRef, useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const GooeyNav = ({ items, initialActiveIndex = 0 }) => {
  const navRef = useRef(null);
  const pillRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(initialActiveIndex);
  
  const navigate = useNavigate();
  const location = useLocation();

  // Helper function: Check if parent OR any child route is active
  const isItemActive = (item, path) => {
    if (item.href === path) return true;
    if (item.subItems) {
      return item.subItems.some(sub => 
        sub.href === path || (sub.subItems && sub.subItems.some(nested => nested.href === path))
      );
    }
    return false;
  };

  useEffect(() => {
    const currentIndex = items.findIndex(item => isItemActive(item, location.pathname));
    if (currentIndex !== -1) setActiveIndex(currentIndex);
  }, [location.pathname, items]);

  useEffect(() => {
    const activeItem = navRef.current?.children[activeIndex];
    const updatePill = () => {
      if (activeItem && pillRef.current) {
        pillRef.current.style.left = `${activeItem.offsetLeft}px`;
        pillRef.current.style.width = `${activeItem.offsetWidth}px`;
      }
    };
    updatePill();
    const timeoutId = setTimeout(updatePill, 100);
    window.addEventListener('resize', updatePill);
    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener('resize', updatePill);
    };
  }, [activeIndex]);

  return (
    <div className="relative p-1.5 bg-white/[0.03] border border-white/10 rounded-full backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.4)] flex items-center">
      
      {/* THE SLIDING WHITE PILL */}
      <div
        ref={pillRef}
        className="ml-2 absolute top-1.5 bottom-1.5 rounded-full bg-white shadow-[0_2px_15px_rgba(255,255,255,0.3)] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] z-10 pointer-events-none"
      />

      <ul ref={navRef} className="flex items-center relative z-20 m-0 p-0">
        {items.map((item, index) => {
          const isActive = activeIndex === index;
          return (
            <li key={index} className="list-none relative group">
              <a
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  setActiveIndex(index);
                  navigate(item.href);
                }}
                className={`block px-7 py-2.5 text-[13px] uppercase tracking-[0.15em] transition-all duration-300 cursor-pointer ${
                  isActive ? 'text-black font-black' : 'text-gray-400 font-bold hover:text-white'
                }`}
              >
                {item.label}
              </a>

              {/* LEVEL 1 DROPDOWN (About Us, Franchise, Media, etc.) */}
              {item.subItems && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                  <div className="bg-[#050505]/95 backdrop-blur-2xl border border-white/10 rounded-xl p-2 shadow-[0_15px_40px_rgba(0,0,0,0.8)] w-60 flex flex-col gap-1 relative">
                    
                    {/* Inner glowing edge for premium feel */}
                    <div className="absolute inset-0 rounded-xl shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)] pointer-events-none" />

                    {item.subItems.map((subItem, subIndex) => (
                      <div key={subIndex} className="relative group/nested">
                        <a
                          href={subItem.href}
                          onClick={(e) => {
                            e.preventDefault();
                            if (subItem.href !== '#') navigate(subItem.href);
                          }}
                          className="flex justify-between items-center px-4 py-2.5 text-[13px] font-bold text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors cursor-pointer"
                        >
                          {subItem.label}
                          {/* Add small arrow if this item has nested subItems */}
                          {subItem.subItems && (
                            <svg className="w-4 h-4 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
                          )}
                        </a>

                        {/* LEVEL 2 NESTED DROPDOWN (News, Award, Gallery) */}
                        {subItem.subItems && (
                          <div className="absolute left-full top-0 pl-2 opacity-0 invisible group-hover/nested:opacity-100 group-hover/nested:visible transition-all duration-300">
                            <div className="bg-[#050505]/95 backdrop-blur-2xl border border-white/10 rounded-xl p-2 shadow-[0_15px_40px_rgba(0,0,0,0.8)] w-48 flex flex-col gap-1 relative">
                              <div className="absolute inset-0 rounded-xl shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)] pointer-events-none" />
                              
                              {subItem.subItems.map((nestedItem, nestedIndex) => (
                                <a
                                  key={nestedIndex}
                                  href={nestedItem.href}
                                  onClick={(e) => {
                                    e.preventDefault();
                                    navigate(nestedItem.href);
                                  }}
                                  className="block px-4 py-2.5 text-[13px] font-bold text-gray-400 hover:text-[#00f6ff] hover:bg-[#00f6ff]/10 rounded-lg transition-colors"
                                >
                                  {nestedItem.label}
                                </a>
                              ))}
                            </div>
                          </div>
                        )}

                      </div>
                    ))}
                  </div>
                </div>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default GooeyNav;