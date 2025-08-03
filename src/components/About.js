import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Database, Server, Zap, Brain, Cloud } from 'lucide-react';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skills = [
    { name: 'Python', level: 90, icon: Code, color: 'from-green-400 to-emerald-500' },
    { name: 'JavaScript', level: 85, icon: Code, color: 'from-yellow-400 to-orange-500' },
    { name: 'React', level: 88, icon: Zap, color: 'from-blue-400 to-cyan-500' },
    { name: 'Flask', level: 82, icon: Server, color: 'from-gray-400 to-gray-500' },
    { name: 'TensorFlow', level: 80, icon: Brain, color: 'from-orange-400 to-red-500' },
    { name: 'PostgreSQL', level: 78, icon: Database, color: 'from-blue-500 to-blue-600' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="about" className="section-padding relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-accent-500 to-primary-500"></div>
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="gradient-text">About Me</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-accent-500 to-primary-500 mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Bio */}
            <motion.div variants={itemVariants} className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-white mb-4">
                  Passionate Developer & Research Assistant
                </h3>
                <p className="text-dark-300 leading-relaxed">
                  I'm a dedicated software developer and research assistant with a passion for creating innovative solutions 
                  that make a real impact. Currently pursuing the International Baccalaureate program at Turner Fenton Secondary School 
                  with a focus on computer science and mathematics.
                </p>
                <p className="text-dark-300 leading-relaxed">
                  As a Founding Engineer at Rounds.so, I've built a real-time mock interview platform that supports thousands of users. 
                  I also work as a Research Assistant at the University of Toronto, developing AI-powered imaging pipelines for black hole reconstruction 
                  under Dr. Aviad Levis.
                </p>
                <p className="text-dark-300 leading-relaxed">
                  My expertise spans full-stack development, machine learning, and hardware integration. I believe in writing clean, 
                  maintainable code and staying up-to-date with the latest technologies to solve complex real-world problems.
                </p>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-4 pt-6">
                <div className="text-center p-4 bg-dark-800/50 rounded-lg border border-dark-700/50">
                  <div className="text-2xl font-bold gradient-text">3+</div>
                  <div className="text-sm text-dark-400">Years Experience</div>
                </div>
                <div className="text-center p-4 bg-dark-800/50 rounded-lg border border-dark-700/50">
                  <div className="text-2xl font-bold gradient-text">10+</div>
                  <div className="text-sm text-dark-400">Projects</div>
                </div>
                <div className="text-center p-4 bg-dark-800/50 rounded-lg border border-dark-700/50">
                  <div className="text-2xl font-bold gradient-text">15+</div>
                  <div className="text-sm text-dark-400">Technologies</div>
                </div>
              </div>
            </motion.div>

            {/* Right Column - Skills */}
            <motion.div variants={itemVariants} className="space-y-6">
              <h3 className="text-2xl font-semibold text-white mb-6">Technical Skills</h3>
              
              <div className="space-y-4">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                    transition={{ delay: index * 0.1 }}
                    className="space-y-2"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <skill.icon size={16} className="text-accent-500" />
                        <span className="text-white font-medium">{skill.name}</span>
                      </div>
                      <span className="text-sm text-dark-400">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-dark-800 rounded-full h-2 overflow-hidden">
                      <motion.div
                        className={`h-full bg-gradient-to-r ${skill.color} rounded-full`}
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                        transition={{ duration: 1, delay: index * 0.1 + 0.5 }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Technology Categories */}
              <div className="grid grid-cols-2 gap-4 pt-6">
                <div className="p-4 bg-dark-800/50 rounded-lg border border-dark-700/50">
                  <h4 className="text-white font-semibold mb-2">Languages</h4>
                  <div className="text-sm text-dark-400 space-y-1">
                    <div>Python, JavaScript, TypeScript</div>
                    <div>HTML/CSS, C++, SQL</div>
                    <div>MATLAB, JSON</div>
                  </div>
                </div>
                <div className="p-4 bg-dark-800/50 rounded-lg border border-dark-700/50">
                  <h4 className="text-white font-semibold mb-2">Frameworks & Tools</h4>
                  <div className="text-sm text-dark-400 space-y-1">
                    <div>React, Node.js, Flask</div>
                    <div>TailwindCSS, FastAPI</div>
                    <div>Docker, GCP, Firebase</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Additional Info */}
          <motion.div 
            variants={itemVariants}
            className="mt-16 grid md:grid-cols-3 gap-6"
          >
            <div className="p-6 bg-dark-800/30 rounded-lg border border-dark-700/50 hover:border-accent-500/50 transition-colors duration-300">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-accent-500/20 rounded-lg">
                  <Brain size={20} className="text-accent-500" />
                </div>
                <h4 className="text-white font-semibold">AI/ML Expertise</h4>
              </div>
              <p className="text-dark-300 text-sm">
                Deep learning with TensorFlow, signal processing, and AI-powered applications for real-world impact.
              </p>
            </div>

            <div className="p-6 bg-dark-800/30 rounded-lg border border-dark-700/50 hover:border-accent-500/50 transition-colors duration-300">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-primary-500/20 rounded-lg">
                  <Cloud size={20} className="text-primary-500" />
                </div>
                <h4 className="text-white font-semibold">Full-Stack Development</h4>
              </div>
              <p className="text-dark-300 text-sm">
                Building scalable applications with modern technologies and cloud infrastructure for optimal performance.
              </p>
            </div>

            <div className="p-6 bg-dark-800/30 rounded-lg border border-dark-700/50 hover:border-accent-500/50 transition-colors duration-300">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-green-500/20 rounded-lg">
                  <Code size={20} className="text-green-500" />
                </div>
                <h4 className="text-white font-semibold">Research & Innovation</h4>
              </div>
              <p className="text-dark-300 text-sm">
                Contributing to cutting-edge research in astrophysics and developing innovative solutions for complex problems.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;