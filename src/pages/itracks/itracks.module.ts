import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ItracksPage } from './itracks';

@NgModule({
  declarations: [
    ItracksPage,
  ],
  imports: [
    IonicPageModule.forChild(ItracksPage),
  ],
})
export class ItracksPageModule {}
