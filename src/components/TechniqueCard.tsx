import React from 'react';
import { ArrowRight } from 'lucide-react';
import { BreathingTechnique } from '../types/breathing';

interface TechniqueCardProps {
  technique: BreathingTechnique;
  onClick: () => void;
}

export function TechniqueCard({ technique, onClick }: TechniqueCardProps) {
  return (
    <div 
      onClick={onClick}
      className="bg-white rounded-xl shadow-lg p-6 cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
    >
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{technique.name}</h3>
      <p className="text-gray-600 mb-4">{technique.description}</p>
      <div className="flex justify-between items-center">
        <div className="flex gap-2">
          <span className="text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded">
            {technique.timing.inhale}s inhale
          </span>
          <span className="text-sm bg-purple-100 text-purple-800 px-2 py-1 rounded">
            {technique.timing.hold}s hold
          </span>
          <span className="text-sm bg-green-100 text-green-800 px-2 py-1 rounded">
            {technique.timing.exhale}s exhale
          </span>
        </div>
        <ArrowRight className="text-gray-400 hover:text-gray-600" />
      </div>
    </div>
  );
}