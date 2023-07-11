import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './views/home/home.component';
import { LoginComponent } from './views/login/login.component';
import { NgModule } from '@angular/core';
import { RegisterComponent } from './views/register/register.component';

// If we have a more complex component with own routes
// we make use of lazy-loading the entire module.
const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent },
  // { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  {
    path: 'recipes',
    loadChildren: () =>
      import('./views/recipes/recipes.module').then((x) => x.RecipesModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
