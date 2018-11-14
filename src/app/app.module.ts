import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import {ButtonspagePage} from '../pages/buttonspage/buttonspage';
import {AlertpagePage} from '../pages/alertpage/alertpage';
import {CardpagePage} from '../pages/cardpage/cardpage';
import {InputpagePage} from '../pages/inputpage/inputpage';
import {ToastpagePage} from '../pages/toastpage/toastpage';
import {CountryselectorpagePage} from '../pages/countryselectorpage/countryselectorpage';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ButtonspagePage,
    AlertpagePage,
    CardpagePage,
    InputpagePage,
    ToastpagePage,
    CountryselectorpagePage



  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ButtonspagePage,
    AlertpagePage,
    CardpagePage,
    InputpagePage,
    ToastpagePage,
    CountryselectorpagePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
