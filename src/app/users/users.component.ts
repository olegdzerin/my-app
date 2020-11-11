import { Component, OnInit, ɵConsole } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router'
import { from } from 'rxjs';
import {USERS} from '../mock-users'

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
   users = USERS;
  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
  //   console.log(this.users)
  }

}
