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

  private _navCtrl: NavController;

  formData = <any>{};


  // book1 = new Array();
  // book =[];
  book = DataService;

  constructor(_navCtrl: NavController,
       public   navParams: NavParams,
       public   callUserinfo: DataService
   ) {
    this._navCtrl = _navCtrl;
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
      this.callUserinfo.addData(
          this.formData.username,
          this.formData.password,
          this.formData.tel,
          this.formData.email,
          this.formData.address
      );
  }


  createAC() {
    console.log('success');

    // this._navCtrl.push(HomePage, {
    //   res_username: this.formData.username,
    //   res_password: this.formData.password,
    //   res_tel: this.formData.tel,
    //   res_email: this.formData.email,
    //   res_address: this.formData.address
    // });
  }

}
