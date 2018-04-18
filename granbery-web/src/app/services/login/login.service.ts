import { environment } from './../../../environments/environment';
import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import 'rxjs/add/operator/map'
import { Observable } from "rxjs/Observable";
import { User } from '../../models/user.model';

@Injectable()
export class LoginService {

    private apiUrl: string = environment.apiUrl;

    constructor(private http: Http) {
    }

    public login(requestBody: User): Observable<any> {
        return this.http.post(`${this.apiUrl}/users/login`, requestBody)
        .map(response => response);
    }
}