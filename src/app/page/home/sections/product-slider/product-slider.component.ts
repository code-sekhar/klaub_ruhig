import { Component, OnInit, AfterViewInit, ElementRef } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ApiServicesService } from '../../../../api/api-services.service';
declare var $: any; // Declare jQuery
@Component({
  selector: 'app-product-slider',
  templateUrl: './product-slider.component.html',
  styleUrl: './product-slider.component.css'
})
export class ProductSliderComponent {
  constructor(private el: ElementRef,private apiServicesService: ApiServicesService) {

  }

  ngOnInit(): void {

    this.galleryData();
    // $(this.el.nativeElement).find('.your-slider-class').slick({
    //   centerMode: true,
    //   centerPadding: '60px',
    //   slidesToShow: 4,
    //   slidesToScroll: 4,
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
    // }, 200);
  }
  customOptions: OwlOptions = {
    autoplay: false,
    center: true,
    loop: true,
    nav: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 2000,
    navText: ['<i class="fa-solid fa-chevron-left"></i>', '<i class="fa-solid fa-chevron-right"></i>'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 3
      },
      940: {
        items: 3
      }
    },

  }
  data_gl:any;
  galleryData(): void {

    this.apiServicesService.galleryData().subscribe(data=>this.data_gl=data)
  }


  ngAfterViewInit() {

  }


}



