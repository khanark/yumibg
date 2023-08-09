import { AuthService } from 'src/app/services/auth/auth.service';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RecipeService } from 'src/app/services/recipe/recipe.service';
import { pageContent } from 'src/app/constants/constants';

@Component({
  selector: 'app-recipes-aside',
  templateUrl: './recipes-aside.component.html',
  styleUrls: ['./recipes-aside.component.css'],
})
export class RecipesAsideComponent {
  recipes = pageContent.recipes; // dishTypes are stored here
  formToggle: boolean = true;
  profileMenuToggle: boolean = false;
  outsideFormClick: boolean = false;

  constructor(
    public authService: AuthService,
    private recipeService: RecipeService,
  ) {}

  onFilterSubmit(form: NgForm) {
    const selectedDishes: string[] = Object.keys(form.value).filter(
      (key) => form.value[key],
    );
    // TODO: Fix the order being passed in the selectedDishes when filtering
    const selectedOrder = form.value.order;

    this.recipeService.recipesInit({
      filterOptions: selectedDishes,
      order: selectedOrder,
    });
  }

  onFilterReset(form: NgForm) {
    form.reset();
    this.recipeService.recipesInit();
  }

  toggleForm(): void {
    this.formToggle = !this.formToggle;
  }

  toggleProfileMenu(): void {
    this.profileMenuToggle = !this.profileMenuToggle;
  }

  clickedOutside(): void {
    this.formToggle = false;
  }
}
