import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
Bnw = bnwPage;

  constructor(public navCtrl: NavController) {

  }
  bnw()
  {
    this.navCtrl.push(this.Bnw);
  }
}
