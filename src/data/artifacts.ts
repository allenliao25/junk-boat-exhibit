export type HotspotView = "left" | "right" | "back-left" | "back";

export type Trace = {
  id: string;
  title: string;
  location: string;
  tag: string;
  caption: string;
  image: string;
  label: string;
  interpretation: string;
  hotspot: {
    view: HotspotView;
    x: number;
    y: number;
  };
};

export const traces: Trace[] = [
  {
    id: "trace-01",
    title: "Masters of Navigation",
    location: "Historical plaque on structure",
    tag: "Archival context",
    caption: "Plaque about Chinese junk ships and Zheng He's voyages.",
    image: "/images/artifacts/art-10.jpg",
    label:
      "This plaque places the playground boat within a longer story of Chinese maritime navigation and exploration.",
    interpretation:
      "The sign turns the structure into more than play equipment. It links Oakland's junk boat to a wider history of ships, travel, and public memory.",
    hotspot: { view: "left", x: 26, y: 51 },
  },
  {
    id: "trace-02",
    title: "A Chinese Junk Boat for Oakland",
    location: "Historical plaque on structure",
    tag: "Origin story",
    caption: "Plaque on the Free China voyage and the Lincoln Square playground.",
    image: "/images/artifacts/art-1.jpg",
    label:
      "This plaque records how the playground junk boat was inspired by the 1955 voyage of the Free China and later community restoration work.",
    interpretation:
      "The origin story matters because the boat is not only a play object. It is a neighborhood project shaped by migration, civic pride, and repeated care.",
    hotspot: { view: "left", x: 38, y: 56 },
  },
  {
    id: "trace-03",
    title: "Repair Needed",
    location: "Upper wooden platform",
    tag: "Maintenance record",
    caption: "Temporary plywood barrier on a worn deck section.",
    image: "/images/artifacts/art-3.jpg",
    label:
      "A patched section marks the playground as an object that ages, breaks, and requires public maintenance.",
    interpretation:
      "Repair belongs in the story, not outside it. The boat survives through attention, maintenance, and decisions about what is worth keeping.",
    hotspot: { view: "left", x: 61, y: 53 },
  },
  {
    id: "trace-04",
    title: "Fallen Debris",
    location: "Playground surface below",
    tag: "Use evidence",
    caption: "Broken plywood fragment on the rubberized court.",
    image: "/images/artifacts/art-4.jpg",
    label:
      "A broken piece of wood on the court shows how wear on the structure can become visible evidence on the ground.",
    interpretation:
      "This trace is ordinary, even messy, but it matters. It connects play to upkeep, safety, and the shared responsibility of a park.",
    hotspot: { view: "left", x: 48, y: 58 },
  },
  {
    id: "trace-05",
    title: "Left Behind",
    location: "Under the structure",
    tag: "After-play trace",
    caption: "Litter accumulated beneath the wooden platform.",
    image: "/images/artifacts/art-8.jpg",
    label:
      "Trash tucked under the structure records the boat as a living public place, not a sealed display case.",
    interpretation:
      "What remains after use is part of the record. These small leftovers make the site feel active, imperfect, and real.",
    hotspot: { view: "left", x: 52, y: 54 },
  },
  {
    id: "trace-06",
    title: "Rules of Use",
    location: "Posted sign on railing",
    tag: "Public rules",
    caption: "Bilingual no food or drink sign on the red railings.",
    image: "/images/artifacts/art-5.jpg",
    label:
      "A posted rule frames the playground as a shared place with expectations, limits, and care instructions.",
    interpretation:
      "The sign is not separate from play. It shows how freedom in public space is shaped by safety, maintenance, and community agreement.",
    hotspot: { view: "right", x: 47, y: 58 },
  },
  {
    id: "trace-07",
    title: "Sail Form",
    location: "Upper mast structure",
    tag: "Symbolic form",
    caption: "Mast and rigging that give the boat its silhouette.",
    image: "/images/artifacts/art-11.jpg",
    label:
      "The sail-like form gives the playground its identity as a boat before anyone climbs onto it.",
    interpretation:
      "This shape carries the exhibit outward: toward travel, Chinatown, and the stories a child can step into without leaving the park.",
    hotspot: { view: "left", x: 50, y: 22 },
  },
  {
    id: "trace-08",
    title: "Nearby Public Art",
    location: "Park building wall",
    tag: "Community context",
    caption: "Lantern-tree mural on a structure beside the court.",
    image: "/images/artifacts/art-6.jpg",
    label:
      "Wall art near the boat places the playground within a wider field of neighborhood images and public expression.",
    interpretation:
      "The site does not stop at the edge of the structure. Its meaning expands into the surrounding visual life of Oakland Chinatown.",
    hotspot: { view: "right", x: 78, y: 48 },
  },
  {
    id: "trace-09",
    title: "Approach Route",
    location: "Ramp and walkway",
    tag: "Site edge",
    caption: "Walkway connecting the boat to the surrounding court.",
    image: "/images/artifacts/art-9.jpg",
    label:
      "A nearby passage records how people approach, circle, and move around the Junk Boat.",
    interpretation:
      "The playground is part of a larger route through the park. To excavate it, I also have to notice its edges and arrivals.",
    hotspot: { view: "left", x: 25, y: 66 },
  },
];
