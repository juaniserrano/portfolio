import React, { useEffect } from 'react';
import ContactSection from '../components/ContactSection';

export default function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <ContactSection />
    </div>
  );
}
