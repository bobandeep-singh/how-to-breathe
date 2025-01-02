import React, { useState, useEffect, useCallback } from 'react';
import { ArrowLeft, Play, Pause, StopCircle } from 'lucide-react';
import { BreathingTechnique } from '../types/breathing';
import { BreathingGraph } from './BreathingGraph';
import { useBreathingTimer } from '../hooks/useBreathingTimer';

interface ExerciseViewProps {
  technique: BreathingTechnique;
  onBack: () => void;
}

export function ExerciseView({ technique, onBack }: ExerciseViewProps) {
  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [cycles, setCycles] = useState(0);
  
  const { 
    progress, 
    elapsedTime,
    reset: resetTimer 
  } = useBreathingTimer({
    technique,
    isActive: isActive && !isPaused,
    onCycleComplete: () => setCycles(c => c + 1)
  });

  const reset = useCallback(() => {
    setIsActive(false);
    setIsPaused(false);
    setCycles(0);
    resetTimer();
  }, [resetTimer]);

  const formatTime = (ms: number) => {
    const seconds = Math.floor(ms / 1000);
    const minutes = Math.floor(seconds / 60);
    return `${minutes}:${(seconds % 60).toString().padStart(2, '0')}`;
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <button
        onClick={onBack}
        className="flex items-center text-gray-600 hover:text-gray-800 mb-6"
      >
        <ArrowLeft className="mr-2" /> Back to techniques
      </button>

      <h2 className="text-3xl font-bold text-gray-800 mb-4">{technique.name}</h2>
      <p className="text-gray-600 mb-6">{technique.description}</p>

      <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
        <h3 className="text-xl font-semibold mb-4">Instructions</h3>
        <ol className="list-decimal list-inside space-y-2">
          {technique.instructions.map((instruction, index) => (
            <li key={index} className="text-gray-700">{instruction}</li>
          ))}
        </ol>
      </div>

      <div className="mb-8">
        <BreathingGraph 
          technique={technique}
          isActive={isActive}
          progress={progress}
        />
      </div>

      <div className="flex justify-between items-center mb-8">
        <div className="text-2xl font-mono">
          Time: {formatTime(elapsedTime)}
        </div>
        <div className="text-2xl font-mono">
          Cycles: {cycles}
        </div>
      </div>

      <div className="flex justify-center gap-4">
        {!isActive ? (
          <button
            onClick={() => setIsActive(true)}
            className="flex items-center px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
          >
            <Play className="mr-2" /> Start
          </button>
        ) : (
          <>
            <button
              onClick={() => setIsPaused(!isPaused)}
              className="flex items-center px-6 py-3 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 transition-colors"
            >
              <Pause className="mr-2" /> {isPaused ? 'Resume' : 'Pause'}
            </button>
            <button
              onClick={reset}
              className="flex items-center px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
            >
              <StopCircle className="mr-2" /> Stop
            </button>
          </>
        )}
      </div>
    </div>
  );
}