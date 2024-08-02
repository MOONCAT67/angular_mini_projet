import { Component, OnInit } from '@angular/core';
import { MarComponent } from '../mar/mar.component';
import { smartphone } from '../module/smartphone';
import { CommonModule } from '@angular/common';
import { servicePH } from '../services/servicePH';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-phone-list',
  standalone: true,
  imports: [MarComponent,CommonModule,FormsModule],
  templateUrl: './phone-list.component.html',
  styleUrl: './phone-list.component.scss'
})
export class PhoneListComponent implements OnInit{

  constructor(private phoneS:servicePH){

  }

  smartphones!:smartphone[];
  filteredSmartphones!: smartphone[];
  fabrications: string[] = [];
  selectedFabrication: string = '';




  ngOnInit(): void {
    this.smartphones = this.phoneS.getphones();
    this.filteredSmartphones = this.smartphones;
    this.fabrications = this.getUniqueFabrications();
  }






  trackBySmartphoneName(index: number, phone: smartphone): string {
    return phone.id; // Use the 'name' as a unique identifier
  }

  onFabricationChange(event: Event): void {
    const selectElement = event.target as HTMLSelectElement;
    const fabrication = selectElement.value;
    this.selectedFabrication = fabrication;
    this.filteredSmartphones = fabrication ?
      this.smartphones.filter(phone => phone.fabrication === fabrication) :
      this.smartphones;
  }


  getUniqueFabrications(): string[] {
    
    return [...new Set(this.smartphones.map(phone => phone.fabrication))];
  }

}
