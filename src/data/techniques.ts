import { BreathingTechnique } from '../types/breathing';

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
  },
];