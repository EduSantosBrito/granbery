import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from '../../main/main.component';
import { MenuComponent } from '../../shared/menu/menu.component';
import { HamburgerIconComponent } from '../../shared/menu/hamburger-icon/hamburger-icon.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    MainComponent,
    MenuComponent,
    HamburgerIconComponent
  ]
})
export class MainModule { }
