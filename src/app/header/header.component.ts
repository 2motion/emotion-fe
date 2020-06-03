import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../app.state';
import * as HeaderActions from './actions/header.actions';
import ProfileModel from '../authentication/model/profile.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public isVisibleAuthenticateModal$: Observable<boolean>;
  public profile$: Observable<ProfileModel>;
  public isAuthenticated$: Observable<boolean>;
  public constructor(private store: Store<AppState>) { }

  public ngOnInit(): void {
    this.isVisibleAuthenticateModal$ = this.store.select(state => state.header.isVisibleAuthenticateModal);
    this.profile$ = this.store.select(state => state.authentication.profile);
    this.isAuthenticated$ = this.store.select(state => state.authentication.isAuthenticated);
  }

  public visibleAuthenticateModal() {
    this.store.dispatch(new HeaderActions.VisibleAuthenticateModalAction());
  }

  public hiddenAuthenticateModal() {
    this.store.dispatch(new HeaderActions.HiddenAuthenticateModalAction());
  }
}
