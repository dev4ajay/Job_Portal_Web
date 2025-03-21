import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-job-form',
  imports: [CommonModule , FormsModule ,ReactiveFormsModule ,HttpClientModule ],
  standalone:true,
  templateUrl: './job-form.component.html',
  styleUrl: './job-form.component.scss'
})
export class JobFormComponent {
  consultantName: string = '';
  contactForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private http: HttpClient // Inject HttpClient
  ) {
    this.contactForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      name: ['', Validators.required],
      mobile: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]], // 10-digit mobile number
      serviceLocation: [''],
      query: ['', Validators.maxLength(1000)]
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.consultantName = params['name'];
    });
  }

  onSubmit(): void {
    if (this.contactForm.valid) {
      const formData = {
        ...this.contactForm.value,
        consultantName: this.consultantName
      };

      // Send email using your backend API
      this.http.post('/api/send-email', formData).subscribe(
        response => {
          
          console.log('Email sent successfully', response);
          // Optionally, show a success message to the user
        },
        error => {
          console.error('Error sending email', error);
          // Optionally, show an error message to the user
        }
      );
    }
  }
}
