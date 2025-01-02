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
}

export interface GraphPoint {
  x: number;
  y: number;
}