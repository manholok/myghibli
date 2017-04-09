import { Injectable } from '@angular/core';

import { FilmService } from '../../services/film/films.service';

@Injectable()
export class OverviewService {
    private currentFilms;

    constructor(private filmService: FilmService) {
        this.getFilms();
    }

    getFilms() {
        this.filmService.getFilms().then(result => {
            this.currentFilms = result.json();
            console.log(this.currentFilms);
        }, error => {
            console.error(error);
        });
    }


}