import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {CommonModule} from "@angular/common";
import {DevResolver} from "./resolver/devResolver";
import {ReportComponent} from "./components/reportComponent/report.component";
import {ListUserComponent} from "./components/listUserComponent/listUser.component";
import {DevelopersService} from "./providers/developers.service";
import {UserComponent} from "./components/userComponent/user.component";
import {DevelopersStore} from "./providers/developers.store";

export const ROUTES: Routes = [
    {
        path: '',
        component: ReportComponent,
        children: [
            {
                path: 'users',
                component: ListUserComponent,
                resolve: {
                    dev: DevResolver
                }
            },
            {
                path: 'users/:id',
                component: UserComponent,
            }]
    }]

@NgModule({
    declarations: [ReportComponent, ListUserComponent, UserComponent],
    imports: [RouterModule.forChild(ROUTES),CommonModule],
    providers: [DevelopersService, DevelopersStore, DevResolver]
})

export class DashboardModule { }