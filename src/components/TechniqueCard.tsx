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
      className="bg-white/10 backdrop-blur-lg rounded-xl border border-white/20 p-6 cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:bg-white/20"
    >
      <h3 className="text-xl font-semibold text-yellow-400 mb-2">{technique.name}</h3>
      <p className="text-white/80 mb-4">{technique.description}</p>
      <div className="flex justify-between items-center">
        <div className="flex gap-2 flex-wrap">
          <span className="text-sm bg-purple-900/50 text-yellow-400 px-2 py-1 rounded border border-purple-500/30">
            {technique.timing.inhale}s inhale
          </span>
          <span className="text-sm bg-purple-900/50 text-yellow-400 px-2 py-1 rounded border border-purple-500/30">
            {technique.timing.hold}s hold
          </span>
          <span className="text-sm bg-purple-900/50 text-yellow-400 px-2 py-1 rounded border border-purple-500/30">
            {technique.timing.exhale}s exhale
          </span>
        </div>
        <ArrowRight className="text-yellow-400 hover:text-yellow-300" />
      </div>
    </div>
  );
}