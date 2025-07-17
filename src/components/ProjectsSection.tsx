
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ProjectsSection = () => {
  const { ref, isVisible } = useScrollAnimation(0.2);

  const projects = [
    {
      title: "AI-Powered CV Analysis",
      description: "Developed a comprehensive document processing system using NLP and computer vision to extract, classify, and analyze information from various document types.",
      tech: ["Python", "TensorFlow", "OpenCV", "FastAPI","OpenAI SDK"],
      
    },
    {
    title: "AI Workspace Assistant Chatbot",
    description: "Developed a multi-functional AI chatbot for workspace management using LangChain Agents. Enabled users to search room details, book spaces, check pricing, and get instant support via natural language. Integrated multiple tools for real-time data access and intelligent responses.",
    tech: ["LangChain", "OpenAI SDK", "FastAPI", "React", "Tailwind CSS"]
    },
    {
      title: "Intelligent Hospital Management System",
      description: "Built an AI-powered system for managing patient data, doctor assignments, and disease-based analytics. Included an admin dashboard with real-time graphs, automated suggestions for staff/equipment, and a chatbot for smart assistance.",
      tech: ["TensorFlow", "MongoDB", "OpenAI SDK","NumPy", "Pandas", "React"],
      
    },
    {
      title: "Computer Vision Pipeline",
      description: "Created an end-to-end computer vision solution for real-time object detection and tracking with optimized performance for edge devices.",
      tech: ["OpenCV", "TensorFlow", "Docker", "FastAPI","OpenAI SDK"],
      
    }
  ];

  return (
    <section className="py-20 px-4 relative bg-transparent">
      <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/60 to-black/30"></div>
      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className={`text-3xl md:text-4xl font-bold text-white text-center mb-16 transform transition-all duration-800 ${
          isVisible 
            ? 'translate-y-0 opacity-100 scale-100' 
            : 'translate-y-12 opacity-0 scale-95'
        }`}>
          Featured Projects
        </h2>
        
        <div ref={ref} className="space-y-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`bg-card border border-gray-700 rounded-lg p-8 transition-all duration-1000 hover:scale-[1.02] hover:border-gray-500 hover:-translate-y-1 glow-effect ${
                isVisible 
                  ? 'translate-x-0 opacity-100 rotate-0' 
                  : index % 2 === 0 
                    ? '-translate-x-16 opacity-0 -rotate-1' 
                    : 'translate-x-16 opacity-0 rotate-1'
              }`}
              style={{ 
                transitionDelay: isVisible ? `${index * 0.2}s` : '0s'
              }}
            >
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
                <h3 className="text-2xl font-bold text-white mb-2 md:mb-0">
                  {project.title}
                </h3>
                
              </div>
              
              <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, techIndex) => (
                  <span 
                    key={tech}
                    className={`px-3 py-1 bg-gray-800 text-gray-300 text-sm rounded-full border border-gray-700 hover:scale-105 transition-all duration-300 ${
                      isVisible 
                        ? 'translate-y-0 opacity-100' 
                        : 'translate-y-4 opacity-0'
                    }`}
                    style={{ 
                      transitionDelay: isVisible ? `${(index * 0.2) + (techIndex * 0.1)}s` : '0s'
                    }}
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
