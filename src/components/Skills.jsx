import React from 'react';
import CSharp from '../assets/Skills/C_ 1.png';
import CSS from '../assets/Skills/CSS 1.png';
import HTML1 from '../assets/Skills/HTML 1.png';
import Java from '../assets/Skills/Java 1.png';
import JS from '../assets/Skills/JS 1.png';
import PS from '../assets/Skills/PS 1.png';
import ReactIcon from '../assets/Skills/React 1.png';
import Tailwind from '../assets/Skills/Tailwind 1.png';

const Skills = () => {
  const marqueeAnimation = {
    animation: 'marquee 10s linear infinite',
  };

  const containerStyle = {
    overflow: 'hidden',
    width: '100%',
    position: 'relative',
  };

  const marqueeStyle = {
    display: 'flex',
    whiteSpace: 'nowrap',
    ...marqueeAnimation,
  };

  const imageStyle = {
    width: 'auto',
    height: '80px',
    marginRight: '20px', 
  };

  return (
    <div className='flex flex-col md:flex-row px-4 py-10 bg-[#0B0D0E]'>
      <div className='relative flex-grow px-4 flex-wrap md:w-[800px]'>
        <h1
          className="absolute top-[-30px] text-8xl font-bold opacity-60 uppercase select-none hidden md:block"
          style={{
            WebkitTextStroke: '0.5px #08D665',
            color: 'transparent',
          }}
        >
          My Skills
        </h1>
        <div className="relative z-10">
          <p className="text-[#08D665] text-4xl font-bold uppercase">Languages</p>
          <h2 className="text-6xl text-[#08D665] font-bold uppercase"> 
            <span className='text-white'>My</span> Skills
          </h2>
        </div>
      </div>

      <div className='flex flex-wrap justify-end flex-grow gap-4 px-4'>
        <div style={containerStyle}>
          <div style={marqueeStyle}>
            {[CSharp, CSS, HTML1, Java, JS, PS, ReactIcon, Tailwind].map((img, index) => (
              <img key={index} src={img} style={imageStyle} alt={`Skill ${index}`} />
            ))}
            {[CSharp, CSS, HTML1, Java, JS, PS, ReactIcon, Tailwind].map((img, index) => (
              <img key={`repeat-${index}`} src={img} style={imageStyle} alt={`Skill ${index}`} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const keyframes = `
  @keyframes marquee {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-50%);
    }
  }
`;

const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = keyframes;
document.head.appendChild(styleSheet);

export default Skills;
