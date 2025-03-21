import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
} from '@angular/router';
import { AuthService } from './auth.service'; // Adjust path if needed

@Injectable({
  providedIn: 'root',
})
export class AdminGuard implements CanActivate {
    constructor(private authService: AuthService, private router: Router) {}

    canActivate(): boolean {
      if (this.authService.isAdmin()) {
        return true; // Allow access if the user is an admin
      } else {
        this.router.navigate(['/login']); // Redirect unauthorized users to login
        return false;
      }
    }
  
  
  }

  
