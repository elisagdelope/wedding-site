import React, { useRef, useState, useCallback } from 'react';
import { motion } from 'motion/react';

interface EnvelopeProps {
  onOpen: () => void;
}

export const Envelope: React.FC<EnvelopeProps> = ({ onOpen }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [hasClicked, setHasClicked] = useState(false);
  const [isFading, setIsFading] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const hasCalledOpen = useRef(false);

  const triggerOpen = useCallback(() => {
    if (hasCalledOpen.current) return;
    hasCalledOpen.current = true;
    onOpen();
  }, [onOpen]);

  const handleClick = () => {
    if (hasClicked) return;
    setHasClicked(true);

    const video = videoRef.current;
    if (video) {
      const playPromise = video.play();

      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            // Video started — fade out the poster image
            setIsPlaying(true);
          })
          .catch(() => {
            triggerOpen();
          });
      }

      video.ontimeupdate = () => {
        if (video.duration && video.duration - video.currentTime <= 1.3 && !isFading) {
          setIsFading(true);
        }
      };

      video.onended = () => {
        triggerOpen();
      };

      if (video.duration && isFinite(video.duration)) {
        setTimeout(triggerOpen, (video.duration * 1000) + 500);
      } else {
        video.onloadedmetadata = () => {
          setTimeout(triggerOpen, (video.duration * 1000) + 500);
        };
      }
    }
  };

  return (
    <motion.div
      className="relative w-full h-dvh flex items-center justify-center bg-offwhite cursor-pointer overflow-hidden"
      onClick={handleClick}
      animate={{ opacity: isFading ? 0 : 1 }}
      transition={{ duration: 1.5, ease: 'easeInOut' }}
    >
      <video
        ref={videoRef}
        src="/assets/envelope.mp4"
        playsInline
        // @ts-ignore — needed for older iOS Safari
        webkit-playsinline=""
        muted
        preload="auto"
        className="w-full h-full object-cover"
      />

      {/* Poster image overlay — fades out smoothly when video starts */}
      <motion.img
        src="/assets/envelope-poster.jpg"
        alt=""
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        animate={{ opacity: isPlaying ? 0 : 1 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
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
