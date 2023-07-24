import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RecipeService } from 'src/app/services/recipe/recipe.service';
import { Router } from '@angular/router';
import { pageContent } from 'src/app/constants/constants';

@Component({
  selector: 'app-create-recipe',
  templateUrl: './create-recipe.component.html',
  styleUrls: ['./create-recipe.component.css'],
})
export class CreateRecipeComponent {
  regions = pageContent.recipes.regions;

  constructor(private recipeService: RecipeService, private router: Router) { }

  onSubmit(createRecipeForm: NgForm) {
    if(createRecipeForm.invalid) {return;}


  }
}
