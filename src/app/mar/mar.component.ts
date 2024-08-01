import { Component, Input, input, OnInit } from '@angular/core';
import { smartphone } from '../module/smartphone';
import { CurrencyPipe } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mar',
  standalone: true,
  imports: [
    CurrencyPipe
  ],
  templateUrl: './mar.component.html',
  styleUrl: './mar.component.scss'
})
export class MarComponent implements OnInit {
  @Input() smart!:smartphone;

  constructor(private router:Router){}

  onVa(){
    this.router.navigateByUrl(`detail/${this.smart.id}`)
  }

  ngOnInit(): void {
    
  }
  
}
