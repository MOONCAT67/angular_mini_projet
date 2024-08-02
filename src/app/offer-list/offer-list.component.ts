import { Component, OnInit } from '@angular/core';
import { offerser } from '../services/serviceOFF';
import { offers } from '../module/offers';
import { OffreComponent } from '../offre/offre.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-offer-list',
  standalone: true,
  imports: [OffreComponent,CommonModule,FormsModule],
  templateUrl: './offer-list.component.html',
  styleUrl: './offer-list.component.scss'
})
export class OfferListComponent implements OnInit{

    tabOffers!:offers[];
    tabFiltredOffers!:offers[];
    OffersNames:string[]=[];
    selectedOffer:string='';




    


    constructor(public offser:offerser){}



    
    ngOnInit(): void {
      this.tabOffers=this.offser.getOffers();
      this.tabFiltredOffers=this.tabOffers;
      this.OffersNames=this.getUniqyeNames()

    }
  getUniqyeNames(): string[] {
    return [...new Set(this.tabOffers.map(tage=>tage.nameS)) ];
  }

  onChangeService(event:Event):void{
    const selectedElement=event.target as HTMLSelectElement;7
    const nameSer=selectedElement.value;
    this.selectedOffer=nameSer;
    this.tabFiltredOffers=nameSer ?
      this.tabOffers.filter(tag=>tag.nameS==nameSer):this.tabOffers;

  }




    trackByid(index: number, item: offers): string {
      return item.id;
    }
}
