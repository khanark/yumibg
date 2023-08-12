import { Component, Input } from '@angular/core';

import { FormControl } from '@angular/forms';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { pageContent } from 'src/app/constants/constants';

interface Dish {
  name: string;
  text: string;
  isChecked: boolean;
}

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
})
export class InputComponent {
  @Input() inputId: string = '';
  @Input() control = new FormControl();
  @Input() label: string = '';
  @Input() iconName!: IconProp;
  @Input() placeHolder: string = '';
  @Input() inputType: string = '';
  selectOptions: Dish[] = pageContent.recipes.dishes;

  errorMessages: Record<string, string> = {
    required: 'Required field',
    email: 'Invalid email format',
    minlength: 'Too short',
    matchPassword: 'Passwords do not match',
  };
}
