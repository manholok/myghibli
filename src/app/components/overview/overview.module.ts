import { NgModule } from '@angular/core';

import { OverviewComponent } from './overview.component';
import { FilmService } from '../../services/films.service';
import { FilmModule } from '../../services/film.module';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [
        OverviewComponent
    ],
    imports: [
        CommonModule
    ],
    providers: [
        FilmService
    ]
})
export class OverviewModule {}