import { AuthService } from '../auth/auth.service';
import { HttpClient } from '@angular/common/http';
import { IRecipe } from 'src/app/interfaces/Recipe';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  baseUrl: string = 'http://localhost:8000/api/recipes';

  endpoints = {
    get: this.baseUrl + '/',
    create: this.baseUrl + '/',
    single: (id: string) => this.baseUrl + '/' + id,
  };

  constructor(private http: HttpClient, private authService: AuthService) {}

  getAllRecipes(): Observable<IRecipe[]> {
    return this.http.get<IRecipe[]>(this.endpoints.get);
  }

  getSingleRecipe(id: string): Observable<IRecipe> {
    return this.http.get<IRecipe>(this.endpoints.single(id));
  }

  createRecipe(recipe: IRecipe): Observable<IRecipe> {
    const recipePayload = {
      ...recipe,
      owner: this.authService.loggedUser?._id,
    };
    return this.http.post<IRecipe>(this.endpoints.create, recipePayload);
  }

  updateRecipe(id: string, recipe: IRecipe): Observable<IRecipe> {
    return this.http.patch<IRecipe>(this.endpoints.single(id), recipe);
  }

  deleteRecipe(id: string): void {
    this.http.delete(this.endpoints.single(id));
  }
}
