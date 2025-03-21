import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component } from '@angular/core';
import { JobService } from '../../job.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

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
  selector: 'app-fresher-jobs',
  imports: [CommonModule, FormsModule],
  templateUrl: './fresher-jobs.component.html',
  styleUrls: ['./fresher-jobs.component.scss'],
})
export class FresherJobsComponent {
  jobs: Job[] = [];
  filteredJobs: Job[] = [];  
  loading = true;
  showAll: boolean = false;
  searchTerm: string = ''; 
  selectedSortOrder: string = ''; 
userRole:any;
  constructor(private jobService: JobService, private router: Router, private cdr: ChangeDetectorRef ,private snackBar: MatSnackBar) {}

  ngOnInit() {
    this.getJobs();
    this.userRole = localStorage.getItem('userRole'); // Get stored role
  }

  getJobs() {
    this.jobService.getJobPostings().subscribe({
      next: (response) => {
        if (response && response.success) {
          this.jobs = response.data;
          this.filteredJobs = [...this.jobs];  // Use a fresh copy for filtering
          this.loading = false;
        }
      },
      error: (error) => {
        this.loading = false;
        console.error('Error fetching jobs:', error);
      },
    });
  }

  filterJobs() {
    this.filteredJobs = this.jobs.filter(job =>
      job.job_title.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      job.location.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      job.description.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
    this.sortJobsBySalary(this.selectedSortOrder); // Apply sorting after filtering
  }
  sortJobsBySalary(order: string) {
    if (!order) return;

    this.filteredJobs.sort((a, b) => {
      return order === 'asc' ? a.min_salary - b.min_salary : b.min_salary - a.min_salary;
    });

    this.cdr.detectChanges(); // Force UI update
  }

  sortJobsByDate(event: Event) {
    const selectedValue = (event.target as HTMLSelectElement).value;
    this.filteredJobs = [...this.filteredJobs].sort((a, b) => {
      return selectedValue === 'asc'
        ? new Date(a.start_time).getTime() - new Date(b.start_time).getTime()
        : new Date(b.start_time).getTime() - new Date(a.start_time).getTime();
    });
  }

  openApplyForm() {
    this.router.navigate(['/apply-job']);
  }

  getDisplayedJobs() {
    return this.showAll ? this.filteredJobs : this.filteredJobs.slice(0, 3);
  }

  toggleShowAll() {
    if (this.showAll) {
      this.showAll = false;
    } else {
      this.router.navigate(['/all-job']);
    }
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



  editJob(jobId: string) {
  
    this.router.navigate(['/post-a-job', jobId]);
  }
}
