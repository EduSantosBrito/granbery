import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, ChildrenOutletContexts  } from '@angular/router';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { HamburgerIconComponent } from './menu/hamburger-icon/hamburger-icon.component';



@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HamburgerIconComponent
  ],
  imports: [
    BrowserModule,
    RouterModule
    
  ],
  providers: [
    ChildrenOutletContexts
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
