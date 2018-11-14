import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CardpagePage } from './cardpage';

@NgModule({
  declarations: [
    CardpagePage,
  ],
  imports: [
    IonicPageModule.forChild(CardpagePage),
  ],
})
export class CardpagePageModule {}
