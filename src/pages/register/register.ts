import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
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
  private username: string;
  private password: string;
  private confirmPassword: string;
  private tel: number;
  private email: string;
  private address: string;

  private _navCtrl: NavController;

  constructor(_navCtrl: NavController, public navParams: NavParams) {
    this._navCtrl = _navCtrl;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  back() {
    this._navCtrl.pop();
  }

  check() {
    if (this.password != this.confirmPassword) {
      alert('Please input same Password');
    } else if (
      this.username == undefined ||
      this.password == undefined ||
      this.confirmPassword == undefined ||
      this.tel == undefined ||
      this.email == undefined ||
      this.address == undefined) {
      alert('Please Fill All');
    } else {
      this.createAC();
    }
  }
  createAC() {
    console.log('ok');
    console.log(this.username);
    console.log(this.password);
    console.log(this.tel);
    console.log(this.email);
    console.log(this.address);
    this._navCtrl.push(HomePage, {
      res_username: this.username,
      res_password: this.password,
      res_tel: this.tel,
      res_email: this.email,
      res_address: this.address
    });
  }

}
