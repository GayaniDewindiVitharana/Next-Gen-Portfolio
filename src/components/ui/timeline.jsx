import { useScroll, useTransform, motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

export const Timeline = ({
  data
}) => {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    (<div
      className="w-full bg-[#000000] dark:bg-[#171717] font-sans p-4"
      ref={containerRef}>
      <div className="p-4">
        <div className='relative flex flex-grow w-full'>
          <h1
            className="absolute top-[-30px] text-5xl md:text-8xl font-bold opacity-60 uppercase select-none"
            style={{
              WebkitTextStroke: '0.5px #08D665',
              color: 'transparent',
            }}
          >
            my career
          </h1>
          <div className="relative z-10">
            <p className="text-2xl md:text-4xl text-[#08D665] font-bold uppercase">MY EXPERIENCE</p>
            <h2 className="text-3xl md:text-6xl text-[#08D665] font-bold uppercase">
              <span className='text-[#FFFFFF]'>Experience </span>and education
            </h2>
          </div>
        </div>
      </div>
      <div ref={ref} className="relative pb-8">
        {data.map((item, index) => (
          <div key={index} className="flex justify-start pt-10 md:pt-40 md:gap-10">
            <div
              className="sticky z-40 flex flex-col items-center self-start max-w-xs md:flex-row top-40 lg:max-w-sm md:w-full">
              <div
                className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-[#FFFFFF] dark:bg-[#000000] flex items-center justify-center">
                <div
                  className="h-4 w-4 rounded-full bg-[#08D665] dark:bg-[#27272A] border border-[#D4D4D8] dark:border-[#404040] p-2" />
              </div>
              <h3
                className="hidden md:block text-xl md:pl-20 md:text-5xl font-bold text-[#08D665] dark:text-[#737373]">
                {item.title}
              </h3>
            </div>

            <div className="relative w-full pl-20 pr-4 md:pl-4">
              <h3
                className="md:hidden block text-2xl mb-4 text-left font-bold text-[#737373] dark:text-[#737373]">
                {item.title}
              </h3>
              {item.content}{" "}
            </div>
          </div>
        ))}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-[#08D665] dark:via-[#ffffff] to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]">
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-[#ffffff] via-[#08D665] to-transparent from-[0%] via-[10%] rounded-full" />
        </div>
      </div>
    </div>)
  );
};
