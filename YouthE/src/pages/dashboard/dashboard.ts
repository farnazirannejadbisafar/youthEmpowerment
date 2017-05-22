import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DashboardPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html',
})
export class DashboardPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    // this.options = {
    //   title : { text : 'simple chart' },
    //   series: [{
    //     data: [29.9, 71.5, 106.4, 129.2],
    //   }]
    // };
  }

  // options: HighchartsOptions;

  ionViewDidLoad() {
    console.log('ionViewDidLoad DashboardPage');
  }

}
