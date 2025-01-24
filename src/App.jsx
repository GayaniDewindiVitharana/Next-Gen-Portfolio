import { useState } from 'react';
import Hero from './components/Hero';
import Count from './components/Count';
import About from './components/About';
import Skills from './components/Skills';
import Services from './components/Services';
import { TimelineDemo } from './components/ReusableComponents/TimelineDemo';
import Certificate from './components/Certificate';
import Project from './components/Project';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import MoreCertificate from './components/MoreCertificate';

function App() {
  const [showMoreCertificate, setShowMoreCertificate] = useState(false);

  const handleViewMore = () => {
    setShowMoreCertificate(true);
  };

  const handleNavClick = () => {
    setShowMoreCertificate(false);
  };

  return (
    <div className='bg-black'>
      <Navbar handleNavClick={handleNavClick} />
      {!showMoreCertificate ? (
        <>
          <div id="home">
            <Hero />
          </div>
          <Count />
          <div id="about">
            <About />
          </div>
          <Skills />
          <Services />
          <div id="education">
            <TimelineDemo /> 
          </div>
          <Certificate onViewMore={handleViewMore} />
          <div id="project">
            <Project />
          </div>
          <div id="contact">
            <Contact />
          </div>
          <Footer />
        </>
      ) : (
        <MoreCertificate />
      )}
    </div>
  );
}

export default App;
