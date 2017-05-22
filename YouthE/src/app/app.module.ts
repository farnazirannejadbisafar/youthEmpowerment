import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { ChartModule } from 'angular2-highcharts';

import { MyApp } from './app.component';
import { LoginPage } from '../pages/login/login'
import { HomePage } from '../pages/home/home';
import { Projects } from '../pages/list/list';
import { CreateModal } from '../pages/create-modal/create-modal';
import { Project } from '../pages/project/project';
import { FilteredDandelionsPage } from '../pages/filtered-dandelions/filtered-dandelions';
import { DashboardPage } from '../pages/dashboard/dashboard';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { ScreenOrientation } from '@ionic-native/screen-orientation';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    CreateModal,
    Projects,
    Project,
    FilteredDandelionsPage,
    DashboardPage,

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    ChartModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    CreateModal,
    Projects,
    Project,
    FilteredDandelionsPage,
    DashboardPage,

  ],
  providers: [
    StatusBar,
    SplashScreen,
    ScreenOrientation,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
