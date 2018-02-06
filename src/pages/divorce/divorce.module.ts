import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DivorcePage } from './divorce';

@NgModule({
  declarations: [
    DivorcePage,
  ],
  imports: [
    IonicPageModule.forChild(DivorcePage),
  ],
})
export class DivorcePageModule {}
