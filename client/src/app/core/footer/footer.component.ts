import { Component } from '@angular/core';
import { navLinks } from 'src/app/constants/constants';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent {
  navLinks = navLinks;
}
