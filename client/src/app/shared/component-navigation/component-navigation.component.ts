import { BehaviorSubject, Subscription } from 'rxjs';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';

import { Location } from '@angular/common';

@Component({
  selector: 'app-component-navigation',
  templateUrl: './component-navigation.component.html',
  styleUrls: ['./component-navigation.component.css'],
})
export class ComponentNavigationComponent implements OnInit, OnDestroy {
  private _currentLocation$ = new BehaviorSubject<string>('');
  currentLocation$ = this._currentLocation$.asObservable();
  isCatalogPage: boolean = false;

  routeSubscription: Subscription | undefined;

  constructor(private location: Location, private router: Router) {
    this._currentLocation$.next(this.router.url);
    this.isCatalogPage = this.router.url.includes('/catalog');
  }

  ngOnInit(): void {
    this.routeSubscription = this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        this._currentLocation$.next(event.url);
        this.isCatalogPage = event.url.includes('/catalog');
      }
    });
  }

  ngOnDestroy(): void {
    this.routeSubscription?.unsubscribe();
  }

  onGoBack() {
    this.location.back();
  }

  onGoToCatalog() {
    this.router.navigate(['/recipes/catalog']);
  }
}
