import { LoginService } from './../services/login/login.service';
import { Component, OnInit, ElementRef } from '@angular/core';
import { User } from '../models/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public user: User = new User();
  public messageError: string = "";
  public showErrorMessage: boolean = false;

  constructor(private loginService: LoginService,
    private elementRef: ElementRef) { }

  ngOnInit() {
  }

  public login() {
    this.loginService.login(this.user).subscribe(response => {
    },
      error => {
        error = error.json();
        this.messageError = error.message;
        this.showErrorMessage = true;
      })
  }

  public hideErrorMessage() {
    let element = this.elementRef.nativeElement.querySelector('#errorBox');
    element.style.opacity = 0;
    setTimeout(function () {
      this.showErrorMessage = false;
    }, 600);
  }
}
