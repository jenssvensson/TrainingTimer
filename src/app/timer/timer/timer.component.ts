import { ExerciseType } from './../../common/models/exercise-type';
import { Exercise } from './../../common/models/exercise';
import { WorkoutService } from './../../common/workout/workout.service';
import { Observable } from 'rxjs/Observable';
import { SoundService } from './../sound/sound.service';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs/Rx';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class TimerComponent implements OnInit {

  public displayCountdown = 0;
  public displayExercise = '';
  public nextExercise = '';
  public countdownSeconds = 60;
  // Move to service later
  private workout: Array<Exercise>;

  private interval;
  private resumeControl: Subject<Event>;
  private pauseControl: Subject<Event>;
  private pause: Observable<Observable<boolean>>;
  private resume;
  private timer: Subscription;
  ExerciseType = ExerciseType;

  constructor(private soundService: SoundService, private workoutService: WorkoutService) { }

  ngOnInit() {
    this.interval = Observable.timer(0, 1000).mapTo(-1);
    this.resumeControl = new Subject<Event>();
    this.pauseControl = new Subject<Event>();
    this.pause = this.pauseControl.asObservable().mapTo(Observable.of(false));
    this.resume = this.resumeControl.asObservable().mapTo(this.interval);
  }

  startTraining(): void {
    this.workout = this.workoutService.getWorkout(10, 3);
    this.nextSequence();
  }

  nextSequence(): void {

    if (this.workout.length > 0) {
      // Get next exercises in queue
      let currentExercise = this.workout.shift();

      if (currentExercise.type !== ExerciseType.rest) {
        this.soundService.playStartSound();
      }

      this.displayExercise = currentExercise.exercise;

      if (currentExercise.type === ExerciseType.rest) {
        this.soundService.playStopSound();
        this.displayExercise = 'Rest';
      }

      if (this.workout.length > 0) {
        if (this.workout[0].type === ExerciseType.rest) {
          this.nextExercise = 'Rest';
        } else {
          this.nextExercise = this.workout[0].exercise;
        }
      }
      this.countdownSeconds = currentExercise.time;
      this.startTimer();
      return;
    }
  }

  startTimer(): void {
    this.timer = Observable
    .merge(this.pause, this.resume)
    .startWith(this.interval)
    .switchMap(val => val)
    // if pause button is clicked stop countdown
    .take(this.countdownSeconds)
    .scan((acc, curr) => curr ? <number> curr + <number> acc : acc, this.countdownSeconds)
    .subscribe(
      i => this.displayCountdown = <number> i,
      error => error,
      () => this.nextSequence()
    )
  }

  pauseTraining(event: Event): void {
    this.pauseControl.next(event);
  }

  resumeTraining(event: Event): void {
    this.resumeControl.next(event);
  }

  stopTraining(event: Event): void {
    this.timer.unsubscribe();
    this.soundService.playFailSound();
    this.displayCountdown = 0;
    this.displayExercise = '';
    this.nextExercise = '';
  }
}
