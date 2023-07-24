import * as RecipeActions from "./actions"

import { Actions, createEffect, ofType } from "@ngrx/effects"
import { catchError, map, mergeMap, of } from "rxjs"

import { HttpErrorResponse } from "@angular/common/http"
import { Injectable } from "@angular/core"
import { RecipeService } from "../services/recipe/recipe.service"

@Injectable()
export class RecipesEffects {
    constructor(private actions$: Actions, private recipeService: RecipeService) { }
    
    getRecipes$ = createEffect(() => {
        return this.actions$.pipe(ofType(RecipeActions.getRecipes), mergeMap(() => {
            return this.recipeService.getAllRecipes().pipe(
                map(recipes =>{
                    console.log(recipes)
                    return RecipeActions.getRecipesSuccess({ recipes })
                }),
                catchError((error: HttpErrorResponse) =>
                of(RecipeActions.getRecipesFailure({ error: error.error.message }))))
            }))
        }) 
}