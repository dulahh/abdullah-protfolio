
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ProjectsSection = () => {
  const { ref, isVisible } = useScrollAnimation(0.2);

  const projects = [
    {
      title: "AI-Powered Document Analysis",
      description: "Developed a comprehensive document processing system using NLP and computer vision to extract, classify, and analyze information from various document types.",
      tech: ["Python", "TensorFlow", "OpenCV", "FastAPI"],
      github: "#",
      demo: "#"
    },
    {
      title: "Smart Recommendation Engine",
      description: "Built a machine learning-based recommendation system with collaborative filtering and content-based approaches for personalized user experiences.",
      tech: ["PyTorch", "MongoDB", "LangChain", "React"],
      github: "#",
      demo: "#"
    },
    {
      title: "Computer Vision Pipeline",
      description: "Created an end-to-end computer vision solution for real-time object detection and tracking with optimized performance for edge devices.",
      tech: ["OpenCV", "TensorFlow", "Docker", "FastAPI"],
      github: "#",
      demo: "#"
    }
  ];

  return (
    <section className="py-20 px-4 bg-black">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">
          Featured Projects
        </h2>
        
        <div ref={ref} className="space-y-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`bg-card border border-gray-700 rounded-lg p-8 transition-all duration-700 hover:scale-[1.02] hover:border-gray-500 glow-effect ${
                isVisible 
                  ? 'translate-y-0 opacity-100' 
                  : 'translate-y-12 opacity-0'
              }`}
              style={{ 
                animationDelay: isVisible ? `${index * 0.2}s` : '0s',
                transitionDelay: `${index * 0.1}s`
              }}
            >
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
                <h3 className="text-2xl font-bold text-white mb-2 md:mb-0">
                  {project.title}
                </h3>
                <div className="flex space-x-3">
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="border-gray-600 text-gray-300 hover:text-white"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="border-gray-600 text-gray-300 hover:text-white"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Demo
                  </Button>
                </div>
              </div>
              
              <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span 
                    key={tech}
                    className="px-3 py-1 bg-gray-800 text-gray-300 text-sm rounded-full border border-gray-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
