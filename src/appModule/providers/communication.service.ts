import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from "rxjs/Observable";
import {Subject} from "rxjs/Subject";
import {Configuration} from "../models/config.model";
declare var _CONF: Configuration;

@Injectable()
export class CommunicationService {

    constructor(private httpClient: HttpClient) { }

    public get<T>(api: string): Observable<any>{
        const subject$ = new Subject();
        this.httpClient.get(`${_CONF.endpoint}${api}`)
            .subscribe((response) => {
                subject$.next(response)
            }, (error)=>{
                subject$.error(error)
            });
        return subject$;
    }
}