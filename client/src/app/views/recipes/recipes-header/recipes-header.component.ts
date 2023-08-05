import { Component, OnInit } from '@angular/core';

import { AuthService } from 'src/app/services/auth/auth.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-recipes-header',
  templateUrl: './recipes-header.component.html',
  styleUrls: ['./recipes-header.component.css'],
})
export class RecipesHeaderComponent implements OnInit {
  searchControl = new FormControl();

  constructor(public authService: AuthService) {}

  ngOnInit(): void {}
}
