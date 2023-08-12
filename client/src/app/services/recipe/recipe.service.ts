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
  isLoading: boolean = false;
  subscription!: Subscription;

  constructor(
    private http: HttpClient,
    private authService: AuthService,
  ) {}

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
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

    this.isLoading = true;

    this.subscription = this.http
      .get<IRecipe[]>(`${environment.API_URL}recipes`, {
        params,
      })
      .subscribe((recipes) => {
        this.isLoading = false;
        this._recipes$.next(recipes);
      });
  }

  getSingleRecipe(id: string): Observable<IRecipe> {
    return this.http.get<IRecipe>(`${environment.API_URL}recipes/${id}`);
  }

  createRecipe(recipe: IRecipe): Observable<IRecipe> {
    const recipePayload = {
      ...recipe,
      owner: this.authService.loggedUser?._id,
    };
    return this.http.post<IRecipe>(
      `${environment.API_URL}recipes`,
      recipePayload,
    );
  }

  updateRecipe(id: string, recipe: IRecipe): Observable<IRecipe> {
    return this.http.patch<IRecipe>(
      `${environment.API_URL}recipes/${id}`,
      recipe,
    );
  }

  deleteRecipe(id: string): Observable<IRecipe> {
    return this.http.delete<IRecipe>(`${environment.API_URL}recipes/${id}`);
  }
}
