import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { NgModule } from '@angular/core';
import { RecipesEffects } from 'src/app/store/effects.service';
import { SharedModule } from 'src/app/shared/shared.module';
import { StoreModule } from '@ngrx/store';
import { reducers } from 'src/app/store/reducers';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SharedModule,
    StoreModule.forFeature("recipes", reducers),
    EffectsModule.forFeature([RecipesEffects])
  ]
})
export class RecipesCatalogModule { }
