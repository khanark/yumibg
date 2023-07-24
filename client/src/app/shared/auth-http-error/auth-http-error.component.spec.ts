import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthHttpErrorComponent } from './auth-http-error.component';

describe('AuthHttpErrorComponent', () => {
  let component: AuthHttpErrorComponent;
  let fixture: ComponentFixture<AuthHttpErrorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AuthHttpErrorComponent]
    });
    fixture = TestBed.createComponent(AuthHttpErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
