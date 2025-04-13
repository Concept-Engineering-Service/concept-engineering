import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from '../../components/navbar/navbar.component'
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-contact',
  imports: [NavbarComponent, FooterComponent, RouterModule, CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

  contactType: 'project' | 'partnership' | 'general' = 'general';

  name = '';
  email = '';
  message = '';

  projectType = '';
  budget = '';
  companyName = '';
  servicesOffered = '';


  onSubmit() {
    // Placeholder logic for now
    console.log('Contact form submitted:', {
      name: this.name,
      email: this.email,
      message: this.message
    });
    alert('Thank you! Your message has been received.');
  }
}