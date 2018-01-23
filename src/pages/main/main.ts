import { Component} from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import  {HomePage}  from '../home/home';
/**
 * Generated class for the MainPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-main',
  templateUrl: 'main.html',
})
export class MainPage {
// userInfoHomePage:HomePage;
catchMsg:HomePage;

  constructor(private navCtrl: NavController) {
    // this.catchMsg=this.navParams.get('userInfo');
    this.catchMsg=new HomePage;

  }
  ngOnInit(){

    // console.log(this.userInfoHomePage.tel;);

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MainPage');
  }

  gotoRegisterPage(){
    this.navCtrl.push("RegisterPage");
  }
  gotoHomePage(){
    this.navCtrl.push("HomePage");
  }

}
