import React, { useState } from 'react';
import { Wind } from 'lucide-react';
import { breathingTechniques, categories } from './data/techniques';
import { TechniqueCard } from './components/TechniqueCard';
import { CategoryCard } from './components/CategoryCard';
import { ExerciseView } from './components/ExerciseView';
import type { BreathingTechnique, Category } from './types/breathing';

function App() {
  const [selectedTechnique, setSelectedTechnique] = useState<BreathingTechnique | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);

  if (selectedTechnique) {
    return (
      <ExerciseView 
        technique={selectedTechnique}
        onBack={() => setSelectedTechnique(null)}
      />
    );
  }

  const categoryTechniques = selectedCategory
    ? breathingTechniques.filter(t => t.categories.includes(selectedCategory.id))
    : [];

  return (
    <div className="min-h-screen bg-gradient-to-br from-royal-purple to-deep-indigo">
      <div className="max-w-7xl mx-auto p-6">
        <div className="flex items-center justify-center mb-12">
          <Wind className="w-12 h-12 text-yellow-400 mr-4" />
          <h1 className="text-4xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
            How To Breathe
          </h1>
        </div>

        {selectedCategory ? (
          <>
            <button
              onClick={() => setSelectedCategory(null)}
              className="flex items-center text-white/80 hover:text-white mb-6 transition-colors"
            >
              <Wind className="mr-2" /> Back to categories
            </button>
            <h2 className="text-3xl font-bold text-yellow-400 mb-4">{selectedCategory.name}</h2>
            <p className="text-white/80 text-lg mb-8">{selectedCategory.description}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {categoryTechniques.map((technique) => (
                <TechniqueCard
                  key={technique.id}
                  technique={technique}
                  onClick={() => setSelectedTechnique(technique)}
                />
              ))}
            </div>
          </>
        ) : (
          <>
            <p className="text-center text-white/80 text-lg mb-12 max-w-2xl mx-auto">
              Discover various breathing techniques tailored to your needs. Whether you want to relax,
              focus, or boost your energy, we have the perfect breathing exercise for you.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {categories.map((category) => (
                <CategoryCard
                  key={category.id}
                  category={category}
                  onClick={() => setSelectedCategory(category)}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default App;