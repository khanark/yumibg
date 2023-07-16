import { AuthService } from 'src/app/services/auth/auth.service';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { pageContent } from 'src/app/constants/constants';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
})
export class RecipesComponent {
  recipes = pageContent.recipes;
  formToggle: boolean = false;

  constructor(public authService: AuthService) {}

  onFilterSubmit(form: NgForm) {
    console.log(form.value);
  }

  toggleForm(): void {
    this.formToggle = !this.formToggle;
    console.log(this.formToggle);
  }
}
