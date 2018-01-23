import { Component ,OnInit} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
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
catchMsg:any;

  constructor(private navCtrl: NavController, private navParams: NavParams) {
    // this.catchMsg=this.navParams.get('userInfo');
    this.catchMsg=new HomePage;
      console.log(this.catchMsg.tel+'aa');
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

}
