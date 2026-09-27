export type Visit = {
  time: string;
  title: string;
  description: string;
  detail?: string;
  mapQuery?: string;
  optional?: boolean;
};

export type Day = {
  number: number;
title: string;
  subtitle: string;
  practical: string;
  visits: Visit[];
};

export const days: Day[] = [
  {
    number: 1,
    title: 'La Tarragona romana y el casco antiguo',
    subtitle: 'Murallas, Catedral, Circo y Anfiteatro, hasta llegar al mar.',
    practical: 'A pie · unos 4–5 km · reservad tiempo para perderos por la Part Alta',
    visits: [
      { time: '09:00', title: 'Murallas y Passeig Arqueològic', description: 'Empezad por las murallas para entender cómo se construyó la antigua Tàrraco. El paseo pasa por el Portal de Sant Antoni y las torres del Arzobispo y de Minerva.', detail: 'Calculad 45–60 minutos. Si os apetece una introducción virtual, el itinerario propone TimePort antes de comenzar (unos 30 minutos; comprobad tarifa y disponibilidad).', mapQuery: 'Passeig Arqueològic Tarragona' },
      { time: '10:15', title: 'Catedral y Pla de la Seu', description: 'Entrad en la Catedral y su claustro, y después pasead por la Pla de la Seu, les Escrivanies Velles y la antigua judería.', detail: 'El mapping de les Voltes del Pallol y la maqueta de Tàrraco son una visita adicional si os interesa la historia.', mapQuery: 'Catedral de Tarragona' },
      { time: '13:00', title: 'Vermut y comida en la Part Alta', description: 'Un vermut en la Plaça del Fòrum y comida cerca de la Catedral: Casa Balcells, Les Coques o AQ. Para algo más informal, Braseria La Catedral o Quattros, con terraza en la Plaça de la Font.', mapQuery: 'Plaça del Fòrum Tarragona' },
      { time: '15:00', title: 'Circo romano y Pretorio', description: 'Bajad a la Plaça del Rei para recorrer las bóvedas del Circo, el Pretorio y la terraza superior. Es una de las visitas que mantendríamos en cualquier ruta.', mapQuery: 'Circ Romà i Pretori Tarragona' },
      { time: '16:30', title: 'Anfiteatro romano', description: 'Continuad hacia el mar para ver el monumento romano más reconocible de Tarragona.', detail: 'Reservad aproximadamente 45–60 minutos si queréis visitarlo por dentro.', mapQuery: 'Amfiteatre de Tarragona' },
      { time: '17:30', title: 'Balcó del Mediterrani', description: 'Subid por el Passeig de les Palmeres, tocad ferro y disfrutad de las vistas antes de pasear por la Rambla Nova.', mapQuery: 'Balcó del Mediterrani Tarragona' },
      { time: '19:00', title: 'Rambla Nova y centro modernista', description: 'Si aún tenéis ganas de caminar, acercaos al Monument als Castellers, el Teatre Metropol y el Mercat Central.', mapQuery: 'Rambla Nova Tarragona' },
      { time: '20:00', title: 'Cena en el Serrallo', description: 'Acabad el día en el barrio marinero. L’Àncora, Balandra y El Pòsit son opciones de pescado y arroces; si preferís cocina italiana, Osteria del Mare está en el Moll de Lleida, junto al paseo del puerto.', mapQuery: 'El Serrallo Tarragona' },
    ],
  },
  {
    number: 2,
    title: 'Más Tàrraco y el Serrallo',
    subtitle: 'La ciudad romana menos conocida y una tarde tranquila junto al puerto.',
    practical: 'Pont del Diable requiere desplazamiento · el resto se puede recorrer a pie',
    visits: [
      { time: '09:00', title: 'Pont del Diable', description: 'El acueducto de les Ferreres merece algo más que una foto: pasead por su entorno y contempladlo desde distintos ángulos.', detail: 'El itinerario reserva 1–1,5 horas. Está fuera del centro; organizad transporte o saltad esta parada si no os encaja.', mapQuery: 'Pont del Diable Tarragona' },
      { time: '10:45', title: 'Teatro romano', description: 'Una parada breve en la parte baja de la ciudad para completar la visita a Tàrraco.', detail: 'Prescindible si vais justos de tiempo; comprobad antes si se puede visitar.', mapQuery: 'Teatre Romà Tarragona', optional: true },
      { time: '11:30', title: 'Fòrum de la Colònia', description: 'Una mirada a la vida cotidiana y política de la ciudad romana, distinta de la monumentalidad del Circo y el Anfiteatro.', mapQuery: 'Fòrum de la Colònia Tarragona' },
      { time: '12:15', title: 'Mercat Central y Plaça Corsini', description: 'Pasead por el mercado y aprovechad para hacer una pausa o tomar un vermut.', mapQuery: 'Mercat Central de Tarragona' },
      { time: '13:30', title: 'Comida', description: 'El itinerario propone La Cuineta o Les Coques en el centro; El Llagut, Barquet y Va de Gust si os apetece un arroz.', mapQuery: 'restaurants centre Tarragona' },
      { time: '15:30', title: 'Necrópolis paleocristiana', description: 'Una visita para quienes disfrutan especialmente de la arqueología y la Antigüedad tardía.', detail: 'Podéis omitirla para disponer de más tiempo libre.', mapQuery: 'Necròpolis Paleocristiana Tarragona', optional: true },
      { time: '16:30', title: 'El Serrallo y paseo marítimo', description: 'Recorred el barrio pesquero, el puerto y la costa sin un horario apretado. Si hace buen tiempo, podéis terminar en una playa urbana.', mapQuery: 'El Serrallo Tarragona' },
    ],
  },
  {
    number: 3,
    title: 'Altafulla, Els Munts y Reus',
    subtitle: 'Una excursión que une villa medieval, patrimonio romano y modernismo.',
    practical: 'Fuera de Tarragona · planificad coche o conexiones de transporte antes de salir',
    visits: [
      { time: '09:00', title: 'Altafulla', description: 'Pasead por la Vila Closa y después bajad hacia les Botigues de Mar y la playa.', mapQuery: 'Vila Closa Altafulla' },
      { time: '10:30', title: 'Vil·la romana dels Munts', description: 'Una villa residencial romana junto al mar. Después de conocer la ciudad de Tàrraco, aquí se descubre cómo vivía una familia acomodada.', detail: 'El itinerario le reserva 1–1,5 horas y la considera clave si disponéis de tres días.', mapQuery: 'Vil·la romana dels Munts Altafulla' },
      { time: '12:30', title: 'Comida en Altafulla', description: 'Lola Bistro, Voramar Cal Vitali junto al mar o L’Ermita en la zona histórica son las opciones del itinerario.', mapQuery: 'restaurants Altafulla' },
      { time: '15:00', title: 'Reus modernista', description: 'Empezad en la Plaça del Mercadal y seguid por Casa Navàs, el Gaudí Centre, el carrer de Monterols, Casa Rull y Casa Gasull.', detail: 'Si tenéis más tiempo, añadid el Institut Pere Mata. Algunas visitas interiores requieren entrada o reserva.', mapQuery: 'Plaça del Mercadal Reus' },
      { time: '18:00', title: 'Vermut de Reus', description: 'Cerrad el recorrido con un vermut. Si os quedáis a cenar, el documento propone Denise o Le Bistrot.', mapQuery: 'Plaça del Mercadal Reus' },
    ],
  },
];

export const essentials = [
  'Anfiteatro romano', 'Circo y Pretorio', 'Catedral de Tarragona',
  'Murallas', 'Pont del Diable', 'Vil·la romana dels Munts',
  'Part Alta', 'Balcó del Mediterrani', 'El Serrallo',
  'Fòrum de la Colònia', 'Altafulla', 'Reus modernista',
];
