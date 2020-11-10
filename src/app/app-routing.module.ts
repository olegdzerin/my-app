import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { from } from 'rxjs';
import { HomeComponent } from './home/home.component';
import {UsersComponent} from './users/users.component';
import {ProductsComponent} from './products/products.component';
import {UserComponent} from './user/user.component';
import {ProductComponent} from './product/product.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component'
const routes: Routes = [
  
  {path: 'home', component: HomeComponent},
  {path: 'users', component: UsersComponent},
  {path: 'products',component: ProductsComponent},
  {path: '', redirectTo:'home', pathMatch: 'full' },
  {path: 'user/:id', component: UserComponent},
  {path: 'product/:id',component: ProductComponent},
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
