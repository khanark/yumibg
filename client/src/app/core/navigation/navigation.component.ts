import { Component, Injectable } from '@angular/core';

import { Router } from '@angular/router';
import { navLinks } from 'src/app/constants/constants';

@Injectable({
  providedIn: 'root',
})
@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
})
export class NavigationComponent {
  navLinks = navLinks;
  dropdownNavigation: boolean = false;

  constructor(private router: Router) {}

  toggleNavigation(): void {
    this.dropdownNavigation = !this.dropdownNavigation;
  }

  clickedOutside(): void {
    this.dropdownNavigation = false;
  }
}
