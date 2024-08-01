import { Component, OnInit,  } from '@angular/core';
import { offers } from '../module/offers';
import { ActivatedRoute } from '@angular/router';
import { offerser } from '../services/serviceOFF';

@Component({
  selector: 'app-single-offre',
  standalone: true,
  imports: [],
  templateUrl: './single-offre.component.html',
  styleUrl: './single-offre.component.scss'
})
export class singleOffreComponent implements OnInit {
  theOffer!:offers
  constructor(private route:ActivatedRoute,public serviceof:offerser){}
  ngOnInit(): void {
    const offerId=this.route.snapshot.params['id'];
    this.theOffer=this.serviceof.getOfferById(offerId);
  }
  
}
