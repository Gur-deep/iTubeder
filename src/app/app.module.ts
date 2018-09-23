import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { JsonpModule } from '@angular/http';
import { SearchDataProvider } from '../providers/search-data/search-data';
import { SearchResultsPage } from '../pages/search-results/search-results';
import { PreviewPage } from '../pages/preview/preview';
import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player';

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
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SearchResultsPage,
    PreviewPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    SearchDataProvider,
    SearchDataProvider,
    YoutubeVideoPlayer
  ]
})
export class AppModule { }
