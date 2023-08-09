import { BehaviorSubject, Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';

import { IRecipe } from 'src/app/interfaces/Recipe';
import { RecipeService } from 'src/app/services/recipe/recipe.service';

@Component({
  selector: 'app-recipes-catalog',
  templateUrl: './recipes-catalog.component.html',
  styleUrls: ['./recipes-catalog.component.css'],
})
export class RecipesCatalogComponent implements OnInit {
  recipes!: Observable<IRecipe[]>;

  constructor(private recipesService: RecipeService) {}

  ngOnInit(): void {
    this.recipesService.recipesInit();
    this.recipes = this.recipesService.getAllRecipes();
  }
}
