import { Component } from '@angular/core';
import { IonicPage, NavController, LoadingController } from 'ionic-angular';
import { WordpressProvider } from '../../providers/wordpress/wordpress';
import { Post } from './../../models/wordpress';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [WordpressProvider]
})
export class HomePage {
  posts: Post[] = [];
  constructor(
    public navCtrl: NavController,
    public loadingCtrl: LoadingController,
    public wp: WordpressProvider
  ) {}

  ionViewDidLoad() {
    const loading = this.loadingCtrl.create();
    loading.present();
    this.wp.getPosts().subscribe(data => {
      this.posts = data.posts;
      loading.dismiss();
    });
  }
}
