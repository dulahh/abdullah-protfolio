
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';
import { useTypewriter } from '@/hooks/useTypewriter';

const HeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const typedText = useTypewriter('AI Engineer | Machine Learning Specialist', 100, 1000);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 relative">
      <div className={`text-center transform transition-all duration-800 ${
        isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
      }`}>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
          Muhammad Abdullah Majid
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-2 font-light h-8">
          {typedText}<span className="animate-blink">|</span>
        </p>
        <p className="text-lg md:text-xl text-gray-400 mb-12 font-light">
          Turning Intelligence Into Impact — One Algorithm at a Time
        </p>
        
        <Button 
          onClick={scrollToAbout}
          variant="outline" 
          size="lg"
          className={`border-gray-600 text-white hover:bg-white hover:text-black transition-all duration-300 transform ${
            isLoaded ? 'translate-y-0 opacity-100 delay-300' : 'translate-y-10 opacity-0'
          } glow-effect`}
        >
          View Work
        </Button>
      </div>
      
      <div className={`absolute bottom-8 animate-bounce ${
        isLoaded ? 'opacity-100 delay-500' : 'opacity-0'
      } transition-opacity duration-500`}>
        <ChevronDown className="text-gray-400 w-6 h-6" />
      </div>
    </section>
  );
};

export default HeroSection;
