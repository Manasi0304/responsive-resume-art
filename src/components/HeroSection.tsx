
import { ExternalLink, Mail, Star, Code } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface HeroSectionProps {
  onSectionClick: (sectionId: string) => void;
}

const HeroSection = ({ onSectionClick }: HeroSectionProps) => {
  return (
    <section id="home" className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="flex-1 text-center lg:text-left animate-fade-in">
            <div className="mb-6 animate-bounce">
              <span className="inline-block px-4 py-2 bg-gradient-to-r from-indigo-100 to-cyan-100 text-indigo-800 rounded-full text-sm font-semibold mb-4">
                Welcome to my Portfolio! 👋
              </span>
            </div>
            <h1 className="text-6xl lg:text-8xl font-bold text-gray-900 mb-6 leading-tight">
              Full-Stack
              <span className="block bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent animate-pulse">
                Developer
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl leading-relaxed">
              Passionate about creating scalable web applications with expertise in MERN stack, 
              Machine Learning, and Data Science. Experienced in building AI-powered solutions 
              that enhance user engagement and operational efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                onClick={() => onSectionClick('projects')}
                className="bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-600 hover:from-indigo-700 hover:via-purple-700 hover:to-cyan-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl transform hover:-translate-y-1"
              >
                <ExternalLink className="w-5 h-5 mr-2" />
                View My Work
              </Button>
              <Button 
                variant="outline" 
                onClick={() => onSectionClick('contact')}
                className="border-2 border-indigo-300 hover:border-indigo-600 hover:bg-indigo-50 px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg transform hover:-translate-y-1"
              >
                <Mail className="w-5 h-5 mr-2" />
                Get In Touch
              </Button>
            </div>
          </div>
          <div className="flex-1 flex justify-center lg:justify-end">
            <div className="relative animate-fade-in">
              <div className="w-80 h-80 rounded-full bg-gradient-to-br from-indigo-400 via-purple-500 to-cyan-500 p-1 animate-pulse hover:scale-105 transition-transform duration-300">
                <img 
                  src="/lovable-uploads/924b3ee3-9009-4303-8e33-00129ec50d46.png" 
                  alt="Manasi Bharati" 
                  className="w-full h-full rounded-full object-cover bg-white p-2 hover:rotate-3 transition-transform duration-300"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center animate-bounce hover:animate-spin">
                <Star className="w-12 h-12 text-white" />
              </div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center animate-pulse">
                <Code className="w-8 h-8 text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
