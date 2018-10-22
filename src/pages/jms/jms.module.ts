import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { JmsPage } from './jms';

@NgModule({
  declarations: [
    JmsPage,
  ],
  imports: [
    IonicPageModule.forChild(JmsPage),
  ],
})
export class JmsPageModule {}
