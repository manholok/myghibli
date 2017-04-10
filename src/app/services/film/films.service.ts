import { Injectable } from '@angular/core';
import { Response } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { BackendService } from '../backend/backend.service';
import { FilmModel } from './film.model';

@Injectable()
export class FilmService {
    constructor(private backendService: BackendService) {}

    async getFilms(): Promise<Response> {
        try {
            let response = await this.backendService.getFilms().toPromise();
            return response;
        } catch (error) {
            return error;
        }
    }

    async getFilmDetails(id) {
        try {
            let response = await this.backendService.getFilmDetails(id).toPromise();
            return response;
        } catch (error) {
            return error;
        }
    }
}