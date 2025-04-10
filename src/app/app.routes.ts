import { Routes } from '@angular/router';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'first-page', component: Page1Component },
    { path: 'second-page', component: Page2Component },
    { path: '**', component: HomeComponent }
];
