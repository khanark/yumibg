import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customTitleCase',
})
export class CustomTitleCasePipe implements PipeTransform {
  transform(value: string): string {
    if (!value) return value;

    const words = value.split(' ');
    const capitalizedWords = words.map((word) => {
      return word.length >= 4 ? this.capitalize(word) : word;
    });

    return capitalizedWords.join(' ');
    
  }

  private capitalize(word: string): string {
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  }
}
