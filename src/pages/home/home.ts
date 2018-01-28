import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SearchDataProvider } from '../../providers/search-data/search-data';
import { SearchResultsPage } from '../search-results/search-results';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  constructor(public navCtrl: NavController, public search: SearchDataProvider) { }
  loaded: boolean = false;
  ionViewDidLoad() {
    this.getTranding();
  }

  getSearchSuggestions(q) {
    this.search.suggestions = [];
    if (q) {
      this.search.getSuggestions(q).subscribe(snap => {
        for (let key in snap.json()[1]) {
          this.search.suggestions.push(snap.json()[1][key]);
        }
      });
    }
  }

  getVideos(q) {
    if (q) {
      this.search.getItems(q).subscribe(snap => {
        this.navCtrl.push(SearchResultsPage, { 'title': q });
        this.search.result = snap.json().items;
      })
    }
  }

  getTranding() {
    this.search.trands = [];
    this.search.getTrands().subscribe(snap => {
      for (let key in snap.json().items) {
        this.search.getSingleVideo(snap.json().items[key].id); //getting single video and then adding into list
      }
      console.log(this.search.trands);
      this.loaded = true;
    })
  }
}
