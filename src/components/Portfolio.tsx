import React, { useEffect, useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  FaJava, 
  FaPython, 
  FaHtml5, 
  FaCss3Alt, 
  FaGitAlt, 
  FaGithub, 
  FaLinkedin, 
  FaEnvelope,
  FaMapMarkerAlt,
  FaDownload,
  FaExternalLinkAlt,
  FaChevronDown,
  FaBars,
  FaTimes
} from 'react-icons/fa';
import { 
  SiSpringboot, 
  SiMysql, 
  SiFirebase, 
  SiJetpackcompose,
  SiKotlin,
  SiFlutter,
  SiDart
} from 'react-icons/si';
import { useToast } from '@/hooks/use-toast';

// Import generated images
import awsCertImage from '@/assets/aws-cert.jpg';
import redhatCertImage from '@/assets/redhat-cert.jpg';
import salesforceCertImage from '@/assets/salesforce.png';
import travelBuddyImage from '@/assets/travel-buddy-preview.jpg';
import moviedbImage from '@/assets/moviedb-preview.jpg';
import weatherNowImage from '/weathernow-preview.svg';
import resumePDF from '@/assets/Pujitha_Resume.pdf';

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const { toast } = useToast();

  // Parallax effects
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'certifications', 'achievements', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'certifications', label: 'Certifications' },
    { id: 'achievements', label: 'Achievements' },
    { id: 'contact', label: 'Contact' }
  ];

  const skills = [
    { name: 'Java', icon: FaJava, category: 'Languages' },
    { name: 'Python', icon: FaPython, category: 'Languages' },
    { name: 'Kotlin', icon: SiKotlin, category: 'Languages' },
    { name: 'Dart', icon: SiDart, category: 'Languages' },
    { name: 'HTML5', icon: FaHtml5, category: 'Frontend' },
    { name: 'CSS3', icon: FaCss3Alt, category: 'Frontend' },
    { name: 'Spring Boot', icon: SiSpringboot, category: 'Backend' },
    { name: 'MySQL', icon: SiMysql, category: 'Database' },
    { name: 'Firebase', icon: SiFirebase, category: 'Mobile' },
    { name: 'Flutter', icon: SiFlutter, category: 'Mobile' },
    { name: 'Jetpack Compose', icon: SiJetpackcompose, category: 'Mobile' },
    { name: 'Git', icon: FaGitAlt, category: 'Tools' },
    { name: 'GitHub', icon: FaGithub, category: 'Tools' }
  ];

  const projects = [
    {
      title: 'Travel Buddy',
      description: 'Java Full Stack project connecting travelers with homestays and local guides, creating a comprehensive platform for tourism experiences.',
      tech: ['Spring Boot', 'MySQL', 'HTML/CSS', 'Bootstrap'],
      github: 'https://github.com/vmpujitha/TravelBuddy',
      gradient: 'from-blue-500 to-purple-600',
      image: travelBuddyImage
    },
    {
      title: 'MovieDBApp',
      description: 'Android application to explore and manage favorite movies with modern UI/UX and real-time data synchronization.',
      tech: ['Kotlin', 'Jetpack Compose', 'Firebase'],
      github: 'https://github.com/vmpujitha/MovieDBApp',
      gradient: 'from-green-500 to-teal-600',
      image: moviedbImage
    },
    {
      title: 'Weather App',
      description: 'A Flutter application that displays real-time weather status of different states. Features dynamic UI updates, state management, and clean user interface for weather forecasting.',
      tech: ['Flutter', 'Dart', 'HTTP API', 'OpenWeatherMap API'],
      github: 'https://github.com/vmpujitha/WeatherNow',
      gradient: 'from-cyan-500 to-blue-600',
      image: weatherNowImage
    }
  ];

  const certifications = [
    {
      title: 'AWS Cloud Practitioner',
      issuer: 'Amazon Web Services',
      link: 'https://www.credly.com/badges/923a8bd6-b3be-40a3-86c1-43daea447dc2',
      color: 'from-orange-500 to-red-600',
      image: awsCertImage
    },
    {
      title: 'Red Hat Certified Developer',
      issuer: 'Red Hat',
      link: 'https://www.credly.com/badges/55de5d9d-c060-40e0-a97e-ac3e38feb5d0',
      color: 'from-red-500 to-pink-600',
      image: redhatCertImage
    },
    {
      title: 'Salesforce Certified AI Associate',
      issuer: 'Salesforce',
      link: 'https://trailhead.salesforce.com/en/credentials/certification-detail-print/?searchString=c324oNqelEPFTfTx0tmCY10erPd7upXlMFEX7w33aUo8SiB8OKWoZXk1feZft6KY',
      color: 'from-blue-500 to-cyan-600',
      image: salesforceCertImage
    }
  ];

  const achievements = [
    {
      title: 'A+ Certificate in English Speaking',
      description: 'SQA, Scotland certification',
      icon: '🏆'
    },
    {
      title: 'Smart India Hackathon Finalist',
      description: 'Top 10 finalist for rural tourism solution',
      icon: '🥇'
    },
    {
      title: 'Tech Club Leadership',
      description: 'Marketing and Relations Lead for 1+ year',
      icon: '👥'
    },
    {
      title: 'University Tech Fest PR Chief',
      description: 'Secured 5+ media partners, 30% participation growth',
      icon: '📢'
    }
  ];

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const handleResumeOpen = () => {
    setIsResumeModalOpen(true);
  };

  const handleResumeDownload = () => {
    const link = document.createElement('a');
    link.href = resumePDF;
    link.download = 'Pujitha_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    toast({
      title: "Resume Downloaded!",
      description: "Thank you for your interest. The resume has been downloaded successfully.",
    });
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Navigation */}
      <motion.nav 
        className="fixed top-0 left-0 right-0 z-50 glass-card"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <motion.div 
              className="text-xl font-bold gradient-text"
              whileHover={{ scale: 1.05 }}
            >
              Pujitha
            </motion.div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <motion.button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-3 py-2 rounded-lg transition-all duration-300 ${
                    activeSection === item.id 
                      ? 'text-primary font-semibold' 
                      : 'text-muted-foreground hover:text-primary'
                  }`}
                  whileHover={{ y: -2 }}
                  whileTap={{ y: 0 }}
                >
                  {item.label}
                </motion.button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-foreground"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div 
            className="md:hidden glass-card m-4 rounded-xl"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            <div className="px-4 py-6 space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left px-4 py-2 rounded-lg text-foreground hover:text-primary transition-colors"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </motion.nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen animated-bg flex items-center justify-center relative">
        <motion.div style={{ y, opacity }} className="absolute inset-0 z-0" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-left"
            >
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="text-lg text-secondary mb-4"
              >
                Hi, I'm Pujitha 👋
              </motion.div>
              
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="text-5xl lg:text-7xl font-bold mb-6 text-shadow"
              >
                <span className="gradient-text">Aspiring</span><br />
                <span className="text-foreground">Android</span><br />
                <span className="gradient-text">Developer</span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.9 }}
                className="text-xl text-muted-foreground mb-8 max-w-lg"
              >
                Building innovative mobile applications with modern Android technologies
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.1 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <button 
                  className="hero-button flex items-center gap-2"
                  onClick={handleResumeOpen}
                >
                  📄
                  Open Resume
                </button>
                <button 
                  className="secondary-button"
                  onClick={() => scrollToSection('contact')}
                >
                  Let's Connect
                </button>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.3 }}
                className="flex items-center gap-4 mt-8"
              >
                <FaMapMarkerAlt className="text-secondary" />
                <span className="text-muted-foreground">Guntur, India</span>
              </motion.div>
            </motion.div>

            {/* Right Content - Profile Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex justify-center lg:justify-end"
            >
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="relative"
              >
                <img
                  src="/lovable-uploads/8153f0c0-f223-41f4-bafa-6d1960e0e70d.png"
                  alt="Venkata Maruthi Pujitha Jangalapalli"
                  className="w-80 h-[500px] lg:w-96 lg:h-[600px] object-cover object-top profile-glow rounded-2xl"
                />
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/20 to-secondary/20 animate-pulse" />
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-secondary cursor-pointer"
            onClick={() => scrollToSection('about')}
          >
            <FaChevronDown size={24} />
          </motion.div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold gradient-text mb-6">About Me</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto" />
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="glass-card p-8 rounded-2xl"
            >
              <h3 className="text-2xl font-bold text-primary mb-6">My Journey</h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                I'm a passionate and performance-focused CSE student with a strong command of SDLC principles. 
                My expertise lies in creating full stack web solutions and Android apps using modern tools and frameworks.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I believe in continuous learning and staying updated with the latest technologies to deliver 
                innovative solutions that make a real impact.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="glass-card p-6 rounded-xl">
                <h4 className="text-xl font-bold text-secondary mb-2">K L University</h4>
                <p className="text-muted-foreground">B.Tech in Computer Science Engineering</p>
                <p className="text-primary font-semibold">CGPA: 9.24</p>
              </div>

              <div className="glass-card p-6 rounded-xl">
                <h4 className="text-xl font-bold text-secondary mb-2">Oxford Vit Jr College</h4>
                <p className="text-muted-foreground">Intermediate</p>
                <p className="text-primary font-semibold">90%</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-muted/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold gradient-text mb-6">Skills & Technologies</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto" />
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="skill-icon group"
                whileHover={{ y: -5, scale: 1.1 }}
              >
                <skill.icon className="text-3xl text-primary group-hover:text-secondary transition-colors" />
                <span className="skill-name">{skill.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold gradient-text mb-6">Featured Projects</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto" />
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="project-card group"
              >
                <div className={`h-2 bg-gradient-to-r ${project.gradient} rounded-t-2xl`} />
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-foreground mb-3">{project.title}</h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm border border-primary/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-secondary hover:text-secondary-glow transition-colors"
                  >
                    <FaGithub />
                    View on GitHub
                    <FaExternalLinkAlt size={12} />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-20 bg-muted/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold gradient-text mb-6">Certifications</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto" />
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <motion.a
                key={cert.title}
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="glass-card p-6 rounded-xl hover:scale-105 transition-all duration-300 group"
                whileHover={{ y: -5 }}
              >
                <div className={`h-2 bg-gradient-to-r ${cert.color} rounded-t-xl mb-4`} />
                <img 
                  src={cert.image} 
                  alt={cert.title}
                  className="w-full h-32 object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-bold text-foreground mb-2">{cert.title}</h3>
                <p className="text-muted-foreground mb-4">{cert.issuer}</p>
                <div className="flex items-center text-secondary group-hover:text-secondary-glow transition-colors">
                  <span>View Certificate</span>
                  <FaExternalLinkAlt className="ml-2" size={12} />
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold gradient-text mb-6">Achievements</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto" />
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="glass-card p-6 rounded-xl"
              >
                <div className="flex items-start gap-4">
                  <span className="text-3xl">{achievement.icon}</span>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">{achievement.title}</h3>
                    <p className="text-muted-foreground">{achievement.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-muted/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold gradient-text mb-6">Get In Touch</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-6" />
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Let's collaborate on exciting projects! I'm always open to discussing new opportunities.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="glass-card p-8 rounded-2xl h-full">
                <h3 className="text-2xl font-bold text-foreground mb-6">Contact Information</h3>
                
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <FaEnvelope className="text-primary" size={20} />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Email</p>
                      <p className="text-foreground">pujithavmjangalapalli@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <FaMapMarkerAlt className="text-primary" size={20} />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Location</p>
                      <p className="text-foreground">Guntur, India</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <h4 className="text-lg font-semibold text-foreground mb-4">Connect with me</h4>
                  <div className="flex gap-4">
                    <a
                      href="https://github.com/vmpujitha"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center hover:bg-primary/20 transition-colors"
                    >
                      <FaGithub className="text-primary" size={20} />
                    </a>
                    <a
                      href="https://linkedin.com/in/vmpujitha"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center hover:bg-primary/20 transition-colors"
                    >
                      <FaLinkedin className="text-primary" size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex justify-center items-center"
            >
              <div className="glass-card p-8 rounded-2xl text-center">
                <h3 className="text-2xl font-bold text-foreground mb-6">Get In Touch</h3>
                <a
                  href="mailto:pujithavmjangalapalli@gmail.com"
                  className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 rounded-full hover:bg-primary/20 transition-all duration-300 hover:scale-110 group"
                  title="Send me an email"
                >
                  <FaEnvelope className="text-primary text-3xl group-hover:text-primary/80 transition-colors" />
                </a>
                <p className="text-sm text-muted-foreground mt-4">Click to send me an email</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-muted-foreground">
              © 2024 Venkata Maruthi Pujitha Jangalapalli. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* Resume Modal */}
      {isResumeModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
          <div className="relative w-full max-w-4xl h-[90vh] mx-4">
            <div className="glass-card rounded-2xl p-6 h-full flex flex-col">
              {/* Modal Header */}
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold gradient-text">My RESUME</h3>
                <div className="flex items-center gap-2">
                  <button
                    onClick={handleResumeDownload}
                    className="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors flex items-center gap-2"
                  >
                    <FaDownload size={16} />
                    Download
                  </button>
                  <button
                    onClick={() => setIsResumeModalOpen(false)}
                    className="p-2 hover:bg-muted rounded-lg transition-colors"
                  >
                    <FaTimes size={20} />
                  </button>
                </div>
              </div>
              
              {/* PDF Viewer */}
              <div className="flex-1 bg-white rounded-lg overflow-hidden">
                <iframe
                  src={resumePDF}
                  className="w-full h-full"
                  title="Resume PDF"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Portfolio;