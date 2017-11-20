import { ExerciseType } from './exercise-type';

export const Exercises: { [key: string]: string[] } = {
  [ExerciseType.cardio]: [
    'Jumping jacks',
    'Box jumps',
    'Spot running',
    'Line jumps',
    'High knees running',
    'Squat Jump'
  ],
  [ExerciseType.weightLifting]: [
    'Biceps Curl',
    'Pushups',
    'Deadlift',
    'Side lateral raise',
    'Shoulder press'
  ],
  [ExerciseType.strength]: [
    'Situps straight',
    'Situps side',
    'Prone plank',
    'Leg raise',
    'Opposite arm and leg raise',
    'Squats',
    'Wall sit',
    'Lunges'
  ],
  [ExerciseType.yoga]: [
    'Cobra',
    'Mountain Pose',
    'Downward Dog',
    'Warrior',
    'Tree Pose',
    'Bridge Pose',
    'Triangle Pose',
    'Seated Twist',
    'Pigeon Pose',
    'Crow Pose',
    'Child\'s Pose'
  ]
}
