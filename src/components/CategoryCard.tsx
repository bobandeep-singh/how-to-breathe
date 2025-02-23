import React from 'react';
import { Cloud as Clouds, Target, Sparkles, Moon, Zap, Trophy } from 'lucide-react';
import { Category } from '../types/breathing';

interface CategoryCardProps {
  category: Category;
  onClick: () => void;
}

const iconMap = {
  Clouds,
  Target,
  Sparkles,
  Moon,
  Zap,
  Trophy
};

export function CategoryCard({ category, onClick }: CategoryCardProps) {
  const IconComponent = iconMap[category.icon as keyof typeof iconMap];

  return (
    <div 
      onClick={onClick}
      className="bg-white/10 backdrop-blur-lg rounded-xl border border-white/20 p-6 cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:bg-white/20"
    >
      <div className="flex items-center mb-4">
        <div className="p-3 rounded-lg bg-yellow-400/20 mr-4">
          <IconComponent className="w-6 h-6 text-yellow-400" />
        </div>
        <h3 className="text-xl font-semibold text-yellow-400">{category.name}</h3>
      </div>
      <p className="text-white/80 mb-4">{category.description}</p>
      <div className="text-white/60 text-sm">
        {category.techniques.length} technique{category.techniques.length !== 1 ? 's' : ''}
      </div>
    </div>
  );
}