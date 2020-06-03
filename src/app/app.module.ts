import { registerLocaleData } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import ko from '@angular/common/locales/ko';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EffectsModule } from '@ngrx/effects';
import { routerReducer, StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { ko_KR, en_US } from 'ng-zorro-antd/i18n';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArticleModule } from './article/article.module';
import { ArticleEffects } from './article/effects/article.effects';
import { reducer as ArtcileReducer } from './article/reducers/article.reducer';
import { reducer as HeaderReducer } from './header/reducers/header.reducers';
import { reducer as AuthenticationReducer} from './authentication/reducers/authentication.reducer';
import { FooterModule } from './footer/footer.module';
import {
  SharedModule,
} from './shared';
import { IconDefinition } from '@ant-design/icons-angular';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { AccountBookFill, AlertFill, AlertOutline } from '@ant-design/icons-angular/icons';
import { HeaderModule } from './header/header.module';
import { HeaderEffects } from './header/effects/header.effects';
import { AuthenticationEffects } from './authentication/effects/authentication.effects';
import { WriteModule } from './write/write.module';
import { ProfileModule } from './profile/profile.module';
import { AuthInterceptor } from './shared/interceptor/auth.interceptor';

const icons: IconDefinition[] = [ AccountBookFill, AlertOutline, AlertFill ];

registerLocaleData(ko);

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    NzIconModule.forRoot(icons),
    SharedModule,
    AppRoutingModule,
    HeaderModule,
    FooterModule,
    ArticleModule,
    WriteModule,
    ProfileModule,
    StoreModule.forRoot({
      article: ArtcileReducer,
      header: HeaderReducer,
      authentication: AuthenticationReducer,
      router: routerReducer,
    }),
    EffectsModule.forRoot([
      ArticleEffects,
      HeaderEffects,
      AuthenticationEffects
    ]),
    StoreRouterConnectingModule.forRoot(),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  providers: [
    { 
      provide: NZ_I18N, 
      useValue: ko_KR 
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
