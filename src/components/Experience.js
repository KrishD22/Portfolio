import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Calendar, MapPin, Building } from 'lucide-react';

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const experiences = [
    {
      title: "Founding Engineer",
      company: "Rounds.so",
      duration: "June 2025 - Present",
      location: "Atlanta, GA",
      description: [
        "Built a real-time, full-stack mock interview platform enabling live collaborative coding, structured peer feedback, and AI-powered code review using Monaco Editor, OpenAI API, and custom Flask APIs",
        "Scaled infrastructure on GCP, Firebase, and PostgreSQL to support thousands of users with 200ms response time and 99.9% uptime",
        "Reduced interview setup time by 40% through interactive scheduling tools and dashboards powered by Axios and backend metrics endpoints",
        "Drove rapid prototyping with co-founders to streamline onboarding and achieve a 25% boost in session completion via JWT authentication, responsive UIs, and user-driven iteration"
      ],
      technologies: ["Flask", "React", "PostgreSQL", "OpenAI", "Google Cloud", "Firebase", "Monaco Editor", "JWT"]
    },
    {
      title: "Research Assistant",
      company: "University of Toronto",
      duration: "Sep. 2024 - Present",
      location: "Toronto, ON",
      description: [
        "Developed 'Astraeus,' under Dr. Aviad Levis, an AI-powered imaging pipeline in Python and TensorFlow to reconstruct black holes from radio telescope data, achieving ~31% sharper resolution than baseline models",
        "Trained a deep neural network on 1.4TB of simulated telescope data, decreasing reconstruction time by 6× while improving image accuracy (SSIM) from 0.58 to 0.85",
        "Deployed a research website and GitHub repository, generating 600+ unique visitors and downstream forks by researchers in the first month, enabling reproducibility for research teams across domains",
        "Delivered a 45-minute talk at UofT's CS Academy to 30+ students and PhDs, sparking a follow-up collaboration to scale the pipeline for multi-dish telescope arrays"
      ],
      technologies: ["Python", "TensorFlow", "Deep Learning", "HTML", "CSS", "JavaScript", "Research"]
    },
    {
      title: "Software Engineer",
      company: "Stacked Pancakes Breakfast House",
      duration: "May 2024 - August 2024",
      location: "Toronto, ON",
      description: [
        "Engineered an AI call assistant using Twilio and Python for 3 franchise locations, reducing average call time by 40% and lowering staff workload by 30%",
        "Analyzed call data to benchmark AI vs. human performance, informing rollout decisions that improved customer satisfaction by 15% while maintaining cost-efficiency",
        "Integrated scheduling and FAQ systems, enabling autonomous resolution of common queries and saving $8700 per location annually in labor costs",
        "Deployed a live fallback system to human agents, maintaining service continuity and increasing peak-hour call capacity by 2.3×"
      ],
      technologies: ["Python", "Flask", "Twilio", "Pandas", "REST APIs", "Docker"]
    },
    {
      title: "President",
      company: "Turner Fenton Rocketry Association",
      duration: "2023 - Present",
      location: "Brampton, ON",
      description: [
        "Coordinated team activities and delegated tasks to ensure efficient completion of projects",
        "Established fundraising strategies to increase financial support for programs and services",
        "Programmed air pressure rockets through Arduino using C++ and used diverse components such as IMU, Gyroscope, bluetooth modules and more"
      ],
      technologies: ["Arduino", "C++", "IMU", "Bluetooth", "Leadership"]
    },
    {
      title: "Logistics Executive",
      company: "SPARK",
      duration: "2024 - Present",
      location: "Brampton, ON",
      description: [
        "Developed and implemented a comprehensive schedule and itinerary for the hackathon",
        "Achieved cost-efficiency without compromising quality through thought-out budgeting",
        "Negotiated and secured partnerships with sponsors and vendors"
      ],
      technologies: ["Event Planning", "Budgeting", "Partnerships", "Logistics"]
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

  return (
    <section id="experience" className="section-padding relative">
      <div className="container-custom">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold text-center mb-16">
            My <span className="gradient-text">Experience</span>
          </motion.h2>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent-500 to-transparent transform -translate-x-1/2"></div>

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className={`relative flex items-start ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-accent-500 rounded-full transform -translate-x-1/2 mt-6 z-10"></div>

                  {/* Content Card */}
                  <motion.div
                    whileHover={{ scale: 1.02, y: -5 }}
                    className={`glass-effect p-6 rounded-xl ml-12 md:ml-0 ${
                      index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'
                    } flex-1`}
                  >
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-accent-500 mb-1">{exp.title}</h3>
                        <p className="text-lg font-semibold mb-2">{exp.company}</p>
                      </div>
                      <div className="flex items-center space-x-4 text-sm text-dark-300">
                        <div className="flex items-center space-x-1">
                          <Calendar size={16} />
                          <span>{exp.duration}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <MapPin size={16} />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>

                    <ul className="space-y-2 mb-4">
                      {exp.description.map((item, idx) => (
                        <li key={idx} className="text-dark-300 flex items-start">
                          <span className="text-accent-500 mr-2 flex-shrink-0 mt-0.5">•</span>
                          <span className="flex-1">{item}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-accent-500/10 text-accent-500 text-sm rounded-full border border-accent-500/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;