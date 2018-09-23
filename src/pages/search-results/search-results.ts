import { Component } from '@angular/core';
import { NavParams, NavController } from 'ionic-angular';
import { PreviewPage } from '../preview/preview';
import { SearchDataProvider } from '../../providers/search-data/search-data';

@Component({
  selector: 'page-search-results',
  templateUrl: 'search-results.html',
})
export class SearchResultsPage {
  title: any;
  constructor(public navParams: NavParams, public search: SearchDataProvider, public navCtrl: NavController) {

  }
  ionViewDidLoad() {
    if (this.navParams.get('title') != undefined) {
      this.title = this.navParams.get('title');
    }
  }

  preview(data) {
    console.log(data);
    this.navCtrl.push(PreviewPage, { 'data': data, 'id': data.id.videoId });
  }

}
