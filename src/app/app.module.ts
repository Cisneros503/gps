import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
/*
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpModule, Http } from '@angular/http';
*/

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { LoginPage } from '../pages/login/login';
import { RecuperarPage } from '../pages/recuperar/recuperar'
import { AjustesPage } from '../pages/ajustes/ajustes';
import { DetalleRastreadorPage } from '../pages/detalle-rastreador/detalle-rastreador'
import { SeguimientoPage } from '../pages/seguimiento/seguimiento';
import { IngresarPage } from '../pages/ingresar/ingresar';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
/*
export function createTranslateLoader(http: Http) {
  return new TranslateHttpLoader(this.http, './assets/i18n/', '.json');
}
*/

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage,
    RecuperarPage,
    AjustesPage,
    DetalleRastreadorPage,
    SeguimientoPage,
    IngresarPage
  ],
  imports: [
    /*TranslateModule.forRoot(
      {
        loader: {
          provide: TranslateLoader,
          useFactory: (createTranslateLoader),
          deps: [Http]
        }
      }
    ),*/
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage,
    RecuperarPage,
    AjustesPage,
    DetalleRastreadorPage,
    IngresarPage,
    SeguimientoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {

  

}
