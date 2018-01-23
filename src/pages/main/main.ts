import { Component} from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import  {HomePage}  from '../home/home';
import { InAppBrowser } from '@ionic-native/in-app-browser';
/**
 * Generated class for the MainPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-main',
  templateUrl: 'main.html',
})
export class MainPage {
// userInfoHomePage:HomePage;
 catchMsg=HomePage;


  constructor(private navCtrl: NavController ,private iab: InAppBrowser) {
    // this.catchMsg=this.navParams.get('userInfo');

  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad MainPage');
  }


  goBrowser(){
    this.iab.create('https://ionicframework.com/');
    // browser.executeScript();
    // browser.insertCSS();
    // browser.close();
  }


  gotoRegisterPage(){
    this.navCtrl.push("RegisterPage");
  }
  gotoHomePage(){
    this.navCtrl.push(HomePage);
  }

}
