import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {
  LucideAngularModule,
  Wrench,
  Layers3,
  Cpu,
  Layout,
  Home
} from 'lucide-angular';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    LucideAngularModule,
    NavbarComponent,
    FooterComponent
  ],
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent {
  readonly WrenchIcon = Wrench;
  readonly Layers3Icon = Layers3;
  readonly CpuIcon = Cpu;
  readonly LayoutIcon = Layout;
  readonly HomeIcon = Home;

  services = [
    {
      title: 'HVAC Installation',
      icon: this.WrenchIcon,
      description: `
        We provide full-scale HVAC system design and installation for residential, commercial, and industrial spaces.
        Our engineers focus on climate efficiency, low operational costs, and future-ready solutions — customized to the scale and needs of every project.
      `,
      benefits: [
        'Energy-efficient heating and cooling solutions',
        'Tailored ducting and zoning systems',
        'Post-installation testing and maintenance support'
      ],
      color: 'bg-white'
    },
    {
      title: 'Lift & Elevators',
      icon: this.Layers3Icon,
      description: `
        From passenger lifts in residential buildings to freight elevators in warehouses, we provide end-to-end vertical transportation systems.
        Our team ensures safe, compliant, and aesthetic installations for every space.
      `,
      benefits: [
        'Passenger, hospital & freight elevators',
        'AMC, inspection & repair services',
        'Customizable cabin designs'
      ],
      color: 'bg-gray-50'
    },
    {
      title: 'Precision Air Conditioning',
      icon: this.CpuIcon,
      description: `
        Specialized climate control for sensitive environments like data centers, labs, clean rooms, and telecom hubs.
        Our systems are built for precision temperature and humidity regulation 24/7.
      `,
      benefits: [
        'Mission-critical cooling solutions',
        'Real-time monitoring capabilities',
        'Energy-optimized operation'
      ],
      color: 'bg-white'
    },
    {
      title: 'IT & Web Development',
      icon: this.LayoutIcon,
      description: `
        We design, develop, and maintain websites, web apps, and custom platforms for businesses of all sizes.
        Our goal is digital transformation through usability, performance, and reliability.
      `,
      benefits: [
        'Custom web platforms & e-commerce',
        'UI/UX-driven design approach',
        'Secure backend APIs and integration'
      ],
      color: 'bg-gray-50'
    },
    {
      title: 'Architectural and Consultancy Services',
      icon: this.HomeIcon,
      description: `
        Our architectural team designs thoughtful, functional spaces — from homes to commercial complexes.
        With 3D visualization and regulatory expertise, we take your dream from concept to construction.
      `,
      benefits: [
        'Building & interior design',
        '3D modeling & visualization',
        'Project management & site supervision'
      ],
      color: 'bg-white'
    }
  ];
  
}
