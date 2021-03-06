import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { DataService } from '../../services/userinfo';
import { UserService} from '../../services/firebase/user.service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  private _navParams        : NavParams;
  private _callUserinfo     : DataService;
  private _navCtrl          : NavController;
  private _userService      : UserService;

  private _username         : string;
  private _password         : string;
  private _tel              : number;
  private _email            : string;
  private _address          : string;
  // private _store            : any;

  private _error_msg        = 'Wrong AC OR PW,Please Retry';

  check:boolean             = false;
  catch_register_data       : any;

  constructor(
    navCtrl                : NavController,
    navParams              : NavParams,
    callUserinfo           : DataService,
    userService             : UserService,
    ) {
    this._callUserinfo      = callUserinfo;
    this._navParams         = navParams;
    this._navCtrl           = navCtrl;
    this._userService       = userService;

  }

  ionViewWillEnter() {
    console.log('ionViewWillEnter home.ts');
    this._callUserinfo.getData();
  }


  Login(){
    this.check=this._callUserinfo.loginCheck(this._username,this._password)
    this._userService.loginFirebase()
    .subscribe(
      res => {
        let success: boolean = false;
        let index;
        // match userinput with DB
        for (let i=0; i<res.length; i++){
        if (this._username==res[i].username && this._password==res[i].password){
          success = true;
          index = i;
        }
      }
      // Login logic
      console.log('Firebase Login');
      if (success == true){
      this._navCtrl.push('MainPage', {
        name:     this._username,
        tel:      res[index].tel,
        email:    res[index].email,
        address:  res[index].address
      })
    } else if (this.check==true) {
      console.log('Local Cache login');
        console.log(this.check);
        let index=this._callUserinfo.getArrayIndex(this._username);

        this._navCtrl.push("MainPage",{
          name        :this._username,
          tel         :this._callUserinfo.getTel(index),
          email       :this._callUserinfo.getEmail(index),
          address     :this._callUserinfo.getAddress(index)
        });


    } else if (success == false  || this.check==false) {
      console.log(this.check);
      alert(this._error_msg);
    }
  }
)

  }

}
