import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ScreenOrientation } from '@ionic-native/screen-orientation';


/**
 * Generated class for the FilteredDandelionsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-filtered-dandelions',
  templateUrl: 'filtered-dandelions.html',
})
export class FilteredDandelionsPage {
activeProject: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private screenOrientation: ScreenOrientation) {
    this.activeProject = navParams.get('active');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FilteredDandelionsPage');
    this.changeOrientationLandspace();
  }

  changeOrientationLandspace(){
    this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.LANDSCAPE);
  }

}
