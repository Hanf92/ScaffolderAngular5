import {Component, Input} from '@angular/core';
import './spinner-loading.component.scss';

@Component({
    selector: 'spinner-loading-component',
    templateUrl: 'spinner-loading.component.html'
})
export class SpinnerLoadingComponent {

    constructor() { }

    @Input() loading: boolean = false;

}