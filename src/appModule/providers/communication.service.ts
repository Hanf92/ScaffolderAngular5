import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from "rxjs/Observable";
import {Subject} from "rxjs/Subject";
import {Configuration} from "../models/config.model";
declare var _CONF: Configuration;

@Injectable()
export class CommunicationService {

    private subject$ = new Subject();

    constructor(private httpClient: HttpClient) { }

    public get<T>(api: string): Observable<any>{
        this.httpClient.get(`${_CONF.endpoint}${api}`)
            .subscribe((response) => {
                this.subject$.next(response)
            }, (error)=>{
                this.subject$.error(error)
            });
        return this.subject$;
    }
}