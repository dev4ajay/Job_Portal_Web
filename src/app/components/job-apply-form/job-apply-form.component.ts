import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar'; // Import MatSnackBar

@Component({
  selector: 'app-my-component',
  standalone: true,
  imports: [FormsModule, CommonModule, ReactiveFormsModule, MatSnackBarModule], // Ensure ReactiveFormsModule and MatSnackBarModule are imported
  templateUrl: './job-apply-form.component.html',
  styleUrls: ['./job-apply-form.component.scss']
})
export class JobApplyComponent implements OnInit {
  contactForm: any;
  selectedFile: File | null = null;
  isLoading: boolean = false;

  constructor(private http: HttpClient, private snackBar: MatSnackBar) {} // Inject MatSnackBar

  ngOnInit() {
    this.contactForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      name: new FormControl('', Validators.required),
      mobile: new FormControl('', [
        Validators.required,
        Validators.pattern(/^\d{10}$/)
      ]),
      service_location: new FormControl(''),
      query: new FormControl('', Validators.maxLength(1000))
    });
  }

  onFileSelected(event: any) {
    if (event.target.files.length > 0) {
      this.selectedFile = event.target.files[0];
    }
  }

  onSubmit() {
    if (this.contactForm.valid && this.selectedFile) {
      this.isLoading = true;
      const formData = new FormData();
      formData.append('name', this.contactForm.value.name);
      formData.append('email', this.contactForm.value.email);
      formData.append('mobile_number', this.contactForm.value.mobile);
      formData.append('service_location', this.contactForm.value.service_location);
      formData.append('query', this.contactForm.value.query);
      formData.append('resume', this.selectedFile, this.selectedFile.name);

      this.http.post('https://job-portal-z6p6.onrender.com/api/jobs/submit-resume', formData)
        .subscribe({
          next: (response) => {
            this.snackBar.open('Application submitted successfully!', 'Close', {
              duration: 3000,
              panelClass: ['success-snackbar']
            });
            this.isLoading = false;
            this.contactForm.reset();
            this.selectedFile = null;
          },
          error: (error) => {
            this.snackBar.open('Error submitting application. Please try again.', 'Close', {
              duration: 3000,
              panelClass: ['error-snackbar']
            });
            this.isLoading = false;
            console.error('Error submitting application:', error);
          }
        });
    } else {
      this.snackBar.open('Please fill in all required fields and upload your resume.', 'Close', {
        duration: 3000,
        panelClass: ['error-snackbar']
      });
    }
  }
}