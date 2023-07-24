import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentNavigationComponent } from './component-navigation.component';

describe('BackButtonComponent', () => {
  let component: ComponentNavigationComponent;
  let fixture: ComponentFixture<ComponentNavigationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComponentNavigationComponent]
    });
    fixture = TestBed.createComponent(ComponentNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
