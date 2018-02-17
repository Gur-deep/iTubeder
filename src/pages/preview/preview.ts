import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { DomSanitizer } from '@angular/platform-browser';
import { PhotoLibrary } from '@ionic-native/photo-library';
import { TouchID } from '@ionic-native/touch-id';

@Component({
  selector: 'page-preview',
  templateUrl: 'preview.html',
})
export class PreviewPage {
  data: any;
  id: any;
  imageList: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public sanitizer: DomSanitizer,
    private photoLibrary: PhotoLibrary, public alertCtrl: AlertController, private touchId: TouchID) {

    this.data = navParams.get('data');
    this.id = navParams.get('id');

    this.photoLibrary.requestAuthorization({ read: true }).then(() => {
      this.alertCtrl.create({
        title: 'Done!',
        subTitle: 'Done Getting Photos',
        buttons: ['OK']
      }).present();
    }).catch(err =>
      this.alertCtrl.create({
        title: 'Catch!',
        subTitle: `${err}`,
        buttons: ['OK']
      }).present()
    );

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PreviewPage');
  }

  _URL(url) {
    return this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + this.id + '?rel=0');
  }

  saveVideoToPhotos() {
    // let url = `https://www.youtube.com/embed/${this.id}`;
    this.photoLibrary.requestAuthorization({ read: true, write: true }).then(res => {
      this.alertCtrl.create({
        title: 'success!',
        subTitle: `${res}`,
        buttons: ['OK']
      }).present();
    },
      err => {
        this.alertCtrl.create({
          title: 'failed!',
          subTitle: `${err}`,
          buttons: ['OK']
        }).present();
      });
  }

  getImages() {

  }

  showTouchId() {
    this.touchId.verifyFingerprint('Scan your fingerprint please').then(res => {
      this.alertCtrl.create({
        title: 'success!',
        subTitle: `${res}`,
        buttons: ['OK']
      }).present();
    },
      err => {
        this.alertCtrl.create({
          title: 'failed!',
          subTitle: `${err}`,
          buttons: ['OK']
        }).present();
      }
    );
  }
}
