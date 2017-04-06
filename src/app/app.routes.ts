import { Routes } from '@angular/router';
import { OverviewComponent } from './components/overview';
import { DetailComponent } from './components/detail/detail.component';

export const ROUTES: Routes = [
    { path: '',      component: OverviewComponent },
    { path: 'overview',  component: OverviewComponent },
    { path: 'detailview', component: DetailComponent },
    { path: '**',    component: OverviewComponent },
];
