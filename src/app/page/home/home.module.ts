import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';

import { AboutForBioComponent } from './sections/about-for-bio/about-for-bio.component';

import { BannerComponent } from './sections/banner/banner.component';
import { BioAustriaComponent } from './sections/bio-austria/bio-austria.component';
import { OurProductComponent } from './sections/our-product/our-product.component';
import { ProductSliderComponent } from './sections/product-slider/product-slider.component';


@NgModule({
  declarations: [
    HomeComponent,
    BannerComponent,
    AboutForBioComponent,
    BioAustriaComponent,
    OurProductComponent,
    ProductSliderComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
