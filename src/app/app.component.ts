import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, AlertController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { PhotoLibrary } from '@ionic-native/photo-library';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{ title: string, component: any }>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen,
    public photoLibrary: PhotoLibrary, public alertCtrl: AlertController) {

    this.initializeApp();
    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage }
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.splashScreen.hide();
      // set status bar to white
      this.statusBar.backgroundColorByHexString('#642B73');
      // let status bar overlay webview
      this.statusBar.overlaysWebView(false);

      // PhotoLibrary
      // this.photoLibrary.requestAuthorization().then(() => {
      //   this.photoLibrary.getLibrary().subscribe({
      //     next: library => {
      //       library.forEach(libraryItem => {
      //         this.alertCtrl.create({
      //           title: 'Success!',
      //           subTitle: `${libraryItem}`,
      //           buttons: ['OK']
      //         }).present();
      //       });
      //     },
      //     error: err => {
      //       this.alertCtrl.create({
      //         title: 'Error!',
      //         subTitle: `${err}`,
      //         buttons: ['OK']
      //       }).present();
      //     },
      //     complete: () => {
      //       this.alertCtrl.create({
      //         title: 'Completed!',
      //         buttons: ['OK']
      //       }).present();
      //     }
      //   });
      // }).catch(err => {
      //   this.alertCtrl.create({
      //     title: `${err}`,
      //     buttons: ['OK']
      //   }).present();
      // });
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
