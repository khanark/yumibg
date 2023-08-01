import { BehaviorSubject, Observable, Subscription, map, tap } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, OnDestroy } from '@angular/core';

import { AuthService } from '../auth/auth.service';
import { IRecipe } from 'src/app/interfaces/Recipe';

@Injectable({
  providedIn: 'root',
})
export class RecipeService implements OnDestroy {
  baseUrl: string = 'http://localhost:8000/api/recipes';
  subscription: Subscription | undefined;

  endpoints = {
    get: this.baseUrl + '/',
    create: this.baseUrl + '/',
    single: (id: string) => this.baseUrl + '/' + id,
  };

  private _recipes$ = new BehaviorSubject<IRecipe[]>([]);
  private recipes$ = this._recipes$.asObservable();

  constructor(private http: HttpClient, private authService: AuthService) {}

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  getAllRecipes(): Observable<IRecipe[]> {
    return this.recipes$;
  }

  recipesInit(filterOptions?: any, order?: string): void {
    let params = new HttpParams();

    if (filterOptions && filterOptions.length > 0) {
      filterOptions.forEach((dish: string) => {
        params = params.append('dishType', dish);
      });
    }

    if (order) {
      params = params.append('order', order);
    }

    this.subscription = this.http
      .get<IRecipe[]>(this.endpoints.get, { params: params })
      .subscribe((recipes) => {
        this._recipes$.next(recipes);
      });
  }

  getSingleRecipe(id: string): Observable<IRecipe> {
    return this.http.get<IRecipe>(this.endpoints.single(id));
  }

  createRecipe(recipe: IRecipe): void {
    const recipePayload = {
      ...recipe,
      owner: this.authService.loggedUser?._id,
    };
    this.subscription = this.http
      .post<IRecipe>(this.endpoints.create, recipePayload)
      .subscribe((newRecipe) => {
        this._recipes$.next([...this._recipes$.getValue(), newRecipe]);
      });
  }

  updateRecipe(id: string, recipe: IRecipe): void {
    this.subscription = this.http
      .patch<IRecipe>(this.endpoints.single(id), recipe)
      .subscribe((updatedRecipe) => {
        this._recipes$.next(
          this._recipes$
            .getValue()
            .map((curr) =>
              curr._id === updatedRecipe._id ? updatedRecipe : curr
            )
        );
      });
  }

  deleteRecipe(id: string): void {
    this.subscription = this.http
      .delete<IRecipe>(this.endpoints.single(id))
      .subscribe((deletedRecipe) => {
        this._recipes$.next(
          this._recipes$
            .getValue()
            .filter((curr) => curr._id !== deletedRecipe._id)
        );
      });
  }
}
