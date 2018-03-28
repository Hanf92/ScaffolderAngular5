import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import './listUser.component.scss';
import {ActivatedRoute} from "@angular/router";
import {Developer} from "../../models/developer.model";

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'listUser-component',
    templateUrl: 'listUser.component.html'
})
export class ListUserComponent implements OnInit{

    constructor(private activateRouter: ActivatedRoute) { }

    ngOnInit(){


    }


}