import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, ArrowDown, Github, Linkedin, Mail, ExternalLink } from 'lucide-react';

const Hero = () => {
  const [currentText, setCurrentText] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const texts = [
    "Software Developer",
    "Research Assistant", 
    "Founding Engineer",
    "Problem Solver"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % texts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [texts.length]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      setScrollProgress(scrollPercent);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsTyping(true);
    const timer = setTimeout(() => setIsTyping(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
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

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Scroll Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 w-full h-1 bg-dark-800 z-50"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: scrollProgress / 100 }}
        style={{ transformOrigin: 'left' }}
        transition={{ duration: 0.1 }}
      >
        <div className="h-full bg-gradient-to-r from-accent-500 to-primary-500"></div>
      </motion.div>

      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent-500/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-500/5 rounded-full blur-3xl animate-pulse"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 5, 0]
          }}
          transition={{ 
            duration: 6, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/4 left-1/4 w-2 h-2 bg-accent-500 rounded-full opacity-60"
        />
        <motion.div
          animate={{ 
            y: [0, 20, 0],
            rotate: [0, -5, 0]
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-3/4 right-1/4 w-1 h-1 bg-primary-500 rounded-full opacity-40"
        />
        <motion.div
          animate={{ 
            x: [0, 15, 0],
            opacity: [0.3, 0.8, 0.3]
          }}
          transition={{ 
            duration: 10, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/2 left-1/3 w-1.5 h-1.5 bg-accent-400 rounded-full"
        />
      </div>

      <div className="container-custom section-padding relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center max-w-4xl mx-auto"
        >
          {/* Greeting */}
          <motion.div variants={itemVariants} className="mb-6">
            <motion.span 
              className="text-lg md:text-xl text-accent-500 font-mono"
              animate={{ opacity: isTyping ? [1, 0.5, 1] : 1 }}
              transition={{ duration: 0.5, repeat: isTyping ? Infinity : 0 }}
            >
              Hi, my name is
            </motion.span>
          </motion.div>

          {/* Name */}
          <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6">
            <span className="gradient-text">Krish Desai</span>
          </motion.h1>

          {/* Animated Tagline */}
          <motion.div variants={itemVariants} className="mb-8">
            <div className="text-2xl md:text-3xl lg:text-4xl font-semibold text-dark-300 flex items-center justify-center">
              <div className="relative overflow-hidden" style={{ minWidth: '600px' }}>
                <div className="flex items-center justify-center">
                  <motion.div
                    className="flex items-center"
                    animate={{ 
                      x: texts[currentText].length > 10 ? -20 : texts[currentText].length > 8 ? -10 : 0
                    }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                  >
                    <span className="text-white">I'm a</span>
                    <span className="text-white ml-1">&nbsp;</span>
                    <AnimatePresence mode="wait">
                      <motion.span
                        key={currentText}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.4 }}
                        className="gradient-text"
                      >
                        {texts[currentText]}
                      </motion.span>
                    </AnimatePresence>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Description */}
          <motion.p variants={itemVariants} className="text-lg md:text-xl text-dark-300 mb-12 max-w-2xl mx-auto leading-relaxed">
            A passionate software developer and research assistant with expertise in full-stack development, 
            machine learning, and AI-powered applications. Currently pursuing the International Baccalaureate 
            program while working as a Founding Engineer at Rounds.so and Research Assistant at University of Toronto.
          </motion.p>

          {/* Stats */}
          <motion.div variants={itemVariants} className="flex justify-center items-center gap-8 mb-12 text-sm">
            <div className="text-center">
              <div className="text-2xl font-bold gradient-text">3+</div>
              <div className="text-dark-400">Years Experience</div>
            </div>
            <div className="w-px h-8 bg-dark-700"></div>
            <div className="text-center">
              <div className="text-2xl font-bold gradient-text">10+</div>
              <div className="text-dark-400">Projects Completed</div>
            </div>
            <div className="w-px h-8 bg-dark-700"></div>
            <div className="text-center">
              <div className="text-2xl font-bold gradient-text">15+</div>
              <div className="text-dark-400">Technologies</div>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <motion.a
              href="/KrishDesaiResume.pdf"
              download="KrishDesaiResume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-accent-500 hover:bg-accent-600 text-white rounded-full font-semibold flex items-center gap-2 transition-all duration-300 shadow-lg hover:shadow-accent-500/25 group"
            >
              <Download size={20} />
              Download Resume
              <ExternalLink size={16} className="opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.a>
            
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border-2 border-accent-500 text-accent-500 hover:bg-accent-500 hover:text-white rounded-full font-semibold flex items-center gap-2 transition-all duration-300 group"
            >
              View My Work
              <ArrowDown size={20} className="group-hover:translate-y-1 transition-transform duration-300" />
            </motion.a>
          </motion.div>

          {/* Social Links */}
          <motion.div variants={itemVariants} className="flex justify-center items-center gap-6">
            <motion.a
              href="https://github.com/KrishD22"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, y: -5 }}
              whileTap={{ scale: 0.9 }}
              className="p-3 bg-dark-800 hover:bg-accent-500 rounded-full transition-all duration-300 group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-accent-500 to-primary-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <Github size={24} className="relative z-10 group-hover:text-white transition-colors duration-300" />
            </motion.a>
            
            <motion.a
              href="https://www.linkedin.com/in/krishhdesai/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, y: -5 }}
              whileTap={{ scale: 0.9 }}
              className="p-3 bg-dark-800 hover:bg-accent-500 rounded-full transition-all duration-300 group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-accent-500 to-primary-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <Linkedin size={24} className="relative z-10 group-hover:text-white transition-colors duration-300" />
            </motion.a>
            
            <motion.a
              href="mailto:krishhsdesai@gmail.com"
              whileHover={{ scale: 1.2, y: -5 }}
              whileTap={{ scale: 0.9 }}
              className="p-3 bg-dark-800 hover:bg-accent-500 rounded-full transition-all duration-300 group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-accent-500 to-primary-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <Mail size={24} className="relative z-10 group-hover:text-white transition-colors duration-300" />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center text-accent-500"
        >
          <ArrowDown size={24} />
          <span className="text-sm mt-2">Scroll to explore</span>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;