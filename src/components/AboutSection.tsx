import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const AboutSection = () => {
  const { ref, isVisible } = useScrollAnimation(0.3);

  return (
    <section id="about" className="py-20 px-4 relative bg-transparent min-h-screen">
      <div className="max-w-6xl mx-auto relative z-10">
        <div 
          ref={ref}
          className={`grid md:grid-cols-2 gap-12 items-center transform transition-all duration-1000 ${
            isVisible 
              ? 'translate-x-0 opacity-100 scale-100' 
              : '-translate-x-16 opacity-0 scale-95'
          }`}
        >
          {/* Image Section */}
          <div className={`order-2 md:order-1 transform transition-all duration-1200 delay-200 ${
            isVisible 
              ? 'translate-y-0 opacity-100 rotate-0' 
              : 'translate-y-12 opacity-0 -rotate-3'
          }`}>
            <div className="w-80 h-80 mx-auto bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg border border-gray-700 flex items-center justify-center hover:scale-105 transition-transform duration-300 shadow-lg shadow-black/30">
              <img 
                src="\WhatsApp_Image_2025-05-15_at_12.18.42_3ed8cadd-removebg-preview (2).png"  // Replace this with your image path
                alt="Profile"
                className="w-72 h-72 object-cover rounded-md"
              />
            </div>
          </div>

          {/* Text Section */}
          <div className={`order-1 md:order-2 border-l-2 border-gray-700 pl-8 transform transition-all duration-1000 delay-300 ${
            isVisible 
              ? 'translate-x-0 opacity-100' 
              : 'translate-x-12 opacity-0'
          }`}>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">About Me</h2>
            <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
              <p>
                I'm a passionate AI Engineer dedicated to bridging the gap between cutting-edge 
                research and real-world applications. With a strong foundation in machine learning 
                and deep learning, I specialize in developing intelligent systems that solve 
                complex problems.
              </p>
              <p>
                My journey in artificial intelligence is driven by curiosity and the belief that 
                technology should enhance human capabilities, not replace them. I focus on creating 
                ethical, scalable, and impactful AI solutions.
              </p>
              <p className="text-white font-medium">
                "Engineering the Future with Machine Learning."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
