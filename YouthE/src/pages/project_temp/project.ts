import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ScreenOrientation } from '@ionic-native/screen-orientation';

/**
 * Generated class for the Project page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-project',
  templateUrl: 'project.html',
})
export class Project {
  testSlides: string[] = [];
  activeProject: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, private screenOrientation: ScreenOrientation) {

    this.activeProject = navParams.get('active');
  }

  ionViewDidLoad() {
    alert(this.activeProject);
  }

  changeOrientationLandspace(){
    this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.LANDSCAPE);
  }

}
