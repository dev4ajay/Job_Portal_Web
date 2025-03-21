import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, FormBuilder, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../auth.service';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar'; // Import MatSnackBar

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, MatSnackBarModule], // Add MatSnackBarModule
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm: FormGroup;
  showPassword = false;
  isLoading = false;
  errorMessage = '';

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private snackBar: MatSnackBar // Inject MatSnackBar
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }

  togglePassword() {
    this.showPassword = !this.showPassword;
  }

  onSubmit() {
    if (this.loginForm.invalid) {
      this.snackBar.open('Please enter valid email and password.', 'Close', {
        duration: 3000,
        panelClass: ['error-snackbar']
      });
      return;
    }

    this.isLoading = true;
  // login.component.ts
this.authService.login(this.loginForm.value).subscribe({
  next: (response) => {
    console.log('Login Response:', response); // Debugging
    console.log('Login Response:', response); // Debugging
    if (response && response.token) {
      // Always save the token normally
      localStorage.setItem('token', response.token);
      this.authService.saveToken(response.token);
      const userRole = this.authService.getUserRole();
      console.log('User Role:', userRole); // Check if role is stored
    
      // If admin, also store the token under 'admin'
      if (userRole === 'admin') {
        localStorage.setItem('admin', response.token);
      }
      
      this.snackBar.open('Login successful!', 'Close', {
        duration: 2000,
        panelClass: ['success-snackbar'],
      });
      if (userRole === 'admin') {
        setTimeout(() => {
          this.router.navigate(['/post-a-job']);
        }, 2000);
      } else {
        setTimeout(() => {
          this.router.navigate(['/all-job']);
        }, 2000);
      }
    }
    
  },
  error: (error) => {
    console.error('Login Error:', error); // Debugging
    // ...
  },
});
  }
}