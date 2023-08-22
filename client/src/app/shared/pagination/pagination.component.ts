import { Component, Input } from '@angular/core';

import { RecipeService } from 'src/app/services/recipe/recipe.service';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css'],
})
export class PaginationComponent {
  @Input() totalPages!: number;
  @Input() currentPage!: number;

  activePage: number = 1;
  itemsPerPage: number = 5;

  constructor(public recipeService: RecipeService) {}

  get pageNumbers(): number[] {
    const pages: number[] = [];
    for (let i = 1; i <= this.totalPages; i++) {
      pages.push(i);
    }
    return pages;
  }

  changePage(pageNumber: number): void {
    this.activePage = pageNumber;
    this.recipeService.recipesInit({
      page: pageNumber,
      limit: this.itemsPerPage,
    });
  }

  onLimitChange(event: any): void {
    this.activePage = 1;
    this.itemsPerPage = Number(event.target.value);
    this.recipeService.recipesInit({ limit: this.itemsPerPage });
  }
}
