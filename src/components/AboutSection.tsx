
import { Mail, Phone, MapPin, Users, Star } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-white to-indigo-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold text-center text-gray-900 mb-16 animate-fade-in">About Me</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="animate-fade-in hover:transform hover:scale-105 transition-all duration-300">
            <h3 className="text-3xl font-semibold text-gray-900 mb-8 bg-gradient-to-r from-indigo-600 to-cyan-600 bg-clip-text text-transparent">Professional Summary</h3>
            <p className="text-gray-600 text-lg leading-relaxed mb-6 hover:text-gray-800 transition-colors duration-300">
              I am an undergraduate student with a solid background in Operating Systems, Cloud Computing, 
              Machine Learning, Data Science and Full Stack, and MERN Stack. Problem solving skill in Java 
              using Data structures and algorithms for creating solutions. Skilled at designing scalable apps 
              that improve user engagement and operational efficiency.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-8 hover:text-gray-800 transition-colors duration-300">
              Acknowledge for using state-of-the-art technologies to boost performance indicators in a variety 
              of projects. Competent in making decisions, and producing significant results. Looking for chances 
              to provide leadership and technical assistance to progressive groups.
            </p>
            <div className="space-y-4">
              {[
                { icon: Mail, text: "manasibharati94@gmail.com", color: "text-red-500" },
                { icon: Phone, text: "+91 8329174703", color: "text-green-500" },
                { icon: MapPin, text: "Pune, Maharashtra", color: "text-blue-500" }
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3 p-3 rounded-lg hover:bg-indigo-50 transition-all duration-300 hover:scale-105 cursor-pointer">
                  <item.icon className={`w-6 h-6 ${item.color}`} />
                  <span className="text-gray-700 font-medium">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-8 animate-fade-in">
            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105">
              <h4 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <Users className="w-6 h-6 text-indigo-600" />
                Soft Skills
              </h4>
              <div className="flex flex-wrap gap-3">
                {["Team Work", "Collaboration", "Leadership", "Decision Making", "Communication"].map((skill) => (
                  <Badge key={skill} variant="secondary" className="px-4 py-2 hover:bg-indigo-100 hover:scale-110 transition-all duration-300 cursor-pointer">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105">
              <h4 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <Star className="w-6 h-6 text-yellow-500" />
                Hobbies
              </h4>
              <div className="flex flex-wrap gap-3">
                {["Cooking", "Cycling", "Badminton"].map((hobby) => (
                  <Badge key={hobby} variant="outline" className="px-4 py-2 hover:bg-yellow-50 hover:border-yellow-300 hover:scale-110 transition-all duration-300 cursor-pointer">
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
