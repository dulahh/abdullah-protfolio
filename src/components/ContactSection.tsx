
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Github, Linkedin, Mail } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const { ref, isVisible } = useScrollAnimation(0.3);
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section className="py-20 px-4 bg-black">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">
          Get In Touch
        </h2>
        
        <div ref={ref} className="grid md:grid-cols-2 gap-12">
          <div className={`transform transition-all duration-700 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            <h3 className="text-2xl font-semibold text-white mb-6">
              Let's Work Together
            </h3>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              I'm always interested in discussing new opportunities, 
              innovative projects, and collaborations in AI and machine learning.
            </p>
            
            <div className={`flex space-x-6 ${
              isVisible ? 'translate-y-0 opacity-100 delay-300' : 'translate-y-4 opacity-0'
            } transition-all duration-500`}>
              <a 
                href="#" 
                className="text-gray-400 hover:text-white transition-colors duration-300 transform hover:scale-110"
              >
                <Github className="w-8 h-8" />
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-white transition-colors duration-300 transform hover:scale-110"
              >
                <Linkedin className="w-8 h-8" />
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-white transition-colors duration-300 transform hover:scale-110"
              >
                <Mail className="w-8 h-8" />
              </a>
            </div>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className={`transform transition-all duration-500 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`} style={{ transitionDelay: '0.1s' }}>
              <Input
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="bg-card border-gray-700 text-white placeholder-gray-400 focus:border-gray-500"
                required
              />
            </div>
            
            <div className={`transform transition-all duration-500 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`} style={{ transitionDelay: '0.2s' }}>
              <Input
                name="email"
                type="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className="bg-card border-gray-700 text-white placeholder-gray-400 focus:border-gray-500"
                required
              />
            </div>
            
            <div className={`transform transition-all duration-500 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`} style={{ transitionDelay: '0.3s' }}>
              <Textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className="bg-card border-gray-700 text-white placeholder-gray-400 focus:border-gray-500 resize-none"
                required
              />
            </div>
            
            <div className={`transform transition-all duration-500 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`} style={{ transitionDelay: '0.4s' }}>
              <Button 
                type="submit" 
                className="w-full bg-white text-black hover:bg-gray-200 transition-all duration-300 glow-effect"
              >
                Send Message
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
