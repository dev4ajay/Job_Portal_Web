import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-job-talent',
  imports: [CommonModule  , ReactiveFormsModule ,FormsModule],
  
  templateUrl: './job-talent.component.html',
  styleUrl: './job-talent.component.scss'
})
export class JobTalentComponent {
  activeImage = 1; // Set the initial active image
}
