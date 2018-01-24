import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  private _username: string;
  private _password: string;
  // private tel: number;
  // private email: string;
  // private address: string;

   private _tel: number=9991;
   private _email: string='sunny.law@gt.com';
   private _address: string='hong kong';

   private _error_msg='Wrong AC OR PW,Please Retry' ;
//

  constructor(private _navCtrl: NavController) {

  }

  Login(){
    if (this.username=="Alvin" && this.password=="123"){
      this._navCtrl.push("MainPage",{
        tel:this._tel,email:this._email,address:this._address
    });
    } else {
      alert(this._error_msg);
      console.log("fial");
    }

  //   this._navCtrl.push("MainPage",{
  //     tel:this._tel,
  //     email:this._email,
  //     address:this._address
  // });
}

  Register(){
     this._navCtrl.push("RegisterPage");

}
}
