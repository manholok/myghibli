import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailComponent } from './detail.component';
import { DetailService } from './detail.service';

@NgModule({
    declarations: [
        DetailComponent
    ],
    imports: [
        CommonModule
    ],
    providers: [
        DetailService
    ]
})
export class DetailModule {}