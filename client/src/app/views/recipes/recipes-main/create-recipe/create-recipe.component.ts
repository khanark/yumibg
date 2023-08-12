import { FormBuilder, NgForm, Validators } from '@angular/forms';

import { Component } from '@angular/core';
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
  createRecipeForm = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    cookTime: ['', [Validators.required]],
    dishType: ['', [Validators.required]],
    image: [
      '',
      [
        Validators.required,
        Validators.pattern(/^(https?:\/\/).*\.(png|jpe?g)$/),
      ],
    ],
    description: ['', [Validators.required, Validators.minLength(10)]],
    ingredients: ['', [Validators.required]],
    steps: ['', [Validators.required]],
  });

  constructor(
    private recipeService: RecipeService,
    private utilityService: UtilityService,
    private router: Router,
    private fb: FormBuilder,
  ) {}

  onSubmit() {
    if (this.createRecipeForm.invalid) {
      return;
    }
    const formData = {
      ...this.createRecipeForm.value,
      ingredients: this.utilityService.trimTextAreaEmptyLines(
        this.createRecipeForm.value.ingredients as string,
      ),
      steps: this.utilityService.trimTextAreaEmptyLines(
        this.createRecipeForm.value.steps as string,
      ),
    };

    this.isLoading = true;

    this.recipeService.createRecipe(formData as any).subscribe(() => {
      this.isLoading = false;
      this.router.navigate(['/recipes/catalog']);
    });
  }
}
