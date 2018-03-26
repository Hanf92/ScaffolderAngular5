import { NgModule } from '@angular/core';
import {CommonModule} from "@angular/common";
import {UsersComponent} from "./components/usersComponent/users.component";
import {RouterModule, Routes} from "@angular/router";
import {SpinnerLoadingComponent} from "./components/spinnerLoadingComponent/spinnerLoading.component";
import {CardComponent} from "./components/CardComponent/Card.component";
import {UserService} from "./providers/user.service";

export const ROUTES: Routes = [
    { path: '', component: UsersComponent }
];


@NgModule({
declarations: [UsersComponent,CardComponent,SpinnerLoadingComponent],
imports: [RouterModule.forChild(ROUTES),CommonModule],
providers: [UserService]
})

export class ConfigureModule { }