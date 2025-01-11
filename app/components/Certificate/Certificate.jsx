"use client"; // Marks as a client component for React hooks

import { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { certificates } from "./certificates";
import AboutBack from "../../assets/svg/certificate/AboutBack.png"; // Background image path

const Certificate = ({ onViewMore }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Handle resizing for device responsiveness
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize(); // Run initially
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Auto-slide certificates
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % certificates.length);
    }, 3000);
    return () => clearInterval(interval); // Cleanup interval
  }, []);

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

  return (
    <div
      className="relative flex flex-col h-auto p-4 mt-8 bg-black bg-center bg-cover"
      style={{ backgroundImage: `url(${AboutBack.src})` }}
    >
      {/* Header Section */}
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
        <div className="flex gap-4">
          <button onClick={handlePrev} className="icon-button">
            <FaChevronLeft />
          </button>
          <button onClick={handleNext} className="icon-button">
            <FaChevronRight />
          </button>
        </div>
      </div>

      {/* Certificates Section */}
      <div className="flex flex-wrap justify-center gap-8 px-4">
        {getVisibleCertificates().map((cert) => (
          <div
            key={cert.id}
            className="certificate-card flex-grow flex-col bg-[#0B0D0E] border border-[#08D665] rounded-md shadow-lg"
          >
            <img
              className="p-4 rounded-t-md"
              src={cert.image.src}
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
          className="text-2xl px-8 py-4 text-[#08D665] font-bold uppercase border-2 border-[#08D665] rounded-lg hover:scale-105 transition-transform"
        >
          View More
        </button>
      </div>
    </div>
  );
};

export default Certificate;
