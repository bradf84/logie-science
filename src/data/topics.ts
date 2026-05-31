export type Topic = {
  id: string;
  title: string;
  definition: string;
  example: string;
  experimentId: string;
};

export const topics: Topic[] = [
  {
    id: "reactions",
    title: "Reactions",
    definition: "A chemical reaction happens when two or more substances mix together and change into something new.",
    example: "When you mix vinegar and baking soda, they react to make carbon dioxide gas — that's the fizz!",
    experimentId: "volcano-fizz"
  },
  {
    id: "forces",
    title: "Forces",
    definition: "A force is a push or a pull that can make things move, stop, or change direction.",
    example: "When you kick a ball, your foot pushes it. Gravity pulls it back down.",
    experimentId: "balloon-rocket"
  },
  {
    id: "gravity",
    title: "Gravity",
    definition: "Gravity is the force that pulls everything toward the centre of the Earth. It keeps us on the ground.",
    example: "Drop a ball and it falls — that's gravity pulling it down.",
    experimentId: "floating-egg"
  },
  {
    id: "air-pressure",
    title: "Air Pressure",
    definition: "Air pressure is the weight of air pushing on everything around it. You can't see it, but it's always there.",
    example: "When you blow up a balloon, the air inside pushes outward on the rubber.",
    experimentId: "balloon-rocket"
  },
  {
    id: "density",
    title: "Density",
    definition: "Density is how heavy something is for its size. A rock is denser than a sponge the same size.",
    example: "Oil floats on water because oil is less dense. A cork floats for the same reason.",
    experimentId: "floating-egg"
  },
  {
    id: "light-and-shadows",
    title: "Light and Shadows",
    definition: "Light travels in straight lines. When something blocks the light, it makes a shadow on the other side.",
    example: "Your shadow is short at midday when the sun is high, and long in the evening when the sun is low.",
    experimentId: "shadow-tracker"
  }
];
