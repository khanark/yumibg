import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RecipeService } from 'src/app/services/recipe/recipe.service';
import { Router } from '@angular/router';
import { finalize } from 'rxjs';
import { pageContent } from 'src/app/constants/constants';

@Component({
  selector: 'app-create-recipe',
  templateUrl: './create-recipe.component.html',
  styleUrls: ['./create-recipe.component.css'],
})
export class CreateRecipeComponent {
  regions = pageContent.recipes.regions;
  isLoading: boolean = false;

  constructor(private recipeService: RecipeService, private router: Router) {}

  onSubmit(createRecipeForm: NgForm) {
    // if(createRecipeForm.invalid) {return;}
    const formData = {
      ...createRecipeForm.value,
      ingredients: createRecipeForm.value.ingredients.split('\n'),
      steps: createRecipeForm.value.steps.split('\n'),
    };

    this.isLoading = true;

    this.recipeService
      .createRecipe(formData)
      .pipe(
        finalize(() => {
          this.isLoading = false;
          createRecipeForm.reset();
        })
      )
      .subscribe({
        next: (recipe) => {
          // todo
          this.router.navigate(['/recipes/catalog']);
        },
      });
  }
}
