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
             'https://cdn.alloallo.media/catalog/product/samsung/galaxy-s/galaxy-s21/galaxy-s21-phantom-purple.jpg',
             ['https://static1.pocketlintimages.com/wordpress/wp-content/uploads/wm/155378-phones-review-hands-on-samsung-galaxy-s21-ultra-image1-luae09ici4.JPG',
                'https://i.ebayimg.com/images/g/nrsAAOSws-Flqc8x/s-l400.jpg',
                'https://i5.walmartimages.com/seo/Samsung-Galaxy-S21-Ultra-5G-G998B-256GB-GSM-Dual-Sim-Unlocked-Android-Smartphone-International-Variant-US-Compatible-LTE-Phantom-Silver_aa4054e8-9dfa-4fc3-ab69-48a688bc462d.faed75cbe55a2743ea4655d487accd44.jpeg'],
                'Samsung Galaxy S21 The Samsung Galaxy S21 is a flagship smartphone that combines cutting-edge technology with a sophisticated design. Featuring a 6.2-inch Dynamic AMOLED 2X display with a 120Hz refresh rate, the S21 delivers vibrant visuals and smooth scrolling. The device is powered by the Exynos 2100 (international) or Snapdragon 888 (USA) processor, ensuring fast performance and efficient multitasking'
          ),
        new smartphone(
            'Iphone 12',
            2360,
            'https://cdn.alloallo.media/catalog/product/apple/iphone/iphone-12-pro-max/iphone-12-pro-max-gold.jpg',
            ['https://www.tunisianet.com.tn/368301-large/smartphone-apple-iphone-12-64-go-noir.jpg',
                'https://mk-media.mytek.tn/media/catalog/product/cache/8be3f98b14227a82112b46963246dfe1/i/p/iphone-12-128go-vert-apple.jpg',
                'https://powermaccenter.com/cdn/shop/files/A012000x2000_76f84344-582e-4648-8815-9202f602e09a.jpg?v=1692099214&width=823'
            ],
            'The iPhone 12 is a stylish and powerful smartphone that brings a fresh design and impressive features to the table. It features a 6.1-inch Super Retina XDR display, which delivers sharp, vibrant visuals and true-to-life colors with HDR10 and Dolby Vision support. The sleek flat-edge design, reminiscent of the iPhone 4, is both modern and durable, with Ceramic Shield on the front for enhanced drop protection.'
          ),
        new smartphone(
            'XIOMI REDMI NOTE 12',
            2360,
            'https://mk-media.mytek.tn/media/catalog/product/cache/8be3f98b14227a82112b46963246dfe1/s/m/smartphone-xiaomi-redmi-note-12-pro-5g-8go-256go-noir11.jpg',
            ['https://khadraouitek.tn/4732-large_default/smartphone-xiaomi-redmi-note-12-4go-128go-gris-onyx.jpg',
                'https://skymil-informatique.com/36482-large_default/smartphone-xiaomi-redmi-note-12-8go-256go.jpg'
            ],
            'The Redmi Note 12 is a feature-rich smartphone that delivers a great balance of performance, display quality, and value. It sports a 6.67-inch AMOLED display with a Full HD+ resolution and a 120Hz refresh rate, providing vibrant colors and smooth visuals, ideal for both everyday use and entertainment.'
          ),
          new smartphone(
              'HUAWEI P30',
              2360,
              'https://www.tunisianet.com.tn/126903-large/huawei-p30-pro-ram-8-go.jpg',
              ['https://m.media-amazon.com/images/I/51UhGxv274L._AC_SL1000_.jpg',
                'https://m.media-amazon.com/images/I/61jJeZBliWL._AC_UF1000,1000_QL80_.jpg'
              ],
               'The Huawei P30 is a flagship smartphone known for its sleek design, advanced camera capabilities, and powerful performance. It features a 6.1-inch OLED display with a Full HD+ resolution, delivering vibrant colors and deep contrasts for an immersive viewing experience.'
            )
    ]
    getPhoneById(id:string):smartphone{
       const foundPhone:smartphone|undefined=this.smartphones.find((Smartph:smartphone)=>Smartph.id===id);
       if(!foundPhone){
        throw new Error("not found phone");
       }
       return foundPhone;
    }
    public getphones():smartphone[]{
        return [...this.smartphones]
    }
}