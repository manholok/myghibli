import { Component, ViewEncapsulation } from '@angular/core';
import './app.scss';

@Component({
    selector: 'app',
    encapsulation: ViewEncapsulation.None,
    templateUrl: './app.html'
})
export class AppComponent {
    constructor() {
        console.log('in de app component');
    }
}