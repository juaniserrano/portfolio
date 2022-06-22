import React from 'react';
import AboutSection from '../components/AboutSection';
import ContactBanner from '../components/ContactBanner';
import Footer from '../components/Footer';
import ServiceSection from '../components/ServiceSection.js';

export default function Home() {
  return (
    <div>
      <AboutSection />
      <ServiceSection />
      <ContactBanner />
      <Footer />
    </div>
  );
}
