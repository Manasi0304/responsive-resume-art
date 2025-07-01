
import { Code, Database, Monitor, Zap } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const SkillsSection = () => {
  const skills = {
    "Programming Languages": ["Java", "Python", "C", "C++", "C#", "PHP", "HTML", "CSS", "JavaScript", "SQL"],
    "Frameworks & Libraries": ["Flask", "React", "Node.js", "Express", "Bootstrap"],
    "Tools & Technologies": ["Git/GitHub", "MongoDB", "MySQL", "Oracle", "Postman", "VS Code", "PyCharm", "JIRA"],
    "Specializations": ["Web Development", "Data Science", "Product Lifecycle Management", "Gen-AI", "Machine Learning"]
  };

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-indigo-100 via-purple-50 to-cyan-100">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold text-center text-gray-900 mb-16 animate-fade-in">Technical Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {Object.entries(skills).map(([category, skillList], index) => (
            <Card key={category} className="hover:shadow-2xl transition-all duration-500 animate-fade-in hover:scale-105 hover:-translate-y-2 bg-gradient-to-br from-white to-indigo-50 border-2 border-transparent hover:border-indigo-200">
              <CardHeader>
                <CardTitle className="text-lg font-semibold text-gray-900 flex items-center gap-3">
                  {index === 0 && <Code className="w-6 h-6 text-indigo-600 animate-bounce" />}
                  {index === 1 && <Zap className="w-6 h-6 text-purple-600 animate-pulse" />}
                  {index === 2 && <Database className="w-6 h-6 text-green-600 animate-spin" />}
                  {index === 3 && <Monitor className="w-6 h-6 text-orange-600 animate-bounce" />}
                  {category}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skillList.map((skill) => (
                    <Badge key={skill} variant="secondary" className="px-3 py-1 text-sm hover:bg-indigo-100 hover:scale-110 transition-all duration-300 cursor-pointer">
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
