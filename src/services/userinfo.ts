import { Injectable } from '@angular/core';

@Injectable()
export class DataService {

  private _userlist = [{
    "username"      : 'Alvin',
    "password"      : 123,
    "tel"           : 123123,
    "email"         : 'Alvin email',
    "address"       : 'Alvin address'
  }];
  constructor() {

  }

  getData() {
    for (let i = 0; i < this._userlist.length; i++) {
      console.log('Array', [i], this._userlist[i]);
        }
    }

    getEmail(index){
      return this._userlist[index].email;
    }

    getTel(index){
    return this._userlist[index].tel;
    }

    getAddress(index){
    return this._userlist[index].address;
    }

    getArrayIndex(username){
    let ArrayIndex;
   for(let i = 0; i < this._userlist.length; i++){
        if(username==this._userlist[i].username ){
              ArrayIndex=[i];
          }
      }
    return ArrayIndex;
    }

    loginCheck(username,password){
    let count =0;
    for(let i = 0; i < this._userlist.length; i++){
        if(username==this._userlist[i].username && password==this._userlist[i].password){
                count++;
        }
    }

    if(count!=0){
        return true;
        }else{
        return false;
        }
    }

  addData(res_username, res_password, res_tel, res_email, res_address) {
    var newRecord = {
      "username"    : res_username,
      "password"    : res_password,
      "tel"         : res_tel,
      "email"       : res_email,
      "address"     : res_address
    };

    let count = 0;
    for (let i = 0; i < this._userlist.length; i++) {
      if (res_username == this._userlist[i].username) {
        count++;
        console.log('find same username in loop', i);
      }
    }

    if (count == 0) {
      this._userlist.push(newRecord);
      console.log('added new', this._userlist);
    } else {
      alert('Use another username');
    }

  }

}
