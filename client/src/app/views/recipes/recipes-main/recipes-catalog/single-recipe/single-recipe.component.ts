import { Component, Input } from '@angular/core';

import { IRecipe } from 'src/app/interfaces/Recipe';

@Component({
  selector: 'app-single-recipe',
  templateUrl: './single-recipe.component.html',
  styleUrls: ['./single-recipe.component.css'],
})
export class SingleRecipeComponent {
  @Input() recipe: IRecipe | undefined;
}
