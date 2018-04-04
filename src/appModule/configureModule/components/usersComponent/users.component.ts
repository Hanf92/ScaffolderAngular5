import {Component, OnInit} from '@angular/core';
import './users.component.scss';
import {UserService} from "../../providers/user.service";
import {UsersCard} from "../../models/users.model";
import {Observable} from "rxjs/Observable";
import {TranslateService} from "@ngx-translate/core";

@Component({
    selector: 'users-component',
    templateUrl: 'users.component.html'
})
export class UsersComponent implements OnInit{
    users$: Observable<Array<UsersCard>>;
    param:{} = {value: 'hello'};

    constructor(private userService: UserService, private translate: TranslateService) {

        this.users$ = this.userService.getUsersCard();
        (window.navigator.language.includes('it') || window.navigator.language.includes('IT')) ? this.translate.setDefaultLang('it') : this.translate.setDefaultLang('en')
    }

    ngOnInit(){
        /*
        this.userService.getUsersCard().subscribe((users: Array<UsersCard>)=>{
            this.users = users;
            this.loading = false;
        })
        */
    }


}