import { registerLocaleData } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
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
import { FooterModule } from './footer/footer.module';
import {
  SharedModule,
} from './shared';

registerLocaleData(ko);

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    HttpModule,
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    SharedModule,
    AppRoutingModule,
    FooterModule,
    ArticleModule,
    StoreModule.forRoot({
      article: ArtcileReducer,
      router: routerReducer,
    }),
    EffectsModule.forRoot([
      ArticleEffects,
    ]),
    StoreRouterConnectingModule.forRoot(),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  providers: [{ provide: NZ_I18N, useValue: ko_KR }],
  bootstrap: [AppComponent],
})
export class AppModule { }
