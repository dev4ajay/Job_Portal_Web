import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobApplyFormComponent } from './job-apply-form.component';

describe('JobApplyFormComponent', () => {
  let component: JobApplyFormComponent;
  let fixture: ComponentFixture<JobApplyFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JobApplyFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobApplyFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
