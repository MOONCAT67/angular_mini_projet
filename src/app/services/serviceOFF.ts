import { Injectable } from "@angular/core";
import { offers } from "../module/offers";

@Injectable({
    providedIn: 'root'
})

export class offerser{
    private offerse:offers[]=[
        new offers(
            'https://websta.me/wp-content/uploads/2021/03/sell-the-phone.jpg',
            'Welcome to our Phone Sales Service, where we offer an extensive collection of the latest smartphones from top brands at competitive prices. Whether youre looking for the newest flagship models or budget-friendly options, our store provides a wide range of devices to suit your needs and preferences.',
            'Phone Sales'
        ),
        new offers(
            'https://th.bing.com/th/id/R.f39e05d0a944a52aba96bf1230d6c8b5?rik=zfUAUPWFhla0eg&pid=ImgRaw&r=0',
            'At our Phone Repair Service, we understand how essential your smartphone is to your daily life. That’s why we are committed to providing fast, reliable, and affordable repair solutions to get you back up and running in no time.',
            'Phone Repairs'
        ),
        new offers(
            'https://cwpwp2.betterthanpaper.com/wp-content/uploads/2017/05/Mobile-accessories.jpg',
            'Enhance your smartphone experience with our wide range of high-quality phone accessories. At our store, we offer everything you need to personalize and protect your device while staying connected in style.',
            'Phone Accessories'
        ),
        new offers(
            'https://roicallcentersolutions.com/wp-content/uploads/2021/04/iStock-1244522220-1.jpg',
            'At our phone store, we pride ourselves on providing exceptional customer support to ensure that you have a seamless and satisfying experience. Our dedicated team is here to assist you with all your inquiries and concerns, offering personalized solutions to meet your needs.',
            'Customer Support '
        )
    ]

    getOfferById(id: string): offers {
        const foundOffer: offers | undefined = this.offerse.find((offer: offers) => offer.id === id);
        if (!foundOffer) {
            throw new Error("not found!");
        }
        return foundOffer;
    }
    
    public getOffers():offers[]{
        return this.offerse;
    }

}