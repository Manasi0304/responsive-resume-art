
import { ExternalLink } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const ProjectsSection = () => {
  const projects = [
    {
      title: "AcademiaFlow",
      description: "Web Application with PHP, MySQL, HTML, CSS, JS",
      details: "The platform improves scalability, availability, and user interaction through the use of HTML, CSS, PHP, and local databases. PhpMyAdmin and XAMPP ERP System For College Admin and Student.",
      duration: "Feb2024 - May 2024",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      technologies: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"]
    },
    {
      title: "My-Health Hero",
      description: "Hackathon Web Application with Python, Flask, MongoDB, ML, API's, AI",
      details: "Mental health and wellness platform that uses blockchain, machine learning, and community support to provide holistic care. Individualized therapy, proactive detection, improves user's mental health assistance by 40%.",
      duration: "Apr2024 - Apr 2024",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
      technologies: ["Python", "Flask", "MongoDB", "Machine Learning", "AI"]
    },
    {
      title: "Proposal-Pilot",
      description: "MERN Stack, FAST & REST API's, RAG, Gen-AI Web Application",
      details: "ProposalPilot is an AI-powered web platform that simplifies the process of responding to complex Requests for Proposals (RFPs). System automatically compares RFP documents against proposal responses, identifies compliance gaps, and provides actionable insights. RAG and statistical data are used in the Proposal-Pilot with 94% accuracy rate using Python tools.",
      duration: "Mar2025 - April 2025",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
      technologies: ["MERN Stack", "REST APIs", "RAG", "Gen-AI", "Python"]
    },
    {
      title: "EDUVERSE",
      description: "Flask, API's, AI, Data Visualization Web Application",
      details: "94% accuracy rate, Dashboard for visualizing courses based on student performance Student profiles with performance metrics Analysis of grades, attendance, and behavior Generation of performance reports, Chatbot, Book Recommendation Career Opportunity Recommendation.",
      duration: "Mar 2024 - Apr 2024",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
      technologies: ["Flask", "APIs", "AI", "Data Visualization", "Python"]
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 via-indigo-50 to-cyan-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold text-center text-gray-900 mb-16 animate-fade-in">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <Card key={index} className="hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-3 overflow-hidden bg-white group">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent group-hover:from-black/80 transition-all duration-300"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="text-sm font-medium bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">{project.duration}</p>
                </div>
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <ExternalLink className="w-8 h-8 text-white hover:text-cyan-300 cursor-pointer animate-bounce" />
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-2xl font-semibold text-gray-900 flex items-center justify-between group-hover:text-indigo-600 transition-colors duration-300">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-indigo-600 font-medium group-hover:text-indigo-800 transition-colors duration-300">{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 text-sm mb-6 leading-relaxed group-hover:text-gray-900 transition-colors duration-300">{project.details}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="outline" className="px-3 py-1 text-xs hover:bg-indigo-100 hover:border-indigo-300 hover:scale-110 transition-all duration-300 cursor-pointer">
                      {tech}
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

export default ProjectsSection;
