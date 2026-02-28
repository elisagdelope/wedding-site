import React, { useRef, useState } from 'react';
import { motion } from 'motion/react';

interface EnvelopeProps {
  onOpen: () => void;
}

export const Envelope: React.FC<EnvelopeProps> = ({ onOpen }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [hasClicked, setHasClicked] = useState(false);
  const [isFading, setIsFading] = useState(false);

  const handleClick = () => {
    if (hasClicked) return;
    setHasClicked(true);

    const video = videoRef.current;
    if (video) {
      video.play();
      video.ontimeupdate = () => {
        if (video.duration - video.currentTime <= 1.3 && !isFading) {
          setIsFading(true);
        }
      };
      video.onended = () => {
        onOpen();
      };
    }
  };

  return (
    <motion.div
      className="relative w-full h-screen flex items-center justify-center bg-offwhite cursor-pointer overflow-hidden"
      onClick={handleClick}
      animate={{ opacity: isFading ? 0 : 1 }}
      transition={{ duration: 1.5, ease: 'easeInOut' }}
    >
      <video
        ref={videoRef}
        src="/assets/envelope.mp4"
        playsInline
        muted
        preload="auto"
        className="w-full h-full object-cover"
      />

      {/* Click instruction */}
      {!hasClicked && (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="absolute bottom-16 left-0 right-0 text-center text-olive/40 font-serif italic text-sm"
        >
          Toca para abrir
        </motion.p>
      )}
    </motion.div>
  );
};
