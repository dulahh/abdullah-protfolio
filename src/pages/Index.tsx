
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
  return (
    <div className="min-h-screen bg-black text-white relative">
      {/* Enhanced Gradient Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-800"></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-black via-gray-900/50 to-black opacity-80"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gray-700/20 rounded-full blur-3xl animate-pulse-glow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gray-600/15 rounded-full blur-3xl animate-pulse-glow"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-gray-800/10 to-transparent rounded-full blur-2xl"></div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-gray-500/10 rounded-full blur-2xl"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-gray-700/15 rounded-full blur-3xl"></div>
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
