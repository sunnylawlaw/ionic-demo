import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { DataService } from '../../services/userinfo';
/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  private _navCtrl      : NavController;
  private _callUserinfo : DataService;
  private _navParams    : NavParams

  formData = <any>{};

  constructor(
    _navCtrl            : NavController,
    _navParams          : NavParams,
    _callUserinfo       : DataService
   ) {
    this._navCtrl       = _navCtrl;
    this._callUserinfo  = _callUserinfo;
    this._navParams     = _navParams;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  back() {
    this._navCtrl.pop();
  }


  check() {
    console.log(this.formData);
    if (this.formData.password != this.formData.confirmPassword) {
      alert('Please input same Password');
    } else {
      this.createAC();
    }
  }

  pusharray() {
          this._callUserinfo.addData(
          this.formData.username,
          this.formData.password,
          this.formData.tel,
          this.formData.email,
          this.formData.address
      );
  }


  createAC() {
    console.log('success');
    this._callUserinfo.addData
    (
    this.formData.username,
    this.formData.password,
    this.formData.tel,
    this.formData.email,
    this.formData.address
    );
    this._navCtrl.push(HomePage);
  }

}
