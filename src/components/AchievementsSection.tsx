
import { Award } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const AchievementsSection = () => {
  const achievements = [
    "IEEE-Web Developer Leader -VIIT (VIIT 2025)",
    "CONSULTADD INC - Hackathon (Consultadd-2025)",
    "Aws-Cloud Architecting (AICTE -2024)",
    "Introduction To Computer Network (Cisco -2024)",
    "Hackathon CodeMent-24 (Runner-Up-2023)",
    "We-For-She Hackeramp (Meesho-2024)",
    "Pragati -Path To Failure (Infosys -2024)"
  ];

  return (
    <section id="achievements" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-yellow-50 via-orange-50 to-red-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold text-center text-gray-900 mb-16 animate-fade-in">Achievements & Certifications</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <Card key={index} className="hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 bg-gradient-to-br from-white to-yellow-50 group">
              <CardContent className="pt-8">
                <div className="flex items-start gap-4">
                  <Award className="w-8 h-8 text-yellow-600 flex-shrink-0 mt-1 group-hover:animate-spin" />
                  <p className="text-gray-700 font-medium group-hover:text-gray-900 transition-colors duration-300">{achievement}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
