import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '../app.state';
import { Observable } from 'rxjs';
import * as AuthenticationActions from './actions/authentication.actions';


@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss']
})
export class AuthenticationComponent implements OnInit {
  public validateForm!: FormGroup;
  public isLoginRoute: boolean;
  public isSignUpRoute: boolean;

  public constructor(
    private fb: FormBuilder,
    private router: Router,
    private store: Store<AppState>
    ) { 
      const parser = document.createElement('a');
      parser.href = this.router.url;
    }

  public submitForm(): void {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }

    this.store.dispatch(new AuthenticationActions.SignUpAction(this.validateForm.value));
  }


  public ngOnInit(): void {
    const parser = document.createElement('a');
    parser.href = this.router.url
    
    if (parser.pathname === '/login') {
      this.isLoginRoute = true;
      this.isSignUpRoute = false;
    }

    if (parser.pathname === '/sign-up') {
      this.isSignUpRoute = true;
      this.isLoginRoute = false;
    }

    this.validateForm = this.fb.group({
      id: [null, [Validators.required]],
      password: [null, [Validators.required]],
      name: [null, [Validators.required]],
    });
  }

}
