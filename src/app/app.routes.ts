import { Routes } from '@angular/router';
import { HomeComponent } from './home';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';

export const ROUTES: Routes = [
    { path: '',      component: HomeComponent },
    { path: 'home',  component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: '**',    component: HomeComponent },
];
