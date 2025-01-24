import React from 'react';
import { CanvasRevealEffectDemo } from './ReusableComponents/CanvasRevealEffectDemo';
import AboutBack from '../assets/About/AboutBack2.png';


const Services = () => {
  return (
    <div className='flex flex-col h-auto p-4 mt-10 bg-black bg-center bg-cover ' style={{ backgroundImage: `url(${AboutBack})` }}>
      <div className='relative flex flex-grow flex-wrap p-4 w-full md:w-[800px]'>
        <h1
          className="absolute top-[-30px] text-5xl md:text-8xl font-bold opacity-60 uppercase select-none"
          style={{
            WebkitTextStroke: '0.5px #08D665',
            color: 'transparent',
          }}
        >
          our services
        </h1>
        <div className="relative z-10">
          <p className="text-2xl md:text-4xl text-[#08D665] font-bold uppercase">WHAT WE DO</p>
          <h2 className="text-3xl md:text-6xl text-[#08D665] font-bold uppercase">
            <span className='text-white'>Services</span> and Solutions
          </h2>
        </div>
      </div>
      <CanvasRevealEffectDemo />
    </div>
  );
}

export default Services;
