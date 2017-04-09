import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';

@Injectable()
export class BackendService {
    static readonly base = 'https://ghibliapi.herokuapp.com/';
    static readonly filmsUrl = BackendService.base + 'films';

    constructor(private http: Http) {}

    getFilms(): Observable<Response> {
        return this.http.get(BackendService.filmsUrl);
    }

    getFilmDetails(id): Observable<Response> {
        return this.http.get(BackendService.filmsUrl + `/${id}`);
    }
}