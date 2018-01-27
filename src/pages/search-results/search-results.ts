import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';
import { SearchDataProvider } from '../../providers/search-data/search-data';

@Component({
  selector: 'page-search-results',
  templateUrl: 'search-results.html',
})
export class SearchResultsPage {
  title: any;
  constructor(public navParams: NavParams, public search: SearchDataProvider) {

  }
  ionViewDidLoad() {
    if (this.navParams.get('title') != undefined) {
      this.title = this.navParams.get('title');
    }
  }
}
