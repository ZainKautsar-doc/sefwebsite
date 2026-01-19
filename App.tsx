
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Documentation from './components/Documentation';
import SpeedInsightsGuide from './components/SpeedInsightsGuide';
import Review from './components/Review';
import Volunteer from './components/Volunteer';
import Footer from './components/Footer';
import Feedback from './components/Feedback';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'documentation', 'speedinsights', 'review', 'feedback', 'volunteer'];
      const scrollPosition = window.scrollY + 150;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col selection:bg-blue-500 selection:text-white">
      <Navbar activeSection={activeSection} />
      <main className="flex-grow">
        <section id="home">
          <Hero />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="documentation">
          <Documentation />
        </section>
        <section id="speedinsights">
          <SpeedInsightsGuide />
        </section>
        <section id="review">
          <Review />
        </section>
        <section id="feedback">
          <Feedback />
        </section>
        <section id="volunteer">
          <Volunteer />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default App;
