import { Injectable } from '@angular/core';

@Injectable()
export class SoundService {

  private startBeep;
  private stopHorn;

  constructor() {
    this.startBeep = new Audio('../../../assets/Beep.mp3');
    this.stopHorn = new Audio('../../../assets/nautical008.mp3');
  }

  playStartSound(): void {
    this.startBeep.play();
  }

  playStopSound(): void {
    this.stopHorn.play();
  }

}
