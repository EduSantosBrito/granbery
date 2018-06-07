import { AwardsComponent } from './../../main/awards/awards.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from '../../main/main.component';
import { MenuComponent } from '../../shared/menu/menu.component';
import { HamburgerIconComponent } from '../../shared/menu/hamburger-icon/hamburger-icon.component';
import { MenuModule } from '../shared/menu.module';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SwiperModule } from 'ngx-swiper-wrapper';
import { SWIPER_CONFIG } from 'ngx-swiper-wrapper';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';

const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
  parallax: true,
  direction: 'horizontal',
  pagination: {
    el: '.swiper-pagination',
    dynamicBullets: true,
    clickable: true
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  speed: 400
};

@NgModule({
  imports: [
    CommonModule,
    MenuModule,
    FormsModule,
    SwiperModule
  ],
  declarations: [
    MainComponent,
    AwardsComponent,
  ],
  providers: [
    {
      provide: SWIPER_CONFIG,
      useValue: DEFAULT_SWIPER_CONFIG
    }
  ]
})
export class MainModule { }
