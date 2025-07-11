
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Code, Database, Brain, Github, Globe, Cpu, Zap, BookOpen } from 'lucide-react';

const SkillsSection = () => {
  const { ref, isVisible } = useScrollAnimation(0.2);

  const skills = [
    { name: 'Python', icon: Code, category: 'Programming' },
    { name: 'TensorFlow', icon: Brain, category: 'ML Framework' },
    { name: 'PyTorch', icon: Zap, category: 'ML Framework' },
    { name: 'OpenCV', icon: Globe, category: 'Computer Vision' },
    { name: 'FastAPI', icon: Cpu, category: 'Backend' },
    { name: 'LangChain', icon: BookOpen, category: 'LLM' },
    { name: 'MongoDB', icon: Database, category: 'Database' },
    { name: 'GitHub', icon: Github, category: 'Version Control' },
  ];

  return (
    <section className="py-20 px-4 bg-black">
      <div className="max-w-6xl mx-auto">
        <h2 className={`text-3xl md:text-4xl font-bold text-white text-center mb-16 transform transition-all duration-800 ${
          isVisible 
            ? 'translate-y-0 opacity-100' 
            : '-translate-y-8 opacity-0'
        }`}>
          Technical Skills
        </h2>
        
        <div 
          ref={ref}
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className={`bg-card border border-gray-700 rounded-lg p-6 text-center transition-all duration-700 hover:scale-110 hover:border-gray-500 hover:-translate-y-2 glow-effect ${
                isVisible 
                  ? 'opacity-100 scale-100 translate-y-0 rotate-0' 
                  : 'opacity-0 scale-75 translate-y-8 -rotate-12'
              }`}
              style={{ 
                transitionDelay: isVisible ? `${index * 0.1}s` : '0s'
              }}
            >
              <skill.icon className="w-12 h-12 text-gray-400 mx-auto mb-4 transition-transform duration-300 group-hover:rotate-12" />
              <h3 className="text-white font-semibold text-lg mb-2">{skill.name}</h3>
              <p className="text-gray-400 text-sm">{skill.category}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
