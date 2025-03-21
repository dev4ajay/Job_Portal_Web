import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { JobFormComponent } from './components/job-form/job-form.component';
import { CommingSoonComponent } from './components/comming-soon/comming-soon.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { AllJobsComponent } from './components/All-Jobs/All-Jobs.component';
import { BlogComponent } from './components/blog/blog.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { PostJobsComponent } from './components/post-jobs/post-jobs.component';
import {JobApplyComponent} from "./components/job-apply-form/job-apply-form.component";
import { AdminGuard } from './admin.guard'; // Import AdminGuard

export const routes: Routes = [
  { path: '', component: HomeComponent }, // Default route (Home Page)

  // { path: '**', redirectTo: '', pathMatch: 'full' }, // Redirect unknown routes to Home
  { path: 'job-form/:name', component:JobFormComponent }, 
  { path: 'comming-soon', component: CommingSoonComponent}, 
  { path: 'login', component: LoginComponent  ,  },// Protect with AdminGuard}, 
  { path: 'post-a-job', component: PostJobsComponent  , }, // ✅ Add this line
  { path: 'signup', component: SignupComponent}, 
  { path: 'post-a-job/:id', component: PostJobsComponent ,  }, 
  { path: 'all-job', component: AllJobsComponent , }, 
  { path: 'contact-us', component: ContactUsComponent}, 
  { path: 'about-us', component: AboutUsComponent}, 
  { path: 'apply-job', component: JobApplyComponent}, 


  { path: 'blog', component: BlogComponent}, 


 




];
