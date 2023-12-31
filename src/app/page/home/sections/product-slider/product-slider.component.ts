import { Component, OnInit, AfterViewInit, ElementRef } from '@angular/core';
declare var $: any; // Declare jQuery
@Component({
  selector: 'app-product-slider',
  templateUrl: './product-slider.component.html',
  styleUrl: './product-slider.component.css'
})
export class ProductSliderComponent {
  constructor(private el: ElementRef) {}

  ngAfterViewInit() {
    $(this.el.nativeElement).find('.your-slider-class').slick({
      centerMode: true,
      centerPadding: '60px',
      slidesToShow: 3,
      dots:true,
      autoplay: true,
    autoplaySpeed: 2000,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 3
          }
        },
        {
          breakpoint: 480,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 1
          }
        }
      ]
    });
  }

  ngOnInit() {}
}
