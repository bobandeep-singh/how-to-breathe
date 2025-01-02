import type { BreathingTechnique, GraphPoint } from '../types/breathing';

interface CalculateBreathingPointsProps {
  technique: BreathingTechnique;
  canvasWidth: number;
  canvasHeight: number;
  steps: number;
}

export function calculateBreathingPoints({
  technique,
  canvasWidth,
  canvasHeight,
  steps
}: CalculateBreathingPointsProps): GraphPoint[] {
  const points: GraphPoint[] = [];
  const totalTime = technique.timing.inhale + technique.timing.hold + technique.timing.exhale;
  const centerY = canvasHeight / 2;
  const amplitude = canvasHeight / 3;

  for (let i = 0; i <= steps; i++) {
    const x = (canvasWidth * i) / steps;
    let y = centerY;
    
    const t = (i / steps) * totalTime;
    
    if (t <= technique.timing.inhale) {
      // Inhale - line goes up
      y = centerY - (t / technique.timing.inhale) * amplitude;
    } else if (t <= technique.timing.inhale + technique.timing.hold) {
      // Hold - line stays flat at the top
      y = centerY - amplitude;
    } else {
      // Exhale - line goes down
      const exhaleProgress = (t - technique.timing.inhale - technique.timing.hold) / technique.timing.exhale;
      y = (centerY - amplitude) + exhaleProgress * amplitude;
    }
    
    points.push({ x, y });
  }

  return points;
}