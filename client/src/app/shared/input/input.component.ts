import { Component, Input, OnInit } from '@angular/core';

import { FormControl } from '@angular/forms';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

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

  errorMessages: Record<string, string> = {
    required: 'Required field',
    email: 'Invalid email format',
    minlength: 'Too short',
    matchPassword: 'Passwords do not match',
  };
}
