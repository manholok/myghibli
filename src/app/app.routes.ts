import { Routes } from '@angular/router';
import { OverviewComponent } from './components/overview';
import { DetailComponent } from './components/detail/detail.component';

export const ROUTES: Routes = [
    { path: '', redirectTo: 'overview', pathMatch: 'full' },
    { path: 'overview',  component: OverviewComponent },
    { path: 'detailview', component: DetailComponent },
    { path: '**',  redirectTo: 'overview', pathMatch: 'full'  },
];
