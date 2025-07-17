
import { Github, Linkedin, Mail, Twitter, Instagram } from 'lucide-react';

const SocialMedia = () => {
  const socialLinks = [
    {
      name: 'GitHub',
      icon: Github,
      href: 'https://github.com/dulahh',
      color: 'hover:text-white hover:bg-gray-800'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/muhammad-abdullah-majid-bb229826b/',
      color: 'hover:text-blue-400 hover:bg-blue-400/10'
    },
    {
      name: 'Twitter',
      icon: Twitter,
      href: 'https://x.com/Abdulla23549481',
      color: 'hover:text-sky-400 hover:bg-sky-400/10'
    },
    {
      name: 'Instagram',
      icon: Instagram,
      href: 'https://www.instagram.com/i_am_abdullah_majid/',
      color: 'hover:text-pink-400 hover:bg-pink-400/10'
    },
    {
      name: 'Email',
      icon: Mail,
      href: 'mailto:abdullah12151218@gmail.com',
      color: 'hover:text-green-400 hover:bg-green-400/10'
    }
  ];

  return (
    <div className="fixed left-4 top-1/2 transform -translate-y-1/2 z-40 block">
      <div className="flex flex-col space-y-3 md:space-y-4">
        {socialLinks.map((social, index) => {
          const Icon = social.icon;
          return (
            <a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`
                group relative p-2 md:p-3 text-gray-400 transition-all duration-300 transform
                hover:scale-110 rounded-full border border-gray-700/50
                backdrop-blur-sm bg-black/30 ${social.color}
                animate-fade-in-left animate-stagger-${index + 1}
              `}
              title={social.name}
            >
              <Icon className="w-4 h-4 md:w-5 md:h-5 transition-transform duration-300 group-hover:rotate-12" />
              
              {/* Tooltip - Only show on larger screens */}
              <div className="absolute left-full ml-3 top-1/2 transform -translate-y-1/2 
                            opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none
                            hidden md:block">
                <div className="bg-gray-900 text-white text-sm px-2 py-1 rounded-md whitespace-nowrap border border-gray-700">
                  {social.name}
                  <div className="absolute right-full top-1/2 transform -translate-y-1/2 
                                border-4 border-transparent border-r-gray-900"></div>
                </div>
              </div>
              
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-20 
                            transition-opacity duration-300 blur-sm bg-current"></div>
            </a>
          );
        })}
        
        {/* Decorative line */}
        <div className="w-px h-16 md:h-20 bg-gradient-to-b from-gray-600 to-transparent mx-auto mt-2 md:mt-4"></div>
      </div>
    </div>
  );
};

export default SocialMedia;
