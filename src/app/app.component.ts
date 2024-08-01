import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MarComponent } from './mar/mar.component';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { PhoneListComponent } from './phone-list/phone-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    MarComponent,CommonModule,HeaderComponent,PhoneListComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent  {
 

}
