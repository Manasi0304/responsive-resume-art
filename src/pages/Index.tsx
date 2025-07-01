
import { useState } from 'react';
import { Mail, Phone, Github, Linkedin, ExternalLink, MapPin, Calendar, Award, Code, Database, Monitor, Users, Star, Zap, Send, User, MessageSquare } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const { toast } = useToast();

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

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent! 🎉",
      description: "Thank you for reaching out! I'll get back to you soon.",
    });
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-cyan-100 overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-lg z-50 border-b border-indigo-200 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent animate-pulse">
              Manasi Bharati
            </div>
            <div className="hidden md:flex space-x-8">
              {['Home', 'About', 'Skills', 'Experience', 'Projects', 'Education', 'Achievements', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`relative text-gray-700 hover:text-indigo-600 transition-all duration-300 font-medium px-3 py-2 rounded-lg hover:bg-indigo-50 transform hover:scale-105 ${
                    activeSection === item.toLowerCase() ? 'text-indigo-600 bg-indigo-50' : ''
                  }`}
                >
                  {item}
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-indigo-600 to-cyan-600 transform scale-x-0 transition-transform duration-300 hover:scale-x-100"></span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto w-full">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="flex-1 text-center lg:text-left animate-fade-in">
              <div className="mb-6 animate-bounce">
                <span className="inline-block px-4 py-2 bg-gradient-to-r from-indigo-100 to-cyan-100 text-indigo-800 rounded-full text-sm font-semibold mb-4">
                  Welcome to my Portfolio! 👋
                </span>
              </div>
              <h1 className="text-6xl lg:text-8xl font-bold text-gray-900 mb-6 leading-tight">
                Full-Stack
                <span className="block bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent animate-pulse">
                  Developer
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl leading-relaxed">
                Passionate about creating scalable web applications with expertise in MERN stack, 
                Machine Learning, and Data Science. Experienced in building AI-powered solutions 
                that enhance user engagement and operational efficiency.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button 
                  onClick={() => scrollToSection('projects')}
                  className="bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-600 hover:from-indigo-700 hover:via-purple-700 hover:to-cyan-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl transform hover:-translate-y-1"
                >
                  <ExternalLink className="w-5 h-5 mr-2" />
                  View My Work
                </Button>
                <Button 
                  variant="outline" 
                  onClick={() => scrollToSection('contact')}
                  className="border-2 border-indigo-300 hover:border-indigo-600 hover:bg-indigo-50 px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg transform hover:-translate-y-1"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Get In Touch
                </Button>
              </div>
            </div>
            <div className="flex-1 flex justify-center lg:justify-end">
              <div className="relative animate-fade-in">
                <div className="w-80 h-80 rounded-full bg-gradient-to-br from-indigo-400 via-purple-500 to-cyan-500 p-1 animate-pulse hover:scale-105 transition-transform duration-300">
                  <img 
                    src="/lovable-uploads/924b3ee3-9009-4303-8e33-00129ec50d46.png" 
                    alt="Manasi Bharati" 
                    className="w-full h-full rounded-full object-cover bg-white p-2 hover:rotate-3 transition-transform duration-300"
                  />
                </div>
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center animate-bounce hover:animate-spin">
                  <Star className="w-12 h-12 text-white" />
                </div>
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center animate-pulse">
                  <Code className="w-8 h-8 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
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

      {/* Skills Section */}
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

      {/* Experience Section */}
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

      {/* Projects Section */}
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

      {/* Education Section */}
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

      {/* Achievements Section */}
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

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-indigo-900 via-purple-900 to-cyan-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-8 animate-fade-in">Let's Work Together</h2>
            <p className="text-xl text-indigo-100 mb-12 max-w-2xl mx-auto leading-relaxed">
              I'm always interested in new opportunities and exciting projects. 
              Let's discuss how we can bring your ideas to life!
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="space-y-6">
                <h3 className="text-3xl font-semibold mb-8 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Get In Touch</h3>
                {[
                  { icon: Mail, text: "manasibharati94@gmail.com", href: "mailto:manasibharati94@gmail.com" },
                  { icon: Phone, text: "+91 8329174703", href: "tel:+918329174703" }
                ].map((item, index) => (
                  <a 
                    key={index}
                    href={item.href}
                    className="flex items-center gap-4 bg-white/10 hover:bg-white/20 px-6 py-4 rounded-xl transition-all duration-300 hover:scale-105 group"
                  >
                    <item.icon className="w-6 h-6 group-hover:animate-bounce" />
                    <span className="text-lg">{item.text}</span>
                  </a>
                ))}
              </div>
              
              <div className="flex gap-6 justify-start">
                <a 
                  href="https://github.com/Manas0304"
                  className="w-16 h-16 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:rotate-12"
                >
                  <Github className="w-8 h-8" />
                </a>
                <a 
                  href="https://linkedin.com/in/manasi-bharati-396530273"
                  className="w-16 h-16 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:rotate-12"
                >
                  <Linkedin className="w-8 h-8" />
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl">
              <h3 className="text-2xl font-semibold mb-6 flex items-center gap-3">
                <MessageSquare className="w-6 h-6" />
                Send Me a Message
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Your Name</label>
                    <div className="relative">
                      <User className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                      <Input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Enter your name"
                        className="pl-10 bg-white/20 border-white/30 text-white placeholder:text-gray-300 focus:bg-white/30 transition-all duration-300"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email Address</label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                      <Input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Enter your email"
                        className="pl-10 bg-white/20 border-white/30 text-white placeholder:text-gray-300 focus:bg-white/30 transition-all duration-300"
                        required
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Subject</label>
                  <Input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="What's this about?"
                    className="bg-white/20 border-white/30 text-white placeholder:text-gray-300 focus:bg-white/30 transition-all duration-300"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell me about your project or just say hello!"
                    rows={4}
                    className="bg-white/20 border-white/30 text-white placeholder:text-gray-300 focus:bg-white/30 transition-all duration-300"
                    required
                  />
                </div>
                <Button 
                  type="submit"
                  className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl transform hover:-translate-y-1"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-6">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent mb-4">
              Manasi Bharati
            </h3>
            <p className="text-gray-400 max-w-md mx-auto">
              Building digital experiences that make a difference. Let's create something amazing together!
            </p>
          </div>
          <div className="border-t border-gray-800 pt-6">
            <p className="text-gray-400">
              © 2024 Manasi Bharati. All rights reserved. Built with React & Tailwind CSS.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
