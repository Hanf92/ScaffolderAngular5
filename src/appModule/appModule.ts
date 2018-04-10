import { BrowserModule } from '@angular/platform-browser';
import {RouterModule, Routes} from "@angular/router";
import {TranslateLoader, TranslateModule} from "@ngx-translate/core";
import { NgModule } from '@angular/core';
import {CommonModule} from "@angular/common";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {HTTP_INTERCEPTORS, HttpClient, HttpClientModule} from "@angular/common/http";
import {TranslateHttpLoader} from "@ngx-translate/http-loader";

import {ApprootComponent} from "./components/approotComponent/approot.component";
import {NotFoundComponent} from "./components/notFoundComponent/not-found.component";
import {CommunicationService} from "./providers/communication.service";
import {InterceptorService} from "./providers/interceptor.service";
import {UtilsService} from "./providers/utils.service";

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

export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http);
}

@NgModule({
    declarations: [ApprootComponent, NotFoundComponent],
    imports: [
        BrowserModule,
        CommonModule,
        HttpClientModule,
        BrowserAnimationsModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient]
            }
        }),
        RouterModule.forRoot(ROUTES,  { useHash: true })
    ],
    providers: [
        {provide: HTTP_INTERCEPTORS, useClass:InterceptorService, multi:true},
        CommunicationService,
        UtilsService
    ],
    bootstrap: [ApprootComponent]
})

export class AppModule { }
