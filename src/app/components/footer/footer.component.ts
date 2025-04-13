import { Component } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { LucideAngularModule, Facebook, Instagram, Twitter, Linkedin } from 'lucide-angular';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [LucideAngularModule, RouterModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  
  constructor(private router: Router) {}

  currentYear: number = new Date().getFullYear();

  navigateTo(route: string): void {
    this.router.navigate([route]).then(() => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth' // Adds a smooth scrolling transition
      });
    });
  }

  readonly FacebookIcon = Facebook;
  readonly InstagramIcon = Instagram;
  readonly TwitterIcon = Twitter;
  readonly LinkedinIcon = Linkedin;
}
