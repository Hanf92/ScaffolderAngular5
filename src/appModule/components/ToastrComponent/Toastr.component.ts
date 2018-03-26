import { Component } from '@angular/core';
import './Toastr.component.scss';
import {ToastrService} from "ngx-toastr";

@Component({
    selector: 'Toastr-component',
    templateUrl: 'Toastr.component.html'
})
export class ToastrComponent {

    constructor(private toastr: ToastrService) { }

    public showError(message?:string){
        this.toastr.error(message)
    }


}