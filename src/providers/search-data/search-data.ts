import { Injectable } from '@angular/core';
import { Jsonp } from '@angular/http';
@Injectable()
export class SearchDataProvider {
  key: string = 'AIzaSyC7JLg_Y-glecoBV77kLjGcBdymDa4BtOw';
  result = []; //storing results after search 
  suggestions = []; //storing search suggestions
  trands = [] //storing trandings
  constructor(public jsonp: Jsonp) {
  }

  getItems(q) {
    return this.jsonp.request(`https://content.googleapis.com/youtube/v3/search?q=${q}&maxResults=25&part=snippet&key=${this.key}&callback=JSONP_CALLBACK`);
  }

  getSuggestions(q) {
    var url = `http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=${q}&callback=JSONP_CALLBACK`;
    return this.jsonp.request(url);
  }

  getTrands() {
    var url = `https://www.googleapis.com/youtube/v3/videos?part=contentDetails&chart=mostPopular&regionCode=IN&maxResults=50&key=${this.key}&callback=JSONP_CALLBACK`;
    return this.jsonp.request(url);
  }
  getSingleVideo(id) {
    var url = `https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${id}&key=${this.key}&callback=JSONP_CALLBACK`;
    this.jsonp.request(url).subscribe(snap => {
      this.trands.push(snap.json().items[0]);
    });
  }
}
