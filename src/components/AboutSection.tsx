
import { Mail, Phone, MapPin, Users, Star } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-white to-violet-50 dark:from-slate-900 dark:to-violet-950/50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold text-center text-slate-900 dark:text-white mb-16 animate-fade-in">
          <span className="bg-gradient-to-r from-violet-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">
            About Me
          </span>
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="animate-fade-in hover:transform hover:scale-105 transition-all duration-300">
            <h3 className="text-3xl font-semibold text-slate-900 dark:text-white mb-8 bg-gradient-to-r from-violet-600 to-cyan-600 bg-clip-text text-transparent">
              Professional Summary
            </h3>
            <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed mb-6 hover:text-slate-800 dark:hover:text-slate-100 transition-colors duration-300">
              I am an undergraduate student with a solid background in Operating Systems, Cloud Computing, 
              Machine Learning, Data Science and Full Stack, and MERN Stack. Problem solving skill in Java 
              using Data structures and algorithms for creating solutions. Skilled at designing scalable apps 
              that improve user engagement and operational efficiency.
            </p>
            <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed mb-8 hover:text-slate-800 dark:hover:text-slate-100 transition-colors duration-300">
              Acknowledge for using state-of-the-art technologies to boost performance indicators in a variety 
              of projects. Competent in making decisions, and producing significant results. Looking for chances 
              to provide leadership and technical assistance to progressive groups.
            </p>
            <div className="space-y-4">
              {[
                { icon: Mail, text: "manasibharati94@gmail.com", color: "text-red-500" },
                { icon: Phone, text: "+91 8329174703", color: "text-emerald-500" },
                { icon: MapPin, text: "Pune, Maharashtra", color: "text-blue-500" }
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3 p-3 rounded-lg hover:bg-violet-50 dark:hover:bg-violet-900/20 transition-all duration-300 hover:scale-105 cursor-pointer group">
                  <item.icon className={`w-6 h-6 ${item.color} group-hover:animate-bounce`} />
                  <span className="text-slate-700 dark:text-slate-300 font-medium">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-8 animate-fade-in">
            <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-violet-100 dark:border-violet-800">
              <h4 className="text-xl font-semibold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                <Users className="w-6 h-6 text-violet-600" />
                Soft Skills
              </h4>
              <div className="flex flex-wrap gap-3">
                {["Team Work", "Collaboration", "Leadership", "Decision Making", "Communication"].map((skill) => (
                  <Badge key={skill} variant="secondary" className="px-4 py-2 hover:bg-violet-100 dark:hover:bg-violet-900/30 hover:scale-110 transition-all duration-300 cursor-pointer border border-violet-200 dark:border-violet-700">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
            <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-violet-100 dark:border-violet-800">
              <h4 className="text-xl font-semibold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                <Star className="w-6 h-6 text-yellow-500" />
                Hobbies
              </h4>
              <div className="flex flex-wrap gap-3">
                {["Cooking", "Cycling", "Badminton"].map((hobby) => (
                  <Badge key={hobby} variant="outline" className="px-4 py-2 hover:bg-yellow-50 dark:hover:bg-yellow-900/20 hover:border-yellow-300 dark:hover:border-yellow-600 hover:scale-110 transition-all duration-300 cursor-pointer">
                    {hobby}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
