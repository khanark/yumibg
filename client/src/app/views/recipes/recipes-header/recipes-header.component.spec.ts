import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipesHeaderComponent } from './recipes-header.component';

describe('RecipesHeaderComponent', () => {
  let component: RecipesHeaderComponent;
  let fixture: ComponentFixture<RecipesHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecipesHeaderComponent]
    });
    fixture = TestBed.createComponent(RecipesHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
