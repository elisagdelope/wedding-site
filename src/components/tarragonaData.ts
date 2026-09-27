export type Stop = {
  name: string;
  description: string;
  mapQuery: string;
};

export type GuideDay = {
  title: string;
  subtitle: string;
  stops: Stop[];
};

export type GuidePlan = {
  id: 'tarde' | 'dos-dias' | 'tres-dias';
  label: string;
  eyebrow: string;
  introduction: string;
  days: GuideDay[];
  note?: string;
};

const partAlta: Stop = {
  name: 'Part Alta y Catedral',
  description: 'Calles con historia, plazas para perderse y el corazón de la ciudad antigua.',
  mapQuery: 'Catedral de Tarragona',
};
const circus: Stop = {
  name: 'Circo y Pretorio',
  description: 'Un paseo por las bóvedas y los restos de la Tàrraco romana.',
  mapQuery: 'Circ Romà Tarragona',
};
const amphitheatre: Stop = {
  name: 'Anfiteatro',
  description: 'La postal romana de Tarragona, junto al Mediterráneo.',
  mapQuery: 'Amfiteatre de Tarragona',
};
const balcony: Stop = {
  name: 'Balcó del Mediterrani',
  description: 'Una parada para mirar al mar antes de pasear por la Rambla Nova.',
  mapQuery: 'Balcó del Mediterrani Tarragona',
};
const serrallo: Stop = {
  name: 'El Serrallo',
  description: 'El barrio marinero, ideal para acabar el día paseando o cenando.',
  mapQuery: 'El Serrallo Tarragona',
};

export const guidePlans: GuidePlan[] = [
  {
    id: 'tarde',
    label: 'Una tarde',
    eyebrow: 'Si tenéis unas horas',
    introduction: 'Una primera vuelta por Tarragona, sin prisas y con el mar al final del camino.',
    days: [
      {
        title: 'Lo esencial de Tarragona',
        subtitle: 'Un paseo por el centro',
        stops: [partAlta, circus, amphitheatre, balcony, serrallo],
      },
    ],
  },
  {
    id: 'dos-dias',
    label: 'Dos días',
    eyebrow: 'Para conocer la ciudad',
    introduction: 'Dos paseos a pie para combinar la Tarragona romana, la vida del centro y el mar.',
    days: [
      {
        title: 'Día 1 · La Tarragona romana',
        subtitle: 'Part Alta y paseo hacia el mar',
        stops: [
          {
            name: 'Murallas y Passeig Arqueològic',
            description: 'Un buen comienzo para situarse en la antigua Tàrraco.',
            mapQuery: 'Passeig Arqueològic Tarragona',
          },
          partAlta,
          circus,
          amphitheatre,
          balcony,
        ],
      },
      {
        title: 'Día 2 · La ciudad de hoy',
        subtitle: 'Mercado, historia y barrio marinero',
        stops: [
          {
            name: 'Mercat Central',
            description: 'Un paseo por el mercado y la Plaça Corsini, con tiempo para un vermut.',
            mapQuery: 'Mercat Central de Tarragona',
          },
          {
            name: 'Fòrum de la Colònia',
            description: 'Otra cara de la ciudad romana, cerca del centro.',
            mapQuery: 'Fòrum de la Colònia Tarragona',
          },
          serrallo,
        ],
      },
    ],
    note: '¿Tenéis coche? Podéis cambiar parte del segundo día por el Pont del Diable, en las afueras.',
  },
  {
    id: 'tres-dias',
    label: 'Tres días',
    eyebrow: 'Si alargáis la escapada',
    introduction: 'A los dos paseos por Tarragona se suma una excursión por los alrededores.',
    days: [
      {
        title: 'Día 1 · La Tarragona romana',
        subtitle: 'Part Alta y paseo hacia el mar',
        stops: [
          { name: 'Murallas', description: 'Empezad por la antigua entrada a Tàrraco.', mapQuery: 'Passeig Arqueològic Tarragona' },
          partAlta,
          circus,
          amphitheatre,
          balcony,
        ],
      },
      {
        title: 'Día 2 · Mercado y mar',
        subtitle: 'Un ritmo más tranquilo',
        stops: [
          { name: 'Mercat Central', description: 'Mercado, Plaça Corsini y un vermut.', mapQuery: 'Mercat Central de Tarragona' },
          { name: 'Fòrum de la Colònia', description: 'Un rincón de la vida cotidiana romana.', mapQuery: 'Fòrum de la Colònia Tarragona' },
          serrallo,
        ],
      },
      {
        title: 'Día 3 · Altafulla y Reus',
        subtitle: 'Excursión con coche o transporte por organizar',
        stops: [
          { name: 'Altafulla', description: 'Pasead por la Vila Closa y bajad hasta la playa.', mapQuery: 'Vila Closa Altafulla' },
          { name: 'Vil·la romana dels Munts', description: 'Una villa romana junto al mar que completa la visita a Tàrraco.', mapQuery: 'Vil·la romana dels Munts Altafulla' },
          { name: 'Reus modernista', description: 'Casa Navàs, Plaça del Mercadal y un vermut para cerrar el día.', mapQuery: 'Plaça del Mercadal Reus' },
        ],
      },
    ],
    note: 'Para el tercer día necesitaréis planificar el desplazamiento entre Altafulla y Reus. Si vais en coche, el Pont del Diable es otra visita posible.',
  },
];

export const foodSuggestions = [
  { area: 'Part Alta', names: 'Casa Balcells · Les Coques · AQ', mapQuery: 'restaurants Pla de la Seu Tarragona' },
  { area: 'El Serrallo', names: 'L’Àncora · Balandra · El Pòsit', mapQuery: 'restaurants El Serrallo Tarragona' },
  { area: 'Altafulla y Reus', names: 'Lola Bistro · vermut en Reus', mapQuery: 'restaurants Altafulla' },
];
