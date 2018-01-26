import { Component, Input } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SearchDataProvider } from '../../providers/search-data/search-data';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  searchData: string = '';
  listData: any;

  constructor(public navCtrl: NavController, public search: SearchDataProvider) { }

  getSearchData(search) {
    if (search != null || search != undefined) {
      this.search.getItems(search).subscribe(snap => {
        this.listData = snap.json().items;
      });
    }
  }
}
