import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
name;
  constructor(
    private route: ActivatedRoute
  //  private paramMap: ParamMap
  ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      console.log(params);
      this.name = params['name'];
      console.log(this.name);
    });
    this.route.paramMap.subscribe(result => {
      console.log(result.get('id'), result.keys)
    })
  }

}
