import { Component, OnInit } from '@angular/core';
import { UserModel } from '../model/user.model';

@Component({
  selector: 'comics-header',
  templateUrl: './header.component.html',
  styleUrls: [ './header.component.scss' ]
})
export class HeaderComponent implements OnInit {
  public connectedUser: UserModel;

  ngOnInit() {
    this.connectedUser = new UserModel();
    this.connectedUser.firstName = 'Yutaka';
    this.connectedUser.lastName = 'Kanzaki';
  }

}
