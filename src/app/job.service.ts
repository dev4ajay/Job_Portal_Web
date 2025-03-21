import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError, Observable, tap, throwError } from 'rxjs';
import { AuthService } from './auth.service';
interface Job {
  numberOfOpenings: number;
  minExperience: number;
  maxExperience: number;
  minSalary: number;
  maxSalary: number;
  startTime: string;
  endTime: string;
  _id?: string;
  jobTitle: string;
  location: string;
  description: string;
}
@Injectable({
  providedIn: 'root'
})
export class JobService {
  private apiUrl = 'https://job-portal-z6p6.onrender.com'; // Update if needed

  constructor(private http: HttpClient ,private authService: AuthService) { }

  private getAuthHeaders(): HttpHeaders {
    const token = this.authService.getToken();
    return new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
  }
  // ✅ Create a New Job
  createJob(job: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/api/jobs/create`, job);
  }

  // ✅ Get All Jobs
  getJobPostings(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/api/jobs/all`);
  }

  // ✅ Get Single Job by ID


  getJob(id: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/api/jobs/single/${id}`, {
      headers: this.getAuthHeaders(),
    });
  }
  

  // ✅ Update Job (Requires Admin)
  updateJob(jobId: string, updatedJob: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/api/jobs/updateJob/${jobId}`, updatedJob, {
      headers: this.getAuthHeaders(),
    });
  }

  // ✅ Delete Job (Requires Admin)
  deleteJob(jobId: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/api/jobs/deleteJob/${jobId}`, {
      headers: this.getAuthHeaders(),
    });
  }
 
  
}
