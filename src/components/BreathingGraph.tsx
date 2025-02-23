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
  const containerRef = useRef<HTMLDivElement>(null);

  const updateCanvasSize = () => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    // Get the container's width
    const containerWidth = container.clientWidth;
    const containerHeight = Math.min(300, containerWidth * 0.5); // Responsive height
    
    // Set canvas size with higher resolution for retina displays
    const dpr = window.devicePixelRatio || 1;
    canvas.width = containerWidth * dpr;
    canvas.height = containerHeight * dpr;
    
    // Set display size
    canvas.style.width = `${containerWidth}px`;
    canvas.style.height = `${containerHeight}px`;

    return { width: containerWidth, height: containerHeight, dpr };
  };

  const { points, currentPoint } = useBreathingAnimation({
    technique,
    progress,
    canvasWidth: containerRef.current?.clientWidth || 800,
    canvasHeight: containerRef.current?.clientHeight || 300
  });

  useEffect(() => {
    const handleResize = () => {
      const dimensions = updateCanvasSize();
      if (!dimensions) return;

      const canvas = canvasRef.current;
      const ctx = canvas?.getContext('2d');
      if (!ctx || !canvas) return;

      // Clear any transforms
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      
      // Scale for retina display
      ctx.scale(dimensions.dpr, dimensions.dpr);

      drawBreathingGraph({
        ctx,
        canvas,
        points,
        currentPoint,
        isActive,
        width: dimensions.width,
        height: dimensions.height
      });
    };

    // Initial setup and draw
    handleResize();

    // Add resize listener
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [points, currentPoint, isActive]);

  return (
    <div ref={containerRef} className="w-full relative">
      <canvas 
        ref={canvasRef}
        className="rounded-lg bg-black/30 backdrop-blur-sm w-full"
      />
    </div>
  );
}