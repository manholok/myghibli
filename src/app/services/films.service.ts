import { Injectable } from '@angular/core';

import { FilmModel } from '../components/overview/overview.component';

@Injectable()
export class FilmService {
    private currentList: FilmModel[]

    constructor() {
        
    }
}