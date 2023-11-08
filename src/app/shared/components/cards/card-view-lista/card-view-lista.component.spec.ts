import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardViewListaComponent } from './card-view-lista.component';

describe('CardViewListaComponent', () => {
  let component: CardViewListaComponent;
  let fixture: ComponentFixture<CardViewListaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardViewListaComponent]
    });
    fixture = TestBed.createComponent(CardViewListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
