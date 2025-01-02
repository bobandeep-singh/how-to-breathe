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

    // Set canvas size with higher resolution for retina displays
    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();
    
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Scale the context for retina displays
    ctx.scale(dpr, dpr);

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
      style={{ width: '100%', height: '300px' }}
      className="rounded-lg bg-black/30 backdrop-blur-sm"
    />
  );
}