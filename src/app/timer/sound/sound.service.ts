import { Injectable } from '@angular/core';

@Injectable()
export class SoundService {

  private startBeep;
  private stopHorn;
  private failTrombone;

  constructor() {
    this.startBeep = new Audio('../../../../assets/Beep.mp3');
    this.stopHorn = new Audio('../../../../assets/nautical008.mp3');
    this.failTrombone = new Audio('../../../../assets/Sad_Trombone.mp3');
  }

  playStartSound(): void {
    this.startBeep.play();
  }

  playStopSound(): void {
    this.stopHorn.play();
  }

  playFailSound(): void {
    this.failTrombone.play();
  }
}
