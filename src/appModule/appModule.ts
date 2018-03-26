import {RouterModule, Routes} from "@angular/router";

require('zone.js');
require('core-js');


import { BrowserModule } from '@angular/platform-browser';
import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";
import { NgModule } from '@angular/core';
import {CommonModule} from "@angular/common";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";


import {ApprootComponent} from "./components/approotComponent/approot.component";
import {NotFoundComponent} from "./components/notFoundComponent/notFound.component";
import {CommunicationService} from "./providers/communicationService";
import {InterceptorService} from "./providers/interceptorService";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ToastrComponent} from "./components/ToastrComponent/Toastr.component";


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
    declarations: [ApprootComponent, NotFoundComponent,ToastrComponent],
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

platformBrowserDynamic().bootstrapModule(AppModule)
    .then((success) => console.log(`AppModule loaded..`))
    .catch((error)  => console.error(`AppModule not loaded :( ${error}`));