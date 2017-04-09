import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FilmService } from '../../services/film/films.service';
import { OverviewComponent } from './overview.component';
import { OverviewService } from './overview.service';
import { BackendService } from '../../services/backend/backend.service';

@NgModule({
    declarations: [
        OverviewComponent
    ],
    imports: [
        CommonModule,
        RouterModule
    ],
    providers: [
        FilmService,
        OverviewService,
        BackendService
    ]
})
export class OverviewModule {}