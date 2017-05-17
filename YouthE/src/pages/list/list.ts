import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Project } from '../project/project';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class Projects {
  // selectedItem: any;
  active: Array<{title: string}>;
  allProjects: Array<{title:string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // If we navigated to this page, we will have an item available as a nav param
    // this.selectedItem = navParams.get('active');

    this.active = [];
    this.allProjects = [];
    for (let i = 1; i < 3; i++) {
      this.active.push({
        title: 'Project ' + i
      });
    }

    for(let i=1;i<5;i++){
      this.allProjects.push({
        title: 'Project ' + i
      });
    }
  }

  itemTapped(event, item) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(Project, {
      active: item.title
    });
  }
}
