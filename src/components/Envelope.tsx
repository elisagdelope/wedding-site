import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface EnvelopeProps {
  onOpen: () => void;
  initials: string;
}

export const Envelope: React.FC<EnvelopeProps> = ({ onOpen, initials }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    if (isOpen) return;
    setIsOpen(true);
    setTimeout(onOpen, 2200);
  };

  // Center point where envelope flaps meet (slightly below center for realism)
  const cx = '50%';
  const cy = '58%';

  return (
    <div className="relative w-full h-screen flex flex-col items-center justify-center bg-offwhite overflow-hidden">
      {/* Subtle background texture */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: 'radial-gradient(circle, #5A5A40 1px, transparent 1px)',
          backgroundSize: '30px 30px',
        }}
      />

      <motion.div
        initial={{ scale: 0.85, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
        className="relative cursor-pointer"
        onClick={handleOpen}
      >
        {/* Envelope container — perspective lives here for 3D flap */}
        <div
          className="relative w-[320px] h-[230px] sm:w-[460px] sm:h-[320px]"
          style={{ perspective: '1200px' }}
        >
          {/* Envelope back panel */}
          <div className="absolute inset-0 rounded-sm bg-[#E8E4DC] shadow-[0_25px_60px_rgba(0,0,0,0.12),0_8px_20px_rgba(0,0,0,0.08)]" />

          {/* The card that slides out */}
          <motion.div
            initial={false}
            animate={
              isOpen
                ? { y: '-60%', opacity: 1, scale: 1 }
                : { y: '0%', opacity: 0, scale: 0.96 }
            }
            transition={{
              duration: 1.4,
              delay: isOpen ? 0.5 : 0,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="absolute inset-x-4 top-4 bottom-4 bg-cream rounded-sm flex flex-col items-center justify-center p-8 text-center z-10 shadow-[0_8px_30px_rgba(0,0,0,0.1)]"
          >
            <span className="font-serif text-xs sm:text-sm text-olive/50 uppercase tracking-[0.3em] mb-3">
              Nuestra Boda
            </span>
            <div className="w-12 h-[1px] bg-olive/20 mb-4" />
            <span className="font-serif text-3xl sm:text-5xl text-olive">
              {initials}
            </span>
            <div className="w-12 h-[1px] bg-olive/20 mt-4 mb-3" />
            <span className="font-serif text-xs sm:text-sm text-olive/40 italic">
              3 · Octubre · 2026
            </span>
          </motion.div>

          {/* Envelope front — left flap */}
          <div
            className="absolute inset-0 z-20"
            style={{
              clipPath: `polygon(0 0, ${cx} ${cy}, 0 100%)`,
              backgroundColor: '#EEEAE3',
            }}
          />

          {/* Envelope front — right flap */}
          <div
            className="absolute inset-0 z-20"
            style={{
              clipPath: `polygon(100% 0, ${cx} ${cy}, 100% 100%)`,
              backgroundColor: '#EEEAE3',
            }}
          />

          {/* Envelope front — bottom flap */}
          <div
            className="absolute inset-0 z-20"
            style={{
              clipPath: `polygon(0 100%, ${cx} ${cy}, 100% 100%)`,
              backgroundColor: '#E0DCD4',
            }}
          />

          {/* Subtle fold lines for depth */}
          <div
            className="absolute inset-0 z-20 pointer-events-none"
            style={{
              background: `linear-gradient(to bottom right, transparent 49%, rgba(0,0,0,0.03) 50%, transparent 51%)`,
            }}
          />

          {/* Top flap — this opens with 3D rotation */}
          <motion.div
            initial={false}
            animate={isOpen ? { rotateX: 180 } : { rotateX: 0 }}
            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
            className="absolute inset-0 origin-top"
            style={{
              clipPath: `polygon(0 0, ${cx} ${cy}, 100% 0)`,
              backgroundColor: '#F2EFE9',
              transformStyle: 'preserve-3d',
              backfaceVisibility: 'hidden',
              zIndex: isOpen ? 15 : 30,
            }}
          />

          {/* Top flap — back face (darker, visible when flap opens) */}
          <motion.div
            initial={false}
            animate={isOpen ? { rotateX: 180 } : { rotateX: 0 }}
            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
            className="absolute inset-0 origin-top"
            style={{
              clipPath: `polygon(0 0, ${cx} ${cy}, 100% 0)`,
              backgroundColor: '#D8D4CC',
              transformStyle: 'preserve-3d',
              backfaceVisibility: 'hidden',
              transform: 'rotateX(180deg)',
              zIndex: isOpen ? 16 : 0,
            }}
          />

          {/* Wax seal */}
          <AnimatePresence>
            {!isOpen && (
              <motion.div
                exit={{ opacity: 0, scale: 0.5 }}
                transition={{ duration: 0.3 }}
                className="absolute z-40"
                style={{
                  left: cx,
                  top: cy,
                  transform: 'translate(-50%, -50%)',
                }}
              >
                <motion.div
                  animate={{ scale: [1, 1.03, 1] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  className="w-14 h-14 sm:w-[68px] sm:h-[68px] rounded-full flex items-center justify-center"
                  style={{
                    background:
                      'radial-gradient(circle at 35% 35%, #6A6A48 0%, #4A4A30 50%, #3A3A20 100%)',
                    boxShadow:
                      '0 4px 15px rgba(0,0,0,0.3), inset 0 -2px 4px rgba(0,0,0,0.2), inset 0 2px 4px rgba(255,255,255,0.08)',
                  }}
                >
                  <div
                    className="w-9 h-9 sm:w-11 sm:h-11 rounded-full border border-[#7A7A5A]/30 flex items-center justify-center"
                    style={{
                      boxShadow: 'inset 0 2px 6px rgba(0,0,0,0.3)',
                    }}
                  >
                    <span
                      className="font-serif text-[#9A9A7A] text-sm sm:text-base"
                      style={{
                        textShadow: '0 1px 2px rgba(0,0,0,0.3)',
                      }}
                    >
                      E&J
                    </span>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Subtle edge */}
          <div className="absolute inset-0 z-20 rounded-sm border border-black/[0.03] pointer-events-none" />
        </div>

        {/* Click instruction */}
        <AnimatePresence>
          {!isOpen && (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 1.5, duration: 0.8 }}
              className="text-center text-olive/40 font-serif italic text-sm mt-10"
            >
              Toca para abrir
            </motion.p>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};
