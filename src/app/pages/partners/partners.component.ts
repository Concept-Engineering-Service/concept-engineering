import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from '../../components/navbar/navbar.component'
import { FooterComponent } from '../../components/footer/footer.component';
import {
  LucideAngularModule,
  Fan,
  Building2,
  Wrench,
  Utensils
} from 'lucide-angular';

@Component({
  selector: 'app-partners',
  imports: [CommonModule, RouterModule, NavbarComponent, FooterComponent, LucideAngularModule],
  templateUrl: './partners.component.html',
  styleUrl: './partners.component.scss'
})

export class PartnersComponent {

  readonly FanIcon = Fan;
  readonly Building2Icon = Building2;
  readonly WrenchIcon = Wrench;
  readonly UtensilsIcon = Utensils;

  partners = [
    {
      name: 'Careco',
      logo: 'assets/partners/careco.png',
      url: 'https://www.careco.co.in',
      description: 'HVAC and refrigeration specialists known for eco-conscious climate control solutions.',
      category: 'HVAC',
      trustedSince: 2023
    },
    {
      name: 'Hisense HVAC',
      logo: 'assets/partners/hisense.png',
      url: 'http://www.hisensehvac.com',
      description: 'Leading provider of advanced air conditioning and HVAC systems across the globe.',
      category: 'HVAC',
      trustedSince: 2023
    },
    {
      name: 'Omega Elevators',
      logo: 'assets/partners/omega.png',
      url: 'https://www.omega-elevators.com',
      description: 'India’s premier lift and elevator manufacturer offering custom vertical transport systems.',
      category: 'Elevators',
      trustedSince: 2020
    },
    // {
    //   name: 'NZHT',
    //   logo: 'assets/partners/nzht.png',
    //   url: 'https://www.nzht.in',
    //   description: 'Specialists in mechanical, electrical, and plumbing installations and integration.',
    //   category: 'MEP',
    //   trustedSince: 2021
    // },
    {
      name: 'Delight Kitchen Equipment',
      logo: 'assets/partners/delight.png',
      url: 'https://www.delightkitchenequipment.com',
      description: 'Commercial kitchen equipment innovators for hotels, restaurants, and cloud kitchens.',
      category: 'Kitchen Equipment',
      trustedSince: 2024
    }
  ];

  readonly iconMap: Record<string, any> = {
    HVAC: this.FanIcon,
    Elevators: this.Building2Icon,
    MEP: this.WrenchIcon,
    'Kitchen Equipment': this.UtensilsIcon
  };

  readonly categoryDescriptions: Record<string, string> = {
    HVAC: 'Our HVAC partners help us deliver efficient, climate-conscious heating and cooling systems for residential and commercial spaces.',
    Elevators: 'We partner with industry leaders to provide modern, safe, and reliable lift and elevator solutions.',
    MEP: 'Our MEP partners support seamless mechanical, electrical, and plumbing system integrations.',
    'Kitchen Equipment': 'We work with expert OEMs to equip hotels, restaurants, and commercial kitchens with robust solutions.'
  };
  
  
  getPartnerGroups(): { category: string; items: any[] }[] {
    const categories = [...new Set(this.partners.map(p => p.category))];
    return categories.map(category => ({
      category,
      items: this.partners.filter(p => p.category === category)
    }));
  }
  

}
