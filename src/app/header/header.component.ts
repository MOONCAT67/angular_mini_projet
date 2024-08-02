import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { searchService } from '../services/shared-service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  constructor(private searchser:searchService){}


 onSearchChange(searchTerm: Event): void {
    const input =searchTerm.target as HTMLInputElement;
    this.searchser.setSearchTerm(input.value);
  }

}
