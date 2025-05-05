'use client';

import { motion } from 'framer-motion';

const MotionComponent = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="p-4 rounded-lg"
      style={{
        backgroundColor: 'var(--background)',
        color: 'var(--text)',
        border: '2px solid var(--primary)',
      }}
    >
      {children}
    </motion.div>
  );
};

export default MotionComponent; 