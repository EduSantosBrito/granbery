import { CarouselComponent } from './../../shared/carousel/carousel.component';
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
@NgModule({
  imports: [
    CommonModule,
    MenuModule,
    FormsModule,
  ],
  declarations: [
    MainComponent,
    AwardsComponent,
    CarouselComponent
  ]
})
export class MainModule { }
