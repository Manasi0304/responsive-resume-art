
import { useState } from 'react';
import { Mail, Phone, Github, Linkedin, ExternalLink, MapPin, Calendar, Award, Code, Database, Monitor, Users, Star, Zap } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const skills = {
    "Programming Languages": ["Java", "Python", "C", "C++", "C#", "PHP", "HTML", "CSS", "JavaScript", "SQL"],
    "Frameworks & Libraries": ["Flask", "React", "Node.js", "Express", "Bootstrap"],
    "Tools & Technologies": ["Git/GitHub", "MongoDB", "MySQL", "Oracle", "Postman", "VS Code", "PyCharm", "JIRA"],
    "Specializations": ["Web Development", "Data Science", "Product Lifecycle Management", "Gen-AI", "Machine Learning"]
  };

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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Manasi Bharati
            </div>
            <div className="hidden md:flex space-x-8">
              {['Home', 'About', 'Skills', 'Experience', 'Projects', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => setActiveSection(item.toLowerCase())}
                  className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="flex-1 text-center lg:text-left">
              <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 mb-6 animate-fade-in">
                Full-Stack
                <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Developer
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl animate-fade-in">
                Passionate about creating scalable web applications with expertise in MERN stack, 
                Machine Learning, and Data Science. Experienced in building AI-powered solutions 
                that enhance user engagement and operational efficiency.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in">
                <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200 hover:scale-105">
                  View My Work
                </Button>
                <Button variant="outline" className="border-2 border-gray-300 hover:border-blue-600 px-8 py-3 rounded-lg font-semibold transition-all duration-200 hover:scale-105">
                  Download Resume
                </Button>
              </div>
            </div>
            <div className="flex-1 flex justify-center lg:justify-end">
              <div className="relative">
                <div className="w-80 h-80 rounded-full bg-gradient-to-br from-blue-400 to-purple-600 p-1 animate-fade-in">
                  <img 
                    src="/lovable-uploads/924b3ee3-9009-4303-8e33-00129ec50d46.png" 
                    alt="Manasi Bharati" 
                    className="w-full h-full rounded-full object-cover bg-white p-2"
                  />
                </div>
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-yellow-400 rounded-full flex items-center justify-center animate-pulse">
                  <Star className="w-12 h-12 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">About Me</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Professional Summary</h3>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                I am an undergraduate student with a solid background in Operating Systems, Cloud Computing, 
                Machine Learning, Data Science and Full Stack, and MERN Stack. Problem solving skill in Java 
                using Data structures and algorithms for creating solutions. Skilled at designing scalable apps 
                that improve user engagement and operational efficiency.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Acknowledge for using state-of-the-art technologies to boost performance indicators in a variety 
                of projects. Competent in making decisions, and producing significant results. Looking for chances 
                to provide leadership and technical assistance to progressive groups.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2">
                  <Mail className="w-5 h-5 text-blue-600" />
                  <span className="text-gray-700">manasibharati94@gmail.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-5 h-5 text-blue-600" />
                  <span className="text-gray-700">+91 8329174703</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-blue-600" />
                  <span className="text-gray-700">Pune, Maharashtra</span>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Soft Skills</h4>
                <div className="flex flex-wrap gap-2">
                  {["Team Work", "Collaboration", "Leadership", "Decision Making", "Communication"].map((skill) => (
                    <Badge key={skill} variant="secondary" className="px-3 py-1">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Hobbies</h4>
                <div className="flex flex-wrap gap-2">
                  {["Cooking", "Cycling", "Badminton"].map((hobby) => (
                    <Badge key={hobby} variant="outline" className="px-3 py-1">
                      {hobby}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Technical Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {Object.entries(skills).map(([category, skillList], index) => (
              <Card key={category} className="hover:shadow-lg transition-shadow duration-300 animate-fade-in">
                <CardHeader>
                  <CardTitle className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                    {index === 0 && <Code className="w-5 h-5 text-blue-600" />}
                    {index === 1 && <Zap className="w-5 h-5 text-purple-600" />}
                    {index === 2 && <Database className="w-5 h-5 text-green-600" />}
                    {index === 3 && <Monitor className="w-5 h-5 text-orange-600" />}
                    {category}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skillList.map((skill) => (
                      <Badge key={skill} variant="secondary" className="px-2 py-1 text-sm">
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

      {/* Experience Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Professional Experience</h2>
          <div className="space-y-8">
            {experience.map((exp, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                    <div>
                      <CardTitle className="text-xl font-semibold text-gray-900">{exp.role}</CardTitle>
                      <CardDescription className="text-lg text-blue-600 font-medium">{exp.company}</CardDescription>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Calendar className="w-4 h-4" />
                      <span>{exp.duration}</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {exp.achievements.map((achievement, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:scale-105 overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="text-sm font-medium">{project.duration}</p>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-gray-900 flex items-center justify-between">
                    {project.title}
                    <ExternalLink className="w-5 h-5 text-blue-600 hover:text-blue-800 cursor-pointer" />
                  </CardTitle>
                  <CardDescription className="text-blue-600 font-medium">{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 text-sm mb-4">{project.details}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="outline" className="px-2 py-1 text-xs">
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

      {/* Education Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Education</h2>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="pt-6">
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900">{edu.degree}</h3>
                      <p className="text-blue-600 font-medium">{edu.institution}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-gray-600">{edu.duration}</p>
                      <p className="text-green-600 font-semibold">{edu.grade}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-yellow-50 to-orange-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Achievements & Certifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:scale-105">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-3">
                    <Award className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" />
                    <p className="text-gray-700 font-medium">{achievement}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-900 to-purple-900 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Let's Work Together</h2>
          <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto">
            I'm always interested in new opportunities and exciting projects. 
            Let's discuss how we can bring your ideas to life!
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <a 
              href="mailto:manasibharati94@gmail.com"
              className="flex items-center gap-3 bg-white/10 hover:bg-white/20 px-6 py-3 rounded-lg transition-all duration-200 hover:scale-105"
            >
              <Mail className="w-5 h-5" />
              <span>manasibharati94@gmail.com</span>
            </a>
            <a 
              href="tel:+918329174703"
              className="flex items-center gap-3 bg-white/10 hover:bg-white/20 px-6 py-3 rounded-lg transition-all duration-200 hover:scale-105"
            >
              <Phone className="w-5 h-5" />
              <span>+91 8329174703</span>
            </a>
          </div>
          <div className="flex gap-6 justify-center">
            <a 
              href="https://github.com/Manas0304"
              className="w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
            >
              <Github className="w-6 h-6" />
            </a>
            <a 
              href="https://linkedin.com/in/manasi-bharati-396530273"
              className="w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
            >
              <Linkedin className="w-6 h-6" />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-400">
            © 2024 Manasi Bharati. All rights reserved. Built with React & Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
