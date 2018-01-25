import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-register-method',
  templateUrl: 'register-method.html',
})
export class RegisterMethodPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  back(){
    this.navCtrl.pop();
  }


}
