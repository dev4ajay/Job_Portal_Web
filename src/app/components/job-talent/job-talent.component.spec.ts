import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobTalentComponent } from './job-talent.component';

describe('JobTalentComponent', () => {
  let component: JobTalentComponent;
  let fixture: ComponentFixture<JobTalentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JobTalentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobTalentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
