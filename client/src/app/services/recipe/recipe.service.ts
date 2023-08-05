import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, OnDestroy } from '@angular/core';

import { AuthService } from '../auth/auth.service';
import { IRecipe } from 'src/app/interfaces/Recipe';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class RecipeService implements OnDestroy {
  private _recipes$ = new BehaviorSubject<IRecipe[]>([]);
  private recipes$ = this._recipes$.asObservable();
  subscription: Subscription | undefined;

  constructor(private http: HttpClient, private authService: AuthService) {}

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  getAllRecipes(): Observable<IRecipe[]> {
    return this.recipes$;
  }

  recipesInit(query?: {
    filterOptions?: string[];
    order?: string;
    search?: string;
  }): void {
    let params = new HttpParams();

    if (query) {
      if (query.filterOptions) {
        query.filterOptions.forEach((option) => {
          if (option !== 'order') {
            params = params.append('dishType', option);
          }
        });
      }
      if (query.order) {
        params = params.set('order', query.order);
      }
      if (query.search) {
        params = params.set('search', query.search);
      }
    }

    this.subscription = this.http
      .get<IRecipe[]>(`${environment.API_URL}recipes`, { params })
      .subscribe((recipes) => {
        this._recipes$.next(recipes);
      });
  }

  getSingleRecipe(id: string): Observable<IRecipe> {
    return this.http.get<IRecipe>(`${environment.API_URL}recipes/${id}`);
  }

  createRecipe(recipe: IRecipe): void {
    const recipePayload = {
      ...recipe,
      owner: this.authService.loggedUser?._id,
    };
    this.subscription = this.http
      .post<IRecipe>(`${environment.API_URL}recipes`, recipePayload)
      .subscribe((newRecipe) => {
        this._recipes$.next([...this._recipes$.getValue(), newRecipe]);
      });
  }

  updateRecipe(id: string, recipe: IRecipe): void {
    this.subscription = this.http
      .patch<IRecipe>(`${environment.API_URL}recipes/${id}`, recipe)
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
      .delete<IRecipe>(`${environment.API_URL}recipes/${id}`)
      .subscribe((deletedRecipe) => {
        this._recipes$.next(
          this._recipes$
            .getValue()
            .filter((curr) => curr._id !== deletedRecipe._id)
        );
      });
  }
}
