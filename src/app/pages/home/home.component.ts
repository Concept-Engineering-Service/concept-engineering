import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavbarComponent } from '../../components/navbar/navbar.component'
import { FooterComponent } from '../../components/footer/footer.component';
import { LucideAngularModule, Wrench, Layers3, Cpu, Layout, Home } from 'lucide-angular';

@Component({
  selector: 'app-home',
  imports: [NavbarComponent, FooterComponent, LucideAngularModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  constructor(private router: Router) {}

  readonly WrenchIcon = Wrench;
  readonly Layers3Icon = Layers3;
  readonly CpuIcon = Cpu;
  readonly LayoutIcon = Layout;
  readonly HomeIcon = Home;

  navigateTo(route: string): void {
    this.router.navigate([route]).then(() => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth' 
      });
    });
  }
}
