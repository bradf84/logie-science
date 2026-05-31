export type Experiment = {
  id: string;
  title: string;
  description: string;
  difficulty: "Easy" | "Medium";
  time: string;
  adultHelp: boolean;
  materials: string[];
  steps: string[];
  notice: string[];
  howItWorks: string;
  safetyNote: string;
};

export const experiments: Experiment[] = [
  {
    id: "balloon-rocket",
    title: "Balloon Rocket",
    description: "Launch a balloon along a string using air pressure.",
    difficulty: "Easy",
    time: "10 minutes",
    adultHelp: false,
    materials: ["Balloon", "String (3–5 metres)", "Sticky tape", "Straw", "Two chairs"],
    steps: [
      "Tie the string between two chairs so it is tight and level.",
      "Thread the straw onto the string.",
      "Blow up the balloon but do not tie it. Pinch the end closed.",
      "Tape the balloon to the straw.",
      "Let go of the balloon and watch it fly!"
    ],
    notice: [
      "Which direction does the air come out?",
      "Which direction does the balloon move?",
      "Does a bigger balloon go faster or further?"
    ],
    howItWorks: "When air rushes out of the balloon in one direction, it pushes the balloon the opposite way. This is Newton's Third Law: every action has an equal and opposite reaction.",
    safetyNote: "Do not aim the balloon at anyone's face. Small children should not chew on balloons."
  },
  {
    id: "volcano-fizz",
    title: "Volcano Fizz",
    description: "Create a fizzy eruption with vinegar and baking soda.",
    difficulty: "Easy",
    time: "15 minutes",
    adultHelp: true,
    materials: ["Baking soda (2 tablespoons)", "Vinegar (half a cup)", "Dish soap (a squirt)", "Food colouring", "Tall cup or bottle", "Tray or baking dish"],
    steps: [
      "Place the cup or bottle on the tray to catch spills.",
      "Add baking soda to the cup.",
      "Add a squirt of dish soap and a few drops of food colouring.",
      "Pour in the vinegar and step back!",
      "Watch the fizzy eruption overflow."
    ],
    notice: [
      "What do the bubbles look like?",
      "Does it feel warm or cold?",
      "What happens if you add more vinegar?"
    ],
    howItWorks: "Vinegar (an acid) reacts with baking soda (a base) to produce carbon dioxide gas. The gas makes bubbles, and the dish soap traps them into foam that overflows like a volcano.",
    safetyNote: "Do this experiment on a tray or outside. Vinegar can sting your eyes — don't lean over the cup when you pour."
  },
  {
    id: "floating-egg",
    title: "Floating Egg",
    description: "Make an egg float by changing the density of water.",
    difficulty: "Easy",
    time: "10 minutes",
    adultHelp: false,
    materials: ["Two clear glasses of water", "Two eggs", "Salt (6+ tablespoons)", "Spoon"],
    steps: [
      "Fill both glasses with water.",
      "Gently place an egg in the first glass. It sinks!",
      "Stir lots of salt into the second glass until no more dissolves.",
      "Gently place the second egg in the salty water.",
      "Watch it float!"
    ],
    notice: [
      "How much salt did you need?",
      "Does the egg float higher with more salt?",
      "What happens if you slowly add fresh water on top of the salty water?"
    ],
    howItWorks: "Adding salt makes the water denser (heavier per cup). When the salty water is denser than the egg, the egg floats. This is the same reason it is easier to float in the ocean than in a pool.",
    safetyNote: "Don't eat the eggs after the experiment. Wash your hands after handling raw eggs."
  },
  {
    id: "paper-bridge",
    title: "Paper Bridge Challenge",
    description: "Engineer a paper bridge strong enough to hold coins.",
    difficulty: "Medium",
    time: "20 minutes",
    adultHelp: false,
    materials: ["Sheets of paper", "Two books or boxes (same height)", "Coins or small toys for weight", "Tape (optional)"],
    steps: [
      "Place two books about 15 cm apart.",
      "Try laying a flat sheet of paper across the gap. Place a coin on it.",
      "Now fold the paper into a zigzag (accordion fold) and try again.",
      "Try rolling the paper into a tube shape.",
      "Which shape holds the most coins before collapsing?"
    ],
    notice: [
      "Which shape was strongest?",
      "Where does the paper bend or buckle?",
      "Does adding tape help?"
    ],
    howItWorks: "Folding paper changes its shape and spreads the weight across more surface area. Engineers use shapes like triangles, arches and corrugation to make bridges and buildings strong without using more material.",
    safetyNote: "No safety concerns — this one is mess-free!"
  },
  {
    id: "shadow-tracker",
    title: "Shadow Tracker",
    description: "Track how shadows change throughout the day.",
    difficulty: "Easy",
    time: "All day (5 minutes each hour)",
    adultHelp: false,
    materials: ["A stick or pencil", "Modelling clay or a cup of sand", "Chalk or markers", "A sunny day"],
    steps: [
      "Stand the stick upright in clay or sand in a sunny spot outside.",
      "Every hour, mark where the tip of the shadow falls.",
      "Write the time next to each mark.",
      "At the end of the day, look at all your marks.",
      "Connect the dots to see the path the shadow took."
    ],
    notice: [
      "When is the shadow longest?",
      "When is it shortest?",
      "Which direction does the shadow point in the morning vs afternoon?"
    ],
    howItWorks: "Shadows change because the Earth rotates. In the morning the sun is low and shadows are long. At midday the sun is highest and shadows are shortest. The shadow always points away from the sun.",
    safetyNote: "Wear sunscreen and a hat if you are outside for a long time. Never look directly at the sun."
  },
  {
    id: "dancing-raisins",
    title: "Dancing Raisins",
    description: "Watch raisins dance up and down in fizzy water.",
    difficulty: "Easy",
    time: "10 minutes",
    adultHelp: false,
    materials: ["Clear glass", "Sparkling water or lemonade (freshly opened)", "Raisins (5–8)"],
    steps: [
      "Fill the glass with sparkling water.",
      "Drop in the raisins.",
      "Wait a minute and watch what happens.",
      "Watch them rise, then sink, then rise again!",
      "Try other small objects — do they dance too?"
    ],
    notice: [
      "What collects on the raisins before they rise?",
      "What happens when they reach the top?",
      "Do bigger raisins behave differently?"
    ],
    howItWorks: "Carbon dioxide bubbles in the fizzy water stick to the rough surface of the raisins. The bubbles act like tiny life jackets, making the raisins buoyant enough to float. At the surface the bubbles pop, and the raisins sink again.",
    safetyNote: "You can drink the sparkling water afterwards, but don't eat raisins that have been sitting in it for a long time."
  }
];
