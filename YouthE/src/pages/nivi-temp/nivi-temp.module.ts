import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NiviTempPage } from './nivi-temp';

@NgModule({
  declarations: [
    NiviTempPage,
  ],
  imports: [
    IonicPageModule.forChild(NiviTempPage),
  ],
  exports: [
    NiviTempPage
  ]
})
export class NiviTempPageModule {}
