import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BadgeTazasComponent } from './badge-tazas.component';

describe('BadgeTazasComponent', () => {
  let component: BadgeTazasComponent;
  let fixture: ComponentFixture<BadgeTazasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BadgeTazasComponent]
    });
    fixture = TestBed.createComponent(BadgeTazasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
