import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipesAsideComponent } from './recipes-aside.component';

describe('RecipesAsideComponent', () => {
  let component: RecipesAsideComponent;
  let fixture: ComponentFixture<RecipesAsideComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecipesAsideComponent]
    });
    fixture = TestBed.createComponent(RecipesAsideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
