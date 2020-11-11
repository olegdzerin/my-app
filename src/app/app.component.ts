import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'my-app';
  id = 4;
  selection = {
    value: 'default'
  }
  // selection = {
  //   value: 'material'
  // }
  
  constructor(){}
  ngOnInit(){
    this.selection.value = 'material'
   console.log(this.selection.value)
  }

}
