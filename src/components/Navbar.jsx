import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { Link } from 'react-scroll';

const Navbar = ({ handleNavClick }) => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const activeLinkStyle = {
    textDecoration: 'underline',
    textDecorationColor: '#2563eb',
    textDecorationThickness: '2px',
    textUnderlineOffset: '4px',
    color: '#08D665'
  };

  const defaultLinkStyle = {
    color: '#08D665'
  };

  return (
    <div className='flex items-center justify-between max-w-auto font-bold px-10 text-black bg-[#000000] border-b-[0.1px] border-[#08D665] z-50'>
      <p className="font-bold uppercase" style={defaultLinkStyle}>Gayani.</p>
      <h1 className='w-full text-3xl font-bold text-[#00df9a]'></h1>
      <ul className='hidden font-normal tracking-wide uppercase lg:flex'>
        <li className='p-4 cursor-pointer'>
          <Link to="home" smooth={true} duration={500} style={defaultLinkStyle} spy={true} activeStyle={activeLinkStyle} onClick={handleNavClick}>
            Home
          </Link>
        </li>
        <li className='p-4 cursor-pointer'>
          <Link to="about" smooth={true} duration={500} style={defaultLinkStyle} spy={true} activeStyle={activeLinkStyle} onClick={handleNavClick}>
            About
          </Link>
        </li>
        <li className='p-4 cursor-pointer'>
          <Link to="education" smooth={true} duration={500} style={defaultLinkStyle} spy={true} activeStyle={activeLinkStyle} onClick={handleNavClick}>
            Education
          </Link>
        </li>
        <li className='p-4 cursor-pointer'>
          <Link to="project" smooth={true} duration={500} style={defaultLinkStyle} spy={true} activeStyle={activeLinkStyle} onClick={handleNavClick}>
            Project
          </Link>
        </li>
        {/* Update Blog link */}
  
        <li className='p-4 cursor-pointer'>
          <Link to="contact" smooth={true} duration={500} style={defaultLinkStyle} spy={true} activeStyle={activeLinkStyle} onClick={handleNavClick}>
            Contact
          </Link>
        </li>
      </ul>
      <div onClick={handleNav} className='block cursor-pointer text-[#00df9a] lg:hidden'>
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <div className={`fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000000] ease-in-out duration-500 z-50 transform ${nav ? 'translate-x-0' : '-translate-x-full'}`}>
        <p className="font-bold uppercase" style={defaultLinkStyle}>Gayani.</p>
        <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4'></h1>
        <ul className='p-4 tracking-wide uppercase'>
          <li className='p-4 cursor-pointer'>
            <Link to="home" smooth={true} duration={500} onClick={() => { handleNav(); handleNavClick(); }} style={defaultLinkStyle} spy={true} activeStyle={activeLinkStyle}>
              Home
            </Link>
          </li>
          <li className='p-4 cursor-pointer'>
            <Link to="about" smooth={true} duration={500} onClick={() => { handleNav(); handleNavClick(); }} style={defaultLinkStyle} spy={true} activeStyle={activeLinkStyle}>
              About
            </Link>
          </li>
          <li className='p-4 cursor-pointer'>
            <Link to="education" smooth={true} duration={500} onClick={() => { handleNav(); handleNavClick(); }} style={defaultLinkStyle} spy={true} activeStyle={activeLinkStyle}>
              Education
            </Link>
          </li>
          <li className='p-4 cursor-pointer'>
            <Link to="project" smooth={true} duration={500} onClick={() => { handleNav(); handleNavClick(); }} style={defaultLinkStyle} spy={true} activeStyle={activeLinkStyle}>
              Project
            </Link>
          </li>
          {/* Update Blog link for mobile */}
          <li className='p-4 cursor-pointer'>
            <a 
              href="https://janithnanayakkarablog.wordpress.com/?_gl=1*13d8ll9*_gcl_au*MTQ5Mjg4ODY3OS4xNzMzMDQwMDY5" 
              target="_blank" 
              rel="noopener noreferrer" 
              style={defaultLinkStyle}
            >
              Blog
            </a>
          </li>
          <li className='p-4 cursor-pointer'>
            <Link to="contact" smooth={true} duration={500} onClick={() => { handleNav(); handleNavClick(); }} style={defaultLinkStyle} spy={true} activeStyle={activeLinkStyle}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
