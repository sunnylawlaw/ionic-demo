import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser';
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

  private _navCtrl: NavController;
  private _navParams: NavParams;
  private _iab: InAppBrowser;

  private _username:number;
  private _tel:number;
  private _email:string;
  private _address:string;

  catch_data: any;

  constructor(
    _navCtrl: NavController,
    _navParams: NavParams,
    _iab: InAppBrowser) {
    this._navParams = _navParams;
    this._navCtrl = _navCtrl;
    this._iab = _iab;


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MainPage');
  }

  ionViewWillEnter(){
    console.log('ionViewWillEnter');
     console.log(this._navParams.data);
    this.catch_data=this._navParams.data;
    this._tel=this.catch_data.tel;
    this._email=this.catch_data.email;
    this._address=this.catch_data.address;
    this._username=this.catch_data.name;
  }

  ionViewDidEnter(){
    console.log('ionViewDidEnter');

  }

  ionViewWillLeave(){
    console.log('ionViewWillLeave');
  }

  ionViewDidLeave(){
    console.log('ionViewDidLeave');
  }


  goBrowser() {
    const options: InAppBrowserOptions = {
      zoom: 'no'
    }
    const browser = this._iab.create('https://www.google.com/', '_blank', options);
    // this.iab.create('https://ionicframework.com/', '_self', {location: 'no'});
    // browser.executeScript();
    // browser.insertCSS();
    // browser.close();
  }


  gotoRegisterPage() {
    this._navCtrl.push("RegisterPage");
  }
  gotoHomePage() {
    this._navCtrl.push(HomePage);
  }



}
