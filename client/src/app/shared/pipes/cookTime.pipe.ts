import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cookTime',
})
export class CookTimePipe implements PipeTransform {
  transform(cookTimeInMinutes: number | undefined): string {
    if (cookTimeInMinutes === undefined) {
      return '';
    }

    const hours = Math.floor(cookTimeInMinutes / 60);
    const minutes = cookTimeInMinutes % 60;

    let formattedTime = '';

    if (hours > 0) {
      formattedTime += `${hours} h`;
    }

    if (minutes > 0) {
      formattedTime += ` ${minutes} mins`;
    }

    console.log(minutes);

    return formattedTime.trim();
  }
}
