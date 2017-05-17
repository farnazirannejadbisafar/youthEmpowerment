import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ScreenOrientation } from '@ionic-native/screen-orientation';
import { FilteredDandelionsPage } from '../filtered-dandelions/filtered-dandelions';

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
  activeProject: string;
  projectList: Array<string>;
  constructor(public navCtrl: NavController, public navParams: NavParams, private screenOrientation: ScreenOrientation) {

    this.activeProject = navParams.get('active');
    this.projectList = ['Project 1','Project 2','Project 3','Project 4'];
  }

  ionViewDidLoad() {

  }

  changeOrientationLandspace(){
    this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.LANDSCAPE);
  }

  projectSelected(project){
    this.activeProject = project;
  }

  goToFilteredDandelions(){
    this.navCtrl.push(FilteredDandelionsPage,{active: this.activeProject});
  }

}
