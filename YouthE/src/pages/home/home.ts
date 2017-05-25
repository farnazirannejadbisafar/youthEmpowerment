import { Component } from '@angular/core';
import { NavController, MenuController, ModalController } from 'ionic-angular';
import { CreateModal } from '../create-modal/create-modal';
import { Project } from '../project/project';
import { DataServiceProvider } from '../../providers/data-service/data-service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  defaultSocialMedia: any;
  social: Array<any>;
  overlayHidden: boolean = true;
  myData: any;


  constructor(public navCtrl: NavController,public menuCtrl: MenuController,public modalCtrl: ModalController, data: DataServiceProvider) {
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

    data.getMyData()
      .then(res => {
        alert("MyData is "+res.msg);
      });


  }

  showModalScreen(){
    let profileModal = this.modalCtrl.create(CreateModal);
    profileModal.present();
  }

  showStars() {
    this.overlayHidden = false;
    setTimeout(()=>{
      this.overlayHidden = true;
    }, 2000)
  }

  hideStars(){
    this.overlayHidden = true;
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
