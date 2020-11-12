import { Component, OnInit } from '@angular/core';

import { UserService } from '../user/user.service';
import { UserModel } from '../user/user.model';

@Component({
  selector   : 'comics-header',
  templateUrl: './header.component.html',
  styleUrls  : ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  connectedUser: UserModel;

  constructor (
    private userService: UserService
  ) {
  }

  ngOnInit () {
    this.connectedUser = this.userService.connectedUser;
  }

}
