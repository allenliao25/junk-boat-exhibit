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
    title: "Chipped Wood",
    location: "Surface detail on the Junk Boat",
    image: "/images/artifacts/chipped-wood-piece.jpg",
    label:
      "A close view of chipped wood, selected as a surface trace from the site visit rather than a collected object.",
    interpretation:
      "The chip makes use visible. It records weather, repair needs, and the ordinary friction of hands, feet, and time on a public play structure.",
    hotspot: { x: 38, y: 56 },
  },
  {
    id: "trace-02",
    title: "Tunnel / Hidden Passage",
    location: "Interior route through the boat",
    image: "/images/artifacts/tunnel.jpg",
    label:
      "A tunnel-like passage inside the playground structure, where the boat briefly becomes a room, path, and hiding place.",
    interpretation:
      "This trace shows how play changes scale. A small passage can become private architecture, a shortcut, or an imagined below-deck space.",
    hotspot: { x: 48, y: 58 },
  },
  {
    id: "trace-03",
    title: "Area Needing Repair",
    location: "Weathered or damaged section",
    image: "/images/artifacts/area-needs-repair.jpg",
    label:
      "A visible area of wear or damage, recorded as evidence of maintenance, age, and public responsibility.",
    interpretation:
      "Repair is part of the playground's history. This trace asks who notices damage, who fixes it, and how care becomes part of the exhibit record.",
    hotspot: { x: 61, y: 53 },
  },
  {
    id: "trace-04",
    title: "Debris Inside the Boat",
    location: "Interior floor or corner",
    image: "/images/artifacts/junk-in-the-boat.jpg",
    label:
      "Debris found inside the play structure, documented as a present-day trace of everyday park use.",
    interpretation:
      "The debris is not precious, but it is informative. It connects the boat to daily habits, public space, cleanup, and the gap between design and use.",
    hotspot: { x: 46, y: 73 },
  },
  {
    id: "trace-05",
    title: "More Debris / Left Behind",
    location: "Interior edge of the play area",
    image: "/images/artifacts/more-junk-in-the-boat.jpg",
    label:
      "Another left-behind view from the site visit, showing the boat as an active and imperfect public place.",
    interpretation:
      "Multiple traces of debris suggest repetition, not accident. They show the park as a lived-in environment rather than a frozen display object.",
    hotspot: { x: 55, y: 75 },
  },
  {
    id: "trace-06",
    title: "Rules and Public Use",
    location: "Posted sign near the playground",
    image: "/images/artifacts/no-food-sign.jpg",
    label:
      "A rule sign near the Junk Boat, included as a trace of how public behavior is guided, limited, and negotiated.",
    interpretation:
      "Rules are part of the site. They reveal how the park is managed and how play exists alongside care, food, mess, safety, and shared expectations.",
    hotspot: { x: 31, y: 33 },
  },
  {
    id: "trace-07",
    title: "Sails and Symbolic Form",
    location: "Upper silhouette of the boat",
    image: "/images/artifacts/sails.jpg",
    label:
      "A view of the sail-like forms that make the playground read as a Junk Boat rather than ordinary equipment.",
    interpretation:
      "The sails carry cultural and imaginative meaning. They let the structure point beyond the park toward travel, Chinatown identity, and storytelling.",
    hotspot: { x: 50, y: 22 },
  },
  {
    id: "trace-08",
    title: "Nearby Wall Art / Community Context",
    location: "Wall art near the playground",
    image: "/images/artifacts/wall-art-nearby-the-boat.jpg",
    label:
      "A nearby visual context trace, showing that the boat sits within a wider neighborhood environment of images, surfaces, and public expression.",
    interpretation:
      "The site is larger than the boat. Nearby wall art connects the playground to community context and to the visual life of Oakland Chinatown.",
    hotspot: { x: 74, y: 38 },
  },
  {
    id: "trace-09",
    title: "Surrounding Passage",
    location: "Bridge or passage near the boat",
    image: "/images/artifacts/another-bridge.jpg",
    label:
      "A surrounding passage view, selected to show how movement around the Junk Boat shapes the experience of the site.",
    interpretation:
      "Archaeology of play includes approach routes and edges. This trace records how the boat belongs to a network of paths, courts, and nearby structures.",
    hotspot: { x: 25, y: 66 },
  },
];
