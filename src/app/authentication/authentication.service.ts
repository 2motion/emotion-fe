import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import SignUpPayloadModel from './model/sign-up-payload.model';
import VerifyPayloadModel from './model/verify-payload.model';
import CreateTokenPayloadModel from './model/create-token-payload.model';
import * as moment from "moment";
import { HttpClient } from '@angular/common/http';
import ResendVerifyTokenPayloadModel from './model/resend-verify-token-payload.model';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  public constructor(private readonly http: HttpClient) {}

  public signUp(payload: SignUpPayloadModel) {
    return this.http.post(`${environment.apiEndPoint}/authentication/sign-up`, payload);
  }

  public verify(payload: VerifyPayloadModel) {
    return this.http.post(`${environment.apiEndPoint}/authentication/verify`, payload);
  }

  public resendVerifyToken(payload: ResendVerifyTokenPayloadModel) {
    return this.http.post(`${environment.apiEndPoint}/authentication/resend-verify-code`, payload);
  }

  public fetchProfile() {
    return this.http.get(`${environment.apiEndPoint}/me`);
  }

  public createToken(payload: CreateTokenPayloadModel) {
    return this.http.post(`${environment.apiEndPoint}/authentication/token`, payload);
  }

  public setSession(token: string, expiresIn: number) {
    const expiresAt = moment().add(expiresIn, 'second');

    localStorage.setItem('id_token', token);
    localStorage.setItem("expires_at", JSON.stringify(expiresAt.valueOf()) );
  }

  public isLoggedIn() {
    return moment().isBefore(this.getExpiration());
  }

  public logout() {
    localStorage.removeItem("id_token");
    localStorage.removeItem("expires_at");
  }

  public isLoggedOut() {
    return !this.isLoggedIn();
  }

  public getExpiration() {
    const expiration = localStorage.getItem("expires_at");
    const expiresAt = JSON.parse(expiration);

    return moment(expiresAt);
  }    
}
