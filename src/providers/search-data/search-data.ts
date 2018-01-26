import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
@Injectable()
export class SearchDataProvider {
  rootPath:string = 'https://content.googleapis.com/youtube/v3/search?q=';
  constructor(public http: Http) {
    console.log('Hello SearchDataProvider Provider');
  }
  getItems(q) {
    return this.http.get(this.rootPath + q + '&maxResults=50&part=snippet&key=AIzaSyC7JLg_Y-glecoBV77kLjGcBdymDa4BtOw');
  }
}
