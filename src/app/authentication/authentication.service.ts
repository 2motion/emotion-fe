import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Http } from '@angular/http';
import SignUpPayloadModel from './model/sign-up-payload.model';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  public constructor(private readonly http: Http) {}

  public signUp(payload: SignUpPayloadModel) {
    return this.http.post(`${environment.apiEndPoint}/authentication/sign-up`, payload);
  }
}
