import { Component } from '@angular/core';
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
  readonly WrenchIcon = Wrench;
  readonly Layers3Icon = Layers3;
  readonly CpuIcon = Cpu;
  readonly LayoutIcon = Layout;
  readonly HomeIcon = Home;

}
