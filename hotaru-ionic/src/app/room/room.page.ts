import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import * as firebase from 'firebase';

@Component({
  selector: 'app-room',
  templateUrl: './room.page.html',
  styleUrls: ['./room.page.scss'],
})
export class RoomPage implements OnInit {

  constructor(public navCtrl: NavController) { }

  ngOnInit() {
    // ユーザ認証してなければサインインページへ
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.navCtrl.navigateRoot('main');
      } else {
        this.navCtrl.navigateRoot('signin');
      }
    });
  }

  async signOut() {
    try {
      await firebase.auth().signOut();
      this.navCtrl.navigateRoot('signin');

    } catch (error) { }
  }
}