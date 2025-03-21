import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FresherJobsComponent } from './fresher-jobs.component';

describe('FresherJobsComponent', () => {
  let component: FresherJobsComponent;
  let fixture: ComponentFixture<FresherJobsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FresherJobsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FresherJobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
