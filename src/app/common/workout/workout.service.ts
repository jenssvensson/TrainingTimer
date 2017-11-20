import { Exercises } from './../models/exercise-data';
import { DefaultWorkout } from './../models/default-workout';
import { ExerciseType } from '../models/exercise-type';
import { Exercise } from '../models/exercise';
import { Injectable } from '@angular/core';

@Injectable()
export class WorkoutService {

  constructor() { }

  getDefaultWorkout(): Array<Exercise> {
    return DefaultWorkout;
  }

  getWorkout(numberOfExercises: number,
    sets: number,
    activePeriod: number,
    restPeriod: number,
    blockRestPeriod: number,
  ): Array<Exercise> {
    let workout: Array<Exercise> = [];
    let exercises = Exercises;
    let rest = { exercise: '', type: ExerciseType.rest, time: restPeriod };
    let blockRest = { exercise: '', type: ExerciseType.rest, time: blockRestPeriod };
    let block: Array<Exercise> = [];

    for (let j = 0; j < numberOfExercises; j++) {
      let type = (j % 3) + 1;
      let index = Math.floor(Math.random() * exercises[type].length);
      let pickedExercise = exercises[type].splice(index, 1).pop();
      let exercise = { exercise: pickedExercise, type: type, time: activePeriod };
      block.push(exercise);
      block.push(rest);
    }
    // Block rest now so we can remove last rest period.
    block.pop();

    for (let i = 0; i < sets; i++) {
      workout = workout.concat(block);
      workout.push(blockRest);
    }
    // Workout is finished wo we can remove last block rest perios
    workout.pop();

    return workout;
  }
  private generateWorkout(): Array<Exercise> {
    return DefaultWorkout;
  }

}
