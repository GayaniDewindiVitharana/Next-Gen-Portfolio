import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CanvasRevealEffect } from "../../components/ui/canvas-reveal-effect";
import { FaMobileAlt, FaLaptopCode, FaPencilRuler, FaPaintBrush, FaDatabase, FaReact } from "react-icons/fa";

export function CanvasRevealEffectDemo() {
  return (
    <div className="grid grid-cols-1 gap-8 px-4 py-10 mx-auto bg-[#000000] sm:grid-cols-2 lg:grid-cols-3 dark:bg-black">
      <Card
        icon={<FaMobileAlt size={50} className="text-[#08D665]" />}
        name="MOBILE DEVELOPMENT"
        description1="Designing and developing innovative mobile applications using React Native, Flutter, and Swift for seamless and scalable experiences."
      >
        <CanvasRevealEffect animationSpeed={5.1} containerClassName="bg-[#064E3B]" />
      </Card>

      <Card
        icon={<FaPencilRuler size={50} className="text-[#08D665]" />}
        name="UI/UX DESIGN"
        description1="Creating sleek and functional digital experiences using tools like Figma, Adobe XD, and Blender, with a focus on user engagement."
      >
        <CanvasRevealEffect animationSpeed={5.1} containerClassName="bg-[#064E3B]" />
      </Card>

      <Card
        icon={<FaLaptopCode size={50} className="text-[#08D665]" />}
        name="WEB DEVELOPMENT"
        description1="Building responsive, high-performance websites with Next, React, Angular, and TypeScript, implementing modern features like state management and API integration."
      >
        <CanvasRevealEffect animationSpeed={5.1} containerClassName="bg-[#064E3B]" />
      </Card>

      <Card
        icon={<FaPaintBrush size={50} className="text-[#08D665]" />}
        name="GRAPHIC DESIGN"
        description1="Crafting compelling visual designs with Adobe Photoshop, Illustrator, and Lightroom  , Blender to elevate branding and communication."
      >
        <CanvasRevealEffect animationSpeed={5.1} containerClassName="bg-[#064E3B]" />
      </Card>

      <Card
        icon={<FaDatabase size={50} className="text-[#08D665]" />}
        name="BACKEND DEVELOPMENT"
        description1="Specializing in server-side solutions using Nest.js  Node.js, Express, and MongoDB Graphql , PostgreSQL , Sql Server ,Java , C# ,Python to build efficient and scalable systems."
      >
        <CanvasRevealEffect animationSpeed={5.1} containerClassName="bg-[#064E3B]" />
      </Card>

      <Card
        icon={<FaReact size={50} className="text-[#08D665]" />}
        name="FRONTEND DEVELOPMENT"
        description1="Delivering dynamic, user-friendly interfaces with React, Next.js, and Tailwind CSS, ensuring seamless interaction and performance."
      >
        <CanvasRevealEffect animationSpeed={5.1} containerClassName="bg-[#064E3B]" />
      </Card>
    </div>
  );
}

const Card = ({ icon, name, description1, children }) => {
  const [hovered, setHovered] = React.useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="border border-[#08D665] group/canvas-card flex items-center justify-center w-full h-[30rem] relative bg-[#0B0D0E]"
    >
      {/* Background hover effect with customized opacity */}
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 w-full h-full"
            style={{
              backgroundColor: "rgba(6, 78, 59, 1)",
            }}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Icon, title, and description */}
      <div className="relative z-20">
        <div className="flex flex-col items-center justify-center w-full mx-auto text-center transition duration-200">
          <div>{icon}</div>
          <h1 className="text-[#08D665] font-bold text-2xl my-4 uppercase">
            {name}
          </h1>
          <p className="text-[#ffffff] font-medium text-base">
            {description1}
          </p>
        </div>
      </div>
    </div>
  );
};
