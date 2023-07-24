import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-create-recipe',
  templateUrl: './create-recipe.component.html',
  styleUrls: ['./create-recipe.component.css'],
})
export class CreateRecipeComponent {
  onSubmit(createRecipeForm: NgForm) {
    console.log('Button is pressed');
    // if (createRecipeForm.invalid) {
    //   return;
    // }
    console.log(createRecipeForm.value);
  }
}
