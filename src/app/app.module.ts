import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SearchDataProvider } from '../providers/search-data/search-data';
import { JsonpModule } from '@angular/http';
import { SearchResultsPage } from '../pages/search-results/search-results';
import { PreviewPage } from '../pages/preview/preview';
import { PhotoLibrary } from '@ionic-native/photo-library';
import { TouchID } from '@ionic-native/touch-id';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SearchResultsPage,
    PreviewPage
  ],
  imports: [
    BrowserModule,
    JsonpModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SearchResultsPage,
    PreviewPage
  ],
  providers: [
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    StatusBar,
    SplashScreen,
    PhotoLibrary,
    TouchID,
    SearchDataProvider
  ]
})
export class AppModule { }
