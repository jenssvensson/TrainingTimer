import { ExerciseType } from './exercise-type';
import { Exercise } from './exercise';

/**
 * Default workout is comprised of 3 blocks of 10 exercises.
 * Each exercise is 45s long and 15s rest between. Rest betweem blocks is 3 min.
 */

let rest = { exercise: '', type: 0, time: 15 };
let block = [
  { exercise: 'Jumping jacks', type: ExerciseType.cardio, time: 45 },
  rest,
  { exercise: 'Pushups', type: ExerciseType.weightLifting, time: 45 },
  rest,
  { exercise: 'Situps straight', type: ExerciseType.strength, time: 45 },
  rest,
  { exercise: 'High knees running', type: ExerciseType.cardio, time: 45 },
  rest,
  { exercise: 'Deadlift', type: ExerciseType.weightLifting, time: 45 },
  rest,
  { exercise: 'Prone plank', type: ExerciseType.strength, time: 45 },
  rest,
  { exercise: 'Squat Jump', type: ExerciseType.cardio, time: 45 },
  rest,
  { exercise: 'Shoulder press', type: ExerciseType.weightLifting, time: 45 },
  rest,
  { exercise: 'Lunges', type: ExerciseType.strength, time: 45 },
  rest,
  { exercise: 'Bicep curl', type: ExerciseType.weightLifting, time: 45 },
]

let workout: Array<Exercise> = block;
workout.push({ exercise: '', type: 0, time: 180 });
workout = workout.concat(block);
workout.push({ exercise: '', type: 0, time: 180 });
workout = workout.concat(block);

export const DefaultWorkout: Array<Exercise> = workout;
