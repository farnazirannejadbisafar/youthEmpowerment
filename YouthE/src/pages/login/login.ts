/**
 * Created by Nivi on 07/05/17.
 */

import { Component } from "@angular/core";
import { NavController, MenuController } from 'ionic-angular';
import { HomePage } from "../home/home";

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})

export class LoginPage {

  constructor(public menuCtrl: MenuController,public navCtrl: NavController){
    this.menuCtrl.enable(false, 'myMenu');
  }

  logIn(){
    this.navCtrl.setRoot(HomePage);
  }
}
