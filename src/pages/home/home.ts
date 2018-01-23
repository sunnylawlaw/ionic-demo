import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  private username: string;
  private password: string;
  // private tel: number;
  // private email: string;
  // private address: string;

   tel: number=999;
   email: string='sunny.law@gt.com';
   address: string='hong kong';


  constructor(private navCtrl: NavController) {
    this.tel=888;
    // this.email='sunny.law@gt.com';
    // this.address='hong kong';
  }

  Login(){
    if (this.username=="Alvin" && this.password=="123"){
      this.navCtrl.push("MainPage");
    } else {
      console.log("fial");
    }

  //   this.navCtrl.push("MainPage",{
  //     userInfo:HomePage
  // });
}

  Register(){
    // this.navCtrl.push("RegisterPage");

}
}
