import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { IRecipe } from 'src/app/interfaces/Recipe';
import { IUser } from 'src/app/interfaces/User';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css'],
})
export class RecipeDetailsComponent implements OnInit {
  private _recipe$ = new BehaviorSubject<IRecipe | null>(null);
  public recipe$ = this._recipe$.asObservable();

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.activatedRoute.data.subscribe(({ recipe }) => {
      this._recipe$.next(recipe);
    });
  }

  get recipe() {
    return this._recipe$.getValue();
  }
}
