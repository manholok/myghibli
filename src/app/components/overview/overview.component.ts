import { Component, Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

@Component({
    templateUrl: './overview.html'
})
export class OverviewComponent {
    private response: Response;
    private json;

    constructor(private http: Http) {
        // try and make a call
        this.http.get('https://ghibliapi.herokuapp.com/films').subscribe(resp => {
            this.response = resp;
            this.json = this.response.json();
            for (let item of this.json) {
                let wawa = new FilmModel()
            }
        })
    }
}

export class FilmModel {
    private id;
    private title;

    constructor() {
    }
    static getFilmObject(json: FilmModel) {
        let newFilmModel = new FilmModel();
        newFilmModel.setValuesFromJson(json);
        return
    }

    setValuesFromJson(json) {

    }
}