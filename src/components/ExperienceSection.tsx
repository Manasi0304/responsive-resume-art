
import { Calendar } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const ExperienceSection = () => {
  const experience = [
    {
      company: "L&D Infotech Pvt. Ltd. Pune",
      role: "Full-Stack Web Developer",
      duration: "Oct 2023 - Apr 2024",
      achievements: [
        "AI-based roommate matching feature, enhancing user engagement by 30% through lifestyle and preference-based suggestions",
        "MERN stack platform with JWT authentication, enabling PG owner listings and 100+ user searches with advanced filters",
        "Ensured compatibility across devices and browsers, which led to a 25% increase in user engagement and Team Leadership"
      ]
    },
    {
      company: "Natraj services aurangabad",
      role: "Web Developer Intern",
      duration: "Mar 2022 - Apr 2023",
      achievements: [
        "90% of my Full Stack Web Development is experienced and Leveraged my skills and Proficiency",
        "Increased the website's loading speed by 40% and achieved 95% uptime, allowing for a more effective and satisfying user experience"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold text-center text-gray-900 mb-16 animate-fade-in">Professional Experience</h2>
        <div className="space-y-12">
          {experience.map((exp, index) => (
            <Card key={index} className="hover:shadow-2xl transition-all duration-500 hover:scale-105 bg-gradient-to-r from-white to-indigo-50 border-l-4 border-indigo-500 hover:border-l-8">
              <CardHeader>
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                  <div>
                    <CardTitle className="text-2xl font-semibold text-gray-900 hover:text-indigo-600 transition-colors duration-300">{exp.role}</CardTitle>
                    <CardDescription className="text-lg text-indigo-600 font-medium hover:text-indigo-800 transition-colors duration-300">{exp.company}</CardDescription>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600 bg-indigo-100 px-4 py-2 rounded-full hover:bg-indigo-200 transition-colors duration-300">
                    <Calendar className="w-5 h-5" />
                    <span>{exp.duration}</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  {exp.achievements.map((achievement, idx) => (
                    <li key={idx} className="flex items-start gap-4 p-3 rounded-lg hover:bg-indigo-50 transition-all duration-300 hover:scale-105">
                      <div className="w-3 h-3 bg-gradient-to-r from-indigo-600 to-cyan-600 rounded-full mt-2 flex-shrink-0 animate-pulse"></div>
                      <span className="text-gray-700 hover:text-gray-900 transition-colors duration-300">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
