import {Component, Input} from '@angular/core';
import './Card.component.scss';

@Component({
    selector: 'card-component',
    templateUrl: 'Card.component.html'
})
export class CardComponent {

    constructor() { }
    @Input() title: string;
    @Input() subtitle: string;
    @Input() text: string;

}