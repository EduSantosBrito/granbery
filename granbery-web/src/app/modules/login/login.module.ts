import { Http, HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from '../../login/login.component';
import { LoginService } from '../../services/login/login.service';
import { FormsModule } from '@angular/forms';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule
  ],
  declarations: [
    LoginComponent
  ],
  providers: [
    LoginService,
  ]
})
export class LoginModule { }
