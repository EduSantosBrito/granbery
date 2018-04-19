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
  public displayErrorBox: boolean = false;
  public messageSuccess: string = "";
  public displaySuccessBox: boolean = false;

  constructor(private loginService: LoginService,
    private elementRef: ElementRef) { }

  ngOnInit() {
  }

  public login() {
    this.loginService.login(this.user).subscribe(response => {
      this.messageSuccess = "Login efetuado com sucesso.";
      this.displaySuccessBox = true;
      //TO-DO INSERÇÃO DO TOKEN NO LOCALSTORAGE + PEGAR O LOCALSTORAGE
      //EM CADA REQUISIÇÃO QUE PRECISE DE PERMISSÃO PARA VALIDAR
    },
    error => {
      error = error.json();
      this.messageError = error.message;
      this.displayErrorBox = true;
    })
  }

  public toogleDisplaySuccesBoxFalse(event) {
    this.displaySuccessBox = false;
  }
  public toogleDisplayErrorBoxFalse(event) {
    this.displayErrorBox = false;
  }
}
