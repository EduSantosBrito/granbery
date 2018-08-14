import { routing } from './routes/route.routing';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, ChildrenOutletContexts  } from '@angular/router';
import { AppComponent } from './app.component';
import { MainModule } from './modules/main/main.module';
import { MainComponent } from './main/main.component';



@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    routing,
    MainModule,
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
