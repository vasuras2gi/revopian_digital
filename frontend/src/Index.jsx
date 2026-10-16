import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App.jsx';
import NavBar from './components/NavBar.jsx';
import { Footer } from './components/Footer.jsx';
import { OurTeam } from './pages/OurTeam.jsx';
import AboutUs from './pages/AboutUs.jsx';
import PlacementRecords from './pages/PlaceMentRecords.jsx';
import MediaNews from './pages/MediaNews.jsx';
import MediaAward from './pages/Awards.jsx';
import MediaGallery from './MediaGallery.jsx';
import Franchise from './pages/Frachise.jsx';
import Contact from './pages/Contact.jsx';

// Placeholders for all the new pages created in dropdown
// const Franchise = () => <div className="h-screen bg-[#000e1c] text-white flex items-center justify-center text-4xl">Franchise Page</div>;
// const PlacementRecords = () => <div className="h-screen bg-[#000e1c] text-white flex items-center justify-center text-4xl">Placement & Records Page</div>;
// const MediaAward = () => <div className="h-screen bg-[#000e1c] text-white flex items-center justify-center text-4xl">Media - Award Page</div>;
// const MediaGallery = () => <div className="h-screen bg-[#000e1c] text-white flex items-center justify-center text-4xl">Media - Gallery Page</div>;
const Courses = () => <div className="h-screen bg-[#000e1c] text-white flex items-center justify-center text-4xl">Courses Page</div>;
// const Contact = () => <div className="h-screen bg-[#000e1c] text-white flex items-center justify-center text-4xl">Contact Page</div>;

const Index = () => {
  return (
    <BrowserRouter>
      <NavBar />
      
      <div className="pt-24"> {/* Header height margin */}
        <Routes>
          <Route path="/" element={<App />} />
          
          {/* About Dropdown Routes */}
          <Route path="/our-team" element={<OurTeam />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/franchise" element={<Franchise />} />
          <Route path="/placement-records" element={<PlacementRecords />} />
          
          {/* Media Nested Dropdown Routes */}
          <Route path="/media/news" element={<MediaNews />} />
          <Route path="/media/award" element={<MediaAward />} />
          <Route path="/media/gallery" element={<MediaGallery />} />
          
          {/* Other Nav Routes */}
          <Route path="/courses" element={<Courses />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>

      <Footer />
    </BrowserRouter>
  );
};

export default Index;