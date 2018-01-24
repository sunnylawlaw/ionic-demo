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

  constructor( _navCtrl: NavController, public navParams: NavParams) {
    this._navCtrl = _navCtrl;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  back(){
    this._navCtrl.push(HomePage);
  }

  check(){
    console.log('username',this.username);
  if(this.password!=this.confirmPassword){
    alert('Please input same Password');
  }else if(
    this.username==undefined||
    this.password==undefined||
    this.confirmPassword==undefined||
    this.tel==undefined||
    this.email==undefined||
    this.address==undefined)
    {
    alert('Please Fill All');
  }else{
    this.createAC();
  }
}
  createAC(){
      console.log('ok');
      this._navCtrl.push("MainPage",{
        username:this.username,
        password:this.password,
        tel:this._tel,
        email:this._email,
        address:this._address
    });
  }

}
