import { Component } from '@angular/core';
import { ROUTES } from '../../app.routes';

import './navbar.scss';

@Component({
    selector: 'navbar',
    templateUrl: './navbar.html'
})
export class NavbarComponent {

    // Choose menu items here, pick it from the current Routes
    private menu = [
        'overview'
    ];

    constructor() {
        for (let item in ROUTES) {

        }
    }
}