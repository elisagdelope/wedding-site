import React, { useState } from 'react';
import { motion } from 'motion/react';
import { MapPin, Calendar, Clock, Music, Heart, Send } from 'lucide-react';
import { Countdown } from './Countdown';
import { RSVPModal } from './RSVPModal';

export const InvitationContent = () => {
  const [isRSVPOpen, setIsRSVPOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-cream selection:bg-olive/10">
      {/* Hero Section - The "Card" */}
      <section className="h-screen flex flex-col items-center justify-center px-6 text-center relative overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <video
            src="/assets/masfolch-video.mp4" 
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          />
          {/* Overlay for text readability + bottom fade to olive (matches countdown section) */}
          <div className="absolute inset-0 bg-black/30" />
          <div className="absolute bottom-0 left-0 right-0 h-1/10 bg-gradient-to-b from-transparent to-cream" />
        </div>

<motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="max-w-2xl relative z-10"
        >
          <span className="font-serif italic text-white/90 text-lg sm:text-xl mb-4 block drop-shadow-md">
            ¡Nos casamos!
          </span>
          <h1 className="font-serif text-5xl sm:text-8xl text-white mb-8 tracking-tight drop-shadow-lg">
            Elisa <span className="text-3xl sm:text-5xl">&</span> Jordi
          </h1>
          <div className="w-24 h-[1px] bg-white/40 mx-auto mb-8" />
          <p className="font-serif text-xl sm:text-2xl text-white/90 max-w-md mx-auto leading-relaxed drop-shadow-md">
            Y nos gustaría teneros cerca en este día tan especial.
          </p>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-12 flex flex-col items-center gap-2 text-olive/40"
        >
          <span className="text-xs uppercase tracking-[0.2em] font-medium">Scroll</span>
          <div className="w-[1px] h-12 bg-olive/20" />
        </motion.div>
      </section>

      {/* Countdown Section */}
      <section className="relative py-24 bg-cream">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-serif text-3xl sm:text-4xl mb-10 text-olive">Comienza la cuenta atrás</h2>
          <Countdown targetDate="2026-10-03T12:30:00" />
        </div>
      </section>

      {/* Ceremony Details Section */}
      <section className="relative py-48 sm:py-56 px-6 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/assets/catedral-watercolor.png"
            alt="Catedral de Tarragona"
            className="w-full h-full object-contain"
          />
          <div className="absolute inset-0 bg-cream/60" />
          <div className="absolute top-0 left-0 right-0 h-1/6 bg-gradient-to-b from-cream to-transparent z-10" />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto text-center space-y-10">
          <h2 className="font-serif text-4xl sm:text-5xl text-olive">La ceremonia</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center gap-3">
              <Calendar className="w-6 h-6 text-olive/50" />
              <div>
                <p className="font-medium text-olive text-lg">Sábado, 3 de Octubre</p>
                <p className="text-olive/60">2026</p>
              </div>
            </div>
            <div className="flex flex-col items-center gap-3">
              <Clock className="w-6 h-6 text-olive/50" />
              <div>
                <p className="font-medium text-olive text-lg">12:30h</p>
              </div>
            </div>
            <div className="flex flex-col items-center gap-3">
              <MapPin className="w-6 h-6 text-olive/50" />
              <div>
                <p className="font-medium text-olive text-lg">Catedral de Tarragona</p>
                <p className="text-olive/60 italic">Tarragona, España</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Venue Section */}
      <section className="py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row gap-16 items-start">
            <div className="flex-1 space-y-8 md:pt-8">
              <h2 className="font-serif text-5xl text-olive">La celebración</h2>
              <p className="text-olive/70 text-lg leading-relaxed">
                Nos trasladaremos a Mas Folch para celebrar el banquete y la fiesta en un entorno idílico, rodeados de naturaleza y buena compañía.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-olive/5 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-olive" />
                  </div>
                  <div>
                    <h4 className="font-medium text-olive">Mas Folch</h4>
                    <p className="text-olive/60">Autovía Reus-Tarragona, Km. 4, 43110 Constantí</p>
                  </div>
                </div>
              </div>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Mas+Folch+Constantí"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-olive text-cream rounded-full hover:bg-olive-light transition-colors duration-300 font-medium tracking-wide"
              >
                Ver en Google Maps
              </a>
            </div>
            <div className="flex-1 w-full">
              <div className="aspect-[4/3] bg-offwhite rounded-3xl overflow-hidden relative shadow-2xl">
                <img
                  src="/assets/MasFolch-watercolor2.png"
                  alt="Mas Folch"
                  className="w-full h-full object-cover opacity-90 grayscale-[0.2]"
                />
                <div className="absolute inset-0 bg-olive/10 mix-blend-multiply" />
              </div>
            </div>
          </div>

          {/* Google Maps Preview */}
          <div className="mt-12 rounded-3xl overflow-hidden border border-olive/20 shadow-lg">
            <iframe
              src="https://www.google.com/maps?q=Mas%20Folch%20Constantí&z=11&output=embed"
              width="100%"
              height="250"
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mapa de Mas Folch"
              className="sepia-[0.15] hover:sepia-0 transition-all duration-500"
              style={{ border: 0 }}
            ></iframe>
          </div>
        </div>
      </section>

      {/* Transport Section */}
      <section className="py-32 bg-offwhite border-y border-olive/5">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-serif text-4xl sm:text-5xl mb-12 text-olive">Transporte</h2>
          
          <div className="max-w-2xl mx-auto space-y-16">
            <p className="text-olive/70 text-lg leading-relaxed font-serif italic">
              Hemos organizado autobuses desde el centro de Tarragona hasta el lugar de la celebración para que podáis disfrutar sin preocupaciones.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">
              <div className="space-y-4">
                <h4 className="text-xs uppercase tracking-[0.3em] font-bold text-olive/40">Salida del autobús</h4>
                <div className="space-y-1">
                  <p className="font-serif text-3xl text-olive">Plaza Imperial Tarraco</p>
                  <p className="font-serif text-5xl text-olive/30">14:00h</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <h4 className="text-xs uppercase tracking-[0.3em] font-bold text-olive/40">Regreso a Tarragona</h4>
                <div className="space-y-1">
                  <p className="font-serif text-3xl text-olive">Desde Mas Folch</p>
                  <p className="font-serif text-5xl text-olive/30">23:00h</p>
                </div>
              </div>
            </div>
            
            <div className="pt-8 border-t border-olive/10 space-y-4">
              <p className="text-olive/70 text-base leading-relaxed">
                La finca cuenta con un amplio parking, así que no hay ningún problema si preferís desplazaros en coche.
              </p>
              <p className="font-serif italic text-olive/50 text-lg">
                * Por favor, indicad en vuestro RSVP si necesitáis transporte
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* RSVP Floating Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsRSVPOpen(true)}
        className="fixed bottom-8 right-8 z-40 bg-olive text-cream px-8 py-4 rounded-full shadow-2xl flex items-center gap-3 font-medium tracking-widest uppercase text-xs sm:text-sm"
      >
        <Send className="w-4 h-4" />
        Confirmar Asistencia
      </motion.button>

      <RSVPModal isOpen={isRSVPOpen} onClose={() => setIsRSVPOpen(false)} />
      
      {/* Footer */}
      <footer className="py-24 text-center border-t border-olive/10">
        <p className="font-serif italic text-olive/40 text-lg">
          Con amor, Elisa & Jordi
        </p>
      </footer>
    </div>
  );
};
