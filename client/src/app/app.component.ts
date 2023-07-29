import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';

import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy {
  dashboardSubscription: Subscription | undefined;
  isDashboardPage: boolean = false;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.dashboardSubscription = this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        this.isDashboardPage = event.url.startsWith('/recipes');
      }
    });
  }

  ngOnDestroy(): void {
    this.dashboardSubscription?.unsubscribe();
  }
}
