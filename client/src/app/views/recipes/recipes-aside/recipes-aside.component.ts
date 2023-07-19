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

  onFilterSubmit(form: NgForm) {
    // TODO Change the order of the checkboxes, you need the keys as values in order to filter later
    const filteredForm = Object.fromEntries(
      Object.entries(form.value).filter(([key, value]) => !!value === true)
    );
    console.log(filteredForm);
  }

  toggleForm(): void {
    // !FIX: Form is not being toggled
    this.formToggle = !this.formToggle;
  }
}
