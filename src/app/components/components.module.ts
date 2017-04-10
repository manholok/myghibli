import { NgModule } from '@angular/core';
import { OverviewModule } from './overview/overview.module';
import { DetailModule } from './detail/detail.module';

@NgModule({
    imports: [
        OverviewModule,
        DetailModule
    ]
})
export class ComponentsModule {}