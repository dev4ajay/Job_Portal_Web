import { CommonModule } from '@angular/common';
import { Component, ElementRef, HostListener, ViewChild, } from '@angular/core';
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
  @ViewChild('navbarNav', { static: false }) navbarNav!: ElementRef;
  constructor(private router: Router) {}
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
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
    this.closeNavbar();
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
 

  closeNavbar() {
    if (this.navbarNav) {
      const navbar = this.navbarNav.nativeElement;
      if (navbar.classList.contains('show')) {
        navbar.classList.remove('show');
      }
      this.isMenuOpen = false; // Ensure toggle state is updated
    }
  }

}
