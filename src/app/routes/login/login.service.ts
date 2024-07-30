import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment.development";

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(private http: HttpClient) {
  }

  login(): Observable<any> {
    return this.http.get<any>(environment.apiUrl + 'user',{ observe: 'response',withCredentials: true })
  }

}
