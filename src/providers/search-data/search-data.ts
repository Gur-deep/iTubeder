import { Injectable } from '@angular/core';
import { Jsonp } from '@angular/http';
@Injectable()
export class SearchDataProvider {
  result = []
  suggestions = [];
  constructor(public jsonp: Jsonp) {
    console.log('Hello SearchDataProvider Provider');
  }

  getItems(q) {
    return this.jsonp.request(`https://content.googleapis.com/youtube/v3/search?q=${q}&maxResults=25&part=snippet&key=AIzaSyC7JLg_Y-glecoBV77kLjGcBdymDa4BtOw&callback=JSONP_CALLBACK`);
  }

  getSuggestions(q) {
    var url = `http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=${q}&callback=JSONP_CALLBACK`;
    return this.jsonp.request(url);
  }
}
