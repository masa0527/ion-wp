import { Post } from './../../models/wordpress';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the WordpressProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class WordpressProvider {
  apiUrl =
    'https://public-api.wordpress.com/rest/v1.1/sites/ionicjp.wordpress.com/posts/';
  constructor(public http: HttpClient) {
    console.log('Hello WordpressProvider Provider');
  }

  getPosts() {
    return this.http.get<{ posts: Post[] }>(this.apiUrl);
  }

  getArticle(id: number) {
    return this.http.get<Post>(`${this.apiUrl}${id}`);
  }
}
