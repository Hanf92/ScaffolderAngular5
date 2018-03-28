import { NgModule } from '@angular/core';
import {CommonModule} from "@angular/common";
import {UsersComponent} from "./components/usersComponent/users.component";
import {RouterModule, Routes} from "@angular/router";
import {CardComponent} from "./components/cardComponent/card.component";
import {UserService} from "./providers/user.service";
import {SharedModule} from "../sharedModule/sharedModule";


export const ROUTES: Routes = [
    { path: '', component: UsersComponent }
];

@NgModule({
    declarations: [UsersComponent,CardComponent],
    imports: [RouterModule.forChild(ROUTES),SharedModule,CommonModule],
    providers: [UserService]
})

export class ConfigureModule { }