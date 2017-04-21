import { Injectable } from '@angular/core';
import {User} from "./user";

@Injectable()
export class UserService {

  constructor() { }

  getUsers(){
    return[
        new User(1,'Katy','Pacheco'),
        new User(2,'Louisa','Underwood'),
        new User(3,'Mallory','Goff'),
    ]
  }

}
