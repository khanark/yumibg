import {
  Component,
  HostBinding,
  HostListener,
  Injectable,
  OnDestroy,
  OnInit,
} from '@angular/core';

import { AuthService } from './../../services/auth/auth.service';
import { Subscription } from 'rxjs';
import { navLinks } from 'src/app/constants/constants';
import { stickyAnimation } from 'src/app/animations/sticky';

@Injectable({
  providedIn: 'root',
})
@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
  animations: [stickyAnimation],
})
export class NavigationComponent implements OnInit, OnDestroy {
  navLinks = navLinks;
  dropdownNavigation: boolean = false;
  navbarFixed: boolean = false;

  @HostListener('window:scroll', ['$event']) onscroll() {
    if (window.scrollY > 500) {
      this.navbarFixed = true;
    } else {
      this.navbarFixed = false;
    }
  }

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
