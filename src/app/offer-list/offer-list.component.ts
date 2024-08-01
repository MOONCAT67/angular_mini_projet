import { Component, OnInit } from '@angular/core';
import { offerser } from '../services/serviceOFF';
import { offers } from '../module/offers';
import { OffreComponent } from '../offre/offre.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-offer-list',
  standalone: true,
  imports: [OffreComponent,CommonModule],
  templateUrl: './offer-list.component.html',
  styleUrl: './offer-list.component.scss'
})
export class OfferListComponent implements OnInit{
    constructor(public offser:offerser){}
    tabOffers!:offers[];
    ngOnInit(): void {
      this.tabOffers=this.offser.getOffers();
    }
    trackByid(index: number, item: offers): string {
      return item.id;
    }
}
