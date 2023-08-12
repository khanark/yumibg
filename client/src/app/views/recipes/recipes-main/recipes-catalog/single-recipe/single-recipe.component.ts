import { Component, Input, OnInit } from '@angular/core';

import { IRecipe } from 'src/app/interfaces/Recipe';

@Component({
  selector: 'app-single-recipe',
  templateUrl: './single-recipe.component.html',
  styleUrls: ['./single-recipe.component.css'],
})
export class SingleRecipeComponent implements OnInit {
  @Input() recipe!: IRecipe;
  isRecipeNew: boolean = false;
  timesSavedCounter: number = 0;

  ngOnInit(): void {
    this.isRecipeNew = this.isNewRecord(this.recipe.createdAt);
    this.timesSavedCounter = this.recipe.savedByUserData.count;
  }

  isNewRecord(creationDate: string): boolean {
    const ONE_DAY_IN_MILLISECONDS = 24 * 60 * 60 * 1000; // 1 day in milliseconds
    const now = new Date();
    const created = new Date(creationDate);
    const timeDifference = now.getTime() - created.getTime();
    return timeDifference <= ONE_DAY_IN_MILLISECONDS;
  }
}
