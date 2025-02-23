import { useMemo } from 'react';
import { calculateBreathingPoints } from '../utils/breathingCalculations';
import type { BreathingTechnique, GraphPoint } from '../types/breathing';

interface UseBreathingAnimationProps {
  technique: BreathingTechnique;
  progress: number;
  canvasWidth: number;
  canvasHeight: number;
}

export function useBreathingAnimation({ 
  technique, 
  progress, 
  canvasWidth, 
  canvasHeight 
}: UseBreathingAnimationProps) {
  const points = useMemo(() => calculateBreathingPoints({
    technique,
    canvasWidth,
    canvasHeight,
    steps: 100
  }), [technique, canvasWidth, canvasHeight]);

  const currentPoint = useMemo(() => {
    const index = Math.floor(progress * (points.length - 1));
    return points[Math.min(index, points.length - 1)] || points[0];
  }, [points, progress]);

  return { points, currentPoint };
}