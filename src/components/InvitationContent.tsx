import React, { useState } from 'react';
import { motion } from 'motion/react';
import { MapPin, Calendar, Clock, Music, Heart, Send, Hotel, ExternalLink } from 'lucide-react';
import { Countdown } from './Countdown';
import { RSVPModal } from './RSVPModal';

export const InvitationContent = () => {
  const [isRSVPOpen, setIsRSVPOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-cream selection:bg-olive/10">
      {/* Hero Section - The "Card" */}
      <section className="h-dvh flex flex-col items-center justify-center px-6 text-center relative overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <video
            src="/assets/masfolch-video.mp4"
            autoPlay
            muted
            loop
            playsInline
            // @ts-ignore
            webkit-playsinline=""
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
          <Countdown targetDate="2026-10-03T12:00:00" />
        </div>
      </section>

      {/* Ceremony Details Section */}
      <section className="px-6">
        <div className="max-w-3xl mx-auto text-center pt-24 pb-8">
          <h2 className="font-serif text-5xl text-olive">La ceremonia</h2>
        </div>
      </section>
      <section className="relative py-20 sm:py-40 md:py-56 lg:py-72 px-6 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/assets/catedral-watercolor.png"
            alt="Catedral de Tarragona"
            className="w-full h-full object-cover md:object-contain"
          />
          <div className="absolute inset-0 bg-cream/60" />
          <div className="absolute top-0 left-0 right-0 h-1/6 bg-gradient-to-b from-cream to-transparent z-10" />
          <div className="absolute bottom-0 left-0 right-0 h-1/6 bg-gradient-to-b from-transparent to-cream z-10" />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto text-center">
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
                <p className="font-medium text-olive text-lg">12:00h</p>
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
                Tras el 'sí, quiero', os esperamos en Mas Folch para celebrar, brindar y bailar rodeados de naturaleza y buena compañía.
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

      {/* Autobús Section */}
      <section id="autobus" className="py-32 bg-offwhite border-y border-olive/5">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-serif text-4xl sm:text-5xl mb-6 text-olive">Autobús</h2>
          <p className="text-olive/70 text-lg leading-relaxed font-serif italic mb-16 max-w-2xl mx-auto">
            Para quienes hayáis indicado en el RSVP que necesitáis autobús, este es el trayecto de ida y vuelta entre Tarragona y Mas Folch.
          </p>

          <div className="max-w-2xl mx-auto space-y-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
              {/* Ida */}
              <div className="space-y-4">
                <h4 className="text-xs uppercase tracking-[0.3em] font-bold text-olive/40">Ida</h4>
                <div className="space-y-1">
                  <p className="font-serif text-3xl text-olive">Portal de Sant Antoni</p>
                  <p className="font-serif text-5xl text-olive/30">14:00h</p>
                  <p className="text-olive/50 text-sm">Salida aproximada</p>
                </div>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Portal+de+Sant+Antoni,+Tarragona"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-olive text-cream rounded-full hover:bg-olive-light transition-colors duration-300 font-medium text-sm tracking-wide"
                >
                  <MapPin className="w-4 h-4" />
                  Ver en Google Maps
                </a>
              </div>

              {/* Vuelta */}
              <div className="space-y-4">
                <h4 className="text-xs uppercase tracking-[0.3em] font-bold text-olive/40">Vuelta (2 paradas)</h4>

                <div className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-center gap-2">
                      <span className="w-5 h-5 rounded-full bg-olive text-cream flex items-center justify-center font-serif text-xs shrink-0">1</span>
                      <p className="font-serif text-xl text-olive">Plaça Imperial Tàrraco</p>
                    </div>
                    <p className="text-olive/50 text-sm leading-snug">
                      Hotel SB Ciutat Tarragona
                    </p>
                    <a
                      href="https://www.google.com/maps/search/?api=1&query=Plaça+Imperial+Tàrraco,+Tarragona"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-olive text-cream rounded-full hover:bg-olive-light transition-colors duration-300 font-medium text-sm tracking-wide"
                    >
                      <MapPin className="w-4 h-4" />
                      Ver en Google Maps
                    </a>
                  </div>

                  <div className="w-px h-5 bg-olive/20 mx-auto" />

                  <div className="space-y-2">
                    <div className="flex items-center justify-center gap-2">
                      <span className="w-5 h-5 rounded-full bg-olive text-cream flex items-center justify-center font-serif text-xs shrink-0">2</span>
                      <p className="font-serif text-xl text-olive">Portal de Sant Antoni</p>
                    </div>
                    <p className="text-olive/50 text-sm leading-snug">
                      Casco antiguo
                    </p>
                    <a
                      href="https://www.google.com/maps/search/?api=1&query=Portal+de+Sant+Antoni,+Tarragona"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-olive text-cream rounded-full hover:bg-olive-light transition-colors duration-300 font-medium text-sm tracking-wide"
                    >
                      <MapPin className="w-4 h-4" />
                      Ver en Google Maps
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Aparcamiento Section */}
      <section className="py-32 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-5xl text-olive text-center mb-6">Aparcamiento</h2>
          <p className="text-olive/60 text-center font-serif italic text-lg mb-16 max-w-2xl mx-auto">
            Si preferís venir en coche, aquí tenéis algunas opciones.
          </p>

          <div className="max-w-2xl mx-auto space-y-12">
            <div>
              <h3 className="text-xs uppercase tracking-[0.3em] font-bold text-olive/40 mb-3 text-center">En Tarragona</h3>
              <p className="text-olive/60 text-sm mb-6 max-w-md mx-auto text-center">
                Algunas opciones cerca del casco antiguo (tiempo aproximado a pie hasta la Catedral).
              </p>
              <div className="divide-y divide-olive/10 border border-olive/10 rounded-2xl overflow-hidden text-left">
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Circo+Park+Pavapark+Plaça+de+la+Font,+Tarragona"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between gap-4 px-5 py-4 hover:bg-offwhite transition-colors"
                >
                  <div>
                    <p className="font-medium text-olive text-sm inline-flex items-center gap-1.5">
                      Circo Park (Pavapark) · Pl. de la Font
                      <ExternalLink className="w-3 h-3 text-olive/40" />
                    </p>
                    <p className="text-olive/50 text-xs mt-0.5">Cubierto · 24 h · Reservable</p>
                    <p className="text-olive/60 text-xs italic mt-1">El acceso podría estar cerrado por la Diada Castellera</p>
                  </div>
                  <span className="text-olive/40 text-xs uppercase tracking-wide whitespace-nowrap shrink-0">4–5 min</span>
                </a>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Aparcamiento+Passeig+Torroja,+Tarragona"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between gap-4 px-5 py-4 hover:bg-offwhite transition-colors"
                >
                  <div>
                    <p className="font-medium text-olive text-sm inline-flex items-center gap-1.5">
                      Aparcamiento Pg. Torroja
                      <ExternalLink className="w-3 h-3 text-olive/40" />
                    </p>
                    <p className="text-olive/50 text-xs mt-0.5">Exterior · Municipal · 24 h</p>
                  </div>
                  <span className="text-olive/40 text-xs uppercase tracking-wide whitespace-nowrap shrink-0">5–7 min</span>
                </a>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Parking+Saavedra,+Tarragona"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between gap-4 px-5 py-4 hover:bg-offwhite transition-colors"
                >
                  <div>
                    <p className="font-medium text-olive text-sm inline-flex items-center gap-1.5">
                      Parking Saavedra
                      <ExternalLink className="w-3 h-3 text-olive/40" />
                    </p>
                    <p className="text-olive/50 text-xs mt-0.5">Cubierto · Municipal · 24 h</p>
                  </div>
                  <span className="text-olive/40 text-xs uppercase tracking-wide whitespace-nowrap shrink-0">6–8 min</span>
                </a>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Aparcament+Avinguda+Catalunya,+Tarragona"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between gap-4 px-5 py-4 hover:bg-offwhite transition-colors"
                >
                  <div>
                    <p className="font-medium text-olive text-sm inline-flex items-center gap-1.5">
                      Aparcament Av. Catalunya
                      <ExternalLink className="w-3 h-3 text-olive/40" />
                    </p>
                    <p className="text-olive/50 text-xs mt-0.5">Cubierto · Municipal · 24 h</p>
                  </div>
                  <span className="text-olive/40 text-xs uppercase tracking-wide whitespace-nowrap shrink-0">7–9 min</span>
                </a>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Aparcamiento+del+Cementerio,+Tarragona"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between gap-4 px-5 py-4 hover:bg-offwhite transition-colors"
                >
                  <div>
                    <p className="font-medium text-olive text-sm inline-flex items-center gap-1.5">
                      Aparcamiento del Cementerio
                      <ExternalLink className="w-3 h-3 text-olive/40" />
                    </p>
                    <p className="text-olive/50 text-xs mt-0.5">Exterior · Gratuito</p>
                  </div>
                  <span className="text-olive/40 text-xs uppercase tracking-wide whitespace-nowrap shrink-0">~10 min</span>
                </a>
              </div>
            </div>

            <div className="text-center space-y-2">
              <h3 className="text-xs uppercase tracking-[0.3em] font-bold text-olive/40">En Mas Folch</h3>
              <p className="text-olive/70 text-base leading-relaxed">
                La finca cuenta con un amplio parking propio, así que no hay ningún problema si preferís desplazaros directamente en coche hasta allí.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Accommodation Section */}
      <section className="py-32 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-5xl text-olive text-center mb-6">Alojamiento</h2>
          <p className="text-olive/60 text-center font-serif italic text-lg mb-16 max-w-2xl mx-auto">
            Hemos conseguido descuentos especiales en estos hoteles para nuestros invitados.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Hotel Lauria */}
            <div className="border border-olive/10 rounded-2xl p-8 space-y-5">
              <div className="flex items-center gap-3">
                <Hotel className="w-5 h-5 text-olive/40" />
                <h3 className="font-serif text-2xl text-olive">Hotel Lauria</h3>
              </div>

              <div className="space-y-3 text-olive/70 text-sm leading-relaxed">
                <p>
                  <span className="font-medium text-olive">17% de descuento</span> sobre tarifa flexible
                </p>
                <div className="bg-offwhite rounded-lg px-4 py-3 flex items-center justify-between">
                  <span className="text-xs uppercase tracking-[0.2em] text-olive/40">Código</span>
                  <span className="font-medium text-olive tracking-wide">BODAELISAJORDI</span>
                </div>
                <ul className="space-y-1.5 text-olive/60">
                  <li>Válido del 25/09 al 11/10/2026</li>
                  <li>Estancia mínima de 2 noches</li>
                  <li>Reservar antes del 19/09/2026</li>
                  <li>Cancelable hasta el día anterior (12h)</li>
                </ul>
              </div>

              <a
                href="https://www.hotel-lauria.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-olive font-medium text-sm hover:text-olive-light transition-colors"
              >
                Reservar <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* SB Hotel Ciutat de Tarragona */}
            <div className="border border-olive/10 rounded-2xl p-8 space-y-5">
              <div className="flex items-center gap-3">
                <Hotel className="w-5 h-5 text-olive/40" />
                <h3 className="font-serif text-2xl text-olive">SB Ciutat de Tarragona</h3>
              </div>

              <div className="space-y-3 text-olive/70 text-sm leading-relaxed">
                <p>
                  <span className="font-medium text-olive">10% de descuento</span> sobre cualquier oferta
                  <span className="text-olive/50"> (+5% extra al darse de alta en SB People)</span>
                </p>
                <div className="bg-offwhite rounded-lg px-4 py-3 flex items-center justify-between">
                  <span className="text-xs uppercase tracking-[0.2em] text-olive/40">Código</span>
                  <span className="font-medium text-olive tracking-wide">D6-ELISA&JORDI</span>
                </div>
                <ul className="space-y-1.5 text-olive/60">
                  <li>Válido para las noches del 2 y 3 de octubre</li>
                </ul>
              </div>

              <a
                href="https://www.sb-hotels.com/ca/hotels/tarragona/ciutat-tarragona/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-olive font-medium text-sm hover:text-olive-light transition-colors"
              >
                Reservar <ExternalLink className="w-3.5 h-3.5" />
              </a>
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
