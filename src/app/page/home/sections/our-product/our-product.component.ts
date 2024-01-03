import { Component, OnInit, AfterViewInit, ElementRef } from '@angular/core';
import { ApiServicesService } from '../../../../api/api-services.service';
import { OwlOptions } from 'ngx-owl-carousel-o';
declare var $: any;
@Component({
  selector: 'app-our-product',
  templateUrl: './our-product.component.html',
  styleUrl: './our-product.component.css'
})
export class OurProductComponent {
  constructor(private el: ElementRef,private apiServicesService: ApiServicesService) {}
  ngOnInit(): void {
    this.productData();
  }
  data_prod:any
  productData(): void {
    this.apiServicesService.productData().subscribe(data=>this.data_prod=data)
  }
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    autoplay:true,
    dots: false,
    navSpeed: 1500,
    responsive: {
      0: {
        items: 1,
        nav: false
      },
      400: {
        items: 1,
        nav: false
      },
      740: {
        items: 2
      },
      940: {
        items: 3
      }
    },
    nav: true
  }
  ngAfterViewInit() {
    // $(this.el.nativeElement).find('.your-slider-class').slick({
    //   centerMode: true,
    //   centerPadding: '60px',
    //   slidesToShow: 3,
    //   dots:true,
    //   autoplay: true,
    // autoplaySpeed: 2000,
    //   responsive: [
    //     {
    //       breakpoint: 768,
    //       settings: {
    //         arrows: false,
    //         centerMode: true,
    //         centerPadding: '40px',
    //         slidesToShow: 3
    //       }
    //     },
    //     {
    //       breakpoint: 480,
    //       settings: {
    //         arrows: false,
    //         centerMode: true,
    //         centerPadding: '40px',
    //         slidesToShow: 1
    //       }
    //     }
    //   ]
    // });
  }
}
