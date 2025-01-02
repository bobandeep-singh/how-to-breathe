import React, { useEffect, useRef } from 'react';
import { useBreathingAnimation } from '../hooks/useBreathingAnimation';
import { drawBreathingGraph } from '../utils/graphDrawing';
import type { BreathingTechnique } from '../types/breathing';

interface BreathingGraphProps {
  technique: BreathingTechnique;
  isActive: boolean;
  progress: number;
}

export function BreathingGraph({ technique, isActive, progress }: BreathingGraphProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { points, currentPoint } = useBreathingAnimation({
    technique,
    progress,
    canvasWidth: 800,
    canvasHeight: 300
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    drawBreathingGraph({
      ctx,
      canvas,
      points,
      currentPoint,
      isActive
    });
  }, [points, currentPoint, isActive]);

  return (
    <canvas 
      ref={canvasRef}
      width={800}
      height={300}
      className="w-full h-[300px] bg-white rounded-lg shadow-inner"
    />
  );
}