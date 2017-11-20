import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalize'
})
export class CapitalizePipe implements PipeTransform {

  transform(string: string): string {
    if (string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    return string;
  }

}
