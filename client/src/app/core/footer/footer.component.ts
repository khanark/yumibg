import { navLinks, pageContent } from 'src/app/constants/constants';

import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent {
  navLinks = navLinks;
  footer = pageContent.footer;
}
