import { ChangeDetectorRef, Component } from '@angular/core';
import { Router } from '@angular/router';
import { JobService } from '../../job.service';
import { CommonModule } from '@angular/common';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormsModule } from '@angular/forms';
import { AdminRoleService } from '../../admin-role.service';

interface Job {
  _id: string;
  job_title: string;
  location: string;
  min_experience: number;
  max_experience: number;
  start_time: string;
  end_time: string;
  min_salary: number;
  max_salary: number;
  description: string;
}

@Component({
  selector: 'app-consultant',
  imports: [CommonModule, FormsModule],
  templateUrl: './All-Jobs.component.html',
  styleUrl: './All-Jobs.component.scss'
})
export class AllJobsComponent {
  jobs: Job[] = []; 
  filteredJobs: Job[] = []; 
  searchTerm: string = ''; 
  loading = true;
  selectedSortOrder: string = ''; 
  selectedDateSort: string = ''; 
  isAdmin: boolean = false;
  userRole:any
  constructor(private jobService: JobService, private router: Router, private snackBar: MatSnackBar ) {}

  ngOnInit() {
    this.getJobs();
    this.userRole = localStorage.getItem('userRole'); // Get stored role
  }




  getJobs() {
    this.jobService.getJobPostings().subscribe({
      next: (response) => {
        if (response && response.success) {
          this.jobs = response.data;
          this.filteredJobs = [...this.jobs]; 
          this.loading = false;
        }
      },
      error: () => {
        this.loading = false;
      },
    });
  }

  filterJobs() {
    this.filteredJobs = this.jobs.filter(job =>
      job.job_title.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      job.location.toLowerCase().includes(this.searchTerm.toLowerCase()) || 
      job.start_time.toLowerCase().includes(this.searchTerm.toLowerCase()) || 
      job.end_time.toLowerCase().includes(this.searchTerm.toLowerCase()) || 
      job.description.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  filterBySalary() {
    this.filteredJobs = this.jobs.filter(job => job.min_salary > 0);
  }

  sortJobsBySalary() {
    if (!this.selectedSortOrder) return; 
  
    this.filteredJobs = [...this.filteredJobs].sort((a, b) => {
      const minSalaryA = Number(a.min_salary);
      const minSalaryB = Number(b.min_salary);
  
      return this.selectedSortOrder === 'asc' ? minSalaryA - minSalaryB : minSalaryB - minSalaryA;
    });
  }

  sortJobsByDate() {
    if (!this.selectedDateSort) return;

    this.filteredJobs = [...this.filteredJobs].sort((a, b) => {
      const dateA = new Date(a.start_time).getTime();
      const dateB = new Date(b.start_time).getTime();
  
      return this.selectedDateSort === 'asc' ? dateA - dateB : dateB - dateA;
    });
  }

  DeleteJob(jobId: string) {
  

    this.jobService.deleteJob(jobId).subscribe({
      next: () => {
        this.jobs = this.jobs.filter(job => job._id !== jobId);
        this.filteredJobs = [...this.jobs];
        this.snackBar.open('Job deleted successfully!', 'Close', { duration: 3000 });
      },
      error: () => {
        this.snackBar.open('Error deleting job. Please try again.', 'Close', { duration: 3000 });
      },
    });
  }

  openApplyForm() {
    this.router.navigate(['/apply-job']);
  }

  editJob(jobId: string) {
  
    this.router.navigate(['/post-a-job', jobId]);
  }
}
