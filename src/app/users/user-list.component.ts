import { Component, OnInit } from '@angular/core';
import {User} from "../user";
import {UserService} from "../user.service";

@Component({
  selector: 'user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: User[];
  selectedUser : User;
  constructor(private userService : UserService) { }

  ngOnInit() {
    this.users = this.userService.getUsers();
  }

  setSelectedUser(user :User){
    this.selectedUser = user;
  }

}
