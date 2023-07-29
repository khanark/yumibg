import { Component, OnInit } from '@angular/core';

import { IRecipe } from 'src/app/interfaces/Recipe';
import { RecipeService } from 'src/app/services/recipe/recipe.service';

@Component({
  selector: 'app-recipes-catalog',
  templateUrl: './recipes-catalog.component.html',
  styleUrls: ['./recipes-catalog.component.css'],
})
export class RecipesCatalogComponent implements OnInit {
  page: number = 1;
  count: number = 0;

  recipes: IRecipe[] = [];

  constructor(private recipesService: RecipeService) {}

  ngOnInit(): void {
    this.recipesService.getAllRecipes().subscribe((recipes) => {
      this.recipes = recipes;
    });
  }
}
