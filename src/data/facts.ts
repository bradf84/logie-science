export type ScienceFact = {
  id: string;
  category: "Space" | "Animals" | "Weather" | "Chemistry" | "Forces" | "Human Body";
  title: string;
  fact: string;
};

export const facts: ScienceFact[] = [
  { id: "space-1", category: "Space", title: "Sun's Light Speed", fact: "Light from the Sun takes about 8 minutes to reach Earth." },
  { id: "space-2", category: "Space", title: "Jupiter's Storm", fact: "Jupiter's Great Red Spot is a storm that has been raging for over 300 years." },
  { id: "space-3", category: "Space", title: "Footprints on the Moon", fact: "There is no wind on the Moon, so astronaut footprints will stay there for millions of years." },
  { id: "animals-1", category: "Animals", title: "Octopus Hearts", fact: "An octopus has three hearts and blue blood." },
  { id: "animals-2", category: "Animals", title: "Honey Never Spoils", fact: "Honey found in ancient Egyptian tombs is still edible after thousands of years." },
  { id: "animals-3", category: "Animals", title: "Shark Senses", fact: "Sharks can detect a single drop of blood in an Olympic swimming pool." },
  { id: "weather-1", category: "Weather", title: "Lightning Temperature", fact: "A bolt of lightning is five times hotter than the surface of the Sun." },
  { id: "weather-2", category: "Weather", title: "Snowflake Shapes", fact: "Every snowflake has six sides, but no two are exactly alike." },
  { id: "weather-3", category: "Weather", title: "Raindrops", fact: "Raindrops are not teardrop-shaped — they look more like tiny hamburger buns." },
  { id: "chemistry-1", category: "Chemistry", title: "Water Expands", fact: "Water is one of the few substances that expands when it freezes, which is why ice floats." },
  { id: "chemistry-2", category: "Chemistry", title: "Banana Radiation", fact: "Bananas are slightly radioactive because they contain potassium-40." },
  { id: "chemistry-3", category: "Chemistry", title: "Diamond and Pencil", fact: "Diamonds and pencil lead are both made of carbon — just arranged differently." },
  { id: "forces-1", category: "Forces", title: "Gravity on the Moon", fact: "You would weigh six times less on the Moon because its gravity is weaker." },
  { id: "forces-2", category: "Forces", title: "Speed of Sound", fact: "Sound travels about four times faster in water than in air." },
  { id: "forces-3", category: "Forces", title: "Friction Heat", fact: "Rubbing your hands together creates heat through friction — the same force that slows down a bike when you brake." },
  { id: "body-1", category: "Human Body", title: "Brain Power", fact: "Your brain uses about 20% of your body's energy, even though it is only 2% of your weight." },
  { id: "body-2", category: "Human Body", title: "Bone Count", fact: "Babies are born with about 270 bones, but adults only have 206 because some fuse together." },
  { id: "body-3", category: "Human Body", title: "Sneeze Speed", fact: "A sneeze can travel at over 160 kilometres per hour." }
];
