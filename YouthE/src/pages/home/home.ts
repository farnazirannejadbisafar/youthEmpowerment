import { Component } from '@angular/core';
import { NavController, MenuController, ModalController } from 'ionic-angular';
import { CreateModal } from '../create-modal/create-modal';
import { Project } from '../project/project';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  defaultSocialMedia: any;
  social: Array<any>;

  constructor(public navCtrl: NavController,public menuCtrl: MenuController,public modalCtrl: ModalController,) {
    this.menuCtrl.enable(true, 'myMenu');
    this.defaultSocialMedia = {"name":"Twitter","logo":"logo-twitter"};
    this.social = [
      {
        "name":"Twitter",
        "logo":"logo-twitter"
      },
      {
        "name":"Facebook",
        "logo":"logo-facebook"
      }

    ];
  }

  createPost(){
    console.log("inside createPost");
    let createModal = this.modalCtrl.create(CreateModal);
    createModal.present();
  }

  gotoProject(){
    console.log("inside gotoProject");
    this.navCtrl.push(Project,{active: 'Project 1'});
  }

  changeSocialMedia(socialMedia){
    this.defaultSocialMedia = socialMedia;
  }

}
