import React from 'react';
import Dribble from '../assets/SocialMedia/Dribble.png';
import FB from '../assets/SocialMedia/FB.png';
import Linkedin from '../assets/SocialMedia/linkedin.png';
import X from '../assets/SocialMedia/X.png';
import Github from '../assets/SocialMedia/Github.png';
import StackOverflow from '../assets/SocialMedia/Stack_Overflow.png'; // New import
import HackerRank from '../assets/SocialMedia/HackerRank.png';     // New import
import SoloLearn from '../assets/SocialMedia/Sololearn.png';       // New import
import Figma from '../assets/SocialMedia/Sololearn-1.png';               // New import

const SocialMedia = () => {
  return (
    <div className='flex flex-row gap-1 my-4 md:gap-2'>
      <div className='relative group'>
        <a href="https://github.com/GayaniDewindiVitharana" target="_blank" rel="noopener noreferrer">
          <img className='w-10 h-10 duration-200 group-hover:scale-110' src={Github} alt="Github" />
          <div className='absolute inset-0 w-full h-full transition-opacity duration-200 bg-[#22CD6F] rounded-full opacity-0 group-hover:opacity-50'></div>
        </a>
      </div>
      <div className='relative group'>
        <a href=" https://www.linkedin.com/in/gayani-vitharana-6607452b0/" target="_blank" rel="noopener noreferrer">
          <img className='w-10 h-10 duration-200 group-hover:scale-110' src={Linkedin} alt="LinkedIn" />
          <div className='absolute inset-0 w-full h-full transition-opacity duration-200 bg-[#22CD6F] rounded-full opacity-0 group-hover:opacity-50'></div>
        </a>
      </div>
      <div className='relative group'>
        <a href="https://dribbble.com/Gayani_Vitharana" target="_blank" rel="noopener noreferrer">
          <img className='w-10 h-10 duration-200 group-hover:scale-110' src={Dribble} alt="Dribble" />
          <div className='absolute inset-0 w-full h-full transition-opacity duration-200 bg-[#22CD6F] rounded-full opacity-0 group-hover:opacity-50'></div>
        </a>
      </div>
      <div className='relative group'>
        <a href="https://x.com/Gayani_SE" target="_blank" rel="noopener noreferrer">
          <img className='w-10 h-10 duration-200 group-hover:scale-110' src={X} alt="X" />
          <div className='absolute inset-0 w-full h-full transition-opacity duration-200 bg-[#22CD6F] rounded-full opacity-0 group-hover:opacity-50'></div>
        </a>
      </div>
      <div className='relative group'>
        <a href="https://web.facebook.com/janith.nanayakkara.35/" target="_blank" rel="noopener noreferrer">
          <img className='w-10 h-10 duration-200 group-hover:scale-110' src={FB} alt="Facebook" />
          <div className='absolute inset-0 w-full h-full transition-opacity duration-200 bg-[#22CD6F] rounded-full opacity-0 group-hover:opacity-50'></div>
        </a>
      </div>
      {/* New social media icons */}
      <div className='relative group'>
        <a href="h https://stackoverflow.com/users/21185624/gayani-vitharana" target="_blank" rel="noopener noreferrer">
          <img className='w-10 h-10 duration-200 group-hover:scale-110' src={StackOverflow} alt="StackOverflow" />
          <div className='absolute inset-0 w-full h-full transition-opacity duration-200 bg-[#22CD6F] rounded-full opacity-0 group-hover:opacity-50'></div>
        </a>
      </div>
      <div className='relative group'>
        <a href="https://www.hackerrank.com/profile/gayanidewindi" target="_blank" rel="noopener noreferrer">
          <img className='w-10 h-10 duration-200 group-hover:scale-110' src={HackerRank} alt="HackerRank" />
          <div className='absolute inset-0 w-full h-full transition-opacity duration-200 bg-[#22CD6F] rounded-full opacity-0 group-hover:opacity-50'></div>
        </a>
      </div>
      <div className='relative group'>
        <a href="https://www.sololearn.com/en/profile/27942528" target="_blank" rel="noopener noreferrer">
          <img className='w-10 h-10 duration-200 group-hover:scale-110' src={SoloLearn} alt="SoloLearn" />
          <div className='absolute inset-0 w-full h-full transition-opacity duration-200 bg-[#22CD6F] rounded-full opacity-0 group-hover:opacity-50'></div>
        </a>
      </div>
      <div className='relative group'>
        <a href="https://www.figma.com/@gayanivitharana" target="_blank" rel="noopener noreferrer">
          <img className='w-10 h-10 duration-200 group-hover:scale-110' src={Figma} alt="Figma" />
          <div className='absolute inset-0 w-full h-full transition-opacity duration-200 bg-[#22CD6F] rounded-full opacity-0 group-hover:opacity-50'></div>
        </a>
      </div>
    </div>
  );
}

export default SocialMedia;
