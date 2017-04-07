import { NgModule } from '@angular/core';

import { FilmService } from './films.service';

@NgModule({
    declarations: [
      FilmService
    ],
    exports: [
        FilmService
    ]
})
export class FilmModule {}