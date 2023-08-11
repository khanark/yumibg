import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { Component, OnDestroy, OnInit } from '@angular/core';

import { IRecipe } from 'src/app/interfaces/Recipe';
import { RecipeService } from 'src/app/services/recipe/recipe.service';

@Component({
  selector: 'app-recipes-catalog',
  templateUrl: './recipes-catalog.component.html',
  styleUrls: ['./recipes-catalog.component.css'],
})
export class RecipesCatalogComponent implements OnInit, OnDestroy {
  recipes!: Observable<IRecipe[]>;
  subscription!: Subscription;
  isLoading: boolean = false;

  constructor(private recipesService: RecipeService) {}

  ngOnInit(): void {
    this.isLoading = true;
    this.recipesService.recipesInit();
    this.recipes = this.recipesService.getAllRecipes();
    this.subscription = this.recipes.subscribe(() => (this.isLoading = false));
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
