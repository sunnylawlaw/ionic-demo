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

  formData: FormData = {
      username : null,
      password : null,
      confirmPassword : null,
      tel : null,
      email : null,
      address : null,
  };

  constructor(
    navCtrl            : NavController,
    navParams          : NavParams,
    callUserinfo       : DataService
   ) {
    this._navCtrl       = navCtrl;
    this._callUserinfo  = callUserinfo;
    this._navParams     = navParams;
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

interface FormData {
    username        : string;
    password        : number;
    confirmPassword :number;
    tel             : number;
    email           : string;
    address         : string;
}
