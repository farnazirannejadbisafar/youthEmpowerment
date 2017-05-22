import { Component } from '@angular/core';
import { NavController, MenuController, ModalController } from 'ionic-angular';
import { CreateModal } from '../create-modal/create-modal';
import { Project } from '../project/project';
import { ToastController } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  defaultSocialMedia: any;
  social: Array<any>;
  overlayHidden: boolean = true;


  constructor(public navCtrl: NavController,public menuCtrl: MenuController,public modalCtrl: ModalController,public toastCtrl: ToastController,private splashScreen: SplashScreen) {
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

  // showToast(){
  //   console.log("inside showToast");
  //   let toast = this.toastCtrl.create({
  //     message: 'Hurraahh!!',
  //     duration: 2000,
  //     cssClass :'toastClass'
  //   });
  //   toast.present();
  // }


  showSplashScreen(){
    this.splashScreen.show();
    this.splashScreen.hide();
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
