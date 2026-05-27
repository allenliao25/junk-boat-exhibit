export type Artifact = {
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

export const artifacts: Artifact[] = [
  {
    id: "trace-01",
    title: "Worn Rail",
    location: "Upper deck railing",
    image: "/images/artifacts/artifact-01.jpg",
    label:
      "A polished rail surface, recorded as evidence of repeated touch, climbing, waiting, and balance.",
    interpretation:
      "This trace asks us to read play as a form of repeated contact. The rail becomes a small archive of hands, weather, and movement.",
    hotspot: { x: 35, y: 29 },
  },
  {
    id: "trace-02",
    title: "Hidden Corner",
    location: "Interior passage",
    image: "/images/artifacts/artifact-02.jpg",
    label:
      "A tucked-away corner where the structure briefly changes from public playground to private room.",
    interpretation:
      "Corners make room for imagination. This one suggests that children used the Junk Boat not only as equipment, but as shelter, stage, and secret architecture.",
    hotspot: { x: 47, y: 47 },
  },
  {
    id: "trace-03",
    title: "Playground Surface",
    location: "Ground plane below the hull",
    image: "/images/artifacts/artifact-03.jpg",
    label:
      "A surface shaped by safety standards, daily footsteps, and the practical maintenance of a public park.",
    interpretation:
      "The ground records what the boat cannot: falls, running paths, pauses, and the evolving rules around how public play should feel.",
    hotspot: { x: 55, y: 78 },
  },
  {
    id: "trace-04",
    title: "Repaired Panel",
    location: "Starboard side panel",
    image: "/images/artifacts/artifact-04.jpg",
    label:
      "A replacement or repaired panel that interrupts the surface of the boat and marks a moment of care.",
    interpretation:
      "Repair is part of the exhibit's timeline. It shows that the playground survived through maintenance, not simply through nostalgia.",
    hotspot: { x: 64, y: 49 },
  },
  {
    id: "trace-05",
    title: "Bow of the Boat",
    location: "Forward end of the structure",
    image: "/images/artifacts/artifact-05.jpg",
    label:
      "The front edge of the Junk Boat, where the playground most clearly becomes a vessel.",
    interpretation:
      "The bow points outward. It turns a neighborhood playground into a small voyage, connecting Oakland Chinatown to stories of migration, water, and arrival.",
    hotspot: { x: 76, y: 39 },
  },
  {
    id: "trace-06",
    title: "Stairway",
    location: "Climbing route to the deck",
    image: "/images/artifacts/artifact-06.jpg",
    label:
      "A stairway that organizes movement through the structure and turns climbing into a repeated ritual.",
    interpretation:
      "Steps make the boat legible. They guide bodies from ground to deck and transform a simple climb into entering an imagined ship.",
    hotspot: { x: 42, y: 63 },
  },
  {
    id: "trace-07",
    title: "Surrounding Court",
    location: "Park space around the boat",
    image: "/images/artifacts/artifact-07.jpg",
    label:
      "The open court around the playground, where the boat meets basketball, benches, shade, and neighborhood circulation.",
    interpretation:
      "The Junk Boat is not an isolated object. Its meaning expands through the surrounding park and the everyday routes that pass beside it.",
    hotspot: { x: 22, y: 70 },
  },
  {
    id: "trace-08",
    title: "Archival Photograph",
    location: "Historical image record",
    image: "/images/artifacts/artifact-08.jpg",
    label:
      "A placeholder archival trace, standing in for images that connect the playground to its 1966 dedication and later memories.",
    interpretation:
      "Archives do not simply preserve the past. They choose angles, moments, and absences, shaping what future viewers can imagine.",
    hotspot: { x: 28, y: 42 },
  },
  {
    id: "trace-09",
    title: "Object Left Behind",
    location: "Edge of the play area",
    image: "/images/artifacts/artifact-09.jpg",
    label:
      "A small found object, treated as a clue to ordinary park life rather than as a precious artifact.",
    interpretation:
      "The leftover object keeps the exhibit grounded in the present. It reminds us that archaeology can begin with attention to what is nearby.",
    hotspot: { x: 83, y: 72 },
  },
];
