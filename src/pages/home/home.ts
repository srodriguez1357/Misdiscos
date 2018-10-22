import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BnwPage } from '../bnw/bnw';
import { IronmaidenPage } from '../ironmaiden/ironmaiden';
import { ItracksPage } from '../itracks/itracks';
import { BnwresPage } from '../bnwres/bnwres';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

Bnw = BnwPage;
Im = IronmaidenPage;
It = ItracksPage;
imres = BnwresPage;
  constructor(public navCtrl: NavController) {

  }
  bnw()
  {
    this.navCtrl.push(this.Bnw);
  }
  im()
  {
    this.navCtrl.push(this.Im);
  }
  bnwt()
  {
    this.navCtrl.push(this.It);
  }
  bnwres()
  {
    this.navCtrl.push(this.imres);
  }
}
