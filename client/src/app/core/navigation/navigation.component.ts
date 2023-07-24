import { Component, Injectable, OnDestroy, OnInit } from '@angular/core';

import { AuthService } from './../../services/auth/auth.service';
import { Subscription } from 'rxjs';
import { navLinks } from 'src/app/constants/constants';

@Injectable({
  providedIn: 'root',
})
@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
})
export class NavigationComponent implements OnInit, OnDestroy {
  navLinks = navLinks;
  dropdownNavigation: boolean = false;

  subscription: Subscription | undefined;

  constructor(public authService: AuthService) {}

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  ngOnInit(): void {
    this.subscription = this.authService.loggedUser$.subscribe((user) => {
      if (user) {
        this.navLinks = this.navLinks.filter(
          (link) => link.path !== 'login' && link.path !== 'register'
        );
      } else {
        this.navLinks = navLinks;
      }
    });
  }

  toggleNavigation(): void {
    this.dropdownNavigation = !this.dropdownNavigation;
  }

  clickedOutside(): void {
    this.dropdownNavigation = false;
  }
}
