import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedConsultantsComponent } from './featured-consultants.component';

describe('FeaturedConsultantsComponent', () => {
  let component: FeaturedConsultantsComponent;
  let fixture: ComponentFixture<FeaturedConsultantsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeaturedConsultantsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeaturedConsultantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
