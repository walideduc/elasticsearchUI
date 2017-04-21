import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UserListComponent} from "./users/user-list.component";
import {ClientListComponent} from "./clients/client-list.component";
import {UserComponent} from "./users/user.component";

const routes: Routes = [
  {path:'',pathMatch:'full',redirectTo:''},
  {path:'users',component:UserListComponent},
  {path:'users/:id',component:UserListComponent},
  {path:'clients',component:ClientListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routableComponents = [
    UserListComponent,
    UserComponent,
    ClientListComponent,
];
