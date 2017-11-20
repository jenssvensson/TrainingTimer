import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'secondsMinutes'
})
export class SecondsMinutesPipe implements PipeTransform {

  transform(seconds: any): string {
    const minutes: number = Math.floor(seconds / 60);
    return this.pad(minutes) + ':' + this.pad((seconds - minutes * 60));
  }

  private pad(number: number): any {
    return ('0' + number).slice(-2);
  }
}

