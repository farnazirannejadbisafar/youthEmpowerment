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
filters: any;
screenLandscape: Boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams, private screenOrientation: ScreenOrientation) {
    this.activeProject = navParams.get('active');
    this.filters = [1,2,3,4,5];
    this.screenLandscape = false;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FilteredDandelionsPage');
    this.changeOrientation();

  }

  changeOrientation(){

    if(this.screenLandscape){
      this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
    }
    else
    {
      this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.LANDSCAPE);
    }

    this.screenLandscape = !this.screenLandscape;
  }

  ionViewWillLeave(){
    this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
  }


}
