import {Component, OnInit} from '@angular/core';
import './user.component.scss';
import {ActivatedRoute} from "@angular/router";

@Component({
    selector: 'user-component',
    templateUrl: 'user.component.html'
})
export class UserComponent implements OnInit{

    private id: number;
    constructor(private activatedRoute: ActivatedRoute) { }

    ngOnInit(): void {
        this.id = +this.activatedRoute.snapshot.paramMap.get('id')
        console.log('ID -> ',this.id)
    }

}