import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FilteredDandelionsPage } from './filtered-dandelions';

@NgModule({
  declarations: [
    FilteredDandelionsPage,
  ],
  imports: [
    IonicPageModule.forChild(FilteredDandelionsPage),
  ],
  exports: [
    FilteredDandelionsPage
  ]
})
export class FilteredDandelionsPageModule {}
