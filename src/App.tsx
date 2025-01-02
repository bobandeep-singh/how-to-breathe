import React, { useState } from 'react';
import { Wind } from 'lucide-react';
import { breathingTechniques } from './data/techniques';
import { TechniqueCard } from './components/TechniqueCard';
import { ExerciseView } from './components/ExerciseView';
import type { BreathingTechnique } from './types/breathing';

function App() {
  const [selectedTechnique, setSelectedTechnique] = useState<BreathingTechnique | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-royal-purple to-deep-indigo">
      {selectedTechnique ? (
        <ExerciseView 
          technique={selectedTechnique}
          onBack={() => setSelectedTechnique(null)}
        />
      ) : (
        <div className="max-w-7xl mx-auto p-6">
          <div className="flex items-center justify-center mb-12">
            <Wind className="w-12 h-12 text-yellow-400 mr-4" />
            <h1 className="text-4xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
              How To Breathe
            </h1>
          </div>

          <p className="text-center text-white/80 text-lg mb-12 max-w-2xl mx-auto">
            Discover various breathing techniques to help reduce stress, improve focus, and enhance your overall well-being. 
            Select a technique to begin your breathing exercise.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {breathingTechniques.map((technique) => (
              <TechniqueCard
                key={technique.id}
                technique={technique}
                onClick={() => setSelectedTechnique(technique)}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;