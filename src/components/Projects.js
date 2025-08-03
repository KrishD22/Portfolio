import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Github, ExternalLink, Code, Globe, Smartphone, Brain, Radio, Hand } from 'lucide-react';

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects = [
    {
      title: "Mind Controlled AI Wheelchair",
      description: "Converted EEG brain signals into real-time wheelchair commands with 95% directional accuracy by integrating pylsl, boosting mobility for users with motor impairments. Minimized noise in live EEG streams by 60% using a custom signal processing pipeline with buffering, notch filtering, and multi-band decomposition (alpha, beta, theta, delta). Accelerated control feedback loop by 35% through a containerized Python–React pipeline using Flask, PostgreSQL, and Docker, enabling responsive mental-state-driven navigation.",
      image: "/img/port1.jpg",
      technologies: ["Python", "Flask", "React", "PostgreSQL", "Docker", "EEG", "pylsl", "Signal Processing"],
      github: "https://github.com/KrishD22/NeuroWheelchair",
      demo: null,
      category: "AI/ML"
    },
    {
      title: "AI Call Assistant",
      description: "An artificial intelligence call assistant that interprets user voice input and responds on calls in real-time. Designed for customers to call and inquire about reservations, menus, and to place orders. Built with natural language processing and voice recognition capabilities.",
      image: "/img/port2.jpg",
      technologies: ["Python", "NLTK", "Natural Language Processing", "Voice Recognition", "AI"],
      github: "https://github.com/KrishD22/AICallAssistant",
      demo: null,
      category: "AI/ML"
    },
    {
      title: "Hand Controlled 3D Object",
      description: "Program that allows you to control any 3D object through hand gestures received by a camera. Uses computer vision and gesture recognition to manipulate 3D objects in real-time, providing an intuitive interface for object manipulation.",
      image: "/img/port3.jpg",
      technologies: ["Python", "Computer Vision", "OpenCV", "3D Graphics", "Gesture Recognition"],
      github: "https://github.com/KrishD22/HandControlledObject",
      demo: null,
      category: "Computer Vision"
    },
    {
      title: "AI-Powered Radio Interferometer",
      description: "Advanced radio interferometer system powered by artificial intelligence for astronomical observations. Part of the Astraeus project for black hole reconstruction and radio telescope data processing. Achieved ~31% sharper resolution than baseline models.",
      image: "/img/port4.jpg",
      technologies: ["Python", "TensorFlow", "Deep Learning", "Radio Astronomy", "Signal Processing"],
      github: "https://github.com/KrishD22/AI-Powered-Radio-Interferometer",
      demo: "https://krishd22.github.io/Astraeus/",
      category: "AI/ML"
    },
    {
      title: "YouTube Downloader",
      description: "A Python-based YouTube video downloader application that allows users to download videos from YouTube with various quality options. Features include format selection, quality control, and batch downloading capabilities.",
      image: "/img/port5.jpg",
      technologies: ["Python", "yt-dlp", "GUI", "Video Processing", "Web Scraping"],
      github: "https://github.com/KrishD22/YoutubeDownloader",
      demo: null,
      category: "Web Development"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const getCategoryIcon = (category) => {
    switch (category) {
      case "Web Development":
        return Globe;
      case "Mobile Development":
        return Smartphone;
      case "Hardware/IoT":
        return Code;
      case "AI/ML":
        return Brain;
      case "Computer Vision":
        return Hand;
      case "Radio Astronomy":
        return Radio;
      default:
        return Code;
    }
  };

  return (
    <section id="projects" className="section-padding relative">
      <div className="container-custom">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold text-center mb-16">
            Featured <span className="gradient-text">Projects</span>
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => {
              const CategoryIcon = getCategoryIcon(project.category);
              
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ 
                    scale: 1.02, 
                    y: -10,
                    transition: { duration: 0.3 }
                  }}
                  className="group relative glass-effect rounded-xl overflow-hidden"
                >
                  {/* Project Image */}
                  <div className="relative h-48 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-accent-500/20 to-primary-500/20 z-10"></div>
                    <div className="absolute inset-0 bg-dark-900/50 z-20 flex items-center justify-center">
                      <CategoryIcon size={48} className="text-accent-500" />
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs text-accent-500 font-mono">{project.category}</span>
                      <div className="flex space-x-2">
                        {project.github && (
                          <motion.a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="p-2 bg-dark-700 hover:bg-accent-500 rounded-full transition-colors duration-200"
                          >
                            <Github size={16} />
                          </motion.a>
                        )}
                        {project.demo && (
                          <motion.a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="p-2 bg-dark-700 hover:bg-accent-500 rounded-full transition-colors duration-200"
                          >
                            <ExternalLink size={16} />
                          </motion.a>
                        )}
                      </div>
                    </div>

                    <h3 className="text-xl font-bold mb-3 group-hover:text-accent-500 transition-colors duration-200">
                      {project.title}
                    </h3>

                    <p className="text-dark-300 text-sm leading-relaxed mb-4">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 bg-accent-500/10 text-accent-500 text-xs rounded-full border border-accent-500/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-accent-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </motion.div>
              );
            })}
          </div>

          {/* View More Button */}
          <motion.div
            variants={itemVariants}
            className="text-center mt-12"
          >
            <motion.a
              href="https://github.com/KrishD22"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center space-x-2 px-8 py-4 bg-accent-500 hover:bg-accent-600 text-white rounded-full font-semibold transition-all duration-300"
            >
              <Github size={20} />
              <span>View More on GitHub</span>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;