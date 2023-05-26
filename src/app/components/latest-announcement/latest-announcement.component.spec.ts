import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LatestAnnouncementComponent } from './latest-announcement.component';

describe('LatestAnnouncementComponent', () => {
  let component: LatestAnnouncementComponent;
  let fixture: ComponentFixture<LatestAnnouncementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LatestAnnouncementComponent]
    });
    fixture = TestBed.createComponent(LatestAnnouncementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
