import { Component, Input } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
 
  public appPages = [
    {
      title: 'Introduction',
      url: '/introduction',
      icon: 'list'
    },
    {
      title: '1) Template Strings',
      url: '/home',
      icon: 'paper'
    },
    {
      title: '2) Let & Constants',
      url: '/lesson3',
      icon: 'paper'
    },
    {
      title: '3) for...of',
      url: '/lesson4',
      icon: 'paper'
    },
    {
      title: '4) Arrow functions ',
      url: '/lesson5',
      icon: 'paper'
    },
    {
      title: '5) Rest parameter',
      url: '/lesson6',
      icon: 'paper'
    },
    {
      title: '6) Default parameters',
      url: '/lesson7',
      icon: 'paper'
    },
    {
      title: '7) Spread operator',
      url: '/lesson8',
      icon: 'paper'
    },
    {
      title: '8) Destructuring',
      url: '/lesson8',
      icon: 'paper'
    },
    {
      title: '9) Promise',
      url: '/lesson9',
      icon: 'paper'
    },
    {
      title: '10) Modules',
      url: '/lesson10',
      icon: 'paper'
    },
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
