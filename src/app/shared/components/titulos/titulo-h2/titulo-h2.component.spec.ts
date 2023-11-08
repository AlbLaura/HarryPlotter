import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TituloH2Component } from './titulo-h2.component';

describe('TituloH2Component', () => {
  let component: TituloH2Component;
  let fixture: ComponentFixture<TituloH2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TituloH2Component]
    });
    fixture = TestBed.createComponent(TituloH2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
