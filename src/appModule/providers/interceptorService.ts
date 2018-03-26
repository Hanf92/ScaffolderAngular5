import {Inject, Injectable} from '@angular/core';
import {HttpClient, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from "rxjs/Observable";
import {Subject} from "rxjs/Subject";


@Injectable()
export class InterceptorService implements HttpInterceptor{

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const authReq = req.clone({ headers: req.headers.set('Prova','FabioM')});
        return next.handle(authReq)
    }

}