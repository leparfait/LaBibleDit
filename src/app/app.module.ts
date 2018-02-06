import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AmourPage } from '../pages/amour/amour';
import { MariagePage } from '../pages/mariage/mariage';
import { DivorcePage } from '../pages/divorce/divorce';
import { FoiPage } from '../pages/foi/foi';

@NgModule({
  declarations: [
    MyApp,
    HomePage,AmourPage,MariagePage,DivorcePage,FoiPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,AmourPage,MariagePage,DivorcePage,FoiPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
