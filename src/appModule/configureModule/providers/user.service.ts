import {Injectable} from '@angular/core';
import {CommunicationService} from "../../providers/communication.service";
import {Observable} from "rxjs/Observable";
import {Subject} from "rxjs/Subject";
import "rxjs/add/observable/of";
import {UsersCard} from "../models/users.model";

@Injectable()
export class UserService {

    constructor(private communicationService: CommunicationService) { }

    public getUsersCard(): Observable<Array<UsersCard>>{
        let subject$ = new Subject<Array<UsersCard>>();

            this.communicationService.get<Array<UsersCard>>('users')
                .subscribe((users:Array<UsersCard>)=>{
                    subject$.next(users);
                    subject$.complete();
                },(error)=>{
                    subject$.next(null);
                    subject$.complete();
                });

        return subject$;
    }


}