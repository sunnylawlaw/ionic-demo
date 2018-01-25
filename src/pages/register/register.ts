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

  private _navCtrl: NavController;

  formData = <any>{};


   book1 = new Array();
    book =[];

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
    console.log(this.formData);

    if (this.formData.password != this.formData.confirmPassword) {
      alert('Please input same Password');
    } else {
      this.createAC();
    }
  }

  pusharray(){

      var newRecord={
        "username" : this.formData.username,
         "password" : this.formData.password,
         "tel" : this.formData.tel,
         "email" : this.formData.email,
         "address" : this.formData.address
      };


      // this.book.push(newRecord);
      console.log('this.formData.username',this.formData.username);

console.log(this.book.length);

  this.book.push(newRecord);
      // console.log(this.book.username[1]);

      for(let i=0;i<this.book.length;i++){
        if(this.formData.username==this.book[i].username){
          // alert('use another nusernameame');
          // break;

        }else{

          console.log('added new' ,this.book);
        }
      }

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
