import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import {NavigationExtras} from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  // goToItems() {
  //   this.router.navigate(['items'], { relativeTo: this.route });
 // }
  constructor() { }

  ngOnInit(): void {
   
  }

}
