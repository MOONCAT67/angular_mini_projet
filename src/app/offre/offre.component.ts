import { Component, Input } from '@angular/core';
import { offers } from '../module/offers';
import { Router } from '@angular/router';

@Component({
  selector: 'app-offre',
  standalone: true,
  imports: [],
  templateUrl: './offre.component.html',
  styleUrl: './offre.component.scss'
})
export class OffreComponent {
  @Input() theOffer!:offers

  constructor(private router:Router){}
  onNavigate():void{
    this.router.navigateByUrl(`offerlist/${this.theOffer.id}`);
  }
}
