import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { faSearch, faUserCheck, faHandshake, faBriefcase } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-why-choose-us',
  templateUrl: './why-choose-us.component.html',
  standalone: true,
  imports : [CommonModule , FormsModule , ReactiveFormsModule],
  styleUrls: ['./why-choose-us.component.scss']
})
export class WhyChooseUsComponent {
  faSearch = faSearch;
  faUserCheck = faUserCheck;
  faHandshake = faHandshake;
  faBriefcase = faBriefcase;

  reasons = [
    {
      icon: 'fa fa-search',
      title: 'Extensive Job Database',
      description: 'Browse through a vast collection of job opportunities across ',
      hovered: false
    },
    {
      icon: 'fa fa-user-check',
      title: 'Verified Employers',
      description: 'We ensure that all employers on our platform are legitimate ',
      hovered: false
    },
    {
      icon: 'fa fa-handshake',
      title: 'Easy Application Process',
      description: 'Apply for jobs quickly and effortlessly with our streamlined .',
      hovered: false
    },
    {
      icon: 'fa fa-briefcase',
      title: 'Career Resources',
      description: 'Access valuable career resources, including resume tips, interview advice, and industry insights.',
      hovered: false
    }
  ];
}