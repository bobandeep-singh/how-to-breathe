import type { GraphPoint } from '../types/breathing';

interface DrawBreathingGraphProps {
  ctx: CanvasRenderingContext2D;
  canvas: HTMLCanvasElement;
  points: GraphPoint[];
  currentPoint: GraphPoint;
  isActive: boolean;
  width: number;
  height: number;
}

export function drawBreathingGraph({
  ctx,
  points,
  currentPoint,
  isActive,
  width,
  height
}: DrawBreathingGraphProps) {
  // Clear canvas
  ctx.clearRect(0, 0, width, height);

  // Set up graph styles with glowing effect
  ctx.strokeStyle = '#FFFFFF';
  ctx.lineWidth = 4; // Increased line width for better visibility
  ctx.lineCap = 'round';
  ctx.lineJoin = 'round';
  ctx.shadowColor = '#EAB308';
  ctx.shadowBlur = 15;
  ctx.shadowOffsetX = 0;
  ctx.shadowOffsetY = 0;
  
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
    ctx.arc(currentPoint.x, currentPoint.y, 8, 0, Math.PI * 2);
    ctx.fill();

    // Add a white border to the dot
    ctx.strokeStyle = '#FFFFFF';
    ctx.lineWidth = 2;
    ctx.stroke();
  }

  // Reset shadow
  ctx.shadowBlur = 0;
}