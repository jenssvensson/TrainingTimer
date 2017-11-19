import { ExerciseType } from '../models/exercise-type';
import { Exercise } from '../models/exercise';
import { Injectable } from '@angular/core';

@Injectable()
export class WorkoutService {

  private defaultWorkout = [
    { exercise: 'deadlift', time: 10, type: 2 },
    { exercise: '', time: 5, type: 0 },
    { exercise: 'situps', time: 10, type: 2 },
    { exercise: '', time: 5, type: 0 },
    { exercise: 'deadlift', time: 10, type: 2 },
    { exercise: '', time: 5, type: 0 },
    { exercise: 'deadlift', time: 10, type: 2 }
  ];

  constructor() { }

  getWorkout(numberOfExercises: number, sets: number): Array<Exercise> {
    return this.defaultWorkout;
  }

}
