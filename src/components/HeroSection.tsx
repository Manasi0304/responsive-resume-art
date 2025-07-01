
import { ExternalLink, Mail, Star, Code, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface HeroSectionProps {
  onSectionClick: (sectionId: string) => void;
}

const HeroSection = ({ onSectionClick }: HeroSectionProps) => {
  const downloadResume = () => {
    // Create a dummy resume download - in real app, this would be your actual resume file
    const link = document.createElement('a');
    link.href = '/resume.pdf'; // You would place your actual resume file in the public folder
    link.download = 'Manasi_Bharati_Resume.pdf';
    link.click();
  };

  return (
    <section id="home" className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 dark:from-gray-900 dark:via-purple-900/20 dark:to-blue-900/20">
      <div className="max-w-7xl mx-auto w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="flex-1 text-center lg:text-left animate-fade-in">
            <div className="mb-6 animate-bounce">
              <span className="inline-block px-6 py-3 bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 text-purple-800 dark:text-purple-300 rounded-full text-sm font-semibold mb-4 border border-purple-200 dark:border-purple-700">
                Welcome to my Portfolio! 👋
              </span>
            </div>
            <h1 className="text-6xl lg:text-8xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              Full-Stack
              <span className="block bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent animate-pulse">
                Developer
              </span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl leading-relaxed">
              Passionate about creating scalable web applications with expertise in MERN stack, 
              Machine Learning, and Data Science. Experienced in building AI-powered solutions 
              that enhance user engagement and operational efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                onClick={() => onSectionClick('projects')}
                className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 hover:from-purple-700 hover:via-pink-700 hover:to-blue-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl transform hover:-translate-y-1"
              >
                <ExternalLink className="w-5 h-5 mr-2" />
                View My Work
              </Button>
              <Button 
                onClick={downloadResume}
                variant="outline"
                className="border-2 border-purple-300 dark:border-purple-600 hover:border-purple-600 dark:hover:border-purple-400 hover:bg-purple-50 dark:hover:bg-purple-900/20 px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg transform hover:-translate-y-1"
              >
                <Download className="w-5 h-5 mr-2" />
                Download Resume
              </Button>
              <Button 
                variant="outline" 
                onClick={() => onSectionClick('contact')}
                className="border-2 border-pink-300 dark:border-pink-600 hover:border-pink-600 dark:hover:border-pink-400 hover:bg-pink-50 dark:hover:bg-pink-900/20 px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg transform hover:-translate-y-1"
              >
                <Mail className="w-5 h-5 mr-2" />
                Get In Touch
              </Button>
            </div>
          </div>
          <div className="flex-1 flex justify-center lg:justify-end">
            <div className="relative animate-fade-in">
              <div className="w-80 h-80 rounded-full bg-gradient-to-br from-purple-400 via-pink-500 to-blue-500 p-1 animate-pulse hover:scale-105 transition-transform duration-300 shadow-2xl">
                <img 
                  src="/lovable-uploads/924b3ee3-9009-4303-8e33-00129ec50d46.png" 
                  alt="Manasi Bharati" 
                  className="w-full h-full rounded-full object-cover bg-white p-2 hover:rotate-3 transition-transform duration-300"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center animate-bounce hover:animate-spin shadow-lg">
                <Star className="w-12 h-12 text-white" />
              </div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-r from-green-400 to-teal-500 rounded-full flex items-center justify-center animate-pulse shadow-lg">
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
