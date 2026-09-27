import React, { useState } from 'react';
import { ArrowUpRight, Compass, MapPin, UtensilsCrossed } from 'lucide-react';
import { foodSuggestions, guidePlans, type Stop } from './tarragonaGuide';

const mapsUrl = (query: string) =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;

function StopItem({ stop, number }: { stop: Stop; number: number; key?: string }) {
  return (
    <li className="group relative flex gap-4 pb-7 last:pb-0">
      <span className="absolute left-[15px] top-8 bottom-0 w-px bg-olive/15 group-last:hidden" aria-hidden="true" />
      <span className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-olive/20 bg-cream font-serif text-sm text-olive/70">
        {number}
      </span>
      <div className="min-w-0 pt-0.5">
        <h4 className="font-serif text-2xl leading-none text-olive">{stop.name}</h4>
        <p className="mt-2 text-sm leading-relaxed text-olive/65">{stop.description}</p>
        <a
          href={mapsUrl(stop.mapQuery)}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 inline-flex items-center gap-1 text-xs font-medium text-olive underline decoration-olive/30 underline-offset-4 hover:decoration-olive focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-olive"
          aria-label={`Ver ${stop.name} en Google Maps (se abre en otra pestaña)`}
        >
          Ver en el mapa <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
        </a>
      </div>
    </li>
  );
}

export function TarragonaGuide() {
  const [selected, setSelected] = useState(guidePlans[0].id);
  const plan = guidePlans.find((item) => item.id === selected)!;

  return (
    <section id="descubre-tarragona" className="border-t border-olive/5 bg-offwhite px-6 py-24 sm:py-32" aria-labelledby="tarragona-title">
      <div className="mx-auto max-w-5xl">
        <div className="mx-auto max-w-2xl text-center">
          <Compass className="mx-auto mb-5 h-7 w-7 stroke-1 text-olive/50" aria-hidden="true" />
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.3em] text-olive/50">Un poco más de viaje</p>
          <h2 id="tarragona-title" className="font-serif text-5xl text-olive sm:text-6xl">Descubre Tarragona</h2>
          <p className="mt-6 font-serif text-xl italic leading-relaxed text-olive/65 sm:text-2xl">
            Si aprovecháis el viaje para quedaros unos días, aquí van algunas ideas para conocer nuestra tierra.
          </p>
        </div>

        <div className="mx-auto mt-12 flex max-w-xl flex-wrap justify-center gap-2" aria-label="Duración de la visita">
          {guidePlans.map((item) => (
            <button
              key={item.id}
              type="button"
              aria-pressed={selected === item.id}
              onClick={() => setSelected(item.id)}
              className={`rounded-full border px-5 py-3 text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-olive ${selected === item.id ? 'border-olive bg-olive text-cream' : 'border-olive/20 bg-cream text-olive hover:bg-olive/5'}`}
            >
              {item.label}
            </button>
          ))}
        </div>

        <div key={plan.id} className="mt-12 rounded-3xl border border-olive/10 bg-cream p-6 shadow-sm sm:p-10">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-olive/45">{plan.eyebrow}</p>
            <p className="mt-3 font-serif text-2xl leading-snug text-olive sm:text-3xl">{plan.introduction}</p>
          </div>
          <div className="mt-10 grid gap-10 border-t border-olive/10 pt-10 md:grid-cols-2">
            {plan.days.map((day) => (
              <div key={day.title}>
                <div className="mb-7 flex items-start gap-3">
                  <MapPin className="mt-1 h-5 w-5 shrink-0 text-olive/50" aria-hidden="true" />
                  <div>
                    <h3 className="font-serif text-3xl text-olive">{day.title}</h3>
                    <p className="mt-1 text-sm text-olive/55">{day.subtitle}</p>
                  </div>
                </div>
                <ol>{day.stops.map((stop, index) => <StopItem key={`${day.title}-${stop.name}`} stop={stop} number={index + 1} />)}</ol>
              </div>
            ))}
          </div>
          {plan.note && <p className="mt-9 rounded-2xl bg-offwhite px-5 py-4 text-sm leading-relaxed text-olive/70">{plan.note}</p>}
        </div>

        <div className="mt-12 grid gap-6 border-t border-olive/10 pt-10 md:grid-cols-[1fr_2fr]">
          <div>
            <UtensilsCrossed className="mb-4 h-6 w-6 stroke-1 text-olive/50" aria-hidden="true" />
            <h3 className="font-serif text-3xl text-olive">Para comer y brindar</h3>
            <p className="mt-2 text-sm leading-relaxed text-olive/60">Algunas ideas del itinerario. Consultad horarios y reservad antes de ir.</p>
          </div>
          <div className="grid gap-3 sm:grid-cols-3">
            {foodSuggestions.map((item) => (
              <div key={item.area} className="rounded-2xl border border-olive/10 bg-cream p-5">
                <h4 className="font-serif text-xl text-olive">{item.area}</h4>
                <p className="mt-2 text-sm leading-relaxed text-olive/65">{item.names}</p>
                <a href={mapsUrl(item.mapQuery)} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center gap-1 text-xs font-medium text-olive underline decoration-olive/30 underline-offset-4 hover:decoration-olive focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-olive" aria-label={`Explorar restaurantes en ${item.area} en Google Maps (se abre en otra pestaña)`}>
                  Explorar la zona <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                </a>
              </div>
            ))}
          </div>
        </div>
        <p className="mt-10 text-center text-xs leading-relaxed text-olive/50">Los horarios y accesos a los monumentos pueden cambiar. Comprobadlos antes de la visita.</p>
      </div>
    </section>
  );
}
