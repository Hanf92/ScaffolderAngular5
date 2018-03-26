import {Component, OnInit} from '@angular/core';
import './report.component.scss';
import {Router} from "@angular/router";

@Component({
    selector: 'report-component',
    templateUrl: 'report.component.html'
})
export class ReportComponent implements OnInit{

    constructor(private router: Router) { }

    ngOnInit(){
        //this.router.navigateByUrl('/users')
    }

}