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
import { BnwresPage } from '../pages/bnwres/bnwres';
import { HtPage } from '../pages/ht/ht';
import { CcPage } from '../pages/cc/cc';
import { HtreviewPage } from '../pages/htreview/htreview';
import { HttracksPage } from '../pages/httracks/httracks';
import { AaPage } from '../pages/aa/aa';
import { JmsPage } from '../pages/jms/jms';
import { JmstracksPage } from '../pages/jmstracks/jmstracks';
import { JmsreviewPage } from '../pages/jmsreview/jmsreview';
import { RtlPage } from '../pages/rtl/rtl';
import { RtltracksPage } from '../pages/rtltracks/rtltracks';
import { ReviewPage } from '../pages/review/review';
import { MPage } from '../pages/m/m';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    BnwPage,
    IronmaidenPage,
    ItracksPage,
    BnwresPage,
    HtPage,
    CcPage,
    HtreviewPage,
    HttracksPage,
    AaPage,
    JmsPage,
    JmstracksPage,
    JmsreviewPage,
    RtlPage,
    RtltracksPage,
    ReviewPage,
    MPage




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
    BnwresPage,
    HtPage,
    CcPage,
    HtreviewPage,
    HttracksPage,
    AaPage,
    JmsPage,
    JmsreviewPage,
    JmstracksPage,
    RtlPage,
    RtltracksPage,
    ReviewPage,
    MPage




  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
