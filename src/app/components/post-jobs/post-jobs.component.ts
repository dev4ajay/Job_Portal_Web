import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { JobService } from '../../job.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { map } from 'rxjs/operators';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar'; // Import MatSnackBar

interface Job {
  job_title: string;
  location: string;
  number_of_openings: number;
  min_experience: number;
  max_experience: number;
  min_salary: number;
  max_salary: number;
  start_time: string;
  end_time: string;
  _id?: string;
  description: string;
}

@Component({
  selector: 'app-post-job',
  imports: [CommonModule, FormsModule, ReactiveFormsModule, MatSnackBarModule], // Add MatSnackBarModule
  templateUrl: './post-jobs.component.html',
  styleUrls: ['./post-jobs.component.scss'],
})
export class PostJobsComponent implements OnInit {
  jobForm!: FormGroup;
  editingJobId: string | null = null;
  isLoading = false;

  constructor(
    private jobService: JobService,
    private router: Router,
    private route: ActivatedRoute,
    private snackBar: MatSnackBar // Inject MatSnackBar
  ) {}

  ngOnInit() {
    this.jobForm = new FormGroup({
      job_title: new FormControl('', Validators.required),
      location: new FormControl('', Validators.required),
      number_of_openings: new FormControl(1, Validators.required),
      min_experience: new FormControl(0, Validators.required),
      max_experience: new FormControl(5, Validators.required),
      min_salary: new FormControl(0, Validators.required),
      max_salary: new FormControl(0, Validators.required),
      start_time: new FormControl('', Validators.required),
      end_time: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
    });

    this.route.paramMap.subscribe((params) => {
      const jobId = params.get('id');
      if (jobId) {
        this.editingJobId = jobId;
        this.loadJob(jobId);
      }
    });
  }

  loadJob(jobId: string) {
    this.isLoading = true;
    this.jobService.getJob(jobId).pipe(
      map((response: any) => {
        const mappedJob: Job = {
          job_title: response?.data?.job_title,
          location: response?.data?.location,
          min_experience: response?.data?.min_experience,
          max_experience: response?.data?.max_experience,
          min_salary: response?.data?.min_salary,
          max_salary: response?.data?.max_salary,
          start_time: this.formatDate(response?.data?.start_time),
          end_time: this.formatDate(response?.data?.end_time),
          number_of_openings: response.data.number_of_openings,
          description: response.data.description,
        };
        return mappedJob;
      })
    ).subscribe({
      next: (job: Job) => {
        if (job) {
          this.jobForm.patchValue(job);
        }
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Error fetching job:', error);
        this.isLoading = false;
        this.snackBar.open('Error loading job details.', 'Close', { duration: 3000, panelClass: ['error-snackbar'] });
      },
    });
  }

  formatDate(date: string): string {
    if (!date || date === "") {
      return "";
    }
    const d = new Date(date);
    if (isNaN(d.getTime())) {
      return "";
    }
    let month = '' + (d.getMonth() + 1);
    let day = '' + d.getDate();
    const year = d.getFullYear();
    if (month.length < 2) {
      month = '0' + month;
    }
    if (day.length < 2) {
      day = '0' + day;
    }
    return [year, month, day].join('-');
  }

  submitJob() {
    if (this.jobForm.invalid) {
      this.snackBar.open('Please fill in all required fields!', 'Close', { duration: 3000, panelClass: ['error-snackbar'] });
      return;
    }

    this.isLoading = true;
    if (this.editingJobId) {
      this.jobService.updateJob(this.editingJobId, this.jobForm.value).subscribe({
        next: () => {
          this.snackBar.open('Job updated successfully!', 'Close', { duration: 3000, panelClass: ['success-snackbar'] });
          this.isLoading = false;
          setTimeout(() => this.router.navigate(['/all-job']), 3000);
        },
        error: () => {
          this.snackBar.open('Error updating job!', 'Close', { duration: 3000, panelClass: ['error-snackbar'] });
          this.isLoading = false;
        },
      });
    } else {
      this.jobService.createJob(this.jobForm.value).subscribe({
        next: () => {
          this.snackBar.open('Job posted successfully!', 'Close', { duration: 3000, panelClass: ['success-snackbar'] });
          this.isLoading = false;
          setTimeout(() => this.router.navigate(['/']), 3000);
        },
        error: () => {
          this.snackBar.open('Error posting job!', 'Close', { duration: 3000, panelClass: ['error-snackbar'] });
          this.isLoading = false;
        },
      });
    }
  }
}