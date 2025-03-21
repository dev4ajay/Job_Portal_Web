import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'https://job-portal-z6p6.onrender.com/api/auth';

  constructor(private http: HttpClient) {}

  login(credentials: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, credentials);
  }

  saveToken(token: string) {
    localStorage.setItem('token', token);
    
    // Decode token and store user role separately
    const decodedToken: any = jwtDecode(token);
    localStorage.setItem('userRole', decodedToken.role); // Store role in localStorage
  }

  // Get stored token
  getToken(): string | null {
    return localStorage.getItem('token');
  }

  // Get user role from localStorage
  getUserRole(): string | null {
    return localStorage.getItem('userRole');
  }

  // Check if user is admin
  isAdmin(): boolean {
    return this.getUserRole() === 'admin';
  }

  // Logout function
  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('userRole'); // Remove role on logout
  }
}
