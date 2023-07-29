import { AuthService } from 'src/app/services/auth/auth.service';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { pageContent } from 'src/app/constants/constants';

@Component({
  selector: 'app-recipes-aside',
  templateUrl: './recipes-aside.component.html',
  styleUrls: ['./recipes-aside.component.css'],
})
export class RecipesAsideComponent {
  recipes = pageContent.recipes;
  formToggle: boolean = false;
  profileMenuToggle: boolean = false;

  constructor(public authService: AuthService) {}

  onFilterSubmit(form: NgForm) {
    // TODO Change the order of the checkboxes, you need the keys as values in order to filter later
    // TODO you have to finis the logic fort this component
    const filteredForm = Object.fromEntries(
      Object.entries(form.value).filter(([key, value]) => !!value === true)
    );
  }

  toggleForm(): void {
    this.formToggle = !this.formToggle;
  }

  toggleProfileMenu(): void {
    this.profileMenuToggle = !this.profileMenuToggle;
  }
}
