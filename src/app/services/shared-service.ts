import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
    providedIn:'root',
})
export class searchService{
    private searchTermSource = new BehaviorSubject<string>('');
    searchTerm$ = this.searchTermSource.asObservable();
  
    setSearchTerm(term: string): void {
      this.searchTermSource.next(term);
    }
}