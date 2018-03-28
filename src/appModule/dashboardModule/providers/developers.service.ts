import {Injectable} from '@angular/core';
import {CommunicationService} from "../../providers/communication.service";
import {Observable} from "rxjs/Observable";
import {Subject} from "rxjs/Subject";
import {Developer} from "../models/developer.model";
import {DevelopersStore} from "./developers.store";
import "rxjs/add/observable/of";
import {Observer} from "rxjs/Observer";

@Injectable()
export class DevelopersService {

    constructor(private communicationService: CommunicationService,
                private developerStore: DevelopersStore) { }

    public getDevelopers(): Observable<Map<number,Developer>>{
        let subject$ = new Subject<Map<number,Developer>>();
        const devs = this.developerStore.giveMeAllDevelopers();
        if(!devs || devs.size == 0){
            this.communicationService.get<Developer[]>('developers')
                .subscribe((users: Developer[])=>{
                    this.developerStore.setDevelopers(users);
                    subject$.next(this.developerStore.giveMeAllDevelopers());
                    subject$.complete();
                },(error)=>{
                    subject$.next(null);
                    subject$.complete();
                });
        } else{

            const obs = Observable.create((observer:Observer<Map<number,Developer>>)=>{
                setTimeout(()=>{
                    observer.next(devs);

                },)
                //observer.complete();
            });
            obs.subscribe((users: Map<number,Developer>)=>{
                subject$.next(users);
                subject$.complete();
            })
        }
        return subject$;
    }


}