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
  // Clear canvas with fully transparent background
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Set up graph styles with glowing effect
  ctx.strokeStyle = '#FFFFFF';
  ctx.lineWidth = 4;
  ctx.shadowColor = '#EAB308';
  ctx.shadowBlur = 15;
  
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
  
  // Draw the progress dot with glow
  if (isActive) {
    ctx.fillStyle = '#EAB308';
    ctx.shadowColor = '#FFFFFF';
    ctx.shadowBlur = 20;
    ctx.beginPath();
    ctx.arc(currentPoint.x, currentPoint.y, 10, 0, Math.PI * 2);
    ctx.fill();

    // Add a white border to the dot
    ctx.strokeStyle = '#FFFFFF';
    ctx.lineWidth = 2;
    ctx.stroke();
  }

  // Reset shadow
  ctx.shadowBlur = 0;
}