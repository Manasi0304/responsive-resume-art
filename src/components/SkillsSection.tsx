
import { Code, Database, Monitor, Zap, Laptop, Globe, Brain, Wrench } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const SkillsSection = () => {
  const skills = {
    "Programming Languages": {
      icon: <Code className="w-6 h-6 text-purple-600 animate-bounce" />,
      skills: ["Java", "Python", "C", "C++", "C#", "PHP", "HTML", "CSS", "JavaScript", "SQL"]
    },
    "Frameworks & Libraries": {
      icon: <Zap className="w-6 h-6 text-pink-600 animate-pulse" />,
      skills: ["Flask", "React", "Node.js", "Express", "Bootstrap"]
    },
    "Tools & Technologies": {
      icon: <Wrench className="w-6 h-6 text-blue-600 animate-spin" />,
      skills: ["Git/GitHub", "MongoDB", "MySQL", "Oracle", "Postman", "VS Code", "PyCharm", "JIRA"]
    },
    "Specializations": {
      icon: <Brain className="w-6 h-6 text-green-600 animate-bounce" />,
      skills: ["Web Development", "Data Science", "Product Lifecycle Management", "Gen-AI", "Machine Learning"]
    }
  };

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-100 via-pink-50 to-blue-100 dark:from-gray-900 dark:via-purple-900/10 dark:to-blue-900/10">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold text-center text-gray-900 dark:text-white mb-16 animate-fade-in">
          <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
            Technical Skills
          </span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {Object.entries(skills).map(([category, { icon, skills: skillList }], index) => (
            <Card key={category} className="hover:shadow-2xl transition-all duration-500 animate-fade-in hover:scale-105 hover:-translate-y-2 bg-gradient-to-br from-white to-purple-50 dark:from-gray-800 dark:to-purple-900/20 border-2 border-transparent hover:border-purple-200 dark:hover:border-purple-700 group">
              <CardHeader>
                <CardTitle className="text-lg font-semibold text-gray-900 dark:text-white flex items-center gap-3">
                  {icon}
                  {category}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skillList.map((skill) => (
                    <Badge 
                      key={skill} 
                      variant="secondary" 
                      className="px-3 py-1 text-sm hover:bg-gradient-to-r hover:from-purple-100 hover:to-pink-100 dark:hover:from-purple-900/30 dark:hover:to-pink-900/30 hover:scale-110 transition-all duration-300 cursor-pointer border border-purple-200 dark:border-purple-700 hover:border-purple-400 dark:hover:border-purple-500"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
