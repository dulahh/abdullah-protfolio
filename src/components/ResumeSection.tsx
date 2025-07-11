
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ResumeSection = () => {
  const { ref, isVisible } = useScrollAnimation(0.4);

  return (
    <section className="py-20 px-4 bg-black text-white relative">
      {/* Enhanced Gradient Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-800"></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-black via-gray-900/50 to-black opacity-80"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gray-700/20 rounded-full blur-3xl animate-pulse-glow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gray-600/15 rounded-full blur-3xl animate-pulse-glow"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-gray-800/10 to-transparent rounded-full blur-2xl"></div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-gray-500/10 rounded-full blur-2xl"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-gray-700/15 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div
          ref={ref}
          className={`transform transition-all duration-1000 ${
            isVisible 
              ? 'scale-100 opacity-100 translate-y-0 rotate-0' 
              : 'scale-90 opacity-0 translate-y-12 rotate-3'
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
            className={`bg-white text-black hover:bg-gray-200 transition-all duration-500 transform hover:scale-110 hover:-translate-y-1 glow-effect ${
              isVisible 
                ? 'translate-y-0 opacity-100 delay-300 rotate-0' 
                : 'translate-y-8 opacity-0 -rotate-6'
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
