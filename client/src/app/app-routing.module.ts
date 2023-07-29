import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './views/home/home.component';
import { LoginComponent } from './views/login/login.component';
import { NgModule } from '@angular/core';
import { RegisterComponent } from './views/register/register.component';

// If we have a more complex component with own routes
// we make use of lazy-loading the entire module.
const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent, title: 'Home' },
  { path: 'login', component: LoginComponent, title: 'Login' },
  { path: 'register', component: RegisterComponent, title: 'Register' },
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
