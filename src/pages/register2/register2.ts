import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import {User} from '../../models/user/user.model';
import {UserService} from '../../services/firebase/user.service';

import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-register2',
  templateUrl: 'register2.html',
})
export class Register2Page {

  // user: User = {
  //   username: undefined,
  //   password: undefined,
  //   tel: undefined,
  //   email: undefined,
  //   address: undefined,
  // }

  formData = <any>{};

  constructor(
    private navCtrl: NavController,
    private navParams: NavParams,
    public userinfo: UserService) {
  }

  registerUser(user: User){
    this.userinfo.addUser(this.formData).then(ref => {
      this.navCtrl.setRoot(HomePage, {key: ref.key});
    });
  }

  back(){
    this.navCtrl.pop();
  }

}
