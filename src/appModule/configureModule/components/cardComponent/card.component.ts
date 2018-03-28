import {Component, Input} from '@angular/core';
import './card.component.scss';

@Component({
    selector: 'card-component',
    templateUrl: 'card.component.html'
})
export class CardComponent {

    constructor() { }
    @Input() title: string;
    @Input() subtitle: string;
    @Input() text: string;

}