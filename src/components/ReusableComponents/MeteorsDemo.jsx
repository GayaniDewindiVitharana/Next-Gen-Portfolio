import React from "react";
import { Meteors } from "../ui/meteors";
import MyCV from "../../assets/About/CV.pdf";

export function MeteorsDemo() {
  return (
    <div className="">
      <div className="relative flex flex-col flex-grow">
        <div
          className="absolute inset-0 w-full h-full"
          style={{
            background: "linear-gradient(to right, #1e3a8a, #2dd4bf)", // blue-800 to teal-400
            transform: "scale(0.80)",
            filter: "blur(100px)",
          }}
        />
        <div
          className="relative shadow-xl"
          style={{
            backgroundColor: "#0B0D0E", // gray-900
            border: "1px solid #22CD6F", // gray-800
            padding: "2rem 1rem",
            height: "100%",
            overflow: "hidden",
            borderRadius: "40px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            alignItems: "flex-start",
          }}
        >
          <h1 className="text-5xl justify-center font-bold font-sans text-[#22CD6F] uppercase text-center ">
            About ME
          </h1>

          <p className="p-2 mt-8 text-white font">
            Hi! I’m Janith Nanayakkara, 23 years old, and I’m a developer with a
            passion for building clean web and desktop applications with
            intuitive functionalities. I am always curious about learning new
            skills, tools, and concepts. In addition to working on various solo
            full-stack projects, I have collaborated with creative teams,
            participating in daily stand-ups, communication, source control, and
            project management. I am also the owner of LegionCode IT Solutions.
          </p>

          <p className="p-2 my-4 text-white font">
            Throughout my career, I’ve embraced challenges and leveraged diverse
            technologies to create impactful software solutions. Whether
            building intuitive frontends, collaborating on backend development,
            or optimizing websites for SEO, I thrive in dynamic environments. My
            passion for learning and innovation drives me to constantly push the
            limits of what’s possible, ensuring I deliver high-quality products
            and contribute meaningfully to every project I undertake.
          </p>

          {/* Button to preview CV */}
          <button
            className="bg-[#08D665] text-white uppercase text-lg font-bold px-6 py-3 ml-2 mt-4 rounded-[6px] flex items-start"
            onClick={() => window.open(MyCV, "_blank")}
          >
            Download CV
          </button>

          {/* Meaty part - Meteor effect */}
          <Meteors number={20} />
        </div>
      </div>
    </div>
  );
}
