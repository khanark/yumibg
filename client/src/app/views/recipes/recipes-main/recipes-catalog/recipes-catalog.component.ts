import { Component, OnInit } from '@angular/core';
import { IRecipe, RecipesArray } from 'src/app/interfaces/Recipe';

import { Observable } from 'rxjs';
import { RecipeService } from 'src/app/services/recipe/recipe.service';

@Component({
  selector: 'app-recipes-catalog',
  templateUrl: './recipes-catalog.component.html',
  styleUrls: ['./recipes-catalog.component.css'],
})
export class RecipesCatalogComponent implements OnInit {
  recipes!: Observable<RecipesArray>;

  constructor(public recipesService: RecipeService) {}

  ngOnInit(): void {
    this.recipesService.recipesInit();
    this.recipes = this.recipesService.getAllRecipes();
  }
}
