import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { BnwPage } from '../pages/bnw/bnw';
import { IronmaidenPage } from '../pages/ironmaiden/ironmaiden';
import { ItracksPage } from '../pages/itracks/itracks';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    BnwPage,
    IronmaidenPage,
    ItracksPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    BnwPage,
    IronmaidenPage,
    ItracksPage,

  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
