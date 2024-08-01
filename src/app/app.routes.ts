import { Routes } from '@angular/router';
import { PhoneListComponent } from './phone-list/phone-list.component';
import { AboutComponent } from './about/about.component';
import { OfferListComponent } from './offer-list/offer-list.component';
import { LandingComponent } from './landing/landing.component';
import { ContactComponent } from './contact/contact.component';
import { singleOffreComponent } from './Single-offer/single-offre.component';

export const routes: Routes = [
    {path :'offerlist/:id',component:singleOffreComponent},
    {path : 'phonelist' ,component:PhoneListComponent},
    {path : 'about' ,component:AboutComponent},
    {path : 'offerlist' ,component:OfferListComponent},
    {path : 'contact' ,component:ContactComponent},
    {path : '',component:LandingComponent}
    

    

];
