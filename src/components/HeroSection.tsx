
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
    <section id="home" className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center bg-gradient-to-br from-slate-50 via-violet-50 to-cyan-50 dark:from-slate-900 dark:via-violet-950 dark:to-slate-900">
      <div className="max-w-7xl mx-auto w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="flex-1 text-center lg:text-left animate-fade-in">
            <div className="mb-6 animate-float">
              <span className="inline-block px-6 py-3 bg-gradient-to-r from-violet-100 to-cyan-100 dark:from-violet-900/30 dark:to-cyan-900/30 text-violet-800 dark:text-violet-300 rounded-full text-sm font-semibold mb-4 border border-violet-200 dark:border-violet-700 hover:scale-105 transition-transform duration-300">
                Welcome to my Portfolio! 👋
              </span>
            </div>
            <h1 className="text-6xl lg:text-8xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">
              Full-Stack
              <span className="block bg-gradient-to-r from-violet-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent animate-gradient">
                Developer
              </span>
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300 mb-8 max-w-2xl leading-relaxed">
              Passionate about creating scalable web applications with expertise in MERN stack, 
              Machine Learning, and Data Science. Experienced in building AI-powered solutions 
              that enhance user engagement and operational efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                onClick={() => onSectionClick('projects')}
                className="bg-gradient-to-r from-violet-600 via-purple-600 to-cyan-600 hover:from-violet-700 hover:via-purple-700 hover:to-cyan-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl transform hover:-translate-y-1 animate-glow"
              >
                <ExternalLink className="w-5 h-5 mr-2" />
                View My Work
              </Button>
              <Button 
                onClick={downloadResume}
                variant="outline"
                className="border-2 border-violet-300 dark:border-violet-600 hover:border-violet-600 dark:hover:border-violet-400 hover:bg-violet-50 dark:hover:bg-violet-900/20 px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg transform hover:-translate-y-1"
              >
                <Download className="w-5 h-5 mr-2" />
                Download Resume
              </Button>
              <Button 
                variant="outline" 
                onClick={() => onSectionClick('contact')}
                className="border-2 border-cyan-300 dark:border-cyan-600 hover:border-cyan-600 dark:hover:border-cyan-400 hover:bg-cyan-50 dark:hover:bg-cyan-900/20 px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg transform hover:-translate-y-1"
              >
                <Mail className="w-5 h-5 mr-2" />
                Get In Touch
              </Button>
            </div>
          </div>
          <div className="flex-1 flex justify-center lg:justify-end">
            <div className="relative animate-fade-in">
              <div className="w-80 h-80 rounded-full bg-gradient-to-br from-violet-400 via-purple-500 to-cyan-500 p-1 animate-float hover:scale-105 transition-transform duration-300 shadow-2xl animate-glow">
                <img 
                  src="/lovable-uploads/924b3ee3-9009-4303-8e33-00129ec50d46.png" 
                  alt="Manasi Bharati" 
                  className="w-full h-full rounded-full object-cover bg-white dark:bg-slate-800 p-2 hover:rotate-3 transition-transform duration-300"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center animate-bounce hover:animate-spin shadow-lg">
                <Star className="w-12 h-12 text-white" />
              </div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-full flex items-center justify-center animate-pulse shadow-lg">
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
