export interface SyllabusModule {
  id: number;
  title: string;
  duration: string;
  lessonsCount: number;
  description: string;
  lessons: string[];
}

export interface BonusItem {
  id: number;
  title: string;
  value: string;
  description: string;
  iconName: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  location: string;
  rating: number;
  text: string;
  image: string;
  beforeAfter?: {
    before: string;
    after: string;
  };
}

export interface BagStyle {
  id: string;
  name: string;
  difficulty: "Principiante" | "Fácil" | "Intermedio";
  size: string;
  estimatedTime: string;
  materialCost: string;
  retailPrice: string;
  profitMargin: string;
  image: string;
  description: string;
}
