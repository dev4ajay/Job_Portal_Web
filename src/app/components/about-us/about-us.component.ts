import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-about-us',
  imports: [CommonModule],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.scss'
})
export class AboutUsComponent {
  teamMembers = [
    {
      imageUrl: 'https://images.unsplash.com/photo-1580983561371-7f4b242d8ec0?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y3JtJTIwc29mdHdhcmV8ZW58MHx8MHx8fDA%3D',
      name: 'Alice Johnson',
      title: 'Career Consultant',
      bio: 'Alice has over 10 years of experience in career development and coaching.'
    },
    {
      imageUrl: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8am9ifGVufDB8fDB8fHww',
      name: 'Bob Smith',
      title: 'Recruitment Specialist',
      bio: 'Bob specializes in connecting talented individuals with top companies.'
    },
    {
      imageUrl: 'https://images.unsplash.com/photo-1598257006626-48b0c252070d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8am9ifGVufDB8fDB8fHww',
      name: 'Eva Williams',
      title: 'Resume Writer',
      bio: 'Eva crafts compelling resumes that highlight your unique strengths.'
    }
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
