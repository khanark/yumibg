import { AuthService } from 'src/app/services/auth/auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-recipes-header',
  templateUrl: './recipes-header.component.html',
  styleUrls: ['./recipes-header.component.css'],
})
export class RecipesHeaderComponent {
  constructor(public authService: AuthService) {}
}
