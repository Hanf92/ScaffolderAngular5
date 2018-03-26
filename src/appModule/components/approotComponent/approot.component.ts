import { Component } from '@angular/core';
import './approot.component.scss';

@Component({
selector: 'approot-component',
templateUrl: 'approot.component.html'
})
export class ApprootComponent {

constructor() { }
    menu: Array<string> = ['Configure', 'Dashboard']
}