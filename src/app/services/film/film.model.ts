import { Response } from '@angular/http';

import { JsonProperty } from '../../shared/decorators/json-property';

export class FilmModel {
    private id;
    private description;
    private director;
    private producer;
    private releaseDate;
    private rtScore;
    private title;

    static parseJson(response: Response) {
        let json = response.json();
        // TODO: bettter mapper for json to object
        // Can be problematic, if endpoints is using camelCase...
        let film = <FilmModel> json;
        return film;
    }
}