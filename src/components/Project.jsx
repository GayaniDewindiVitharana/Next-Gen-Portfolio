import React, { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import AboutBack from '../assets/About/AboutBack2.png';
import ProjectImage1 from '../assets/Project/pc.jpg';
import ProjectImage2 from '../assets/Project/pc1.jpg';
import ProjectImage3 from '../assets/Project/pc2.jpg';
import LegionStreaming from "../assets/Project/pc3.jpg";

const Project = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const certificates = [
    { id: 1, title: 'Zest Furry', date: 'Website for premium cinnamon and spice products, built with React, Vite, and Tailwind CSS.', image: ProjectImage1 },
    { id: 2, title: 'Great Frozen', date: 'Showcasing premium fruit pulp products with a responsive design and SEO optimization.', image: ProjectImage2 },
    { id: 3, title: 'Ramoda Clothing', date: 'Modern eCommerce site for trendy fashion, optimized for performance and SEO.', image: ProjectImage3 },
    { id: 4, title: 'Legion Streaming', date: 'Gaming portfolio designed for streamers, focusing on performance and immersive visuals.', image: LegionStreaming },
  ];

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + certificates.length) % certificates.length);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % certificates.length);
  };

  const getVisibleCertificates = () => {
    return isMobile
      ? [certificates[currentIndex]]
      : certificates.slice(currentIndex, currentIndex + 3).concat(
          certificates.slice(0, Math.max(0, 3 - (certificates.length - currentIndex)))
        );
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="relative flex flex-col h-auto p-4 mt-8 bg-black bg-center bg-cover" style={{ backgroundImage: `url(${AboutBack})` }}>
      <div className="flex flex-row items-center justify-between p-4 pt-10">
        <div className="relative flex flex-grow flex-wrap w-full md:w-[800px]">
          <h1
            className="absolute top-[-30px] text-5xl md:text-8xl font-bold opacity-60 uppercase select-none"
            style={{ WebkitTextStroke: '0.5px #08D665', color: 'transparent' }}
          >
            my projects
          </h1>
          <div className="relative z-10">
            <p className="text-2xl md:text-4xl text-[#08D665] font-bold uppercase">WORKING PROCESS</p>
            <h2 className="text-3xl md:text-6xl text-[#08D665] font-bold uppercase">
              <span className="text-white">latest working project</span> working project
            </h2>
          </div>
        </div>
        <div className="flex flex-row items-center gap-4">
          <button onClick={handlePrev} className="w-10 h-10 rounded-[5px] border border-[#08D665] text-white flex justify-center items-center">
            <FaChevronLeft />
          </button>
          <button onClick={handleNext} className="w-10 h-10 rounded-[5px] border border-[#08D665] text-white flex justify-center items-center">
            <FaChevronRight />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 p-4">
        {getVisibleCertificates().map((cert, index) => (
          <div
            key={index}
            className="relative flex flex-col bg-[#0B0D0E] border border-[#08D665] transition-transform duration-500 ease-in-out transform hover:scale-105"
            style={{ aspectRatio: '1 / 1' }} // Maintain square aspect ratio
          >
            <img
              className="w-full h-full object-cover transition-all duration-500 ease-in-out transform hover:scale-110"
              src={cert.image}
              alt={cert.title}
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 text-white text-center py-4 px-8 transform translate-y-full transition-transform duration-500 hover:translate-y-0">
              <h1 className="text-2xl md:text-3xl font-bold text-[#08D665] uppercase">{cert.title}</h1>
              <p className="text-xl md:text-lg font-bold text-[#ffffff]">{cert.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
