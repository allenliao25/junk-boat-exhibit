export type Trace = {
  id: string;
  title: string;
  location: string;
  image: string;
  label: string;
  interpretation: string;
  hotspot: {
    x: number;
    y: number;
  };
};

export const traces: Trace[] = [
  {
    id: "trace-01",
    title: "Weathered Surface",
    location: "Exterior wood surface",
    image: "/images/artifacts/art-1.jpg",
    label:
      "This close surface view records the boat as something touched, climbed, and exposed to weather.",
    interpretation:
      "The worn material makes play visible after the moment has passed. It is a small reminder that public memory can live in texture.",
    hotspot: { x: 38, y: 56 },
  },
  {
    id: "trace-02",
    title: "Below-Deck Passage",
    location: "Interior passageway",
    image: "/images/artifacts/art-2.jpg",
    label:
      "The passage turns the playground into a vessel with an inside, a route, and a place to disappear for a moment.",
    interpretation:
      "I read this as one of the boat's strongest invitations to imagine. A short tunnel becomes architecture at child scale.",
    hotspot: { x: 48, y: 58 },
  },
  {
    id: "trace-03",
    title: "Repair Needed",
    location: "Damaged section",
    image: "/images/artifacts/art-3.jpg",
    label:
      "A damaged area marks the playground as an object that ages and requires public care.",
    interpretation:
      "Repair belongs in the story, not outside it. The boat survives through attention, maintenance, and decisions about what is worth keeping.",
    hotspot: { x: 61, y: 53 },
  },
  {
    id: "trace-04",
    title: "Interior Debris",
    location: "Inside the boat",
    image: "/images/artifacts/art-4.jpg",
    label:
      "Debris inside the structure records the boat as a living public place, not a sealed display case.",
    interpretation:
      "This trace is ordinary, even messy, but it matters. It connects play to cleanup, use, and the shared responsibility of a park.",
    hotspot: { x: 46, y: 73 },
  },
  {
    id: "trace-05",
    title: "Left Behind",
    location: "Edge of the interior",
    image: "/images/artifacts/art-5.jpg",
    label:
      "A second left-behind trace shows repeated use and the uneven rhythms of public space.",
    interpretation:
      "What remains after play is part of the record. These small leftovers make the site feel active, imperfect, and real.",
    hotspot: { x: 55, y: 75 },
  },
  {
    id: "trace-06",
    title: "Rules of Use",
    location: "Posted sign",
    image: "/images/artifacts/art-6.jpg",
    label:
      "A posted rule frames the playground as a shared place with expectations, limits, and care instructions.",
    interpretation:
      "The sign is not separate from play. It shows how freedom in public space is shaped by safety, maintenance, and community agreement.",
    hotspot: { x: 31, y: 33 },
  },
  {
    id: "trace-07",
    title: "Sail Form",
    location: "Upper structure",
    image: "/images/artifacts/art-7.jpg",
    label:
      "The sail-like form gives the playground its identity as a boat before anyone climbs onto it.",
    interpretation:
      "This shape carries the exhibit outward: toward travel, Chinatown, and the stories a child can step into without leaving the park.",
    hotspot: { x: 50, y: 22 },
  },
  {
    id: "trace-08",
    title: "Nearby Public Art",
    location: "Wall near the playground",
    image: "/images/artifacts/art-8.jpg",
    label:
      "Wall art near the boat places the playground within a wider field of neighborhood images and public expression.",
    interpretation:
      "The site does not stop at the edge of the structure. Its meaning expands into the surrounding visual life of Oakland Chinatown.",
    hotspot: { x: 74, y: 38 },
  },
  {
    id: "trace-09",
    title: "Approach Route",
    location: "Passage near the boat",
    image: "/images/artifacts/art-9.jpg",
    label:
      "A nearby passage records how people approach, circle, and move around the Junk Boat.",
    interpretation:
      "The playground is part of a larger route through the park. To excavate it, I also have to notice its edges and arrivals.",
    hotspot: { x: 25, y: 66 },
  },
];
