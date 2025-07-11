
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const { ref, isVisible } = useScrollAnimation(0.8);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 px-4 bg-black border-t border-gray-800">
      <div className="max-w-6xl mx-auto">
        <div
          ref={ref}
          className={`flex flex-col md:flex-row justify-between items-center transform transition-all duration-600 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
          }`}
        >
          <p className="text-gray-400 text-center md:text-left mb-4 md:mb-0">
            © 2025 Muhammad Abdullah Majid. All rights reserved.
          </p>
          
          <Button
            onClick={scrollToTop}
            variant="outline"
            size="sm"
            className="border-gray-600 text-gray-400 hover:text-white pulse-glow"
          >
            <ArrowUp className="w-4 h-4 mr-2" />
            Back to Top
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
