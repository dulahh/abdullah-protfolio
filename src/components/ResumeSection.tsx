
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ResumeSection = () => {
  const { ref, isVisible } = useScrollAnimation(0.4);

  return (
    <section className="py-20 px-4 bg-black">
      <div className="max-w-4xl mx-auto text-center">
        <div
          ref={ref}
          className={`transform transition-all duration-800 ${
            isVisible 
              ? 'scale-100 opacity-100' 
              : 'scale-95 opacity-0'
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
            Resume
          </h2>
          
          <p className="text-gray-300 text-lg mb-12 max-w-2xl mx-auto">
            Download my complete resume to learn more about my experience, 
            education, and technical expertise in AI and machine learning.
          </p>
          
          <Button
            size="lg"
            className={`bg-white text-black hover:bg-gray-200 transition-all duration-300 transform hover:scale-105 glow-effect ${
              isVisible 
                ? 'translate-y-0 opacity-100 delay-200' 
                : 'translate-y-4 opacity-0'
            }`}
          >
            <Download className="w-5 h-5 mr-2" />
            Download Resume
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;
