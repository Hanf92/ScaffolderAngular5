import { BrowserModule } from '@angular/platform-browser';
import {RouterModule, Routes} from "@angular/router";
import { NgModule } from '@angular/core';
import {CommonModule} from "@angular/common";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";

import {ApprootComponent} from "./components/approotComponent/approot.component";
import {NotFoundComponent} from "./components/notFoundComponent/notFound.component";
import {CommunicationService} from "./providers/communication.service";
import {InterceptorService} from "./providers/interceptor.service";



export const ROUTES: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'configure' },
    {
        path: 'dashboard',
        loadChildren: './dashboardModule/dashboardModule#DashboardModule'
    },
    {
        path: 'configure',
        loadChildren: './configureModule/configureModule#ConfigureModule?sync=true',
    },
    { path: '**', component: NotFoundComponent},
];

@NgModule({
    declarations: [ApprootComponent, NotFoundComponent],
    imports: [
        BrowserModule,
        CommonModule,
        HttpClientModule,
        BrowserAnimationsModule,
        RouterModule.forRoot(ROUTES,  { useHash: true })
    ],
    providers: [{provide: HTTP_INTERCEPTORS, useClass:InterceptorService, multi:true},CommunicationService],
    bootstrap: [ApprootComponent]
})

export class AppModule { }
