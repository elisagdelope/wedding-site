import React from 'react';
import { ArrowUpRight, MapPin, UtensilsCrossed } from 'lucide-react';

type Place = {
  name: string;
  area: string;
  style: string;
  pick: string;
  budget: string;
  mapQuery: string;
  instagram?: string;
};

const tapas: Place[] = [
  {
    name: 'La Treva',
    area: 'Cós del Bou, 8 · Part Alta',
    style: 'Bar cultural, cerveza y tapas para alargar la tarde con amigos.',
    pick: 'Tortilla, torradas y bocadillos a la plancha.',
    budget: 'Bocadillos desde 7,50 €',
    mapQuery: 'La Treva Cós del Bou 8 Tarragona',
    instagram: 'https://www.instagram.com/latrevatarragona/',
  },
  {
    name: 'La Botifarra',
    area: 'Cardenal Cervantes, 5 · Centro',
    style: 'Un clásico informal de torradas y embutidos catalanes.',
    pick: 'Torradas para compartir y tarta de queso.',
    budget: 'Orientativo: 10–20 € por persona',
    mapQuery: 'Bar La Botifarra Cardenal Cervantes 5 Tarragona',
    instagram: 'https://www.instagram.com/labotifarratgn/',
  },
  {
    name: 'Tárakon',
    area: 'Plaça del Fòrum, 1 · Part Alta',
    style: 'Tapeo en una de las plazas con más ambiente del casco antiguo.',
    pick: 'Croquetas, tostadas y algo de vermut en la terraza.',
    budget: 'Orientativo: 10–20 € por persona',
    mapQuery: 'Tárakon Plaça del Fòrum 1 Tarragona',
  },
  {
    name: '10 de Tapas',
    area: 'Torres Jordi, 10 · Centro bajo',
    style: 'Raciones caseras y terraza, también para una comida sin ceremonia.',
    pick: 'Tortilla de patatas, croquetas y bravas.',
    budget: 'Orientativo: 10–20 € por persona',
    mapQuery: '10 de Tapas Torres Jordi 10 Tarragona',
    instagram: 'https://www.instagram.com/10detapas/',
  },
];

const quickBites: Place[] = [
  {
    name: 'son’S Cubanos',
    area: 'Lleida, 1 · Centro',
    style: 'Cocina cubana, bocadillos y un ambiente animado para ir en grupo.',
    pick: 'Más de veinte bocadillos y opciones de plato.',
    budget: 'Bocadillos desde 3 €',
    mapQuery: "son'S Cubanos Carrer de Lleida 1 Tarragona",
  },
  {
    name: 'Sabor y Sazón de Niurka',
    area: 'Arquitecte Rovira, 3 · Centro',
    style: 'Cocina venezolana casera para comer algo rápido y sabroso.',
    pick: 'Empanadas, arepas y tequeños.',
    budget: 'Empanadas desde 5 €',
    mapQuery: 'Sabor y Sazón de Niurka Arquitecte Rovira 3 Tarragona',
  },
];

function PlaceCard({ place }: { place: Place; key?: string }) {
  const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(place.mapQuery)}`;

  return (
    <article className="flex h-full flex-col rounded-2xl border border-olive/10 bg-cream p-6 sm:p-7">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <h4 className="font-serif text-3xl leading-none text-olive">{place.name}</h4>
        <span className="rounded-full bg-olive/5 px-3 py-1.5 text-xs font-medium text-olive/75">{place.budget}</span>
      </div>
      <p className="mt-4 flex items-start gap-1.5 text-xs text-olive/50">
        <MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0" aria-hidden="true" />
        {place.area}
      </p>
      <p className="mt-4 text-sm leading-relaxed text-olive/70">{place.style}</p>
      <p className="mt-2 text-sm italic leading-relaxed text-olive/55">Para pedir: {place.pick}</p>
      <div className="mt-auto flex flex-wrap gap-x-5 gap-y-2 pt-6 text-xs font-medium">
        <a href={mapUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-olive underline decoration-olive/30 underline-offset-4 hover:decoration-olive focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-olive" aria-label={`Ver ${place.name} en Google Maps (se abre en otra pestaña)`}>
          Ver en Maps <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
        </a>
        {place.instagram && <a href={place.instagram} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-olive underline decoration-olive/30 underline-offset-4 hover:decoration-olive focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-olive" aria-label={`Ver Instagram de ${place.name} (se abre en otra pestaña)`}>Instagram <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" /></a>}
      </div>
    </article>
  );
}

export function FoodGuide() {
  return (
    <section id="comer-en-tarragona" className="border-t border-olive/10 bg-cream px-6 py-24 sm:py-32" aria-labelledby="food-title">
      <div className="mx-auto max-w-5xl">
        <div className="mx-auto max-w-3xl text-center">
          <UtensilsCrossed className="mx-auto mb-5 h-7 w-7 stroke-1 text-olive/50" aria-hidden="true" />
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.3em] text-olive/50">Para quedar con los amigos</p>
          <h2 id="food-title" className="font-serif text-5xl text-olive sm:text-6xl">Comer y tapear en Tarragona</h2>
          <p className="mt-6 font-serif text-xl italic leading-relaxed text-olive/65 sm:text-2xl">Sitios informales para compartir unas tapas, tomar algo y seguir la conversación sin gastar demasiado.</p>
        </div>

        <div className="mt-14">
          <h3 className="mb-6 font-serif text-3xl text-olive">De tapeo</h3>
          <div className="grid gap-4 md:grid-cols-2">{tapas.map((place) => <PlaceCard key={place.name} place={place} />)}</div>
        </div>
        <div className="mt-14">
          <h3 className="mb-6 font-serif text-3xl text-olive">Para comer por poco</h3>
          <div className="grid gap-4 md:grid-cols-2">{quickBites.map((place) => <PlaceCard key={place.name} place={place} />)}</div>
        </div>

        <p className="mx-auto mt-10 max-w-2xl text-center text-xs leading-relaxed text-olive/50">Precios orientativos de cartas y guías consultadas en septiembre de 2026. Comprobad carta, horarios y disponibilidad antes de ir; el gasto depende de lo que pidáis.</p>
      </div>
    </section>
  );
}
