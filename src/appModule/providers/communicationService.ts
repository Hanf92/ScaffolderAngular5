import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from "rxjs/Observable";
import {Subject} from "rxjs/Subject";
declare var _CONF: any;

@Injectable()
export class CommunicationService {

    constructor(private httpClient: HttpClient) { }

    public get<T>(api: string): Observable<T>{
        let subject$ = new Subject<T>();

        this.httpClient.get<T>(`${_CONF['environment']}${api}`)
            .subscribe((response) => {
                subject$.next(response)
            }, (error)=>{
                subject$.error(error)
            });
        return subject$;
    }
}