import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BnwPage } from '../bnw/bnw';
import { IronmaidenPage } from '../ironmaiden/ironmaiden';
import { ItracksPage } from '../itracks/itracks';
import { BnwresPage } from '../bnwres/bnwres';
import { HtPage } from '../ht/ht';
import { CcPage } from '../cc/cc';
import { HttracksPage } from '../httracks/httracks';
import { HtreviewPage } from '../htreview/htreview';
import { AaPage } from '../aa/aa';
import { JmsPage } from '../jms/jms';
import { JmsreviewPage } from '../jmsreview/jmsreview';
import { JmstracksPage } from '../jmstracks/jmstracks';
import { MPage } from '../m/m';
import { RtlPage } from '../rtl/rtl';
import { ReviewPage } from '../review/review';
import { RtltracksPage } from '../rtltracks/rtltracks';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

Bnw = BnwPage;
Im = IronmaidenPage;
It = ItracksPage;
imres = BnwresPage;

ht = HtPage;
cc = CcPage;
htr = HttracksPage;
hrev= HtreviewPage;

AmonA = AaPage;
J = JmsPage;
jrev = JmsreviewPage;
jtracks = JmstracksPage;

Met = MPage;
Ride = RtlPage;
RideR = ReviewPage;
RideT = RtltracksPage;

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

  Ht()
  {
    this.navCtrl.push(this.ht);
  }
  ChCo()
  {
    this.navCtrl.push(this.cc);
  }
  HHtrev()
  {
    this.navCtrl.push(this.hrev);
  }
  Htracks()
  {
    this.navCtrl.push(this.htr);
  }

  t()
  {
    this.navCtrl.push(this.ht);
  }

  joms()
  {
    this.navCtrl.push(this.J)
  }
  Amon()
  {
    this.navCtrl.push(this.AmonA)
  }
  Jreview()
  {
    this.navCtrl.push(this.jrev)
  }
  Jtracks()
  {
    this.navCtrl.push(this.jtracks);
  }

  rtl()
  {
    this.navCtrl.push(this.Ride);

  }
  m()
  {
    this.navCtrl.push(this.Met);

  }
  review()
  {

    this.navCtrl.push(this.RideR);
  }
  Rtrackkss()
  {
    this.navCtrl.push(this.RideT);
  }
}
