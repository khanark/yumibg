import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RecipeService } from 'src/app/services/recipe/recipe.service';
import { Router } from '@angular/router';
import { UtilityService } from 'src/app/services/util/util.service';
import { pageContent } from 'src/app/constants/constants';

@Component({
  selector: 'app-create-recipe',
  templateUrl: './create-recipe.component.html',
  styleUrls: ['./create-recipe.component.css'],
})
export class CreateRecipeComponent {
  dishes = pageContent.recipes.dishes;
  isLoading: boolean = false;

  constructor(
    private recipeService: RecipeService,
    private utilityService: UtilityService,
    private router: Router,
  ) {}

  onSubmit(createRecipeForm: NgForm) {
    if (createRecipeForm.invalid) {
      return;
    }
    const formData = {
      ...createRecipeForm.value,
      ingredients: this.utilityService.trimTextAreaEmptyLines(
        createRecipeForm.value.ingredients,
      ),
      steps: this.utilityService.trimTextAreaEmptyLines(
        createRecipeForm.value.steps,
      ),
    };

    this.isLoading = true;

    this.recipeService.createRecipe(formData).subscribe(() => {
      this.isLoading = false;
      this.router.navigate(['/recipes/catalog']);
    });
  }
}
