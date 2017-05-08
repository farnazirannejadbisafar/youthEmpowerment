import { Component } from '@angular/core';
import { NavController, MenuController, ModalController } from 'ionic-angular';
import { CreateModal } from '../create-modal/create-modal';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,public menuCtrl: MenuController,public modalCtrl: ModalController,) {
    this.menuCtrl.enable(true, 'myMenu');
  }

  createPost(){
    console.log("inside createPost");
    let createModal = this.modalCtrl.create(CreateModal);
    createModal.present();
  }

}
