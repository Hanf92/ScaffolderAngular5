import {Component, Input} from '@angular/core';
import './spinnerLoading.component.scss';

@Component({
    selector: 'spinner-loading-component',
    templateUrl: 'spinnerLoading.component.html'
})
export class SpinnerLoadingComponent {

    constructor() { }

    @Input() loading: boolean = false;

}