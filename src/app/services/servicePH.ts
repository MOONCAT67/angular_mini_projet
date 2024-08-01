import { Injectable } from "@angular/core";
import { smartphone } from "../module/smartphone";

@Injectable({
    providedIn:'root'
})
export class servicePH{
    private smartphones : smartphone[] =[
        new smartphone(
            'samsung S21',
             2508,
             'https://cdn.alloallo.media/catalog/product/samsung/galaxy-s/galaxy-s21/galaxy-s21-phantom-purple.jpg'
          ),
        new smartphone(
            'Iphone 12',
            2360,
            'https://cdn.alloallo.media/catalog/product/apple/iphone/iphone-12-pro-max/iphone-12-pro-max-gold.jpg'
          ),
        new smartphone(
            'XIOMI REDMI NOTE 12',
            2360,
            'https://mk-media.mytek.tn/media/catalog/product/cache/8be3f98b14227a82112b46963246dfe1/s/m/smartphone-xiaomi-redmi-note-12-pro-5g-8go-256go-noir11.jpg'
          ),
          new smartphone(
              'HUAWEI P30',
              2360,
              'https://www.tunisianet.com.tn/126903-large/huawei-p30-pro-ram-8-go.jpg'
            )
    ]
    public getphones():smartphone[]{
        return [...this.smartphones]
    }
}