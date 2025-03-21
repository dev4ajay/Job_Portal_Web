import { CommonModule } from '@angular/common';
import { Component, HostListener, } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',    
  imports: [CommonModule ,RouterLink  ,FontAwesomeModule ,RouterLinkActive ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent{
  isLoggedIn: boolean = false;
  isJobsDropdownOpen = false;
  isCareerDropdownOpen = false;

  faBars = faBars;
  faTimes = faTimes;
  isMenuOpen = false;

  constructor(private router: Router) {}

  ngOnInit() {
    this.checkLoginStatus();
    // Initialize the mobile menu toggle
    const customToggler = document.querySelector('.custom-toggler');
    const navbarNav = document.getElementById('navbarNav');

    if (customToggler && navbarNav) {
      customToggler.addEventListener('click', () => {
        this.isMenuOpen = !this.isMenuOpen; // Toggle menu state
        if (navbarNav.classList.contains('show')) {
          navbarNav.classList.remove('show');
        } else {
          navbarNav.classList.add('show');
        }
      });
    } else {
      console.error('Navbar elements not found!');
    }
  }
  checkLoginStatus() {
    const token = localStorage.getItem('token'); // Check using the same key
    this.isLoggedIn = !!token; // Convert to boolean
  }
  
  logout() {
    localStorage.removeItem('token');      // Remove token from localStorage
    localStorage.removeItem('userRole');     // Optionally remove the user role as well
    this.isLoggedIn = false;
    this.router.navigate(['/']);
  }
  

  toggleJobsDropdown(): void {
    this.isJobsDropdownOpen = !this.isJobsDropdownOpen;
    this.isCareerDropdownOpen = false; // Close other dropdowns
  }

  toggleCareerDropdown(): void {
    this.isCareerDropdownOpen = !this.isCareerDropdownOpen;
    this.isJobsDropdownOpen = false; // Close other dropdowns
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    if (!event.target || !(event.target as HTMLElement).closest('.dropdown')) {
      this.isJobsDropdownOpen = false;
      this.isCareerDropdownOpen = false;
    }
  }

}
