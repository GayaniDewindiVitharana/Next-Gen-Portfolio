"use client"; // Mark as a client component for use of hooks

import { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { certificates } from "../Certificate/certificates"; // Import certificates data
import AboutBack from "../../assets/svg/certificate/AboutBack.png"; // Replace with the actual path to the background image

const Certificate = ({ onViewMore }) => {
  const [currentIndex, setCurrentIndex] = useState(0); // Current slide index
  const [isMobile, setIsMobile] = useState(false); // Check if the device is mobile

  // Determine whether the device is mobile
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Automatically slide certificates every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % certificates.length);
    }, 3000); // Adjust the time for auto-sliding

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  // Previous slide
  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + certificates.length) % certificates.length
    );
  };

  // Next slide
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % certificates.length);
  };

  // Get certificates to display based on device
  const getVisibleCertificates = () => {
    return isMobile
      ? [certificates[currentIndex]]
      : certificates
          .slice(currentIndex, currentIndex + 3)
          .concat(
            certificates.slice(
              0,
              Math.max(0, 3 - (certificates.length - currentIndex))
            )
          );
  };

  return (
    <div
      className="relative flex flex-col h-auto p-4 mt-8 bg-black bg-center bg-cover"
      style={{ backgroundImage: `url(${AboutBack.src})` }}
    >
      {/* Section Title */}
      <div className="flex flex-row items-center justify-between p-4 pt-10">
        <div className="relative flex-grow w-full md:w-[800px]">
          <h1
            className="absolute top-[-30px] text-5xl md:text-8xl font-bold opacity-60 uppercase select-none"
            style={{ WebkitTextStroke: "0.5px #08D665", color: "transparent" }}
          >
            Certificates
          </h1>
          <div className="relative z-10">
            <p className="text-2xl md:text-4xl text-[#08D665] font-bold uppercase">
              My Achievements
            </p>
            <h2 className="text-3xl md:text-6xl text-white font-bold uppercase">
              Certificates
            </h2>
          </div>
        </div>
        {/* Navigation Arrows */}
        <div className="flex flex-row items-center gap-4">
          <button
            onClick={handlePrev}
            className="w-10 h-10 rounded-[5px] border border-[#08D665] text-white flex justify-center items-center"
          >
            <FaChevronLeft />
          </button>
          <button
            onClick={handleNext}
            className="w-10 h-10 rounded-[5px] border border-[#08D665] text-white flex justify-center items-center"
          >
            <FaChevronRight />
          </button>
        </div>
      </div>

      {/* Certificate Display */}
      <div className="flex flex-row items-center justify-center gap-8 px-4">
        {getVisibleCertificates().map((cert) => (
          <div
            key={cert.id}
            className="flex-grow flex-col bg-[#0B0D0E] border border-[#08D665] rounded-md shadow-lg"
          >
            <img
              className="p-4 rounded-t-md"
              src={cert.image}
              alt={cert.title}
            />
            <h1 className="text-2xl text-center font-bold text-[#08D665] uppercase mt-4">
              {cert.title}
            </h1>
            <h2 className="text-xl text-center font-semibold text-white uppercase mb-4">
              {cert.date}
            </h2>
          </div>
        ))}
      </div>

      {/* View More Button */}
      <div className="flex justify-center mt-8">
        <button
          onClick={onViewMore}
          className="text-2xl px-8 py-4 text-[#08D665] font-bold uppercase relative border-2 border-[#08D665] rounded-lg overflow-hidden animate-fadeInUp hover:scale-105 transition-transform"
        >
          View More
          <span className="absolute inset-0 bg-[#08D66533] rounded-lg animate-pulse"></span>
        </button>
      </div>
    </div>
  );
};

export default Certificate;
