import React, { useEffect, useRef } from 'react';
import { BreathingTechnique, GraphPoint } from '../types/breathing';

interface BreathingGraphProps {
  technique: BreathingTechnique;
  isActive: boolean;
  progress: number;
}

export function BreathingGraph({ technique, isActive, progress }: BreathingGraphProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const totalTime = technique.timing.inhale + technique.timing.hold + technique.timing.exhale;
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Set up graph styles
    ctx.strokeStyle = '#4F46E5';
    ctx.lineWidth = 3;
    
    // Calculate points for the breathing cycle
    const points: GraphPoint[] = [];
    const steps = 100;
    
    for (let i = 0; i <= steps; i++) {
      const x = (canvas.width * i) / steps;
      let y = canvas.height / 2;
      
      const t = (i / steps) * totalTime;
      
      if (t <= technique.timing.inhale) {
        // Inhale - line goes up
        y = canvas.height / 2 - (t / technique.timing.inhale) * (canvas.height / 3);
      } else if (t <= technique.timing.inhale + technique.timing.hold) {
        // Hold - line stays flat at the top
        y = canvas.height / 2 - (canvas.height / 3);
      } else {
        // Exhale - line goes down
        const exhaleProgress = (t - technique.timing.inhale - technique.timing.hold) / technique.timing.exhale;
        y = (canvas.height / 2 - (canvas.height / 3)) + exhaleProgress * (canvas.height / 3);
      }
      
      points.push({ x, y });
    }
    
    // Draw the line
    ctx.beginPath();
    points.forEach((point, index) => {
      if (index === 0) {
        ctx.moveTo(point.x, point.y);
      } else {
        ctx.lineTo(point.x, point.y);
      }
    });
    ctx.stroke();
    
    // Draw the progress dot
    if (isActive) {
      const currentPoint = points[Math.floor(progress * points.length)];
      ctx.fillStyle = '#4F46E5';
      ctx.beginPath();
      ctx.arc(currentPoint.x, currentPoint.y, 8, 0, Math.PI * 2);
      ctx.fill();
    }
  }, [technique, isActive, progress]);

  return (
    <canvas 
      ref={canvasRef}
      width={800}
      height={300}
      className="w-full h-[300px] bg-white rounded-lg shadow-inner"
    />
  );
}