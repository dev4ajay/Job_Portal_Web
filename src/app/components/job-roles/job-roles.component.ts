import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // ✅ Import CommonModule

@Component({
  selector: 'app-job-roles',
  imports: [CommonModule],
  templateUrl: './job-roles.component.html',
  styleUrl: './job-roles.component.scss',
})
export class JobRolesComponent {
  jobRoles: string[] = [
    'Graphic Designer',
    'SEO Executive',
    'Python Developer',
    'Marketing Executive',
    'Telemarketing',
    'Mechanical Engineer',
    'Electrical Engineer',
    'iOS Developer',
    'Area Sales Manager',
    'Hardware Engineer',
    'Receptionist',
    'HR Executive',
    'General Dentist',
    'Sales Representative',
    'Android Developer',
    'Laravel Developer',
    'Telemarketing Executive',
    'Physiotherapist',
    'Electronics Engineer',
    'Accounts Executive',
    'Java Developer',
    'General Physician',
    'Security Guard',
    'Telecalling Executive',
    'Sales Executive',
    'PHP Developer',
    'Business Development Executive',
    'Back Office Executive',
    'Medical Representative',
    'Computer Operator',
  ];
  values = [
    {
      icon: 'bi bi-lightbulb',
      title: 'Innovation',
      description: 'We embrace innovative approaches to career development.'
    },
    {
      icon: 'bi bi-people',
      title: 'Collaboration',
      description: 'We foster a collaborative environment for our clients and team.'
    },
    {
      icon: 'bi bi-heart',
      title: 'Integrity',
      description: 'We operate with the highest standards of integrity and ethics.'
    },
    {
      icon: 'bi bi-shield-check', // Changed icon
      title: 'Trust', // Changed title
      description: 'We build trust through transparency and accountability.' // Changed description
    }
  ];
}
