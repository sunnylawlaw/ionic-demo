import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  private username: string;
  private password: string;

  constructor(private navCtrl: NavController) {
  }

  Login(){
    if (this.username=="Alvin" && this.password=="Fuck123!"){
      this.navCtrl.push("MainPage");
    } else {
      console.log("Fuck you");
    }
  }

  Register(){
    this.navCtrl.push("RegisterPage");
  }
}
