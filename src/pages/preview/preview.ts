import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { DomSanitizer } from '@angular/platform-browser';
import { PhotoLibrary } from '@ionic-native/photo-library';

@Component({
  selector: 'page-preview',
  templateUrl: 'preview.html',
})
export class PreviewPage {
  data: any;
  id: any;
  imageList: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public sanitizer: DomSanitizer
    , public photoLibrary: PhotoLibrary, public alertCtrl: AlertController) {
    this.data = navParams.get('data');
    this.id = navParams.get('id');

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PreviewPage');
  }

  _URL(url) {
    return this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + this.id + '?rel=0');
  }

  saveVideoToPhotos() {
    // let url = `https://www.youtube.com/embed/${this.id}`;
    this.photoLibrary.requestAuthorization().then(() => {
      this.photoLibrary.saveImage(this.data.snippet.thumbnails.default.url + '&ext=.jpg', 'iTubeder').then((entry => {
        let alert = this.alertCtrl.create({
          title: 'Success!',
          subTitle: `${entry}`,
          buttons: ['OK']
        });
        alert.present();
      }), (err) => {
        this.alertCtrl.create({
          title: 'Response!',
          subTitle: 'permissions weren\'t granted -- catch',
          buttons: ['OK']
        }).present();
      }).catch(err => {
        let alert = this.alertCtrl.create({
          title: 'Error!',
          subTitle: `${err}`,
          buttons: ['OK']
        });
        alert.present();
      }).catch(err => {
        let alert = this.alertCtrl.create({
          title: 'Permissions weren\'t granted!',
          subTitle: `${err}`,
          buttons: ['OK']
        });
        alert.present();
      });;
    });
  }

  getImages() {
    this.photoLibrary.requestAuthorization().then(() => {
      this.photoLibrary.getLibrary().subscribe({
        next: library => {
          this.imageList = library;
        },
        error: err => { console.log('could not get photos'); },
        complete: () => { console.log('done getting photos'); }
      });
    }).catch(err => {
      let alert = this.alertCtrl.create({
        title: 'Permissions weren\'t granted!',
        subTitle: `${err}`,
        buttons: ['OK']
      });
      alert.present();
    });
  }
}
