import { Component } from '@angular/core';
import { pageContent } from 'src/app/constants/constants';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  homeContent = pageContent.home;
  navState: 'normal' | 'sticky' = 'sticky';

  onIntersectionChange(isIntersecting: boolean) {
    if (isIntersecting) {
      this.navState = 'normal';
    } else {
      this.navState = 'sticky';
    }
    console.log(this.navState);
  }
}
