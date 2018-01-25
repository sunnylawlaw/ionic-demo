import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  private _navParams: NavParams;

  private _username: string;
  private _password: string;
  private _tel: number;
  private _email: string;
  private _address: string;

  private _error_msg = 'Wrong AC OR PW,Please Retry';


  catch_register_data: any;

  constructor(
    private _navCtrl: NavController,
    _navParams: NavParams) {
    this._navParams = _navParams;
    this._navCtrl = _navCtrl;
    this._tel = 81028332;
    this._email = 'alvin.sir@gt.com';
    this._address = 'Hong Kong';
  }

  ionViewWillEnter() {
    console.log('ionViewWillEnter');

    if (this._navParams.data.res_username != null) {
      this.catch_register_data = this._navParams.data;

      this._username = this._navParams.data.res_username;
      this._password = this._navParams.data.res_password;
      this._tel = this._navParams.data.res_tel;
      this._email = this._navParams.data.res_email;
      this._address = this._navParams.data.res_address;
      console.log('catch_register_data', this.catch_register_data);

    } else if (this._navParams.data.res_username == null) {
      console.log('not register data');

    }

  }

  Login() {
    if (this._username == undefined && this._password == undefined) {
      alert(this._error_msg);
      console.log("empty");
    }
    else if (this._username == "Alvin" && this._password == "123" ||
      this._username == this._navParams.data.res_username &&
      this._password == this._navParams.data.res_password
    ) {
      this._navCtrl.push("MainPage", {
        name:this._username,
        tel: this._tel,
        email: this._email,
        address: this._address
      });
    } else {
      alert(this._error_msg);
      console.log("fail");
    }

    //   this._navCtrl.push("MainPage",{
    //     tel:this._tel,
    //     email:this._email,
    //     address:this._address
    // });
  }

  // Register() {
  //   this._navCtrl.push("RegisterPage");
  // }
}
