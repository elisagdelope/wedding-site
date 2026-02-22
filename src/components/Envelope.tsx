import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface EnvelopeProps {
  onOpen: () => void;
  initials: string;
}

export const Envelope: React.FC<EnvelopeProps> = ({ onOpen, initials }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
    setTimeout(onOpen, 1500); // Delay to match animation
  };

  return (
    <div className="relative w-full h-screen flex items-center justify-center bg-offwhite overflow-hidden">
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative w-[320px] h-[220px] sm:w-[450px] sm:h-[300px] cursor-pointer group"
        onClick={handleOpen}
      >
        {/* Envelope Back */}
        <div className="absolute inset-0 bg-[#E8E6E1] shadow-xl rounded-sm" />

        {/* The Card Inside */}
        <motion.div
          animate={isOpen ? { y: -150, opacity: 1 } : { y: 0, opacity: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeInOut" }}
          className="absolute inset-x-4 top-4 bottom-4 bg-cream shadow-md rounded-sm flex flex-col items-center justify-center p-6 text-center z-10"
        >
          <span className="font-serif text-xl sm:text-2xl text-olive mb-2 italic">Nuestra Boda</span>
          <div className="w-12 h-[1px] bg-olive/30 mb-4" />
          <span className="font-serif text-2xl sm:text-4xl text-olive tracking-widest uppercase">
            {initials}
          </span>
        </motion.div>

        {/* Envelope Sides (Left & Right) */}
        <div 
          className="absolute inset-0 z-20"
          style={{
            clipPath: 'polygon(0% 0%, 50% 50%, 0% 100%)',
            backgroundColor: '#F0EEE9'
          }}
        />
        <div 
          className="absolute inset-0 z-20"
          style={{
            clipPath: 'polygon(100% 0%, 50% 50%, 100% 100%)',
            backgroundColor: '#F0EEE9'
          }}
        />
        
        {/* Envelope Bottom */}
        <div 
          className="absolute inset-0 z-20"
          style={{
            clipPath: 'polygon(0% 100%, 50% 50%, 100% 100%)',
            backgroundColor: '#E2E0DB'
          }}
        />

        {/* Top Flap */}
        <motion.div
          animate={isOpen ? { rotateX: 180, zIndex: 0 } : { rotateX: 0, zIndex: 30 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="absolute inset-0 origin-top preserve-3d"
          style={{
            clipPath: 'polygon(0% 0%, 50% 50%, 100% 0%)',
            backgroundColor: '#F5F3EF',
            boxShadow: '0 -2px 10px rgba(0,0,0,0.05)'
          }}
        />

        {/* Wax Seal */}
        <AnimatePresence>
          {!isOpen && (
            <motion.div
              exit={{ opacity: 0, scale: 0.8, y: 20 }}
              transition={{ duration: 0.3 }}
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-40"
            >
              <div className="relative w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center">
                {/* Main Wax Blob - Very irregular and "melted" */}
                <div 
                  className="absolute inset-0 bg-[#4A4A30] rounded-[38%_62%_63%_37%_/_41%_44%_56%_59%] shadow-[4px_8px_15px_rgba(0,0,0,0.5),inset_-3px_-6px_10px_rgba(0,0,0,0.4),inset_3px_6px_10px_rgba(255,255,255,0.1)] transform rotate-12"
                  style={{
                    background: 'radial-gradient(circle at 35% 35%, #5A5A40 0%, #3A3A25 70%, #2A2A15 100%)'
                  }}
                />
                
                {/* Secondary Melt Layer - Overlapping blob for organic feel */}
                <div 
                  className="absolute inset-1 bg-[#3A3A25] rounded-[55%_45%_52%_48%_/_48%_52%_48%_52%] opacity-80 transform -rotate-6 shadow-inner"
                />
                
                {/* The Stamped Area - Deep indentation */}
                <div className="absolute inset-4 bg-[#2A2A15]/20 rounded-full shadow-[inset_2px_4px_8px_rgba(0,0,0,0.4),0_1px_2px_rgba(255,255,255,0.05)] flex items-center justify-center border border-black/10">
                  {/* Initials - Stamped effect with lighter color */}
                  <span 
                    className="relative font-serif text-[#7A7A5A] text-xl sm:text-2xl font-black tracking-tighter"
                    style={{
                      textShadow: '0.5px 0.5px 0px rgba(255,255,255,0.1), -0.5px -0.5px 0px rgba(0,0,0,0.3)',
                      letterSpacing: '-0.05em',
                      opacity: 0.8
                    }}
                  >
                    {initials}
                  </span>
                </div>
                
                {/* Subtle wax "shine" or imperfections */}
                <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white/5 rounded-full blur-sm" />
                
                {/* Hover effect hint - slower and more subtle */}
                <motion.div
                  animate={{ scale: [1, 1.03, 1], opacity: [0.1, 0.2, 0.1] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="absolute -inset-4 border border-olive/5 rounded-full pointer-events-none"
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Click Instruction */}
        {!isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="absolute -bottom-12 left-0 right-0 text-center text-olive/50 font-serif italic text-sm"
          >
            Haz clic para abrir
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};
