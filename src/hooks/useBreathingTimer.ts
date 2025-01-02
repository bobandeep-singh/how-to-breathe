import { useState, useEffect, useCallback } from 'react';
import type { BreathingTechnique } from '../types/breathing';

interface UseBreathingTimerProps {
  technique: BreathingTechnique;
  isActive: boolean;
  onCycleComplete: () => void;
}

export function useBreathingTimer({ 
  technique, 
  isActive,
  onCycleComplete 
}: UseBreathingTimerProps) {
  const [elapsedTime, setElapsedTime] = useState(0);
  const [progress, setProgress] = useState(0);
  
  const totalCycleTime = (
    technique.timing.inhale + 
    technique.timing.hold + 
    technique.timing.exhale
  ) * 1000; // Convert to milliseconds

  const reset = useCallback(() => {
    setElapsedTime(0);
    setProgress(0);
  }, []);

  useEffect(() => {
    let animationFrame: number;
    let lastTime: number;

    const animate = (currentTime: number) => {
      if (!lastTime) {
        lastTime = currentTime;
      }

      const deltaTime = currentTime - lastTime;
      lastTime = currentTime;

      setElapsedTime(prev => prev + deltaTime);
      
      const newProgress = (elapsedTime % totalCycleTime) / totalCycleTime;
      setProgress(newProgress);

      // Check if we completed a cycle
      if (elapsedTime >= totalCycleTime && 
          Math.floor((elapsedTime - deltaTime) / totalCycleTime) !== 
          Math.floor(elapsedTime / totalCycleTime)) {
        onCycleComplete();
      }

      animationFrame = requestAnimationFrame(animate);
    };

    if (isActive) {
      lastTime = performance.now();
      animationFrame = requestAnimationFrame(animate);
    }

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [isActive, elapsedTime, totalCycleTime, onCycleComplete]);

  return {
    progress,
    elapsedTime,
    reset
  };
}