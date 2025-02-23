export interface BreathingTechnique {
  id: string;
  name: string;
  description: string;
  instructions: string[];
  timing: {
    inhale: number;
    hold: number;
    exhale: number;
    postExhaleHold?: number;
  };
  benefits: string[];
  categories: string[];
}

export interface GraphPoint {
  x: number;
  y: number;
}

export interface Category {
  id: string;
  name: string;
  description: string;
  icon: string;
  techniques: string[];
}