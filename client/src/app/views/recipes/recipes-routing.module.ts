import { RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';
import { RecipesComponent } from './recipes.component';
import { UserDetailsComponent } from './recipes-main/user-details/user-details.component';

const routes: Routes = [
  { path: '', component: RecipesComponent, pathMatch: 'full' },
  {
    path: 'users/:id',
    component: UserDetailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecipesRoutingModule {}
