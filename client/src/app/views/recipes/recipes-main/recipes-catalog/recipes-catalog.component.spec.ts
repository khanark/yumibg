import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipesCatalogComponent } from './recipes-catalog.component';

describe('RecipesCatalogComponent', () => {
  let component: RecipesCatalogComponent;
  let fixture: ComponentFixture<RecipesCatalogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecipesCatalogComponent]
    });
    fixture = TestBed.createComponent(RecipesCatalogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
