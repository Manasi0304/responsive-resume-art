
import { Card, CardContent } from '@/components/ui/card';

const EducationSection = () => {
  const education = [
    {
      degree: "B.Tech",
      institution: "Vishwakarma Institute of Information Technology, Pune",
      duration: "Sept 2023 to June 2026",
      grade: "CGPA: 8.57"
    },
    {
      degree: "Diploma in Information Technology",
      institution: "Government Polytechnic Aurangabad",
      duration: "Dec 2020 to June 2023",
      grade: "88%"
    },
    {
      degree: "SSC (10th)",
      institution: "Late D.M.V. Ghanasawangi, Jalna",
      duration: "June 2020",
      grade: "93.40%"
    }
  ];

  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold text-center text-gray-900 mb-16 animate-fade-in">Education</h2>
        <div className="space-y-8">
          {education.map((edu, index) => (
            <Card key={index} className="hover:shadow-2xl transition-all duration-500 hover:scale-105 bg-gradient-to-r from-white to-indigo-50 border-l-4 border-green-500 hover:border-l-8">
              <CardContent className="pt-8">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold text-gray-900 hover:text-indigo-600 transition-colors duration-300">{edu.degree}</h3>
                    <p className="text-indigo-600 font-medium text-lg hover:text-indigo-800 transition-colors duration-300">{edu.institution}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-gray-600 mb-2 bg-gray-100 px-4 py-2 rounded-full hover:bg-indigo-100 transition-colors duration-300">{edu.duration}</p>
                    <p className="text-green-600 font-bold text-xl bg-green-100 px-4 py-2 rounded-full hover:bg-green-200 transition-colors duration-300">{edu.grade}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
