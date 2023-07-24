import * as RecipesActions from "../../../../store/actions"

import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';

import { AppStateInterface } from "src/app/types/AppState.interface";
import { Observable } from "rxjs";
import { RecipeService } from "src/app/services/recipe/recipe.service";
import { isLoadingSelector } from "src/app/store/selectors";

@Component({
  selector: 'app-recipes-catalog',
  templateUrl: './recipes-catalog.component.html',
  styleUrls: ['./recipes-catalog.component.css']
})
export class RecipesCatalogComponent implements OnInit{
  isLoading$: Observable<boolean>

  constructor(private store: Store<AppStateInterface>, private recipeStore: RecipeService) {
    this.isLoading$ = this.store.pipe(select(isLoadingSelector))
  }

  ngOnInit(): void {
    this.store.dispatch(RecipesActions.getRecipes())
  }

}
