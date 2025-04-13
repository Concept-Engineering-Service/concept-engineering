import { Component } from '@angular/core';
import { LucideAngularModule, Facebook, Instagram, Twitter, Linkedin } from 'lucide-angular';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [LucideAngularModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  currentYear: number = new Date().getFullYear();

  readonly FacebookIcon = Facebook;
  readonly InstagramIcon = Instagram;
  readonly TwitterIcon = Twitter;
  readonly LinkedinIcon = Linkedin;
}
