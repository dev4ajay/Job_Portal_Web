import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  imports: [],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.scss'
})
export class ContactUsComponent {
  email: string = 'info@example.com';
  emails: string = 'digital@example.com';

  address: string = '123 Example St, Example City, Example Country';
  phoneNumber: string = '+1234567890';
}
