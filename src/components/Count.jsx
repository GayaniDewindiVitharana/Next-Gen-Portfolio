import React from 'react';
import CountUp from 'react-countup';

const Count = () => {
  return (
    <div className="flex flex-grow flex-wrap h-auto flex-row justify-evenly items-center py-8 bg-[#0B0D0C]">
      {/* Clients Section */}
      <div className="flex flex-row ml-4">
        <h1 className="text-7xl lg:text-8xl text-[#22CD6F] font-bold">
          +<CountUp end={20} duration={2} />
        </h1>
        <div className="flex flex-col justify-center ml-4">
          <p className="text-xl lg:text-lg md:text-base sm:text-sm font-bold text-[#868686]">
            Satisfied
          </p>
          <p className="text-3xl lg:text-2xl md:text-xl sm:text-lg text-[#ffffff]">
            Happy Clients
          </p>
        </div>
      </div>

      {/* Projects Section */}
      <div className="flex flex-row my-4 ml-4">
        <h1 className="text-7xl lg:text-8xl text-[#22CD6F] font-bold">
          +<CountUp end={20} duration={3} />
        </h1>
        <div className="flex flex-col justify-center ml-4">
          <p className="text-xl lg:text-lg md:text-base sm:text-sm font-bold text-[#868686]">
            Projects
          </p>
          <p className="text-3xl lg:text-2xl md:text-xl sm:text-lg text-[#ffffff]">
            Completed
          </p>
        </div>
      </div>

      {/* Years of Experience Section */}
      <div className="flex flex-row ml-24">
        <h1 className="text-7xl lg:text-8xl text-[#22CD6F] font-bold">
          +<CountUp end={6} duration={1} />
        </h1>
        <div className="flex flex-col justify-center ml-4">
          <p className="text-xl lg:text-lg md:text-base sm:text-sm font-bold text-[#868686]">
            month of
          </p>
          <p className="text-3xl lg:text-2xl md:text-xl sm:text-lg text-[#ffffff]">
            Experience
          </p>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .flex-row {
            flex-wrap: wrap;
            justify-content: space-between;
          }
          .flex-grow {
            width: 100%;
            margin-bottom: 2rem;
          }
        }
      `}</style>
    </div>
  );
};

export default Count;
