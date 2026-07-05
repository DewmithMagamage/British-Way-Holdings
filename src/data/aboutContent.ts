export interface VisionMissionItem {
  icon: string;
  title: string;
  bg: string;
  text: string;
}

export interface CoreValue {
  icon: string;
  title: string;
  desc: string;
}

export const visionMissionItems: VisionMissionItem[] = [
  {
    icon: "/logos/eye.png",
    title: "Our Vision",
    bg: "linear-gradient(135deg, #1a3a6b, #0f2548)",
    text: "To be the most respected and trusted corporate group in South Asia, known for transforming lives through world-class education, exceptional hospitality, and professional excellence.",
  },
  {
    icon: "/logos/target.png",
    title: "Our Mission",
    bg: "linear-gradient(135deg, #cc2222, #8a0f0f)",
    text: "To deliver exceptional value to students, guests, and partners by maintaining the highest standards of quality, innovation, and integrity across all our enterprises.",
  },
];

export const coreValues: CoreValue[] = [
  {
    icon: "/logos/values/excellence.png",
    title: "Excellence",
    desc: "We pursue the highest standards in every programme, service, and interaction.",
  },
  {
    icon: "/logos/values/integrity.png",
    title: "Integrity",
    desc: "Honesty and transparency are the cornerstones of every relationship we build.",
  },
  {
    icon: "/logos/values/innovation.png",
    title: "Innovation",
    desc: "We embrace new ideas and forward-thinking approaches to remain ahead.",
  },
  {
    icon: "/logos/values/leadership.png",
    title: "Leadership",
    desc: "We inspire, develop, and celebrate the leaders of tomorrow.",
  },
  {
    icon: "/logos/values/sustainability.png",
    title: "Sustainability",
    desc: "Every decision we make considers its long-term impact on people and planet.",
  },
];
