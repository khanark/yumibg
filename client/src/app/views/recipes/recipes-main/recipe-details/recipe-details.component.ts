import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject, Subscription } from 'rxjs';
import { Component, OnDestroy, OnInit } from '@angular/core';

import { AuthService } from 'src/app/services/auth/auth.service';
import { IRecipe } from 'src/app/interfaces/Recipe';
import { NgForm } from '@angular/forms';
import { RecipeService } from 'src/app/services/recipe/recipe.service';
import { UserService } from './../../../../services/user/user.service';
import { pageContent } from 'src/app/constants/constants';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css'],
})
export class RecipeDetailsComponent implements OnInit, OnDestroy {
  private _recipe$ = new BehaviorSubject<IRecipe>({} as IRecipe);
  public recipe$ = this._recipe$.asObservable();
  dishes = pageContent.recipes.dishes;

  subscription!: Subscription;

  isOwner: boolean = false;
  isLoggedIn: boolean = false;
  isSaved: boolean = false;
  editMode: boolean = false;
  isLoading: boolean = false;
  isRecipeSaved: boolean = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private authService: AuthService,
    private recipeService: RecipeService,
    private userService: UserService,
    private router: Router,
  ) {}

  ngOnInit() {
    this.subscription = this.activatedRoute.data.subscribe(({ recipe }) => {
      this._recipe$.next(recipe);
      this.isOwner = recipe.owner._id === this.authService.loggedUser?._id;
      this.isLoggedIn = this.authService.isAuthenticated();
      this.isRecipeSaved = !!this.authService.loggedUser?.savedRecipes.includes(
        recipe._id,
      );
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  get recipe() {
    return this._recipe$.getValue();
  }

  get formRecipe() {
    const { steps, ingredients } = this._recipe$.getValue();
    return {
      ingredients: ingredients ? ingredients.join('\n') : '',
      steps: steps ? steps.join('\n') : '',
    };
  }

  toggleEditMode(): void {
    this.editMode = !this.editMode;
  }

  onSubmit(form: NgForm): void {
    if (form.invalid || !form.dirty) return;
    const formData = {
      ...form.value,
      ingredients: form.value.ingredients.split('\n'),
      steps: form.value.steps.split('\n'),
    };
    this.isLoading = true;
    this.recipeService.updateRecipe(this.recipe._id, formData).subscribe(() => {
      this.isLoading = false;
      this.toggleEditMode();
    });
  }

  onDelete(): void {
    this.isLoading = true;
    this.recipeService.deleteRecipe(this.recipe._id).subscribe(() => {
      this.isLoading = false;
      this.router.navigate(['/recipes/catalog']);
    });
  }

  onSaveRecipe(): void {
    this.isLoading = true;
    this.userService
      .saveRecipe(this.recipe._id, this.authService.loggedUser?._id as string)
      .subscribe(() => {
        this.isLoading = false;
        this.isRecipeSaved = true;
      });
  }
}
