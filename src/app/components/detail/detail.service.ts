import { Injectable } from '@angular/core';

import { FilmModel } from '../../services/film/film.model';
import { FilmService } from '../../services/film/films.service';

@Injectable()
export class DetailService {
    private currentFilm: FilmModel;

    constructor(private filmService: FilmService) {}

    getFilm(id) {
        this.filmService.getFilmDetails(id).then(response => {
            this.currentFilm = FilmModel.parseJson(response);
            console.log('ha');
        });
    }
}