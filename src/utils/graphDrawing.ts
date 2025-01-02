import type { GraphPoint } from '../types/breathing';

interface DrawBreathingGraphProps {
  ctx: CanvasRenderingContext2D;
  canvas: HTMLCanvasElement;
  points: GraphPoint[];
  currentPoint: GraphPoint;
  isActive: boolean;
}

export function drawBreathingGraph({
  ctx,
  canvas,
  points,
  currentPoint,
  isActive
}: DrawBreathingGraphProps) {
  // Clear canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Set up graph styles
  ctx.strokeStyle = '#4F46E5';
  ctx.lineWidth = 3;
  
  // Draw the breathing line
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
    ctx.fillStyle = '#4F46E5';
    ctx.beginPath();
    ctx.arc(currentPoint.x, currentPoint.y, 8, 0, Math.PI * 2);
    ctx.fill();
  }
}