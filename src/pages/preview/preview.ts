import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player';

@Component({
  selector: 'page-preview',
  templateUrl: 'preview.html',
})

export class PreviewPage {
  data: any;
  private videoID: string;
  imageList: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public alertCtrl: AlertController, private youtube: YoutubeVideoPlayer) {
    this.data = navParams.get('data');
    this.videoID = navParams.get('id');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PreviewPage');
  }

  // _URL(url) {
  //   return this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + this.id + '?rel=0');
  // }

  openVideo(): void {
    try {
      this.youtube.openVideo(`${this.videoID}`);
    } catch (error) {
      console.log(error);
    }
  }
}
