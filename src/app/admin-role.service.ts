import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminRoleService {

  constructor() { }

  getRole(): string {
    const token = localStorage.getItem('token');
    if (!token) return '';
    
    const payload = JSON.parse(atob(token.split('.')[1])); // Decode JWT Token
    return payload.role;
  }

  isAdmin(): boolean {
    return this.getRole() === 'admin';
  }
}
