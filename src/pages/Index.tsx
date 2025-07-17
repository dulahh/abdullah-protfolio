
import { useEffect, useState } from 'react';
import Navigation from '@/components/Navigation';
import SocialMedia from '@/components/SocialMedia';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import SkillsSection from '@/components/SkillsSection';
import ProjectsSection from '@/components/ProjectsSection';
import ResumeSection from '@/components/ResumeSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  const [scrolled, setScrolled] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercentage = (scrollY / maxScroll) * 100;
      setScrolled(scrollPercentage);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-transparent text-white relative overflow-x-hidden">
      {/* Enhanced Gradient Background */}
      <div className="fixed inset-0 z-0 w-full h-full overflow-hidden">
        <div 
          className="absolute inset-0 flex flex-wrap items-center justify-center gap-16 opacity-3 select-none overflow-hidden" 
          style={{
            transform: `translateY(${scrolled * 0.2}px) rotate(-15deg) scale(${1 + scrolled * 0.003})`,
            transformOrigin: 'center center',
          }}
        >
          {Array(40).fill(null).map((_, i) => (
            <div 
              key={i} 
              className="text-xl md:text-2xl text-white font-light whitespace-nowrap transition-all duration-1000"
              style={{
                opacity: Math.max(0.2, Math.min(1, 1 - (scrolled * 0.003) + Math.sin(i * 0.5) * 0.3)),
                transform: `rotate(${Math.sin((i + scrolled) * 0.1) * 15}deg)`,
                filter: `blur(${Math.abs(Math.sin(i * 0.5)) * 2}px)`,
              }}
            >
              AI Engineer | Machine Learning Specialist
            </div>
          ))}
        </div>
        <img 
          src="/WhatsApp_Image_2025-05-15_at_12.18.42_3ed8cadd-removebg-preview (2).png"
          alt="Background"
          className="absolute w-full h-full transition-all duration-1000 ease-out"
          style={{
            objectFit: 'cover',
            objectPosition: 'center 5%',
            transform: `scale(1.15) translateY(${scrolled * 0.08}px)`,
            filter: 'brightness(1.05) contrast(1.05)',
            willChange: 'transform'
          }}
        />
        <div 
          className="absolute inset-0 w-full h-full transition-opacity duration-500"
          style={{
            background: `linear-gradient(to bottom, 
              rgba(0,0,0,0) 0%,
              rgba(0,0,0,0) 15%,
              rgba(0,0,0,${0.4 + scrolled * 0.002}) ${40 + scrolled * 0.2}%, 
              rgba(0,0,0,${0.7 + scrolled * 0.002}) ${70 + scrolled * 0.1}%, 
              rgba(0,0,0,${0.9 + scrolled * 0.001}) 100%
            )`
          }}
        ></div>
        <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-black/20 via-transparent to-black/20"></div>
        <div className="absolute inset-0 w-full h-full bg-black/5"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gray-700/5 rounded-full blur-3xl animate-pulse-glow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gray-600/5 rounded-full blur-3xl animate-pulse-glow"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-gray-700/5 rounded-full blur-3xl"></div>
      </div>
      
      {/* Navigation */}
      <Navigation />
      
      {/* Social Media */}
      <SocialMedia />
      
      {/* Content */}
      <div className="relative z-10">
        <div id="hero">
          <HeroSection />
        </div>
        <div id="about">
          <AboutSection />
        </div>
        <div id="skills">
          <SkillsSection />
        </div>
        <div id="projects">
          <ProjectsSection />
        </div>
        <div id="resume">
          <ResumeSection />
        </div>
        <div id="contact">
          <ContactSection />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Index;
