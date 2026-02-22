import React from 'react';
import { motion } from 'motion/react';

export const LightGlows = () => {
  // Estimated positions for the light bulbs in the provided image
  // These are percentages (top, left)
  const bulbPositions = [
    { t: 20, l: 16 }, { t: 25, l: 20 }, { t: 30, l: 23 }, { t: 35, l: 27 },
    { t: 40, l: 31 }, { t: 45, l: 34 }, { t: 48, l: 38 }, { t: 49, l: 42 },
    { t: 49, l: 46 }, { t: 48, l: 50 }, { t: 47, l: 54 }, { t: 45, l: 58 },
    { t: 42, l: 62 }, { t: 38, l: 66 }, { t: 34, l: 70 }, { t: 30, l: 74 },
    { t: 26, l: 78 }, { t: 22, l: 83 }, { t: 18, l: 87 }, { t: 14, l: 91 }
  ];

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {bulbPositions.map((pos, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0.3, scale: 0.8 }}
          animate={{
            opacity: [0.3, 0.8, 0.3],
            scale: [0.8, 1.2, 0.8],
          }}
          transition={{
            duration: 2 + Math.random() * 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 2
          }}
          style={{
            top: `${pos.t}%`,
            left: `${pos.l}%`,
          }}
          className="absolute w-3 h-3 bg-yellow-200 rounded-full blur-[4px] shadow-[0_0_10px_rgba(254,240,138,0.8)]"
        />
      ))}
    </div>
  );
};
