import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
interface ResumeData {
  name: string;
  email: string;
  mobile_number: string;
  service_location: string;
  query: string;
  resume: File | null;
}

@Injectable({
  providedIn: 'root'
})
export class ResumeService {
  private apiUrl = 'https://job-portal-z6p6.onrender.com/api/jobs/submit-resume';

  constructor(private http: HttpClient) { }

  submitResume(data: ResumeData): Observable<any> {
    const formData = new FormData();
    formData.append('name', data.name);
    formData.append('email', data.email);
    formData.append('mobile_number', data.mobile_number);
    formData.append('service_location', data.service_location);
    formData.append('query', data.query);
    if (data.resume) {
      formData.append('resume', data.resume, data.resume.name);
    }
    return this.http.post(this.apiUrl, formData);
  }

}
