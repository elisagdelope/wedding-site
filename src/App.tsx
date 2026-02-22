import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Envelope } from './components/Envelope';
import { InvitationContent } from './components/InvitationContent';
import { Birds } from './components/Birds';

export default function App() {
  const [isOpened, setIsOpened] = useState(false);

  return (
    <main className="relative min-h-screen bg-offwhite">
      <Birds />
      
      <AnimatePresence mode="wait">
        {!isOpened ? (
          <motion.div
            key="envelope"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="fixed inset-0 z-50"
          >
            <Envelope onOpen={() => setIsOpened(true)} initials="E & J" />
          </motion.div>
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          >
            <InvitationContent />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
