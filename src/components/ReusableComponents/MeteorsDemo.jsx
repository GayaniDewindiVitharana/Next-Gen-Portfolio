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
            Hi! I’m Gayani Vitharana, 3 years old,I am a professional and enthusiastic UI/UX designer and frontend developer in my daily life.
            I am a quick learner with a self-learning attitude. I love to learn and explore new technologies and am passionate about problem-solving.
            I love almost all the stacks of web application development and am dedicated to making the web more accessible to the world. 
            I have completed my HND from the Institute of Java Software Engineering Campus.
            I am available for any kind of job opportunity that suits my skills and interests.
          </p>

          <p className="p-2 my-4 text-white font">
            Throughout my career, I’ve embraced challenges and leveraged diverse
            technologies to create impactful software solutions.I am a web designer &amp; developer, and I'm very passionate
            and dedicated to work.
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
