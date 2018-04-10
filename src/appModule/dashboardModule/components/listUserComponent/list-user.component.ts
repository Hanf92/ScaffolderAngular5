import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import './list-user.component.scss';
import {ActivatedRoute} from "@angular/router";
import {Developer} from "../../models/developer.model";

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'listUser-component',
    templateUrl: 'list-user.component.html'
})
export class ListUserComponent implements OnInit{

    constructor(private activateRouter: ActivatedRoute) { }

    ngOnInit(){


    }


}