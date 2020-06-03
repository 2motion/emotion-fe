import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Http } from '@angular/http';
import SignUpPayloadModel from './model/sign-up-payload.model';
import VerifyPayloadModel from './model/verify-payload.model';
import CreateTokenPayloadModel from './model/create-token-payload.model';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  public constructor(private readonly http: Http) {}

  public signUp(payload: SignUpPayloadModel) {
    return this.http.post(`${environment.apiEndPoint}/authentication/sign-up`, payload);
  }

  public verify(payload: VerifyPayloadModel) {
    return this.http.post(`${environment.apiEndPoint}/authentication/verify`, payload);
  }

  public fetchProfile() {
    return this.http.get(`${environment.apiEndPoint}/me`);
  }

  public createToken(payload: CreateTokenPayloadModel) {
    return this.http.post(`${environment.apiEndPoint}/authentication/token`, payload);
  }
}
