import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { DetailService } from './detail.service';

@Component({
    selector: 'about',
    templateUrl: './detail.html'
})
export class DetailComponent {
    constructor(private route: ActivatedRoute, private detailService: DetailService) {}

    ngOnInit() {
        this.route.params.subscribe(params => {
            let id = params['id']; // (+) converts string 'id' to a number
            this.detailService.getFilm(id);
        });
    }
}