import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { DataService } from '../../services/userinfo';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  private _navParams        : NavParams;
  private _callUserinfo     : DataService;
  private _navCtrl          : NavController;

  private _username         : string;
  private _password         : string;
  private _tel              : number;
  private _email            : string;
  private _address          : string;

  private _error_msg        = 'Wrong AC OR PW,Please Retry';

  check:boolean             = false;
  catch_register_data       : any;

  constructor(
    navCtrl                : NavController,
    navParams              : NavParams,
    callUserinfo           : DataService
    ) {
    this._callUserinfo      = callUserinfo;
    this._navParams         = navParams;
    this._navCtrl           = navCtrl;

  }

  ionViewWillEnter() {
    console.log('ionViewWillEnter home.ts');
    this._callUserinfo.getData();
  }


  Login(){

      this.check=this._callUserinfo.loginCheck(this._username,this._password)

      if(this.check==true){
          console.log(this.check);
          let index=this._callUserinfo.getArrayIndex(this._username);

            this._navCtrl.push("MainPage",{
                name        :this._username,
                tel         :this._callUserinfo.getTel(index),
                email       :this._callUserinfo.getEmail(index),
                address     :this._callUserinfo.getAddress(index)
          });

      }else{
          console.log(this.check);
          alert(this._error_msg);
      }
  }

    Register() {
      this._navCtrl.push("RegisterPage");
    }
  }
