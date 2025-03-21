import { Component } from '@angular/core';
import { HeroComponent } from '../../components/hero/hero.component';
import { JobRolesComponent } from '../../components/job-roles/job-roles.component';
import { FresherJobsComponent } from '../../components/fresher-jobs/fresher-jobs.component';
import { JobTalentComponent } from '../../components/job-talent/job-talent.component';
import { TestimonialSliderComponent } from "../../components/testimonial-slider/testimonial-slider.component";
import { WhyChooseUsComponent } from "../../components/why-choose-us/why-choose-us.component";

@Component({
  selector: 'app-home',
  imports: [
    HeroComponent,
    JobRolesComponent,
    FresherJobsComponent,
    JobTalentComponent,
    TestimonialSliderComponent,
    WhyChooseUsComponent
],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
