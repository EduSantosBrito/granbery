import { routing } from './routes/route.routing';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, ChildrenOutletContexts  } from '@angular/router';
import { AppComponent } from './app.component';
import { NotFoundModule } from './modules/not-found/not-found.module';
import { MenuComponent } from './shared/menu/menu.component';
import { HamburgerIconComponent } from './shared/menu/hamburger-icon/hamburger-icon.component';
import { MainModule } from './modules/main/main.module';
import { LoginModule } from './modules/login/login.module';
import { MainComponent } from './main/main.component';
import { InstitucionalModule } from './modules/institucional/institucional.module';



@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    routing,
    NotFoundModule,
    MainModule,
    LoginModule,
    InstitucionalModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
