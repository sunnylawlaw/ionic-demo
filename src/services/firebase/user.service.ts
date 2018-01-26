import {Injectable} from '@angular/core';
import {AngularFireDatabase} from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

import {User} from './../../models/user/user.model';


@Injectable()
export class UserService {

  private userRef = this.db.list<User>('user');

  constructor(private db: AngularFireDatabase){
  }

  getUser(){
    return this.userRef;
  }

  addUser(user:User){
    return this.userRef.push(user);
  }

  loginFirebase(){
    return this.getUser()
    .snapshotChanges()
    .map(
      changes => {
        return changes.map((c => ({
          id: c.payload.key,
          ...c.payload.val()
        })));
      });
  }



}
