import React from 'react';
import { ArrowUpRight, ChevronDown, Compass, MapPin } from 'lucide-react';
import { days, essentials, type Visit } from './tarragonaData';

const mapsUrl = (query: string) =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;

function VisitItem({ visit }: { visit: Visit; key?: string }) {
  return (
    <li className="grid gap-2 border-t border-olive/10 py-6 first:border-0 first:pt-0 sm:grid-cols-[5rem_1fr] sm:gap-6">
      <span className="pt-1 text-xs font-semibold tracking-[0.2em] text-olive/45">{visit.time}</span>
      <div>
        <div className="flex flex-wrap items-baseline gap-2">
          <h4 className="font-serif text-2xl leading-tight text-olive sm:text-[1.8rem]">{visit.title}</h4>
          {visit.optional && <span className="rounded-full bg-olive/5 px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider text-olive/60">Opcional</span>}
        </div>
        <p className="mt-2 text-sm leading-relaxed text-olive/70">{visit.description}</p>
        {visit.detail && <p className="mt-2 text-sm italic leading-relaxed text-olive/55">{visit.detail}</p>}
        {visit.mapQuery && <a href={mapsUrl(visit.mapQuery)} target="_blank" rel="noopener noreferrer" className="mt-3 inline-flex items-center gap-1 text-xs font-medium text-olive underline decoration-olive/30 underline-offset-4 hover:decoration-olive focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-olive" aria-label={`Ver ${visit.title} en Google Maps (se abre en otra pestaña)`}>Ver en el mapa <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" /></a>}
      </div>
    </li>
  );
}

export function TarragonaGuide() {
  return (
    <section id="descubre-tarragona" className="border-t border-olive/5 bg-offwhite px-6 py-24 sm:py-32" aria-labelledby="tarragona-title">
      <div className="mx-auto max-w-5xl">
        <div className="mx-auto max-w-3xl text-center">
          <Compass className="mx-auto mb-5 h-7 w-7 stroke-1 text-olive/50" aria-hidden="true" />
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.3em] text-olive/50">Una guía para vuestra escapada</p>
          <h2 id="tarragona-title" className="font-serif text-5xl text-olive sm:text-6xl">Descubre Tarragona</h2>
          <p className="mt-6 font-serif text-xl italic leading-relaxed text-olive/65 sm:text-2xl">Si os quedáis unos días más, os proponemos un viaje por la Tàrraco romana, el mar y los pueblos de alrededor.</p>
          <p className="mt-5 text-sm leading-relaxed text-olive/60">El recorrido está pensado para tres días. Podéis abrir solo los días que os interesen y adaptarlo a vuestro ritmo.</p>
        </div>

        <div className="mx-auto mt-10 max-w-3xl rounded-2xl border border-olive/10 bg-cream px-5 py-4 text-center text-sm leading-relaxed text-olive/65 sm:px-8">
          Las horas son orientativas. Comprobad la apertura de los monumentos y reservad restaurantes antes de ir. Dejad libre el día de la boda para celebrar con nosotros.
        </div>

        <div className="mt-12 space-y-4">
          {days.map((day, index) => (
            <details key={day.number} open={index === 0} className="group rounded-3xl border border-olive/10 bg-cream shadow-sm open:shadow-md">
              <summary className="flex cursor-pointer list-none items-center gap-5 p-6 marker:hidden focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-olive sm:gap-8 sm:p-9 [&::-webkit-details-marker]:hidden">
                <span className="flex h-14 w-14 shrink-0 flex-col items-center justify-center rounded-full border border-olive/20 font-serif text-olive sm:h-16 sm:w-16"><span className="text-[10px] uppercase tracking-widest">Día</span><span className="text-2xl leading-none">{day.number}</span></span>
                <span className="min-w-0 flex-1"><span className="block font-serif text-2xl leading-tight text-olive sm:text-4xl">{day.title}</span><span className="mt-2 block text-sm leading-relaxed text-olive/60">{day.subtitle}</span></span>
                <ChevronDown className="h-5 w-5 shrink-0 text-olive/50 transition-transform group-open:rotate-180" aria-hidden="true" />
              </summary>
              <div className="border-t border-olive/10 px-6 pb-7 pt-6 sm:px-9 sm:pb-10">
                <p className="mb-7 flex items-start gap-2 text-xs font-medium uppercase leading-relaxed tracking-[0.12em] text-olive/50"><MapPin className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />{day.practical}</p>
                <ol>{day.visits.map((visit) => <VisitItem key={`${day.number}-${visit.time}-${visit.title}`} visit={visit} />)}</ol>
              </div>
            </details>
          ))}
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          <div className="rounded-3xl border border-olive/10 bg-cream p-7 sm:p-9">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-olive/45">Si tenéis menos tiempo</p>
            <h3 className="mt-3 font-serif text-4xl text-olive">Solo dos días</h3>
            <p className="mt-4 text-sm leading-relaxed text-olive/70">Haced el primer día completo y, en el segundo, elegid entre más Tarragona romana y el Serrallo, o una excursión a Pont del Diable, Altafulla y Els Munts si contáis con transporte.</p>
            <p className="mt-4 text-sm italic leading-relaxed text-olive/55">No intentéis verlo todo: el itinerario gana mucho si deja tiempo para un vermut, el mar y pasear sin reloj.</p>
          </div>
          <div className="rounded-3xl border border-olive/10 bg-cream p-7 sm:p-9">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-olive/45">Para escoger a vuestro gusto</p>
            <h3 className="mt-3 font-serif text-4xl text-olive">12 lugares imprescindibles</h3>
            <ol className="mt-5 grid grid-cols-2 gap-x-5 gap-y-2 text-sm leading-relaxed text-olive/70">
              {essentials.map((place, index) => <li key={place}><span className="mr-2 font-serif text-lg text-olive/40">{String(index + 1).padStart(2, '0')}</span>{place}</li>)}
            </ol>
          </div>
        </div>

        <p className="mx-auto mt-10 max-w-2xl text-center text-xs leading-relaxed text-olive/50">Esta guía adapta el itinerario que preparamos para nuestros invitados. Las propuestas de restaurantes son ideas para elegir, sujetas a disponibilidad.</p>
      </div>
    </section>
  );
}
