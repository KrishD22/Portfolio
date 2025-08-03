import React from 'react';
import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';

const EmailSidebar = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 1, duration: 0.6 }}
      className="fixed right-8 top-1/2 transform -translate-y-1/2 z-40 hidden lg:block"
    >
      <motion.a
        href="mailto:krishhsdesai@gmail.com"
        whileHover={{ scale: 1.1, y: -5 }}
        whileTap={{ scale: 0.9 }}
        className="flex flex-col items-center space-y-4 text-accent-500 hover:text-accent-400 transition-colors duration-300"
      >
        <Mail size={20} />
        <div className="writing-mode-vertical text-sm font-mono tracking-wider">
          krishhsdesai@gmail.com
        </div>
      </motion.a>
      
      <style jsx>{`
        .writing-mode-vertical {
          writing-mode: vertical-rl;
          text-orientation: mixed;
        }
      `}</style>
    </motion.div>
  );
};

export default EmailSidebar;