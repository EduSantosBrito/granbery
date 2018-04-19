import { ErrorBoxModule } from './../shared/error-box.module';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from '../../login/login.component';
import { LoginService } from '../../services/login/login.service';
import { FormsModule } from '@angular/forms';
import { SuccessBoxModule } from '../shared/success-box.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    SuccessBoxModule,
    ErrorBoxModule
  ],
  declarations: [
    LoginComponent
  ],
  providers: [
    LoginService,
  ]
})
export class LoginModule { }
