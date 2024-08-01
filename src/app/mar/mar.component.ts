import { Component, Input, input, OnInit } from '@angular/core';
import { smartphone } from '../module/smartphone';
import { CurrencyPipe } from '@angular/common';

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

  ngOnInit(): void {
    
  }
  
}
