import { AuthService } from 'src/app/services/auth/auth.service';
import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { RecipeService } from 'src/app/services/recipe/recipe.service';
import { debounceTime } from 'rxjs';

@Component({
  selector: 'app-recipes-header',
  templateUrl: './recipes-header.component.html',
  styleUrls: ['./recipes-header.component.css'],
})
export class RecipesHeaderComponent {
  searchControl = new FormControl('');

  constructor(
    public authService: AuthService,
    private recipeService: RecipeService,
  ) {
    this.searchControl.valueChanges
      .pipe(debounceTime(500))
      .subscribe((char) => {
        this.recipeService.recipesInit({ search: char as string });
      });
  }
}
