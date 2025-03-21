import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // ✅ Import CommonModule
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-featured-consultants',
  standalone: true, // ✅ Mark the component as standalone
  imports: [CommonModule ,FormsModule , RouterLink], // ✅ Add CommonModule to imports
  templateUrl: './featured-consultants.component.html',
  styleUrls: ['./featured-consultants.component.scss'],
})
export class FeaturedPlacementComponent {
  consultants = [
    {
      name: 'Shri Management Services',
      location: 'Bhosari, Pune',
      logo: 'assets/logo/shri-management.png',
    },
    {
      name: 'Decent Manpower',
      location: 'Vasna, Ahmedabad',
      logo: 'assets/logo/shri-management.png',
    },
    {
      name: 'Jmsm Services',
      location: 'Ghansoli, Navi Mumbai',
      logo: 'assets/logo/shri-management.png',
    },
    {
      name: 'Job Jerky',
      location: 'Kisrol, Moradabad',
      logo: 'assets/logo/shri-management.png',
    },
    {
      name: 'Ayan Consultancy',
      location: 'Baramunda, Bhubaneswar',
      logo: 'assets/logo/shri-management.png',
    },
    {
      name: 'HB Solution',
      location: 'Kalyan West, Thane',
      logo: 'assets/logo/shri-management.png',
    },
  ];
}
