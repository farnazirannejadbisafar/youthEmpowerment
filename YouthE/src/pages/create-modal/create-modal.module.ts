import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CreateModal } from './create-modal';

@NgModule({
  declarations: [
    CreateModal,
  ],
  imports: [
    IonicPageModule.forChild(CreateModal),
  ],
  exports: [
    CreateModal
  ]
})
export class CreateModalModule {}
