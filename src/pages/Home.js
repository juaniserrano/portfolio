import React, { useEffect } from 'react';
import AboutSection from '../components/AboutSection';
import ContactBanner from '../components/ContactBanner';
import ProjectsSection from '../components/ProjectsSection.js';
import ServicesSection from '../components/ServicesSection';

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <AboutSection />
      <ServicesSection />
      <ContactBanner />
      <ProjectsSection />
    </div>
  );
}
