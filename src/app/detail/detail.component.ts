import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { servicePH } from '../services/servicePH';
import { smartphone } from '../module/smartphone';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.scss'
})
export class DetailComponent implements OnInit{

  currentImage!:string;
  lastImg!:string;
  @Input() injPh!:smartphone;

  constructor(private route:ActivatedRoute,public serviceph:servicePH,private router:Router){}
  ngOnInit(): void {
    const phoneId=this.route.snapshot.params['id'];
    this.injPh=this.serviceph.getPhoneById(phoneId);
    this.currentImage = this.injPh.imgURl;
    
  }

  gettingBack():void{
    this.router.navigateByUrl('phonelist');
  }
  setMainImage(image: string) {
    this.lastImg = this.currentImage;
    this.currentImage = image;
    if(!this.injPh.imgs.includes(this.lastImg)){
      this.injPh.imgs.push(this.lastImg);
      this.injPh.imgs.splice(this.injPh.imgs.indexOf(this.currentImage),1);
    }
  }

}
