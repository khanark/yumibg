import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';
import { BehaviorSubject } from 'rxjs';
import { IRecipe } from 'src/app/interfaces/Recipe';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css'],
})
export class RecipeDetailsComponent implements OnInit {
  private _recipe$ = new BehaviorSubject<IRecipe | null>(null);
  public recipe$ = this._recipe$.asObservable();

  isOwner: boolean = false;
  isLoggedIn: boolean = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.activatedRoute.data.subscribe(({ recipe }) => {
      this._recipe$.next(recipe);
      this.isOwner = recipe.owner._id === this.authService.loggedUser?._id;
      this.isLoggedIn = this.authService.isAuthenticated();
    });
  }

  get recipe() {
    return this._recipe$.getValue();
  }
}
