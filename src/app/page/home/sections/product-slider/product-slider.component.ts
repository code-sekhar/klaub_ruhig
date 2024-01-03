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
  slides = [
    {img: "http://placehold.it/350x150/000000"},
    {img: "http://placehold.it/350x150/111111"},
    {img: "http://placehold.it/350x150/333333"},
    {img: "http://placehold.it/350x150/666666"}
  ];
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
    autoplay: true,
    center: true,
    loop: true,
    nav: false,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 2000,
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



