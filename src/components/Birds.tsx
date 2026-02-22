import React from 'react';
import { motion } from 'motion/react';

export const Birds = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {/* Bird 1 - Erratic curved path */}
      <motion.div
        initial={{ x: '-10vw', y: '30vh', opacity: 0 }}
        animate={{
          x: ['-10vw', '20vw', '50vw', '80vw', '110vw'],
          y: ['30vh', '10vh', '40vh', '15vh', '35vh'],
          rotate: [0, -10, 15, -5, 10],
          opacity: [0, 1, 1, 1, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
          times: [0, 0.25, 0.5, 0.75, 1]
        }}
        className="absolute"
      >
        <BirdIcon className="text-white/60 w-8 h-8" />
      </motion.div>

      {/* Bird 2 - Slower, more vertical movement */}
      <motion.div
        initial={{ x: '110vw', y: '70vh', opacity: 0 }}
        animate={{
          x: ['110vw', '80vw', '40vw', '10vw', '-10vw'],
          y: ['70vh', '50vh', '80vh', '60vh', '75vh'],
          rotate: [0, 15, -10, 20, 0],
          opacity: [0, 1, 1, 1, 0],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 4,
          times: [0, 0.25, 0.5, 0.75, 1]
        }}
        className="absolute"
      >
        <BirdIcon className="text-white/40 w-6 h-6 scale-x-[-1]" />
      </motion.div>
    </div>
  );
};

const BirdIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M21,12.5c-1.5,0-3-0.5-4.5-1.5c-1.5-1-3-1.5-4.5-1.5s-3,0.5-4.5,1.5c-1.5,1-3,1.5-4.5,1.5c-0.3,0-0.5-0.2-0.5-0.5 s0.2-0.5,0.5-0.5c1.4,0,2.8-0.5,4.1-1.4c1.6-1.1,3.3-1.6,4.9-1.6s3.3,0.5,4.9,1.6c1.3,0.9,2.7,1.4,4.1,1.4c0.3,0,0.5,0.2,0.5,0.5 S21.3,12.5,21,12.5z" />
    <path d="M12,14c-1.1,0-2-0.9-2-2s0.9-2,2-2s2,0.9,2,2S13.1,14,12,14z M12,11c-0.6,0-1,0.4-1,1s0.4,1,1,1s1-0.4,1-1S12.6,11,12,11z" />
  </svg>
);
