import React, { useState } from "react";
import { motion } from "framer-motion"; // Import motion from framer-motion
import { certificates } from "../Certificate/certificates";
import AboutBack from "../../assets/svg/certificate/AboutBack.png";

const MoreCertificate = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 6;

  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = certificates.slice(indexOfFirstCard, indexOfLastCard);

  const totalPages = Math.ceil(certificates.length / cardsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="relative flex flex-col h-auto p-4 bg-black bg-center bg-cover"
         style={{ backgroundImage: `url(${AboutBack})` }}>
      <div className="flex justify-between p-4 pt-10">
        <h1 className="absolute top-[-30px] text-5xl md:text-8xl font-bold opacity-60 uppercase select-none"
            style={{ WebkitTextStroke: "0.5px #08D665", color: "transparent" }}>
          Certificates
        </h1>
        <h2 className="text-3xl md:text-6xl text-[#ffffff] font-bold uppercase">All Certificates</h2>
      </div>

      {/* Animate the Cards */}
      <motion.div
        className="grid grid-cols-1 gap-8 p-4 md:grid-cols-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }} // Fade-in effect
      >
        {currentCards.map((cert) => (
          <motion.div
            key={cert.id}
            className="flex-grow flex-col bg-[#0B0D0E] border border-[#08D665]"
            initial={{ opacity: 0, y: 20 }} // Initial state before animation
            animate={{ opacity: 1, y: 0 }} // Animate to fully visible and in position
            transition={{ duration: 0.6, delay: 0.1 * currentCards.indexOf(cert) }} // Delay to stagger animations
          >
            <img className="p-4" src={cert.image} alt={cert.title} />
            <h1 className="text-2xl text-center font-bold text-[#08D665] uppercase">{cert.title}</h1>
            <h1 className="text-xl text-center font-bold text-[#ffffff] uppercase mb-4">{cert.date}</h1>
          </motion.div>
        ))}
      </motion.div>

      {/* Animate the Pagination Buttons */}
      <motion.div
        className="flex justify-center mt-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }} // Fade-in effect for buttons
      >
        {Array.from({ length: totalPages }, (_, index) => (
          <motion.button
            key={index}
            className={`px-4 py-2 mx-1 rounded-lg ${
              currentPage === index + 1 ? "bg-[#08D665] text-white" : "bg-gray-300 text-black"
            }`}
            onClick={() => paginate(index + 1)}
            whileHover={{ scale: 1.1 }} // Scale up when hovering over the button
            transition={{ type: "spring", stiffness: 300 }} // Smooth scale transition
          >
            {index + 1}
          </motion.button>
        ))}
      </motion.div>
    </div>
  );
};

export default MoreCertificate;
