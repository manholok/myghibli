import { Component, Injectable } from '@angular/core';

import { OverviewService } from './overview.service';

import './overview.scss';

@Component({
    templateUrl: './overview.html'
})
export class OverviewComponent {
    constructor(private overviewService: OverviewService) {}
}

