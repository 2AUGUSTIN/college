import  { useEffect } from 'react';
import Hero from '../components/Hero';
import AboutSection from '../components/AboutSection';
import ProgramsSection from '../components/ProgramsSection';
import IncubatorSection from '../components/IncubatorSection';
import PartnersSection from '../components/PartnersSection';
import ContactSection from '../components/ContactSection';

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main>
      <Hero />
      <AboutSection />
      <ProgramsSection />
      <IncubatorSection />
      <PartnersSection />
      <ContactSection />
    </main>
  );
};

export default Home;
  