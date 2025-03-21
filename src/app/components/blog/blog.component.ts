import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-blog',
  imports: [CommonModule ],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.scss'
})
export class BlogComponent {
  posts = [
    {
      imageUrl: 'https://plus.unsplash.com/premium_photo-1661274189734-90d6aa7eb010?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGpvYnxlbnwwfHwwfHx8MA%3D%3D',
      title: 'Tips for Acing Your Next Interview',
      date: 'October 26, 2023',
      excerpt: 'Learn essential strategies to make a lasting impression during your job interview.'
    },
    {
      imageUrl: 'https://media.istockphoto.com/id/1314468710/photo/indian-woman-showing-graphs-on-the-laptop.webp?a=1&b=1&s=612x612&w=0&k=20&c=-vmS8US6w049BubTYxb34miiB72djQbwhU060HYp4sI=',
      title: 'Building a Strong Professional Network',
      date: 'October 20, 2023',
      excerpt: 'Discover how to expand your network and create valuable professional connections.'
    },
    {
      imageUrl: 'https://media.istockphoto.com/id/1288148699/photo/young-business-woman-in-office-stock-photo.webp?a=1&b=1&s=612x612&w=0&k=20&c=95yFWp7N_Ea-Ypy950NoFmZZZmQhnPWQcSseD9gtOhk=',
      title: 'The Importance of a Well-Written Resume',
      date: 'October 15, 2023',
      excerpt: 'Understand why your resume is crucial and how to make it stand out.'
    },
  ];
}
