import { Injectable } from '@angular/core';
import { Jsonp } from '@angular/http';
import { _KEY } from '../../model/config';

@Injectable()
export class SearchDataProvider {
  result = []; //storing results after search 
  suggestions = []; //storing search suggestions
  trands = [] //storing trandings
  constructor(public jsonp: Jsonp) {
  }

  getItems(q) {
    return this.jsonp.request(`https://content.googleapis.com/youtube/v3/search?q=${q}&maxResults=25&part=snippet&key=${_KEY}&callback=JSONP_CALLBACK`);
  }

  getSuggestions(q) {
    var url = `http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=${q}&callback=JSONP_CALLBACK`;
    return this.jsonp.request(url);
  }

  getTrands() {
    var url = `https://www.googleapis.com/youtube/v3/videos?part=contentDetails&chart=mostPopular&regionCode=IN&maxResults=50&key=${_KEY}&callback=JSONP_CALLBACK`;
    return this.jsonp.request(url);
  }

  getSingleVideo(id) {
    var url = `https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${id}&key=${_KEY}&callback=JSONP_CALLBACK`;
    this.jsonp.request(url).subscribe(snap => {
      this.trands.push(snap.json().items[0]);
    });
  }
}
