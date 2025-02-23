import { BreathingTechnique, Category } from '../types/breathing';

export const breathingTechniques: BreathingTechnique[] = [
  {
    id: '478',
    name: '4-7-8 Breathing',
    description: 'A natural tranquilizer for the nervous system, this technique helps reduce anxiety and aids sleep.',
    instructions: [
      'Sit or lie comfortably with your back straight',
      'Place the tip of your tongue behind your upper front teeth',
      'Exhale completely through your mouth, making a whoosh sound',
      'Close your mouth and inhale quietly through your nose for 4 counts',
      'Hold your breath for 7 counts',
      'Exhale completely through your mouth for 8 counts',
    ],
    timing: {
      inhale: 4,
      hold: 7,
      exhale: 8,
    },
    benefits: [
      'Reduces anxiety and stress',
      'Helps with sleep',
      'Manages food cravings',
      'Improves emotional regulation',
    ],
    categories: ['relax', 'sleep', 'stress']
  },
  {
    id: 'diaphragmatic',
    name: 'Diaphragmatic Breathing',
    description: 'Also known as belly breathing, this technique helps strengthen the diaphragm and reduce stress.',
    instructions: [
      'Lie on your back with knees bent',
      'Place one hand on your chest and the other on your belly',
      'Breathe in slowly through your nose, feeling your belly rise',
      'Tighten your stomach muscles and exhale through pursed lips',
    ],
    timing: {
      inhale: 4,
      hold: 2,
      exhale: 4,
    },
    benefits: [
      'Strengthens the diaphragm',
      'Reduces stress',
      'Lowers blood pressure',
      'Improves core stability',
    ],
    categories: ['relax', 'focus', 'energy']
  },
  {
    id: 'pursed-lip',
    name: 'Pursed-Lip Breathing',
    description: 'A simple breathing technique that helps slow down your breathing and release air trapped in your lungs.',
    instructions: [
      'Relax your neck and shoulders',
      'Inhale slowly through your nose for 2 counts',
      'Purse your lips as if you\'re going to whistle',
      'Exhale slowly through pursed lips for 4 counts',
    ],
    timing: {
      inhale: 2,
      hold: 0,
      exhale: 4,
    },
    benefits: [
      'Releases trapped air in lungs',
      'Keeps airways open longer',
      'Improves breathing pattern',
      'Reduces shortness of breath',
    ],
    categories: ['relax', 'stress']
  },
  {
    id: 'box',
    name: 'Box Breathing',
    description: 'A powerful stress-relieving technique used by Navy SEALs, also known as square breathing.',
    instructions: [
      'Sit upright in a comfortable position',
      'Inhale slowly for 4 counts',
      'Hold your breath for 4 counts',
      'Exhale slowly for 4 counts',
      'Hold empty lungs for 4 counts',
    ],
    timing: {
      inhale: 4,
      hold: 4,
      exhale: 4,
      postExhaleHold: 4,
    },
    benefits: [
      'Heightens performance',
      'Reduces stress',
      'Improves concentration',
      'Manages emotional responses',
    ],
    categories: ['focus', 'performance', 'stress']
  },
];

export const categories: Category[] = [
  {
    id: 'relax',
    name: 'Breathe to Relax',
    description: 'Calm your mind and body with these soothing breathing techniques',
    icon: 'Clouds',
    techniques: breathingTechniques
      .filter(t => t.categories.includes('relax'))
      .map(t => t.id)
  },
  {
    id: 'focus',
    name: 'Breathe to Focus',
    description: 'Enhance your concentration and mental clarity',
    icon: 'Target',
    techniques: breathingTechniques
      .filter(t => t.categories.includes('focus'))
      .map(t => t.id)
  },
  {
    id: 'stress',
    name: 'Breathe for Stress Relief',
    description: 'Release tension and manage stress effectively',
    icon: 'Sparkles',
    techniques: breathingTechniques
      .filter(t => t.categories.includes('stress'))
      .map(t => t.id)
  },
  {
    id: 'sleep',
    name: 'Breathe for Better Sleep',
    description: 'Prepare your mind and body for restful sleep',
    icon: 'Moon',
    techniques: breathingTechniques
      .filter(t => t.categories.includes('sleep'))
      .map(t => t.id)
  },
  {
    id: 'energy',
    name: 'Breathe for Energy',
    description: 'Boost your energy levels and vitality',
    icon: 'Zap',
    techniques: breathingTechniques
      .filter(t => t.categories.includes('energy'))
      .map(t => t.id)
  },
  {
    id: 'performance',
    name: 'Breathe for Performance',
    description: 'Optimize your physical and mental performance',
    icon: 'Trophy',
    techniques: breathingTechniques
      .filter(t => t.categories.includes('performance'))
      .map(t => t.id)
  }
];