import { useState } from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import HeroImage from "../assets/Home/imgeavt.png";
import HeroBck from "../assets/Home/HomeBG.png";
import SocialMedia from "./SocialMedia";

const Hero = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  const openVideo = () => {
    setIsVideoOpen(true);
  };

  const closeVideo = () => {
    console.log("Close button clicked");
    setIsVideoOpen(false);
  };

  // Variants for animations
  const containerVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, rotateX: -90 },
    visible: {
      opacity: 1,
      rotateX: 0,
      transition: { duration: 1, delay: 0.5, ease: "easeOut" },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, y: 50 }, // Start with opacity 0 and move slightly down
    visible: {
      opacity: 1,
      y: 0, // Move to the original position
      transition: { duration: 1, delay: 0.8, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      className="relative flex flex-col items-center justify-between w-full h-auto text-white bg-black bg-center bg-cover md:flex-row"
      style={{ backgroundImage: `url(${HeroBck})` }}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Box Reveal Wrapper */}
      <motion.div
        className="relative z-10 flex flex-col px-4 pl-10 space-y-4 md:pl-10 md:px-0"
        variants={textVariants}
      >
        {/* Background Text */}
        <div className="absolute top-[-30px] left-[20px] md:top-[-30px] md:left-[20px] flex flex-col justify-center items-start z-10 pl-10">
          <h1
            style={{
              fontSize: "180px",
              fontWeight: "bold",
              color: "transparent",
              WebkitTextStroke: "1px #22CD6F",
              opacity: "0.5",
              lineHeight: "0.9",
            }}
            className="hidden md:block"
          >
            GAYANI
          </h1>
          <h1
            style={{
              fontSize: "180px",
              fontWeight: "bold",
              color: "transparent",
              WebkitTextStroke: "1px #22CD6F",
              opacity: "0.5",
              lineHeight: "0.9",
            }}
            className="hidden md:block"
          >
            VITHARANA
          </h1>
        </div>

        {/* Title */}
        <div className="relative z-10 text-center md:text-left">
          <h1 className="text-[50px] md:text-[120px] font-bold leading-none font-sans text-[#22CD6F]">
            GAYANI <br className="hidden md:block" /> VITHARANA
          </h1>
        </div>

        {/* Subtitle */}
        <motion.p
          className="text-lg font-sans uppercase leading-tight font-bold text-[24px] md:text-[36px] z-10 text-center md:text-left opacity-0 animate-fadeInUp"
          variants={textVariants}
        >
          <span className="animate-gradient bg-gradient-to-r from-green-400 via-teal-500 to-green-400 bg-clip-text text-transparent">
            Fornd-End Developer  & 
          </span>
          <br className="hidden md:block" />
          <span className="animate-text text-transparent bg-gradient-to-r from-[#22CD6F] via-blue-400 to-[#22CD6F] bg-clip-text">
          UI/UX
          </span>
          
          <span className="animate-text text-transparent bg-gradient-to-r from-[#22CD6F] via-blue-400 to-[#22CD6F] bg-clip-text">
         
          </span>
          Designer
        </motion.p>

        {/* Buttons */}
        <motion.div
          className="z-10 flex items-center justify-center space-x-4 md:justify-start"
          variants={textVariants}
        >
          <Link to="contact" smooth={true} duration={500}>
            <button className="bg-[#08D665] text-white uppercase text-lg font-bold px-6 py-3 md:px-8 md:py-4 rounded-[6px] flex items-center">
              Contact Me
            </button>
          </Link>
          <button
            onClick={openVideo}
            className="flex items-center justify-center p-3 border-none"
          >
            {/* <img
              src={PlayButton}
              alt="Play Video"
              className="w-[55px] h-[55px]"
            /> */}
          </button>
        </motion.div>

        {/* Social Media */}
        <motion.div
          className="flex justify-center mt-4 md:justify-start"
          variants={textVariants}
        >
          <SocialMedia />
        </motion.div>
      </motion.div>

      {/* Hero Image */}
      <motion.div
        className="z-10 flex items-center justify-center mt-8"
        variants={imageVariants}
      >
        <motion.img
      src={HeroImage}
      alt="Hero"
      className="w-[700px] md:w-auto h-auto max-w-full object-center"
      variants={imageVariants}
      initial="hidden"
      animate="visible"
    />
      </motion.div>

      {/* Video Modal */}
      {isVideoOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
          <div className="relative w-[90%] max-w-[1200px] bg-black rounded-md overflow-hidden">
            {/* Close Button */}
            <button
              onClick={closeVideo}
              className="absolute top-2 right-2 px-4 py-2 text-white bg-red-600 hover:bg-red-700 rounded"
            >
              X
            </button>

            {/* Responsive Video */}
            <div className="relative w-full" style={{ paddingTop: "33.33%" }}>
              <video
                className="absolute top-0 left-0 w-full h-full"
                controls
                autoPlay
              >
                <source src={IntroVideo} type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default Hero;
