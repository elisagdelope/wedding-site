# Propuesta: guía de Tarragona para invitados

## Objetivo

Ayudar a quienes llegan de fuera a aprovechar su estancia alrededor de la boda de Elisa y Jordi sin convertir la invitación en una guía turística larga. Fuente editorial: `Itinerari_Tarragona_monumentos.docx`, compartido el 27/09/2026. El documento sirve como borrador de contenido; no se publica ni se copia íntegro.

## Encaje en la web actual

La web es una sola página que se abre desde un sobre animado. Después presenta la boda y la información práctica en bloques verticales, con tipografía Cormorant Garamond, colores crema y oliva y botones redondos. Añadir la guía **después de Alojamiento y antes del pie** conserva el orden: primero lo imprescindible para asistir, luego los planes opcionales. Un enlace discreto «Descubre Tarragona» desde la zona de alojamiento puede bajar a `#descubre-tarragona`; no hace falta una navegación general nueva.

### Estructura recomendada

- Título: **Descubre Tarragona**.
- Entradilla: «Si aprovecháis el viaje para quedaros unos días, os dejamos algunos de nuestros planes favoritos por Tarragona y sus alrededores».
- Tres pestañas o botones accesibles: **Una tarde**, **Dos días**, **Tres días**. Por defecto, «Una tarde» para evitar una primera vista excesivamente larga. Cada opción muestra una ruta resumida en 3–5 paradas; el contenido se puede revelar sin salir de la invitación.
- Una franja de **Para comer y brindar** con tres propuestas por zona (casco antiguo, Serrallo, Altafulla/Reus), sin prometer disponibilidad ni calificaciones.
- Cada parada: nombre, una frase personal o útil, duración aproximada cuando aporte valor, enlace «Cómo llegar» a Google Maps en pestaña nueva. Un enlace «Abrir ruta» por día sería aún más cómodo tras validar paradas y orden.
- Aviso breve: «Comprobad horarios y reservad con antelación». El sábado 3 de octubre, día de la boda, se excluye de las rutas propuestas.

### Selección editorial del documento

| Plan | Paradas sugeridas | Para quién |
| --- | --- | --- |
| Una tarde en Tarragona | Part Alta y Catedral · Circo/Pretorio · Anfiteatro · Balcó del Mediterrani · vermut o cena en el Serrallo | Quien llega el viernes o dispone de pocas horas; la visita interior se adapta a los horarios |
| Dos días, a pie | Día 1: murallas, Catedral, Circo/Pretorio, Anfiteatro y Rambla Nova. Día 2: Mercado Central, Foro de la Colonia y paseo por el Serrallo/costa | Quien quiere conocer Tarragona sin coche |
| Tres días, con excursión | Los dos días anteriores + Altafulla, Els Munts y Reus modernista | Quien dispone de coche o decide consultar transporte público |

Pont del Diable merece una tarjeta **«Si tenéis coche»** en el plan de dos o tres días, con opción de reemplazar parte del segundo día. El documento original lo presenta como visita principal, pero no conviene hacer depender el itinerario base de un coche: algunos invitados no tendrán uno. TimePort, mapping de Voltes del Pallol, necrópolis y teatro pueden figurar como alternativas «Si os interesa la historia», después de comprobar apertura.

### Gastronomía

Mostrar una selección corta y cercana a cada ruta: vermut en la Plaça del Fòrum o en Reus; Casa Balcells o Les Coques cerca de la Catedral; L’Àncora, Balandra o El Pòsit en el Serrallo; alguna opción en Altafulla para el tercer día. Evitar puntuaciones y números de reseñas: caducan. No presentar recomendaciones comerciales o platos concretos como si los novios los hubieran probado sin su validación.

## Diseño y comportamiento

Usar un componente `TarragonaGuide.tsx` con datos en una estructura tipada separada (`tarragonaGuide.ts`), montado en `InvitationContent.tsx` tras Alojamiento. Reutilizar clases Tailwind y tonos existentes; alternar `bg-offwhite` para separar esta sección del alojamiento. Las pestañas deben ser botones con `aria-selected` y controles de teclado, o botones simples que actualicen una región con título anunciado. En móvil, no hacer depender nada de hover. Enlaces externos con `target="_blank" rel="noopener noreferrer"`. Mantener los textos cortos, con posible acordeón para el detalle de cada día. No añadir dependencias ni un mapa embebido por parada: los enlaces abren la navegación del móvil y reducen peso/carga.

Una ruta propia (`/tarragona`) solo tiene sentido si crece mucho el contenido o si se quiere compartir como guía independiente; exigiría tratar navegación y acceso directo al margen del sobre inicial. Para esta boda, empezar con sección integrada.

## Revisión de contenido antes de implementar

1. Confirmar horarios, precios, cierres y reservas en fuentes oficiales de monumentos para los días concretos de visita. No copiar los horarios de ejemplo (09:00, 10:15...) como promesas: el DOCX mezcla estimaciones con visitas de duración variable.
2. Validar restaurantes y enlaces de mapas, y seleccionar solo los que Elisa y Jordi quieran recomendar. El documento repite Serrallo en los días 1 y 2, fija vermut y comida del día 1 a las 13:00 y contiene una tabla final desalineada; rehacer la selección desde las rutas, no importar esa tabla.
3. Verificar transporte para Pont del Diable, Altafulla/Els Munts y Reus o etiquetar claramente las excursiones que requieren coche.
4. Revisar idioma: la invitación actual está en castellano, así que publicar la guía en castellano y conservar nombres propios catalanes. Más adelante podría añadirse traducción si toda la web se internacionaliza.
5. Antes de publicar, resolver datos de boda ya presentes en `InvitationContent.tsx`: la web indica ceremonia **12:00** y autobús **14:00 aproximadas**, mientras que la planificación más reciente de los novios es ceremonia **12:30**, convocatoria de autobús **14:15** y salida **14:25**. Actualizar el contador y ambos bloques tras confirmar el horario definitivo.

## Criterios para la implementación

- El invitado encuentra un plan útil en menos de un minuto desde el móvil, sin descargar el DOCX.
- Los planes distinguen claramente el tiempo disponible y la necesidad de coche.
- Los lugares, restaurantes y horarios publicados están revisados; los enlaces de mapas funcionan.
- La sección mantiene el aspecto de la invitación y se puede usar con teclado y lector de pantalla.
- `npm run lint` y `npm run build` terminan correctamente.
