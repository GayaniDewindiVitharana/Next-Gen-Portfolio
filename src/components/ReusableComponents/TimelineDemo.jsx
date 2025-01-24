import React, { useState } from "react";
import { Timeline } from "../../components/ui/timeline";
import kccsl from "../../assets/Education/kccsl;.png";
import kcc from "../../assets/Education/sll.png";
import IJSE from "../../assets/Education/download.png";
import IJSE_Cover from "../../assets/Education/1525318975288.png";
import { motion } from "framer-motion";

export function TimelineDemo() {
  const [showMore, setShowMore] = useState(false);

  // Timeline data
  const timelineData = [
    {
      title: "2020",
      content: "G.C.E. Advanced Level Examination (2020) Ga/ Karandeniya Central College",
      logo: kcc,
      images: kccsl,
    },
    
    {
      title: "2022 - 2024",
      content: "Computer Science HND (2022 - 2024) Institute of Software Engineering",
      logo: IJSE,
      images: IJSE_Cover,
    },
  ];

  // Determine which data to show
  const initialData = timelineData.slice(0, 2);
  const additionalData = timelineData.slice(2);
  const dataToShow = showMore ? timelineData : initialData;

  return (
    <div className="w-full">
      <Timeline
        data={dataToShow.map((item, index) => ({
          title: item.title,
          content: (
            <div key={index}>
              {/* Content */}
              <p className="mb-4 text-xs font-normal text-white md:text-2xl">
                {item.content}
              </p>
              {/* Logo */}
              <div className="mb-4 flex justify-center">
                <img
                  src={item.logo}
                  alt="Institution Logo"
                  className="h-16 w-16 rounded-full border border-[#08D665]"
                />
              </div>
              {/* Images */}
              <div className="grid grid-cols-1 gap-4">
                {(Array.isArray(item.images) ? item.images : [item.images]).map(
                  (image, imgIndex) => (
                    <img
                      key={imgIndex}
                      src={image}
                      alt="Institution Campus"
                      className="rounded-lg object-contain h-40 md:h-60 w-full border border-[#08D665]"
                    />
                  )
                )}
              </div>
            </div>
          ),
        }))}
      />
      {/* Show More/Less Button with Animation */}
      <motion.div
        className="mt-4 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <motion.button
          className="text-white bg-[#08D665] px-6 py-3 rounded-md"
          onClick={() => setShowMore(!showMore)} // Toggle showMore state
          animate={{
            scale: [1, 1.2, 1], // Pulsate effect
          }}
          transition={{
            duration: 1, // Time for each cycle
            repeat: Infinity, // Repeat the animation indefinitely
            repeatType: "loop", // Make the animation loop continuously
            ease: "easeInOut", // Smooth ease-in-out transition
          }}
        >
          {showMore ? "Show Less" : "Show More"}
        </motion.button>
      </motion.div>
    </div>
  );
}
