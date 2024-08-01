import { Component, OnInit } from '@angular/core';
import { MarComponent } from '../mar/mar.component';
import { smartphone } from '../module/smartphone';
import { CommonModule } from '@angular/common';
import { servicePH } from '../services/servicePH';

@Component({
  selector: 'app-phone-list',
  standalone: true,
  imports: [MarComponent,CommonModule],
  templateUrl: './phone-list.component.html',
  styleUrl: './phone-list.component.scss'
})
export class PhoneListComponent implements OnInit{

  constructor(private phoneS:servicePH){

  }

  smartphones!:smartphone[];

  ngOnInit(): void {
    this.smartphones = this.phoneS.getphones();
  }
  trackBySmartphoneName(index: number, phone: smartphone): string {
    return phone.name; // Use the 'name' as a unique identifier
  }

}
