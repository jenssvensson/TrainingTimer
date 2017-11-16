import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Subject, BehaviorSubject } from 'rxjs/Rx';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class TimerComponent implements OnInit {

  public displayCountdown;
  public finished = 'Not finished';
  public displayExercise = '';
  public nextExercise = '';
  public countdownSeconds = 60;
  // Move to service later
  private exercises = [
    { exercise: 'deadlift', time: 10, type: 'work' },
    { exercise: 'situps', time: 10, type: 'work' },
    { exercise: '', time: 5, type: 'rest' },
    { exercise: 'deadlift', time: 5, type: 'work' },
    { exercise: 'pushups', time: 10, type: 'rest' },
    { exercise: 'deadlift', time: 10, type: 'work' }
  ];

  private interval;
  private resumeControl;
  private pauseControl = new Subject<Event>();
  private pause;
  private resume;
  private timer;

  constructor() { }

  ngOnInit() {

    this.interval = Observable.timer(0, 1000).mapTo(-1);

    this.resumeControl = new Subject<Event>();
    this.pauseControl = new Subject<Event>();

    this.pause = this.pauseControl.asObservable().mapTo(Observable.of(false));
    this.resume = this.resumeControl.asObservable().mapTo(this.interval);

  }

  startTraining(): void {
    this.nextSequence();
  }

  nextSequence(): void {

    if (this.exercises.length > 0) {
      // Get next exercises in queue
      let ex = this.exercises.shift();
      let runup = 0;
      if (ex.type === 'work') {
        runup = 5;
      }
      this.displayExercise = ex.exercise;

      if (ex.type === 'rest') {
        this.displayExercise = 'Rest';
      }

      if (this.exercises.length > 0) {
        if (this.exercises[0].type === 'rest') {
          this.displayExercise = 'Rest';
        } else {
          this.nextExercise = this.exercises[0].exercise;
        }
      }
      this.interval = Observable.timer(0, 1000).mapTo(-1);
      this.countdownSeconds = ex.time;
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
    .scan((acc, curr) => curr ? curr + acc : acc, this.countdownSeconds)
    .subscribe(
      i => this.displayCountdown = i,
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
    // TODO reset everything
  }
}
