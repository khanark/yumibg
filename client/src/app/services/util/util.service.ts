import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UtilityService {
  trimTextAreaEmptyLines(strArr: string): string[] {
    console.log(strArr);
    return strArr.split('\n').filter((str) => str !== '');
  }
}
